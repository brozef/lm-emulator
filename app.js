const http = require('http');
const net = require('net');
const fs = require('fs');

//state
let connected = false;
let client = null;

function initSocket() {
    if (client != null) {
        client.end();
    }

    client = net.createConnection({ port: 921, host: '127.0.0.1' }, () => {
        console.log('Connected to Sim!');
        connected = true;
    });

    client.on('data', (data) => {
    });

    client.on('end', () => {
        connected = false;
        console.log('Disconnected from sim');
    });

    client.on('error', function(e) {
        console.log('Sim not found');
        connected = false;
    });
}


// HTML INTERFACE
const requestListener = async function (req, res) {
    if (req.method === 'GET') {
        if (req.url === '/') {
            fs.readFile('index.html', (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('404 Not Found');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
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

                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end();
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
});