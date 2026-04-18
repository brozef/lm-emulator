const http = require('http');
const net = require('net');
const fs = require('fs');
const multicastDns = require('multicast-dns');
const { getAsset, getAssetAsBlob, getRawAsset, getAssetKeys } = require('node:sea');

//state
let connected = false;
let client = null;
let connectedWarn = false;
let buffer = '';
let braceCount = 0;
let club = 'DR';

function initSocket() {
    if (client != null) {
        client.end();
    }

    client = net.createConnection({ port: 921, host: '127.0.0.1' }, () => {
        console.log('Connected to Sim!');
        connected = true;
        connectedWarn = false;
    });

    client.on('data', (data) => {
        const dataStr = data.toString();
        buffer += dataStr;
        for (const char of dataStr) {
            if (char === '{') {
                braceCount++;
            }
            else if (char === '}') {
                braceCount--;
            }
        };
       
        if (braceCount === 0) {
            try {
                const json = JSON.parse(buffer);
                if (json.Code == 201) {
                    //club info
                    club = json.Player.Club;
                }
            } catch(err) {
                console.error('Failed to parse JSON:', err.message);
            }
            buffer = '';
        }
    });

    client.on('end', () => {
        connected = false;
        console.log('Disconnected from sim');
    });

    client.on('error', function(e) {
        if (!connectedWarn) {
            console.log('Sim not found');
            connectedWarn = true;
        }
        connected = false;
    });
}


// HTML INTERFACE
const requestListener = async function (req, res) {
    if (req.method === 'GET') {
        if (req.url === '/') {
            const data = getAsset('index.html', 'utf8');
            res.end(data);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Endpoint not found');
        }
    } else if (req.method === 'POST') {

        let body = [];

        // Listen for the 'data' event to receive chunks of data
        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            let postData = {};
            if (body.length > 0) {
                postData =  JSON.parse(Buffer.concat(body).toString());
            }

            if (req.url === '/ping') {
                if (!connected) {
                    initSocket();
                }

                if (!connected) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end("Simulator not connected");
                    return;
                }

                //use pings as ready indicators
                const readyData = {
                    "DeviceID":"LMEmulator",
                    "Units":"Metres",
                    "ShotNumber":-1,
                    "APIversion":"1",
                    "BallData":{},
                    "ClubData":{},
                    "ShotDataOptions":{
                        "ContainsBallData":false,
                        "ContainsClubData":false,
                        "LaunchMonitorIsReady":true,
                        "LaunchMonitorBallDetected":true,
                        "IsHeartBeat":false
                    }
                }

                client.write(JSON.stringify(readyData));

                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(club); // send current selected club in sim to frontend
            }
            else if (req.url === '/shot') {
                if (!connected) {
                    initSocket();
                }

                if (!connected) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end("Simulator not connected");
                    return;
                }

                const shotData = {
                    "DeviceID":"LMEmulator",
                    "Units":"Metres",
                    "ShotNumber":postData.shot_number,
                    "APIversion":"1",
                    "BallData":{
                        "Speed":postData.ball_speed_kmh * 0.621371,
                        "SpinAxis":postData.spin_axis_deg,
                        "TotalSpin":postData.spin_rpm,
                        "HLA":postData.hla,
                        "VLA":postData.vla
                    },
                    "ClubData":{
                        "Speed":0,
                        "AngleOfAttack":0,
                        "Path":0,
                        "HorizontalFaceImpact":0
                    },
                    "ShotDataOptions":{
                        "ContainsBallData":true,
                        "ContainsClubData":true,
                        "LaunchMonitorIsReady":false,
                        "LaunchMonitorBallDetected":false,
                        "IsHeartBeat":false
                    }
                }

                client.write(JSON.stringify(shotData));

                if (connected) {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end("Shot sent to simulator");
                } else {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end("Write to simulator failed");
                }
            }
        });
    }
};

initSocket();

const httpServer = http.createServer(requestListener);
httpServer.listen(3000, () => {
    console.log(`HTTP listening on port: 3000`);
    startMdns('lm-emulator', 3000);
});

function startMdns(hostname, port) {
  const mdns = multicastDns();

  mdns.on('query', (query) => {
    for (const question of query.questions) {
      // Respond to A record queries for our hostname
      if (question.name === `${hostname}.local` && question.type === 'A') {
        mdns.respond({
          answers: [
            {
              name: `${hostname}.local`,
              type: 'A',
              ttl: 300,
              data: getLocalIp(),
            },
          ],
        });
      }

      // Respond to SRV/PTR queries (for service discovery)
      if (question.type === 'PTR' && question.name === '_http._tcp.local') {
        mdns.respond({
          answers: [
            {
              name: '_http._tcp.local',
              type: 'PTR',
              ttl: 300,
              data: `${hostname}._http._tcp.local`,
            },
            {
              name: `${hostname}._http._tcp.local`,
              type: 'SRV',
              ttl: 300,
              data: { port, target: `${hostname}.local`, weight: 0, priority: 0 },
            },
            {
              name: `${hostname}.local`,
              type: 'A',
              ttl: 300,
              data: getLocalIp(),
            },
          ],
        });
      }
    }
  });

  console.log(`mDNS: advertising http://${hostname}.local:${port}`);
  return mdns;
}

function getLocalIp() {
  const { networkInterfaces } = require('os');
  const nets = networkInterfaces();

  for (const iface of Object.values(nets)) {
    for (const addr of iface) {
      if (addr.family === 'IPv4' && !addr.internal) {
        return addr.address;
      }
    }
  }
  return '127.0.0.1';
}
