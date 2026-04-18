var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/dns-packet/types.js
var require_types = __commonJS({
  "node_modules/dns-packet/types.js"(exports2) {
    "use strict";
    exports2.toString = function(type) {
      switch (type) {
        case 1:
          return "A";
        case 10:
          return "NULL";
        case 28:
          return "AAAA";
        case 18:
          return "AFSDB";
        case 42:
          return "APL";
        case 257:
          return "CAA";
        case 60:
          return "CDNSKEY";
        case 59:
          return "CDS";
        case 37:
          return "CERT";
        case 5:
          return "CNAME";
        case 49:
          return "DHCID";
        case 32769:
          return "DLV";
        case 39:
          return "DNAME";
        case 48:
          return "DNSKEY";
        case 43:
          return "DS";
        case 55:
          return "HIP";
        case 13:
          return "HINFO";
        case 45:
          return "IPSECKEY";
        case 25:
          return "KEY";
        case 36:
          return "KX";
        case 29:
          return "LOC";
        case 15:
          return "MX";
        case 35:
          return "NAPTR";
        case 2:
          return "NS";
        case 47:
          return "NSEC";
        case 50:
          return "NSEC3";
        case 51:
          return "NSEC3PARAM";
        case 12:
          return "PTR";
        case 46:
          return "RRSIG";
        case 17:
          return "RP";
        case 24:
          return "SIG";
        case 6:
          return "SOA";
        case 99:
          return "SPF";
        case 33:
          return "SRV";
        case 44:
          return "SSHFP";
        case 32768:
          return "TA";
        case 249:
          return "TKEY";
        case 52:
          return "TLSA";
        case 250:
          return "TSIG";
        case 16:
          return "TXT";
        case 252:
          return "AXFR";
        case 251:
          return "IXFR";
        case 41:
          return "OPT";
        case 255:
          return "ANY";
      }
      return "UNKNOWN_" + type;
    };
    exports2.toType = function(name) {
      switch (name.toUpperCase()) {
        case "A":
          return 1;
        case "NULL":
          return 10;
        case "AAAA":
          return 28;
        case "AFSDB":
          return 18;
        case "APL":
          return 42;
        case "CAA":
          return 257;
        case "CDNSKEY":
          return 60;
        case "CDS":
          return 59;
        case "CERT":
          return 37;
        case "CNAME":
          return 5;
        case "DHCID":
          return 49;
        case "DLV":
          return 32769;
        case "DNAME":
          return 39;
        case "DNSKEY":
          return 48;
        case "DS":
          return 43;
        case "HIP":
          return 55;
        case "HINFO":
          return 13;
        case "IPSECKEY":
          return 45;
        case "KEY":
          return 25;
        case "KX":
          return 36;
        case "LOC":
          return 29;
        case "MX":
          return 15;
        case "NAPTR":
          return 35;
        case "NS":
          return 2;
        case "NSEC":
          return 47;
        case "NSEC3":
          return 50;
        case "NSEC3PARAM":
          return 51;
        case "PTR":
          return 12;
        case "RRSIG":
          return 46;
        case "RP":
          return 17;
        case "SIG":
          return 24;
        case "SOA":
          return 6;
        case "SPF":
          return 99;
        case "SRV":
          return 33;
        case "SSHFP":
          return 44;
        case "TA":
          return 32768;
        case "TKEY":
          return 249;
        case "TLSA":
          return 52;
        case "TSIG":
          return 250;
        case "TXT":
          return 16;
        case "AXFR":
          return 252;
        case "IXFR":
          return 251;
        case "OPT":
          return 41;
        case "ANY":
          return 255;
        case "*":
          return 255;
      }
      if (name.toUpperCase().startsWith("UNKNOWN_")) return parseInt(name.slice(8));
      return 0;
    };
  }
});

// node_modules/dns-packet/rcodes.js
var require_rcodes = __commonJS({
  "node_modules/dns-packet/rcodes.js"(exports2) {
    "use strict";
    exports2.toString = function(rcode) {
      switch (rcode) {
        case 0:
          return "NOERROR";
        case 1:
          return "FORMERR";
        case 2:
          return "SERVFAIL";
        case 3:
          return "NXDOMAIN";
        case 4:
          return "NOTIMP";
        case 5:
          return "REFUSED";
        case 6:
          return "YXDOMAIN";
        case 7:
          return "YXRRSET";
        case 8:
          return "NXRRSET";
        case 9:
          return "NOTAUTH";
        case 10:
          return "NOTZONE";
        case 11:
          return "RCODE_11";
        case 12:
          return "RCODE_12";
        case 13:
          return "RCODE_13";
        case 14:
          return "RCODE_14";
        case 15:
          return "RCODE_15";
      }
      return "RCODE_" + rcode;
    };
    exports2.toRcode = function(code) {
      switch (code.toUpperCase()) {
        case "NOERROR":
          return 0;
        case "FORMERR":
          return 1;
        case "SERVFAIL":
          return 2;
        case "NXDOMAIN":
          return 3;
        case "NOTIMP":
          return 4;
        case "REFUSED":
          return 5;
        case "YXDOMAIN":
          return 6;
        case "YXRRSET":
          return 7;
        case "NXRRSET":
          return 8;
        case "NOTAUTH":
          return 9;
        case "NOTZONE":
          return 10;
        case "RCODE_11":
          return 11;
        case "RCODE_12":
          return 12;
        case "RCODE_13":
          return 13;
        case "RCODE_14":
          return 14;
        case "RCODE_15":
          return 15;
      }
      return 0;
    };
  }
});

// node_modules/dns-packet/opcodes.js
var require_opcodes = __commonJS({
  "node_modules/dns-packet/opcodes.js"(exports2) {
    "use strict";
    exports2.toString = function(opcode) {
      switch (opcode) {
        case 0:
          return "QUERY";
        case 1:
          return "IQUERY";
        case 2:
          return "STATUS";
        case 3:
          return "OPCODE_3";
        case 4:
          return "NOTIFY";
        case 5:
          return "UPDATE";
        case 6:
          return "OPCODE_6";
        case 7:
          return "OPCODE_7";
        case 8:
          return "OPCODE_8";
        case 9:
          return "OPCODE_9";
        case 10:
          return "OPCODE_10";
        case 11:
          return "OPCODE_11";
        case 12:
          return "OPCODE_12";
        case 13:
          return "OPCODE_13";
        case 14:
          return "OPCODE_14";
        case 15:
          return "OPCODE_15";
      }
      return "OPCODE_" + opcode;
    };
    exports2.toOpcode = function(code) {
      switch (code.toUpperCase()) {
        case "QUERY":
          return 0;
        case "IQUERY":
          return 1;
        case "STATUS":
          return 2;
        case "OPCODE_3":
          return 3;
        case "NOTIFY":
          return 4;
        case "UPDATE":
          return 5;
        case "OPCODE_6":
          return 6;
        case "OPCODE_7":
          return 7;
        case "OPCODE_8":
          return 8;
        case "OPCODE_9":
          return 9;
        case "OPCODE_10":
          return 10;
        case "OPCODE_11":
          return 11;
        case "OPCODE_12":
          return 12;
        case "OPCODE_13":
          return 13;
        case "OPCODE_14":
          return 14;
        case "OPCODE_15":
          return 15;
      }
      return 0;
    };
  }
});

// node_modules/dns-packet/classes.js
var require_classes = __commonJS({
  "node_modules/dns-packet/classes.js"(exports2) {
    "use strict";
    exports2.toString = function(klass) {
      switch (klass) {
        case 1:
          return "IN";
        case 2:
          return "CS";
        case 3:
          return "CH";
        case 4:
          return "HS";
        case 255:
          return "ANY";
      }
      return "UNKNOWN_" + klass;
    };
    exports2.toClass = function(name) {
      switch (name.toUpperCase()) {
        case "IN":
          return 1;
        case "CS":
          return 2;
        case "CH":
          return 3;
        case "HS":
          return 4;
        case "ANY":
          return 255;
      }
      return 0;
    };
  }
});

// node_modules/dns-packet/optioncodes.js
var require_optioncodes = __commonJS({
  "node_modules/dns-packet/optioncodes.js"(exports2) {
    "use strict";
    exports2.toString = function(type) {
      switch (type) {
        // list at
        // https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-11
        case 1:
          return "LLQ";
        case 2:
          return "UL";
        case 3:
          return "NSID";
        case 5:
          return "DAU";
        case 6:
          return "DHU";
        case 7:
          return "N3U";
        case 8:
          return "CLIENT_SUBNET";
        case 9:
          return "EXPIRE";
        case 10:
          return "COOKIE";
        case 11:
          return "TCP_KEEPALIVE";
        case 12:
          return "PADDING";
        case 13:
          return "CHAIN";
        case 14:
          return "KEY_TAG";
        case 26946:
          return "DEVICEID";
      }
      if (type < 0) {
        return null;
      }
      return `OPTION_${type}`;
    };
    exports2.toCode = function(name) {
      if (typeof name === "number") {
        return name;
      }
      if (!name) {
        return -1;
      }
      switch (name.toUpperCase()) {
        case "OPTION_0":
          return 0;
        case "LLQ":
          return 1;
        case "UL":
          return 2;
        case "NSID":
          return 3;
        case "OPTION_4":
          return 4;
        case "DAU":
          return 5;
        case "DHU":
          return 6;
        case "N3U":
          return 7;
        case "CLIENT_SUBNET":
          return 8;
        case "EXPIRE":
          return 9;
        case "COOKIE":
          return 10;
        case "TCP_KEEPALIVE":
          return 11;
        case "PADDING":
          return 12;
        case "CHAIN":
          return 13;
        case "KEY_TAG":
          return 14;
        case "DEVICEID":
          return 26946;
        case "OPTION_65535":
          return 65535;
      }
      const m = name.match(/_(\d+)$/);
      if (m) {
        return parseInt(m[1], 10);
      }
      return -1;
    };
  }
});

// node_modules/@leichtgewicht/ip-codec/index.cjs
var require_ip_codec = __commonJS({
  "node_modules/@leichtgewicht/ip-codec/index.cjs"(exports2, module2) {
    var ipCodec = (function(exports3) {
      "use strict";
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.decode = decode;
      exports3.encode = encode;
      exports3.familyOf = familyOf;
      exports3.name = void 0;
      exports3.sizeOf = sizeOf;
      exports3.v6 = exports3.v4 = void 0;
      const v4Regex = /^(\d{1,3}\.){3,3}\d{1,3}$/;
      const v4Size = 4;
      const v6Regex = /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;
      const v6Size = 16;
      const v4 = {
        name: "v4",
        size: v4Size,
        isFormat: (ip) => v4Regex.test(ip),
        encode(ip, buff, offset) {
          offset = ~~offset;
          buff = buff || new Uint8Array(offset + v4Size);
          const max = ip.length;
          let n = 0;
          for (let i = 0; i < max; ) {
            const c = ip.charCodeAt(i++);
            if (c === 46) {
              buff[offset++] = n;
              n = 0;
            } else {
              n = n * 10 + (c - 48);
            }
          }
          buff[offset] = n;
          return buff;
        },
        decode(buff, offset) {
          offset = ~~offset;
          return `${buff[offset++]}.${buff[offset++]}.${buff[offset++]}.${buff[offset]}`;
        }
      };
      exports3.v4 = v4;
      const v6 = {
        name: "v6",
        size: v6Size,
        isFormat: (ip) => ip.length > 0 && v6Regex.test(ip),
        encode(ip, buff, offset) {
          offset = ~~offset;
          let end = offset + v6Size;
          let fill = -1;
          let hexN = 0;
          let decN = 0;
          let prevColon = true;
          let useDec = false;
          buff = buff || new Uint8Array(offset + v6Size);
          for (let i = 0; i < ip.length; i++) {
            let c = ip.charCodeAt(i);
            if (c === 58) {
              if (prevColon) {
                if (fill !== -1) {
                  if (offset < end) buff[offset] = 0;
                  if (offset < end - 1) buff[offset + 1] = 0;
                  offset += 2;
                } else if (offset < end) {
                  fill = offset;
                }
              } else {
                if (useDec === true) {
                  if (offset < end) buff[offset] = decN;
                  offset++;
                } else {
                  if (offset < end) buff[offset] = hexN >> 8;
                  if (offset < end - 1) buff[offset + 1] = hexN & 255;
                  offset += 2;
                }
                hexN = 0;
                decN = 0;
              }
              prevColon = true;
              useDec = false;
            } else if (c === 46) {
              if (offset < end) buff[offset] = decN;
              offset++;
              decN = 0;
              hexN = 0;
              prevColon = false;
              useDec = true;
            } else {
              prevColon = false;
              if (c >= 97) {
                c -= 87;
              } else if (c >= 65) {
                c -= 55;
              } else {
                c -= 48;
                decN = decN * 10 + c;
              }
              hexN = (hexN << 4) + c;
            }
          }
          if (prevColon === false) {
            if (useDec === true) {
              if (offset < end) buff[offset] = decN;
              offset++;
            } else {
              if (offset < end) buff[offset] = hexN >> 8;
              if (offset < end - 1) buff[offset + 1] = hexN & 255;
              offset += 2;
            }
          } else if (fill === 0) {
            if (offset < end) buff[offset] = 0;
            if (offset < end - 1) buff[offset + 1] = 0;
            offset += 2;
          } else if (fill !== -1) {
            offset += 2;
            for (let i = Math.min(offset - 1, end - 1); i >= fill + 2; i--) {
              buff[i] = buff[i - 2];
            }
            buff[fill] = 0;
            buff[fill + 1] = 0;
            fill = offset;
          }
          if (fill !== offset && fill !== -1) {
            if (offset > end - 2) {
              offset = end - 2;
            }
            while (end > fill) {
              buff[--end] = offset < end && offset > fill ? buff[--offset] : 0;
            }
          } else {
            while (offset < end) {
              buff[offset++] = 0;
            }
          }
          return buff;
        },
        decode(buff, offset) {
          offset = ~~offset;
          let result = "";
          for (let i = 0; i < v6Size; i += 2) {
            if (i !== 0) {
              result += ":";
            }
            result += (buff[offset + i] << 8 | buff[offset + i + 1]).toString(16);
          }
          return result.replace(/(^|:)0(:0)*:0(:|$)/, "$1::$3").replace(/:{3,4}/, "::");
        }
      };
      exports3.v6 = v6;
      const name = "ip";
      exports3.name = name;
      function sizeOf(ip) {
        if (v4.isFormat(ip)) return v4.size;
        if (v6.isFormat(ip)) return v6.size;
        throw Error(`Invalid ip address: ${ip}`);
      }
      function familyOf(string) {
        return sizeOf(string) === v4.size ? 1 : 2;
      }
      function encode(ip, buff, offset) {
        offset = ~~offset;
        const size = sizeOf(ip);
        if (typeof buff === "function") {
          buff = buff(offset + size);
        }
        if (size === v4.size) {
          return v4.encode(ip, buff, offset);
        }
        return v6.encode(ip, buff, offset);
      }
      function decode(buff, offset, length) {
        offset = ~~offset;
        length = length || buff.length - offset;
        if (length === v4.size) {
          return v4.decode(buff, offset, length);
        }
        if (length === v6.size) {
          return v6.decode(buff, offset, length);
        }
        throw Error(`Invalid buffer size needs to be ${v4.size} for v4 or ${v6.size} for v6.`);
      }
      return "default" in exports3 ? exports3.default : exports3;
    })({});
    if (typeof define === "function" && define.amd) define([], function() {
      return ipCodec;
    });
    else if (typeof module2 === "object" && typeof exports2 === "object") module2.exports = ipCodec;
  }
});

// node_modules/dns-packet/index.js
var require_dns_packet = __commonJS({
  "node_modules/dns-packet/index.js"(exports2) {
    "use strict";
    var Buffer2 = require("buffer").Buffer;
    var types = require_types();
    var rcodes = require_rcodes();
    var opcodes = require_opcodes();
    var classes = require_classes();
    var optioncodes = require_optioncodes();
    var ip = require_ip_codec();
    var QUERY_FLAG = 0;
    var RESPONSE_FLAG = 1 << 15;
    var FLUSH_MASK = 1 << 15;
    var NOT_FLUSH_MASK = ~FLUSH_MASK;
    var QU_MASK = 1 << 15;
    var NOT_QU_MASK = ~QU_MASK;
    var name = exports2.name = {};
    name.encode = function(str, buf, offset, { mail = false } = {}) {
      if (!buf) buf = Buffer2.alloc(name.encodingLength(str));
      if (!offset) offset = 0;
      const oldOffset = offset;
      const n = str.replace(/^\.|\.$/gm, "");
      if (n.length) {
        let list = [];
        if (mail) {
          let localPart = "";
          n.split(".").forEach((label) => {
            if (label.endsWith("\\")) {
              localPart += (localPart.length ? "." : "") + label.slice(0, -1);
            } else {
              if (list.length === 0 && localPart.length) {
                list.push(localPart + "." + label);
              } else {
                list.push(label);
              }
            }
          });
        } else {
          list = n.split(".");
        }
        for (let i = 0; i < list.length; i++) {
          const len = buf.write(list[i], offset + 1);
          buf[offset] = len;
          offset += len + 1;
        }
      }
      buf[offset++] = 0;
      name.encode.bytes = offset - oldOffset;
      return buf;
    };
    name.encode.bytes = 0;
    name.decode = function(buf, offset, { mail = false } = {}) {
      if (!offset) offset = 0;
      const list = [];
      let oldOffset = offset;
      let totalLength = 0;
      let consumedBytes = 0;
      let jumped = false;
      while (true) {
        if (offset >= buf.length) {
          throw new Error("Cannot decode name (buffer overflow)");
        }
        const len = buf[offset++];
        consumedBytes += jumped ? 0 : 1;
        if (len === 0) {
          break;
        } else if ((len & 192) === 0) {
          if (offset + len > buf.length) {
            throw new Error("Cannot decode name (buffer overflow)");
          }
          totalLength += len + 1;
          if (totalLength > 254) {
            throw new Error("Cannot decode name (name too long)");
          }
          let label = buf.toString("utf-8", offset, offset + len);
          if (mail) {
            label = label.replace(/\./g, "\\.");
          }
          list.push(label);
          offset += len;
          consumedBytes += jumped ? 0 : len;
        } else if ((len & 192) === 192) {
          if (offset + 1 > buf.length) {
            throw new Error("Cannot decode name (buffer overflow)");
          }
          const jumpOffset = buf.readUInt16BE(offset - 1) - 49152;
          if (jumpOffset >= oldOffset) {
            throw new Error("Cannot decode name (bad pointer)");
          }
          offset = jumpOffset;
          oldOffset = jumpOffset;
          consumedBytes += jumped ? 0 : 1;
          jumped = true;
        } else {
          throw new Error("Cannot decode name (bad label)");
        }
      }
      name.decode.bytes = consumedBytes;
      return list.length === 0 ? "." : list.join(".");
    };
    name.decode.bytes = 0;
    name.encodingLength = function(n) {
      if (n === "." || n === "..") return 1;
      return Buffer2.byteLength(n.replace(/^\.|\.$/gm, "")) + 2;
    };
    var string = {};
    string.encode = function(s, buf, offset) {
      if (!buf) buf = Buffer2.alloc(string.encodingLength(s));
      if (!offset) offset = 0;
      const len = buf.write(s, offset + 1);
      buf[offset] = len;
      string.encode.bytes = len + 1;
      return buf;
    };
    string.encode.bytes = 0;
    string.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const len = buf[offset];
      const s = buf.toString("utf-8", offset + 1, offset + 1 + len);
      string.decode.bytes = len + 1;
      return s;
    };
    string.decode.bytes = 0;
    string.encodingLength = function(s) {
      return Buffer2.byteLength(s) + 1;
    };
    var header = {};
    header.encode = function(h, buf, offset) {
      if (!buf) buf = header.encodingLength(h);
      if (!offset) offset = 0;
      const flags = (h.flags || 0) & 32767;
      const type = h.type === "response" ? RESPONSE_FLAG : QUERY_FLAG;
      buf.writeUInt16BE(h.id || 0, offset);
      buf.writeUInt16BE(flags | type, offset + 2);
      buf.writeUInt16BE(h.questions.length, offset + 4);
      buf.writeUInt16BE(h.answers.length, offset + 6);
      buf.writeUInt16BE(h.authorities.length, offset + 8);
      buf.writeUInt16BE(h.additionals.length, offset + 10);
      return buf;
    };
    header.encode.bytes = 12;
    header.decode = function(buf, offset) {
      if (!offset) offset = 0;
      if (buf.length < 12) throw new Error("Header must be 12 bytes");
      const flags = buf.readUInt16BE(offset + 2);
      return {
        id: buf.readUInt16BE(offset),
        type: flags & RESPONSE_FLAG ? "response" : "query",
        flags: flags & 32767,
        flag_qr: (flags >> 15 & 1) === 1,
        opcode: opcodes.toString(flags >> 11 & 15),
        flag_aa: (flags >> 10 & 1) === 1,
        flag_tc: (flags >> 9 & 1) === 1,
        flag_rd: (flags >> 8 & 1) === 1,
        flag_ra: (flags >> 7 & 1) === 1,
        flag_z: (flags >> 6 & 1) === 1,
        flag_ad: (flags >> 5 & 1) === 1,
        flag_cd: (flags >> 4 & 1) === 1,
        rcode: rcodes.toString(flags & 15),
        questions: new Array(buf.readUInt16BE(offset + 4)),
        answers: new Array(buf.readUInt16BE(offset + 6)),
        authorities: new Array(buf.readUInt16BE(offset + 8)),
        additionals: new Array(buf.readUInt16BE(offset + 10))
      };
    };
    header.decode.bytes = 12;
    header.encodingLength = function() {
      return 12;
    };
    var runknown = exports2.unknown = {};
    runknown.encode = function(data, buf, offset) {
      if (!buf) buf = Buffer2.alloc(runknown.encodingLength(data));
      if (!offset) offset = 0;
      buf.writeUInt16BE(data.length, offset);
      data.copy(buf, offset + 2);
      runknown.encode.bytes = data.length + 2;
      return buf;
    };
    runknown.encode.bytes = 0;
    runknown.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const len = buf.readUInt16BE(offset);
      const data = buf.slice(offset + 2, offset + 2 + len);
      runknown.decode.bytes = len + 2;
      return data;
    };
    runknown.decode.bytes = 0;
    runknown.encodingLength = function(data) {
      return data.length + 2;
    };
    var rns = exports2.ns = {};
    rns.encode = function(data, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rns.encodingLength(data));
      if (!offset) offset = 0;
      name.encode(data, buf, offset + 2);
      buf.writeUInt16BE(name.encode.bytes, offset);
      rns.encode.bytes = name.encode.bytes + 2;
      return buf;
    };
    rns.encode.bytes = 0;
    rns.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const len = buf.readUInt16BE(offset);
      const dd = name.decode(buf, offset + 2);
      rns.decode.bytes = len + 2;
      return dd;
    };
    rns.decode.bytes = 0;
    rns.encodingLength = function(data) {
      return name.encodingLength(data) + 2;
    };
    var rsoa = exports2.soa = {};
    rsoa.encode = function(data, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rsoa.encodingLength(data));
      if (!offset) offset = 0;
      const oldOffset = offset;
      offset += 2;
      name.encode(data.mname, buf, offset);
      offset += name.encode.bytes;
      name.encode(data.rname, buf, offset, { mail: true });
      offset += name.encode.bytes;
      buf.writeUInt32BE(data.serial || 0, offset);
      offset += 4;
      buf.writeUInt32BE(data.refresh || 0, offset);
      offset += 4;
      buf.writeUInt32BE(data.retry || 0, offset);
      offset += 4;
      buf.writeUInt32BE(data.expire || 0, offset);
      offset += 4;
      buf.writeUInt32BE(data.minimum || 0, offset);
      offset += 4;
      buf.writeUInt16BE(offset - oldOffset - 2, oldOffset);
      rsoa.encode.bytes = offset - oldOffset;
      return buf;
    };
    rsoa.encode.bytes = 0;
    rsoa.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      const data = {};
      offset += 2;
      data.mname = name.decode(buf, offset);
      offset += name.decode.bytes;
      data.rname = name.decode(buf, offset, { mail: true });
      offset += name.decode.bytes;
      data.serial = buf.readUInt32BE(offset);
      offset += 4;
      data.refresh = buf.readUInt32BE(offset);
      offset += 4;
      data.retry = buf.readUInt32BE(offset);
      offset += 4;
      data.expire = buf.readUInt32BE(offset);
      offset += 4;
      data.minimum = buf.readUInt32BE(offset);
      offset += 4;
      rsoa.decode.bytes = offset - oldOffset;
      return data;
    };
    rsoa.decode.bytes = 0;
    rsoa.encodingLength = function(data) {
      return 22 + name.encodingLength(data.mname) + name.encodingLength(data.rname);
    };
    var rtxt = exports2.txt = {};
    rtxt.encode = function(data, buf, offset) {
      if (!Array.isArray(data)) data = [data];
      for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === "string") {
          data[i] = Buffer2.from(data[i]);
        }
        if (!Buffer2.isBuffer(data[i])) {
          throw new Error("Must be a Buffer");
        }
      }
      if (!buf) buf = Buffer2.alloc(rtxt.encodingLength(data));
      if (!offset) offset = 0;
      const oldOffset = offset;
      offset += 2;
      data.forEach(function(d) {
        buf[offset++] = d.length;
        d.copy(buf, offset, 0, d.length);
        offset += d.length;
      });
      buf.writeUInt16BE(offset - oldOffset - 2, oldOffset);
      rtxt.encode.bytes = offset - oldOffset;
      return buf;
    };
    rtxt.encode.bytes = 0;
    rtxt.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      let remaining = buf.readUInt16BE(offset);
      offset += 2;
      let data = [];
      while (remaining > 0) {
        const len = buf[offset++];
        --remaining;
        if (remaining < len) {
          throw new Error("Buffer overflow");
        }
        data.push(buf.slice(offset, offset + len));
        offset += len;
        remaining -= len;
      }
      rtxt.decode.bytes = offset - oldOffset;
      return data;
    };
    rtxt.decode.bytes = 0;
    rtxt.encodingLength = function(data) {
      if (!Array.isArray(data)) data = [data];
      let length = 2;
      data.forEach(function(buf) {
        if (typeof buf === "string") {
          length += Buffer2.byteLength(buf) + 1;
        } else {
          length += buf.length + 1;
        }
      });
      return length;
    };
    var rnull = exports2.null = {};
    rnull.encode = function(data, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rnull.encodingLength(data));
      if (!offset) offset = 0;
      if (typeof data === "string") data = Buffer2.from(data);
      if (!data) data = Buffer2.alloc(0);
      const oldOffset = offset;
      offset += 2;
      const len = data.length;
      data.copy(buf, offset, 0, len);
      offset += len;
      buf.writeUInt16BE(offset - oldOffset - 2, oldOffset);
      rnull.encode.bytes = offset - oldOffset;
      return buf;
    };
    rnull.encode.bytes = 0;
    rnull.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      const len = buf.readUInt16BE(offset);
      offset += 2;
      const data = buf.slice(offset, offset + len);
      offset += len;
      rnull.decode.bytes = offset - oldOffset;
      return data;
    };
    rnull.decode.bytes = 0;
    rnull.encodingLength = function(data) {
      if (!data) return 2;
      return (Buffer2.isBuffer(data) ? data.length : Buffer2.byteLength(data)) + 2;
    };
    var rhinfo = exports2.hinfo = {};
    rhinfo.encode = function(data, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rhinfo.encodingLength(data));
      if (!offset) offset = 0;
      const oldOffset = offset;
      offset += 2;
      string.encode(data.cpu, buf, offset);
      offset += string.encode.bytes;
      string.encode(data.os, buf, offset);
      offset += string.encode.bytes;
      buf.writeUInt16BE(offset - oldOffset - 2, oldOffset);
      rhinfo.encode.bytes = offset - oldOffset;
      return buf;
    };
    rhinfo.encode.bytes = 0;
    rhinfo.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      const data = {};
      offset += 2;
      data.cpu = string.decode(buf, offset);
      offset += string.decode.bytes;
      data.os = string.decode(buf, offset);
      offset += string.decode.bytes;
      rhinfo.decode.bytes = offset - oldOffset;
      return data;
    };
    rhinfo.decode.bytes = 0;
    rhinfo.encodingLength = function(data) {
      return string.encodingLength(data.cpu) + string.encodingLength(data.os) + 2;
    };
    var rptr = exports2.ptr = {};
    var rcname = exports2.cname = rptr;
    var rdname = exports2.dname = rptr;
    rptr.encode = function(data, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rptr.encodingLength(data));
      if (!offset) offset = 0;
      name.encode(data, buf, offset + 2);
      buf.writeUInt16BE(name.encode.bytes, offset);
      rptr.encode.bytes = name.encode.bytes + 2;
      return buf;
    };
    rptr.encode.bytes = 0;
    rptr.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const data = name.decode(buf, offset + 2);
      rptr.decode.bytes = name.decode.bytes + 2;
      return data;
    };
    rptr.decode.bytes = 0;
    rptr.encodingLength = function(data) {
      return name.encodingLength(data) + 2;
    };
    var rsrv = exports2.srv = {};
    rsrv.encode = function(data, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rsrv.encodingLength(data));
      if (!offset) offset = 0;
      buf.writeUInt16BE(data.priority || 0, offset + 2);
      buf.writeUInt16BE(data.weight || 0, offset + 4);
      buf.writeUInt16BE(data.port || 0, offset + 6);
      name.encode(data.target, buf, offset + 8);
      const len = name.encode.bytes + 6;
      buf.writeUInt16BE(len, offset);
      rsrv.encode.bytes = len + 2;
      return buf;
    };
    rsrv.encode.bytes = 0;
    rsrv.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const len = buf.readUInt16BE(offset);
      const data = {};
      data.priority = buf.readUInt16BE(offset + 2);
      data.weight = buf.readUInt16BE(offset + 4);
      data.port = buf.readUInt16BE(offset + 6);
      data.target = name.decode(buf, offset + 8);
      rsrv.decode.bytes = len + 2;
      return data;
    };
    rsrv.decode.bytes = 0;
    rsrv.encodingLength = function(data) {
      return 8 + name.encodingLength(data.target);
    };
    var rcaa = exports2.caa = {};
    rcaa.ISSUER_CRITICAL = 1 << 7;
    rcaa.encode = function(data, buf, offset) {
      const len = rcaa.encodingLength(data);
      if (!buf) buf = Buffer2.alloc(rcaa.encodingLength(data));
      if (!offset) offset = 0;
      if (data.issuerCritical) {
        data.flags = rcaa.ISSUER_CRITICAL;
      }
      buf.writeUInt16BE(len - 2, offset);
      offset += 2;
      buf.writeUInt8(data.flags || 0, offset);
      offset += 1;
      string.encode(data.tag, buf, offset);
      offset += string.encode.bytes;
      buf.write(data.value, offset);
      offset += Buffer2.byteLength(data.value);
      rcaa.encode.bytes = len;
      return buf;
    };
    rcaa.encode.bytes = 0;
    rcaa.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const len = buf.readUInt16BE(offset);
      offset += 2;
      const oldOffset = offset;
      const data = {};
      data.flags = buf.readUInt8(offset);
      offset += 1;
      data.tag = string.decode(buf, offset);
      offset += string.decode.bytes;
      data.value = buf.toString("utf-8", offset, oldOffset + len);
      data.issuerCritical = !!(data.flags & rcaa.ISSUER_CRITICAL);
      rcaa.decode.bytes = len + 2;
      return data;
    };
    rcaa.decode.bytes = 0;
    rcaa.encodingLength = function(data) {
      return string.encodingLength(data.tag) + string.encodingLength(data.value) + 2;
    };
    var rmx = exports2.mx = {};
    rmx.encode = function(data, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rmx.encodingLength(data));
      if (!offset) offset = 0;
      const oldOffset = offset;
      offset += 2;
      buf.writeUInt16BE(data.preference || 0, offset);
      offset += 2;
      name.encode(data.exchange, buf, offset);
      offset += name.encode.bytes;
      buf.writeUInt16BE(offset - oldOffset - 2, oldOffset);
      rmx.encode.bytes = offset - oldOffset;
      return buf;
    };
    rmx.encode.bytes = 0;
    rmx.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      const data = {};
      offset += 2;
      data.preference = buf.readUInt16BE(offset);
      offset += 2;
      data.exchange = name.decode(buf, offset);
      offset += name.decode.bytes;
      rmx.decode.bytes = offset - oldOffset;
      return data;
    };
    rmx.encodingLength = function(data) {
      return 4 + name.encodingLength(data.exchange);
    };
    var ra = exports2.a = {};
    ra.encode = function(host, buf, offset) {
      if (!buf) buf = Buffer2.alloc(ra.encodingLength(host));
      if (!offset) offset = 0;
      buf.writeUInt16BE(4, offset);
      offset += 2;
      ip.v4.encode(host, buf, offset);
      ra.encode.bytes = 6;
      return buf;
    };
    ra.encode.bytes = 0;
    ra.decode = function(buf, offset) {
      if (!offset) offset = 0;
      offset += 2;
      const host = ip.v4.decode(buf, offset);
      ra.decode.bytes = 6;
      return host;
    };
    ra.decode.bytes = 0;
    ra.encodingLength = function() {
      return 6;
    };
    var raaaa = exports2.aaaa = {};
    raaaa.encode = function(host, buf, offset) {
      if (!buf) buf = Buffer2.alloc(raaaa.encodingLength(host));
      if (!offset) offset = 0;
      buf.writeUInt16BE(16, offset);
      offset += 2;
      ip.v6.encode(host, buf, offset);
      raaaa.encode.bytes = 18;
      return buf;
    };
    raaaa.encode.bytes = 0;
    raaaa.decode = function(buf, offset) {
      if (!offset) offset = 0;
      offset += 2;
      const host = ip.v6.decode(buf, offset);
      raaaa.decode.bytes = 18;
      return host;
    };
    raaaa.decode.bytes = 0;
    raaaa.encodingLength = function() {
      return 18;
    };
    var roption = exports2.option = {};
    roption.encode = function(option, buf, offset) {
      if (!buf) buf = Buffer2.alloc(roption.encodingLength(option));
      if (!offset) offset = 0;
      const oldOffset = offset;
      const code = optioncodes.toCode(option.code);
      buf.writeUInt16BE(code, offset);
      offset += 2;
      if (option.data) {
        buf.writeUInt16BE(option.data.length, offset);
        offset += 2;
        option.data.copy(buf, offset);
        offset += option.data.length;
      } else {
        switch (code) {
          // case 3: NSID.  No encode makes sense.
          // case 5,6,7: Not implementable
          case 8:
            const spl = option.sourcePrefixLength || 0;
            const fam = option.family || ip.familyOf(option.ip);
            const ipBuf = ip.encode(option.ip, Buffer2.alloc);
            const ipLen = Math.ceil(spl / 8);
            buf.writeUInt16BE(ipLen + 4, offset);
            offset += 2;
            buf.writeUInt16BE(fam, offset);
            offset += 2;
            buf.writeUInt8(spl, offset++);
            buf.writeUInt8(option.scopePrefixLength || 0, offset++);
            ipBuf.copy(buf, offset, 0, ipLen);
            offset += ipLen;
            break;
          // case 9: EXPIRE (experimental)
          // case 10: COOKIE.  No encode makes sense.
          case 11:
            if (option.timeout) {
              buf.writeUInt16BE(2, offset);
              offset += 2;
              buf.writeUInt16BE(option.timeout, offset);
              offset += 2;
            } else {
              buf.writeUInt16BE(0, offset);
              offset += 2;
            }
            break;
          case 12:
            const len = option.length || 0;
            buf.writeUInt16BE(len, offset);
            offset += 2;
            buf.fill(0, offset, offset + len);
            offset += len;
            break;
          // case 13:  CHAIN.  Experimental.
          case 14:
            const tagsLen = option.tags.length * 2;
            buf.writeUInt16BE(tagsLen, offset);
            offset += 2;
            for (const tag of option.tags) {
              buf.writeUInt16BE(tag, offset);
              offset += 2;
            }
            break;
          default:
            throw new Error(`Unknown roption code: ${option.code}`);
        }
      }
      roption.encode.bytes = offset - oldOffset;
      return buf;
    };
    roption.encode.bytes = 0;
    roption.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const option = {};
      option.code = buf.readUInt16BE(offset);
      option.type = optioncodes.toString(option.code);
      offset += 2;
      const len = buf.readUInt16BE(offset);
      offset += 2;
      option.data = buf.slice(offset, offset + len);
      switch (option.code) {
        // case 3: NSID.  No decode makes sense.
        case 8:
          option.family = buf.readUInt16BE(offset);
          offset += 2;
          option.sourcePrefixLength = buf.readUInt8(offset++);
          option.scopePrefixLength = buf.readUInt8(offset++);
          const padded = Buffer2.alloc(option.family === 1 ? 4 : 16);
          buf.copy(padded, 0, offset, offset + len - 4);
          option.ip = ip.decode(padded);
          break;
        // case 12: Padding.  No decode makes sense.
        case 11:
          if (len > 0) {
            option.timeout = buf.readUInt16BE(offset);
            offset += 2;
          }
          break;
        case 14:
          option.tags = [];
          for (let i = 0; i < len; i += 2) {
            option.tags.push(buf.readUInt16BE(offset));
            offset += 2;
          }
      }
      roption.decode.bytes = len + 4;
      return option;
    };
    roption.decode.bytes = 0;
    roption.encodingLength = function(option) {
      if (option.data) {
        return option.data.length + 4;
      }
      const code = optioncodes.toCode(option.code);
      switch (code) {
        case 8:
          const spl = option.sourcePrefixLength || 0;
          return Math.ceil(spl / 8) + 8;
        case 11:
          return typeof option.timeout === "number" ? 6 : 4;
        case 12:
          return option.length + 4;
        case 14:
          return 4 + option.tags.length * 2;
      }
      throw new Error(`Unknown roption code: ${option.code}`);
    };
    var ropt = exports2.opt = {};
    ropt.encode = function(options, buf, offset) {
      if (!buf) buf = Buffer2.alloc(ropt.encodingLength(options));
      if (!offset) offset = 0;
      const oldOffset = offset;
      const rdlen = encodingLengthList(options, roption);
      buf.writeUInt16BE(rdlen, offset);
      offset = encodeList(options, roption, buf, offset + 2);
      ropt.encode.bytes = offset - oldOffset;
      return buf;
    };
    ropt.encode.bytes = 0;
    ropt.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      const options = [];
      let rdlen = buf.readUInt16BE(offset);
      offset += 2;
      let o = 0;
      while (rdlen > 0) {
        options[o++] = roption.decode(buf, offset);
        offset += roption.decode.bytes;
        rdlen -= roption.decode.bytes;
      }
      ropt.decode.bytes = offset - oldOffset;
      return options;
    };
    ropt.decode.bytes = 0;
    ropt.encodingLength = function(options) {
      return 2 + encodingLengthList(options || [], roption);
    };
    var rdnskey = exports2.dnskey = {};
    rdnskey.PROTOCOL_DNSSEC = 3;
    rdnskey.ZONE_KEY = 128;
    rdnskey.SECURE_ENTRYPOINT = 32768;
    rdnskey.encode = function(key, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rdnskey.encodingLength(key));
      if (!offset) offset = 0;
      const oldOffset = offset;
      const keydata = key.key;
      if (!Buffer2.isBuffer(keydata)) {
        throw new Error("Key must be a Buffer");
      }
      offset += 2;
      buf.writeUInt16BE(key.flags, offset);
      offset += 2;
      buf.writeUInt8(rdnskey.PROTOCOL_DNSSEC, offset);
      offset += 1;
      buf.writeUInt8(key.algorithm, offset);
      offset += 1;
      keydata.copy(buf, offset, 0, keydata.length);
      offset += keydata.length;
      rdnskey.encode.bytes = offset - oldOffset;
      buf.writeUInt16BE(rdnskey.encode.bytes - 2, oldOffset);
      return buf;
    };
    rdnskey.encode.bytes = 0;
    rdnskey.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      var key = {};
      var length = buf.readUInt16BE(offset);
      offset += 2;
      key.flags = buf.readUInt16BE(offset);
      offset += 2;
      if (buf.readUInt8(offset) !== rdnskey.PROTOCOL_DNSSEC) {
        throw new Error("Protocol must be 3");
      }
      offset += 1;
      key.algorithm = buf.readUInt8(offset);
      offset += 1;
      key.key = buf.slice(offset, oldOffset + length + 2);
      offset += key.key.length;
      rdnskey.decode.bytes = offset - oldOffset;
      return key;
    };
    rdnskey.decode.bytes = 0;
    rdnskey.encodingLength = function(key) {
      return 6 + Buffer2.byteLength(key.key);
    };
    var rrrsig = exports2.rrsig = {};
    rrrsig.encode = function(sig, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rrrsig.encodingLength(sig));
      if (!offset) offset = 0;
      const oldOffset = offset;
      const signature = sig.signature;
      if (!Buffer2.isBuffer(signature)) {
        throw new Error("Signature must be a Buffer");
      }
      offset += 2;
      buf.writeUInt16BE(types.toType(sig.typeCovered), offset);
      offset += 2;
      buf.writeUInt8(sig.algorithm, offset);
      offset += 1;
      buf.writeUInt8(sig.labels, offset);
      offset += 1;
      buf.writeUInt32BE(sig.originalTTL, offset);
      offset += 4;
      buf.writeUInt32BE(sig.expiration, offset);
      offset += 4;
      buf.writeUInt32BE(sig.inception, offset);
      offset += 4;
      buf.writeUInt16BE(sig.keyTag, offset);
      offset += 2;
      name.encode(sig.signersName, buf, offset);
      offset += name.encode.bytes;
      signature.copy(buf, offset, 0, signature.length);
      offset += signature.length;
      rrrsig.encode.bytes = offset - oldOffset;
      buf.writeUInt16BE(rrrsig.encode.bytes - 2, oldOffset);
      return buf;
    };
    rrrsig.encode.bytes = 0;
    rrrsig.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      var sig = {};
      var length = buf.readUInt16BE(offset);
      offset += 2;
      sig.typeCovered = types.toString(buf.readUInt16BE(offset));
      offset += 2;
      sig.algorithm = buf.readUInt8(offset);
      offset += 1;
      sig.labels = buf.readUInt8(offset);
      offset += 1;
      sig.originalTTL = buf.readUInt32BE(offset);
      offset += 4;
      sig.expiration = buf.readUInt32BE(offset);
      offset += 4;
      sig.inception = buf.readUInt32BE(offset);
      offset += 4;
      sig.keyTag = buf.readUInt16BE(offset);
      offset += 2;
      sig.signersName = name.decode(buf, offset);
      offset += name.decode.bytes;
      sig.signature = buf.slice(offset, oldOffset + length + 2);
      offset += sig.signature.length;
      rrrsig.decode.bytes = offset - oldOffset;
      return sig;
    };
    rrrsig.decode.bytes = 0;
    rrrsig.encodingLength = function(sig) {
      return 20 + name.encodingLength(sig.signersName) + Buffer2.byteLength(sig.signature);
    };
    var rrp = exports2.rp = {};
    rrp.encode = function(data, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rrp.encodingLength(data));
      if (!offset) offset = 0;
      const oldOffset = offset;
      offset += 2;
      name.encode(data.mbox || ".", buf, offset, { mail: true });
      offset += name.encode.bytes;
      name.encode(data.txt || ".", buf, offset);
      offset += name.encode.bytes;
      rrp.encode.bytes = offset - oldOffset;
      buf.writeUInt16BE(rrp.encode.bytes - 2, oldOffset);
      return buf;
    };
    rrp.encode.bytes = 0;
    rrp.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      const data = {};
      offset += 2;
      data.mbox = name.decode(buf, offset, { mail: true }) || ".";
      offset += name.decode.bytes;
      data.txt = name.decode(buf, offset) || ".";
      offset += name.decode.bytes;
      rrp.decode.bytes = offset - oldOffset;
      return data;
    };
    rrp.decode.bytes = 0;
    rrp.encodingLength = function(data) {
      return 2 + name.encodingLength(data.mbox || ".") + name.encodingLength(data.txt || ".");
    };
    var typebitmap = {};
    typebitmap.encode = function(typelist, buf, offset) {
      if (!buf) buf = Buffer2.alloc(typebitmap.encodingLength(typelist));
      if (!offset) offset = 0;
      const oldOffset = offset;
      var typesByWindow = [];
      for (var i = 0; i < typelist.length; i++) {
        var typeid = types.toType(typelist[i]);
        if (typesByWindow[typeid >> 8] === void 0) {
          typesByWindow[typeid >> 8] = [];
        }
        typesByWindow[typeid >> 8][typeid >> 3 & 31] |= 1 << 7 - (typeid & 7);
      }
      for (i = 0; i < typesByWindow.length; i++) {
        if (typesByWindow[i] !== void 0) {
          var windowBuf = Buffer2.from(typesByWindow[i]);
          buf.writeUInt8(i, offset);
          offset += 1;
          buf.writeUInt8(windowBuf.length, offset);
          offset += 1;
          windowBuf.copy(buf, offset);
          offset += windowBuf.length;
        }
      }
      typebitmap.encode.bytes = offset - oldOffset;
      return buf;
    };
    typebitmap.encode.bytes = 0;
    typebitmap.decode = function(buf, offset, length) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      var typelist = [];
      while (offset - oldOffset < length) {
        var window = buf.readUInt8(offset);
        offset += 1;
        var windowLength = buf.readUInt8(offset);
        offset += 1;
        for (var i = 0; i < windowLength; i++) {
          var b = buf.readUInt8(offset + i);
          for (var j = 0; j < 8; j++) {
            if (b & 1 << 7 - j) {
              var typeid = types.toString(window << 8 | i << 3 | j);
              typelist.push(typeid);
            }
          }
        }
        offset += windowLength;
      }
      typebitmap.decode.bytes = offset - oldOffset;
      return typelist;
    };
    typebitmap.decode.bytes = 0;
    typebitmap.encodingLength = function(typelist) {
      var extents = [];
      for (var i = 0; i < typelist.length; i++) {
        var typeid = types.toType(typelist[i]);
        extents[typeid >> 8] = Math.max(extents[typeid >> 8] || 0, typeid & 255);
      }
      var len = 0;
      for (i = 0; i < extents.length; i++) {
        if (extents[i] !== void 0) {
          len += 2 + Math.ceil((extents[i] + 1) / 8);
        }
      }
      return len;
    };
    var rnsec = exports2.nsec = {};
    rnsec.encode = function(record, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rnsec.encodingLength(record));
      if (!offset) offset = 0;
      const oldOffset = offset;
      offset += 2;
      name.encode(record.nextDomain, buf, offset);
      offset += name.encode.bytes;
      typebitmap.encode(record.rrtypes, buf, offset);
      offset += typebitmap.encode.bytes;
      rnsec.encode.bytes = offset - oldOffset;
      buf.writeUInt16BE(rnsec.encode.bytes - 2, oldOffset);
      return buf;
    };
    rnsec.encode.bytes = 0;
    rnsec.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      var record = {};
      var length = buf.readUInt16BE(offset);
      offset += 2;
      record.nextDomain = name.decode(buf, offset);
      offset += name.decode.bytes;
      record.rrtypes = typebitmap.decode(buf, offset, length - (offset - oldOffset));
      offset += typebitmap.decode.bytes;
      rnsec.decode.bytes = offset - oldOffset;
      return record;
    };
    rnsec.decode.bytes = 0;
    rnsec.encodingLength = function(record) {
      return 2 + name.encodingLength(record.nextDomain) + typebitmap.encodingLength(record.rrtypes);
    };
    var rnsec3 = exports2.nsec3 = {};
    rnsec3.encode = function(record, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rnsec3.encodingLength(record));
      if (!offset) offset = 0;
      const oldOffset = offset;
      const salt = record.salt;
      if (!Buffer2.isBuffer(salt)) {
        throw new Error("salt must be a Buffer");
      }
      const nextDomain = record.nextDomain;
      if (!Buffer2.isBuffer(nextDomain)) {
        throw new Error("nextDomain must be a Buffer");
      }
      offset += 2;
      buf.writeUInt8(record.algorithm, offset);
      offset += 1;
      buf.writeUInt8(record.flags, offset);
      offset += 1;
      buf.writeUInt16BE(record.iterations, offset);
      offset += 2;
      buf.writeUInt8(salt.length, offset);
      offset += 1;
      salt.copy(buf, offset, 0, salt.length);
      offset += salt.length;
      buf.writeUInt8(nextDomain.length, offset);
      offset += 1;
      nextDomain.copy(buf, offset, 0, nextDomain.length);
      offset += nextDomain.length;
      typebitmap.encode(record.rrtypes, buf, offset);
      offset += typebitmap.encode.bytes;
      rnsec3.encode.bytes = offset - oldOffset;
      buf.writeUInt16BE(rnsec3.encode.bytes - 2, oldOffset);
      return buf;
    };
    rnsec3.encode.bytes = 0;
    rnsec3.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      var record = {};
      var length = buf.readUInt16BE(offset);
      offset += 2;
      record.algorithm = buf.readUInt8(offset);
      offset += 1;
      record.flags = buf.readUInt8(offset);
      offset += 1;
      record.iterations = buf.readUInt16BE(offset);
      offset += 2;
      const saltLength = buf.readUInt8(offset);
      offset += 1;
      record.salt = buf.slice(offset, offset + saltLength);
      offset += saltLength;
      const hashLength = buf.readUInt8(offset);
      offset += 1;
      record.nextDomain = buf.slice(offset, offset + hashLength);
      offset += hashLength;
      record.rrtypes = typebitmap.decode(buf, offset, length - (offset - oldOffset));
      offset += typebitmap.decode.bytes;
      rnsec3.decode.bytes = offset - oldOffset;
      return record;
    };
    rnsec3.decode.bytes = 0;
    rnsec3.encodingLength = function(record) {
      return 8 + record.salt.length + record.nextDomain.length + typebitmap.encodingLength(record.rrtypes);
    };
    var rds = exports2.ds = {};
    rds.encode = function(digest, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rds.encodingLength(digest));
      if (!offset) offset = 0;
      const oldOffset = offset;
      const digestdata = digest.digest;
      if (!Buffer2.isBuffer(digestdata)) {
        throw new Error("Digest must be a Buffer");
      }
      offset += 2;
      buf.writeUInt16BE(digest.keyTag, offset);
      offset += 2;
      buf.writeUInt8(digest.algorithm, offset);
      offset += 1;
      buf.writeUInt8(digest.digestType, offset);
      offset += 1;
      digestdata.copy(buf, offset, 0, digestdata.length);
      offset += digestdata.length;
      rds.encode.bytes = offset - oldOffset;
      buf.writeUInt16BE(rds.encode.bytes - 2, oldOffset);
      return buf;
    };
    rds.encode.bytes = 0;
    rds.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      var digest = {};
      var length = buf.readUInt16BE(offset);
      offset += 2;
      digest.keyTag = buf.readUInt16BE(offset);
      offset += 2;
      digest.algorithm = buf.readUInt8(offset);
      offset += 1;
      digest.digestType = buf.readUInt8(offset);
      offset += 1;
      digest.digest = buf.slice(offset, oldOffset + length + 2);
      offset += digest.digest.length;
      rds.decode.bytes = offset - oldOffset;
      return digest;
    };
    rds.decode.bytes = 0;
    rds.encodingLength = function(digest) {
      return 6 + Buffer2.byteLength(digest.digest);
    };
    var rsshfp = exports2.sshfp = {};
    rsshfp.getFingerprintLengthForHashType = function getFingerprintLengthForHashType(hashType) {
      switch (hashType) {
        case 1:
          return 20;
        case 2:
          return 32;
      }
    };
    rsshfp.encode = function encode(record, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rsshfp.encodingLength(record));
      if (!offset) offset = 0;
      const oldOffset = offset;
      offset += 2;
      buf[offset] = record.algorithm;
      offset += 1;
      buf[offset] = record.hash;
      offset += 1;
      const fingerprintBuf = Buffer2.from(record.fingerprint.toUpperCase(), "hex");
      if (fingerprintBuf.length !== rsshfp.getFingerprintLengthForHashType(record.hash)) {
        throw new Error("Invalid fingerprint length");
      }
      fingerprintBuf.copy(buf, offset);
      offset += fingerprintBuf.byteLength;
      rsshfp.encode.bytes = offset - oldOffset;
      buf.writeUInt16BE(rsshfp.encode.bytes - 2, oldOffset);
      return buf;
    };
    rsshfp.encode.bytes = 0;
    rsshfp.decode = function decode(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      const record = {};
      offset += 2;
      record.algorithm = buf[offset];
      offset += 1;
      record.hash = buf[offset];
      offset += 1;
      const fingerprintLength = rsshfp.getFingerprintLengthForHashType(record.hash);
      record.fingerprint = buf.slice(offset, offset + fingerprintLength).toString("hex").toUpperCase();
      offset += fingerprintLength;
      rsshfp.decode.bytes = offset - oldOffset;
      return record;
    };
    rsshfp.decode.bytes = 0;
    rsshfp.encodingLength = function(record) {
      return 4 + Buffer2.from(record.fingerprint, "hex").byteLength;
    };
    var rnaptr = exports2.naptr = {};
    rnaptr.encode = function(data, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rnaptr.encodingLength(data));
      if (!offset) offset = 0;
      const oldOffset = offset;
      offset += 2;
      buf.writeUInt16BE(data.order || 0, offset);
      offset += 2;
      buf.writeUInt16BE(data.preference || 0, offset);
      offset += 2;
      string.encode(data.flags, buf, offset);
      offset += string.encode.bytes;
      string.encode(data.services, buf, offset);
      offset += string.encode.bytes;
      string.encode(data.regexp, buf, offset);
      offset += string.encode.bytes;
      name.encode(data.replacement, buf, offset);
      offset += name.encode.bytes;
      rnaptr.encode.bytes = offset - oldOffset;
      buf.writeUInt16BE(rnaptr.encode.bytes - 2, oldOffset);
      return buf;
    };
    rnaptr.encode.bytes = 0;
    rnaptr.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      const data = {};
      offset += 2;
      data.order = buf.readUInt16BE(offset);
      offset += 2;
      data.preference = buf.readUInt16BE(offset);
      offset += 2;
      data.flags = string.decode(buf, offset);
      offset += string.decode.bytes;
      data.services = string.decode(buf, offset);
      offset += string.decode.bytes;
      data.regexp = string.decode(buf, offset);
      offset += string.decode.bytes;
      data.replacement = name.decode(buf, offset);
      offset += name.decode.bytes;
      rnaptr.decode.bytes = offset - oldOffset;
      return data;
    };
    rnaptr.decode.bytes = 0;
    rnaptr.encodingLength = function(data) {
      return string.encodingLength(data.flags) + string.encodingLength(data.services) + string.encodingLength(data.regexp) + name.encodingLength(data.replacement) + 6;
    };
    var rtlsa = exports2.tlsa = {};
    rtlsa.encode = function(cert, buf, offset) {
      if (!buf) buf = Buffer2.alloc(rtlsa.encodingLength(cert));
      if (!offset) offset = 0;
      const oldOffset = offset;
      const certdata = cert.certificate;
      if (!Buffer2.isBuffer(certdata)) {
        throw new Error("Certificate must be a Buffer");
      }
      offset += 2;
      buf.writeUInt8(cert.usage, offset);
      offset += 1;
      buf.writeUInt8(cert.selector, offset);
      offset += 1;
      buf.writeUInt8(cert.matchingType, offset);
      offset += 1;
      certdata.copy(buf, offset, 0, certdata.length);
      offset += certdata.length;
      rtlsa.encode.bytes = offset - oldOffset;
      buf.writeUInt16BE(rtlsa.encode.bytes - 2, oldOffset);
      return buf;
    };
    rtlsa.encode.bytes = 0;
    rtlsa.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      const cert = {};
      const length = buf.readUInt16BE(offset);
      offset += 2;
      cert.usage = buf.readUInt8(offset);
      offset += 1;
      cert.selector = buf.readUInt8(offset);
      offset += 1;
      cert.matchingType = buf.readUInt8(offset);
      offset += 1;
      cert.certificate = buf.slice(offset, oldOffset + length + 2);
      offset += cert.certificate.length;
      rtlsa.decode.bytes = offset - oldOffset;
      return cert;
    };
    rtlsa.decode.bytes = 0;
    rtlsa.encodingLength = function(cert) {
      return 5 + Buffer2.byteLength(cert.certificate);
    };
    var renc = exports2.record = function(type) {
      switch (type.toUpperCase()) {
        case "A":
          return ra;
        case "PTR":
          return rptr;
        case "CNAME":
          return rcname;
        case "DNAME":
          return rdname;
        case "TXT":
          return rtxt;
        case "NULL":
          return rnull;
        case "AAAA":
          return raaaa;
        case "SRV":
          return rsrv;
        case "HINFO":
          return rhinfo;
        case "CAA":
          return rcaa;
        case "NS":
          return rns;
        case "SOA":
          return rsoa;
        case "MX":
          return rmx;
        case "OPT":
          return ropt;
        case "DNSKEY":
          return rdnskey;
        case "RRSIG":
          return rrrsig;
        case "RP":
          return rrp;
        case "NSEC":
          return rnsec;
        case "NSEC3":
          return rnsec3;
        case "SSHFP":
          return rsshfp;
        case "DS":
          return rds;
        case "NAPTR":
          return rnaptr;
        case "TLSA":
          return rtlsa;
      }
      return runknown;
    };
    var answer = exports2.answer = {};
    answer.encode = function(a, buf, offset) {
      if (!buf) buf = Buffer2.alloc(answer.encodingLength(a));
      if (!offset) offset = 0;
      const oldOffset = offset;
      name.encode(a.name, buf, offset);
      offset += name.encode.bytes;
      buf.writeUInt16BE(types.toType(a.type), offset);
      if (a.type.toUpperCase() === "OPT") {
        if (a.name !== ".") {
          throw new Error("OPT name must be root.");
        }
        buf.writeUInt16BE(a.udpPayloadSize || 4096, offset + 2);
        buf.writeUInt8(a.extendedRcode || 0, offset + 4);
        buf.writeUInt8(a.ednsVersion || 0, offset + 5);
        buf.writeUInt16BE(a.flags || 0, offset + 6);
        offset += 8;
        ropt.encode(a.options || [], buf, offset);
        offset += ropt.encode.bytes;
      } else {
        let klass = classes.toClass(a.class === void 0 ? "IN" : a.class);
        if (a.flush) klass |= FLUSH_MASK;
        buf.writeUInt16BE(klass, offset + 2);
        buf.writeUInt32BE(a.ttl || 0, offset + 4);
        offset += 8;
        const enc = renc(a.type);
        enc.encode(a.data, buf, offset);
        offset += enc.encode.bytes;
      }
      answer.encode.bytes = offset - oldOffset;
      return buf;
    };
    answer.encode.bytes = 0;
    answer.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const a = {};
      const oldOffset = offset;
      a.name = name.decode(buf, offset);
      offset += name.decode.bytes;
      a.type = types.toString(buf.readUInt16BE(offset));
      if (a.type === "OPT") {
        a.udpPayloadSize = buf.readUInt16BE(offset + 2);
        a.extendedRcode = buf.readUInt8(offset + 4);
        a.ednsVersion = buf.readUInt8(offset + 5);
        a.flags = buf.readUInt16BE(offset + 6);
        a.flag_do = (a.flags >> 15 & 1) === 1;
        a.options = ropt.decode(buf, offset + 8);
        offset += 8 + ropt.decode.bytes;
      } else {
        const klass = buf.readUInt16BE(offset + 2);
        a.ttl = buf.readUInt32BE(offset + 4);
        a.class = classes.toString(klass & NOT_FLUSH_MASK);
        a.flush = !!(klass & FLUSH_MASK);
        const enc = renc(a.type);
        a.data = enc.decode(buf, offset + 8);
        offset += 8 + enc.decode.bytes;
      }
      answer.decode.bytes = offset - oldOffset;
      return a;
    };
    answer.decode.bytes = 0;
    answer.encodingLength = function(a) {
      const data = a.data !== null && a.data !== void 0 ? a.data : a.options;
      return name.encodingLength(a.name) + 8 + renc(a.type).encodingLength(data);
    };
    var question = exports2.question = {};
    question.encode = function(q, buf, offset) {
      if (!buf) buf = Buffer2.alloc(question.encodingLength(q));
      if (!offset) offset = 0;
      const oldOffset = offset;
      name.encode(q.name, buf, offset);
      offset += name.encode.bytes;
      buf.writeUInt16BE(types.toType(q.type), offset);
      offset += 2;
      buf.writeUInt16BE(classes.toClass(q.class === void 0 ? "IN" : q.class), offset);
      offset += 2;
      question.encode.bytes = offset - oldOffset;
      return q;
    };
    question.encode.bytes = 0;
    question.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      const q = {};
      q.name = name.decode(buf, offset);
      offset += name.decode.bytes;
      q.type = types.toString(buf.readUInt16BE(offset));
      offset += 2;
      q.class = classes.toString(buf.readUInt16BE(offset));
      offset += 2;
      const qu = !!(q.class & QU_MASK);
      if (qu) q.class &= NOT_QU_MASK;
      question.decode.bytes = offset - oldOffset;
      return q;
    };
    question.decode.bytes = 0;
    question.encodingLength = function(q) {
      return name.encodingLength(q.name) + 4;
    };
    exports2.AUTHORITATIVE_ANSWER = 1 << 10;
    exports2.TRUNCATED_RESPONSE = 1 << 9;
    exports2.RECURSION_DESIRED = 1 << 8;
    exports2.RECURSION_AVAILABLE = 1 << 7;
    exports2.AUTHENTIC_DATA = 1 << 5;
    exports2.CHECKING_DISABLED = 1 << 4;
    exports2.DNSSEC_OK = 1 << 15;
    exports2.encode = function(result, buf, offset) {
      const allocing = !buf;
      if (allocing) buf = Buffer2.alloc(exports2.encodingLength(result));
      if (!offset) offset = 0;
      const oldOffset = offset;
      if (!result.questions) result.questions = [];
      if (!result.answers) result.answers = [];
      if (!result.authorities) result.authorities = [];
      if (!result.additionals) result.additionals = [];
      header.encode(result, buf, offset);
      offset += header.encode.bytes;
      offset = encodeList(result.questions, question, buf, offset);
      offset = encodeList(result.answers, answer, buf, offset);
      offset = encodeList(result.authorities, answer, buf, offset);
      offset = encodeList(result.additionals, answer, buf, offset);
      exports2.encode.bytes = offset - oldOffset;
      if (allocing && exports2.encode.bytes !== buf.length) {
        return buf.slice(0, exports2.encode.bytes);
      }
      return buf;
    };
    exports2.encode.bytes = 0;
    exports2.decode = function(buf, offset) {
      if (!offset) offset = 0;
      const oldOffset = offset;
      const result = header.decode(buf, offset);
      offset += header.decode.bytes;
      offset = decodeList(result.questions, question, buf, offset);
      offset = decodeList(result.answers, answer, buf, offset);
      offset = decodeList(result.authorities, answer, buf, offset);
      offset = decodeList(result.additionals, answer, buf, offset);
      exports2.decode.bytes = offset - oldOffset;
      return result;
    };
    exports2.decode.bytes = 0;
    exports2.encodingLength = function(result) {
      return header.encodingLength(result) + encodingLengthList(result.questions || [], question) + encodingLengthList(result.answers || [], answer) + encodingLengthList(result.authorities || [], answer) + encodingLengthList(result.additionals || [], answer);
    };
    exports2.streamEncode = function(result) {
      const buf = exports2.encode(result);
      const sbuf = Buffer2.alloc(2);
      sbuf.writeUInt16BE(buf.byteLength);
      const combine = Buffer2.concat([sbuf, buf]);
      exports2.streamEncode.bytes = combine.byteLength;
      return combine;
    };
    exports2.streamEncode.bytes = 0;
    exports2.streamDecode = function(sbuf) {
      const len = sbuf.readUInt16BE(0);
      if (sbuf.byteLength < len + 2) {
        return null;
      }
      const result = exports2.decode(sbuf.slice(2));
      exports2.streamDecode.bytes = exports2.decode.bytes;
      return result;
    };
    exports2.streamDecode.bytes = 0;
    function encodingLengthList(list, enc) {
      let len = 0;
      for (let i = 0; i < list.length; i++) len += enc.encodingLength(list[i]);
      return len;
    }
    function encodeList(list, enc, buf, offset) {
      for (let i = 0; i < list.length; i++) {
        enc.encode(list[i], buf, offset);
        offset += enc.encode.bytes;
      }
      return offset;
    }
    function decodeList(list, enc, buf, offset) {
      for (let i = 0; i < list.length; i++) {
        list[i] = enc.decode(buf, offset);
        offset += enc.decode.bytes;
      }
      return offset;
    }
  }
});

// node_modules/thunky/index.js
var require_thunky = __commonJS({
  "node_modules/thunky/index.js"(exports2, module2) {
    "use strict";
    var nextTick = nextTickArgs;
    process.nextTick(upgrade, 42);
    module2.exports = thunky;
    function thunky(fn) {
      var state = run;
      return thunk;
      function thunk(callback) {
        state(callback || noop);
      }
      function run(callback) {
        var stack = [callback];
        state = wait;
        fn(done);
        function wait(callback2) {
          stack.push(callback2);
        }
        function done(err) {
          var args = arguments;
          state = isError(err) ? run : finished;
          while (stack.length) finished(stack.shift());
          function finished(callback2) {
            nextTick(apply, callback2, args);
          }
        }
      }
    }
    function isError(err) {
      return Object.prototype.toString.call(err) === "[object Error]";
    }
    function noop() {
    }
    function apply(callback, args) {
      callback.apply(null, args);
    }
    function upgrade(val) {
      if (val === 42) nextTick = process.nextTick;
    }
    function nextTickArgs(fn, a, b) {
      process.nextTick(function() {
        fn(a, b);
      });
    }
  }
});

// node_modules/multicast-dns/index.js
var require_multicast_dns = __commonJS({
  "node_modules/multicast-dns/index.js"(exports2, module2) {
    var packet = require_dns_packet();
    var dgram = require("dgram");
    var thunky = require_thunky();
    var events = require("events");
    var os = require("os");
    var noop = function() {
    };
    module2.exports = function(opts) {
      if (!opts) opts = {};
      var that = new events.EventEmitter();
      var port = typeof opts.port === "number" ? opts.port : 5353;
      var type = opts.type || "udp4";
      var ip = opts.ip || opts.host || (type === "udp4" ? "224.0.0.251" : null);
      var me = { address: ip, port };
      var memberships = {};
      var destroyed = false;
      var interval = null;
      if (type === "udp6" && (!ip || !opts.interface)) {
        throw new Error("For IPv6 multicast you must specify `ip` and `interface`");
      }
      var socket = opts.socket || dgram.createSocket({
        type,
        reuseAddr: opts.reuseAddr !== false,
        toString: function() {
          return type;
        }
      });
      socket.on("error", function(err) {
        if (err.code === "EACCES" || err.code === "EADDRINUSE") that.emit("error", err);
        else that.emit("warning", err);
      });
      socket.on("message", function(message, rinfo) {
        try {
          message = packet.decode(message);
        } catch (err) {
          that.emit("warning", err);
          return;
        }
        that.emit("packet", message, rinfo);
        if (message.type === "query") that.emit("query", message, rinfo);
        if (message.type === "response") that.emit("response", message, rinfo);
      });
      socket.on("listening", function() {
        if (!port) port = me.port = socket.address().port;
        if (opts.multicast !== false) {
          that.update();
          interval = setInterval(that.update, 5e3);
          socket.setMulticastTTL(opts.ttl || 255);
          socket.setMulticastLoopback(opts.loopback !== false);
        }
      });
      var bind = thunky(function(cb) {
        if (!port || opts.bind === false) return cb(null);
        socket.once("error", cb);
        socket.bind(port, opts.bind || opts.interface, function() {
          socket.removeListener("error", cb);
          cb(null);
        });
      });
      bind(function(err) {
        if (err) return that.emit("error", err);
        that.emit("ready");
      });
      that.send = function(value, rinfo, cb) {
        if (typeof rinfo === "function") return that.send(value, null, rinfo);
        if (!cb) cb = noop;
        if (!rinfo) rinfo = me;
        else if (!rinfo.host && !rinfo.address) rinfo.address = me.address;
        bind(onbind);
        function onbind(err) {
          if (destroyed) return cb();
          if (err) return cb(err);
          var message = packet.encode(value);
          socket.send(message, 0, message.length, rinfo.port, rinfo.address || rinfo.host, cb);
        }
      };
      that.response = that.respond = function(res, rinfo, cb) {
        if (Array.isArray(res)) res = { answers: res };
        res.type = "response";
        res.flags = (res.flags || 0) | packet.AUTHORITATIVE_ANSWER;
        that.send(res, rinfo, cb);
      };
      that.query = function(q, type2, rinfo, cb) {
        if (typeof type2 === "function") return that.query(q, null, null, type2);
        if (typeof type2 === "object" && type2 && type2.port) return that.query(q, null, type2, rinfo);
        if (typeof rinfo === "function") return that.query(q, type2, null, rinfo);
        if (!cb) cb = noop;
        if (typeof q === "string") q = [{ name: q, type: type2 || "ANY" }];
        if (Array.isArray(q)) q = { type: "query", questions: q };
        q.type = "query";
        that.send(q, rinfo, cb);
      };
      that.destroy = function(cb) {
        if (!cb) cb = noop;
        if (destroyed) return process.nextTick(cb);
        destroyed = true;
        clearInterval(interval);
        for (var iface in memberships) {
          try {
            socket.dropMembership(ip, iface);
          } catch (e) {
          }
        }
        memberships = {};
        socket.close(cb);
      };
      that.update = function() {
        var ifaces = opts.interface ? [].concat(opts.interface) : allInterfaces();
        var updated = false;
        for (var i = 0; i < ifaces.length; i++) {
          var addr = ifaces[i];
          if (memberships[addr]) continue;
          try {
            socket.addMembership(ip, addr);
            memberships[addr] = true;
            updated = true;
          } catch (err) {
            that.emit("warning", err);
          }
        }
        if (updated) {
          if (socket.setMulticastInterface) {
            try {
              socket.setMulticastInterface(opts.interface || defaultInterface());
            } catch (err) {
              that.emit("warning", err);
            }
          }
          that.emit("networkInterface");
        }
      };
      return that;
    };
    function defaultInterface() {
      var networks = os.networkInterfaces();
      var names = Object.keys(networks);
      for (var i = 0; i < names.length; i++) {
        var net2 = networks[names[i]];
        for (var j = 0; j < net2.length; j++) {
          var iface = net2[j];
          if (isIPv4(iface.family) && !iface.internal) {
            if (os.platform() === "darwin" && names[i] === "en0") return iface.address;
            return "0.0.0.0";
          }
        }
      }
      return "127.0.0.1";
    }
    function allInterfaces() {
      var networks = os.networkInterfaces();
      var names = Object.keys(networks);
      var res = [];
      for (var i = 0; i < names.length; i++) {
        var net2 = networks[names[i]];
        for (var j = 0; j < net2.length; j++) {
          var iface = net2[j];
          if (isIPv4(iface.family)) {
            res.push(iface.address);
            break;
          }
        }
      }
      return res;
    }
    function isIPv4(family) {
      return family === 4 || family === "IPv4";
    }
  }
});

// app.js
var http = require("http");
var net = require("net");
var fs = require("fs");
var multicastDns = require_multicast_dns();
var { getAsset, getAssetAsBlob, getRawAsset, getAssetKeys } = require("node:sea");
var connected = false;
var client = null;
var connectedWarn = false;
var buffer = "";
var braceCount = 0;
var club = "DR";
function initSocket() {
  if (client != null) {
    client.end();
  }
  client = net.createConnection({ port: 921, host: "127.0.0.1" }, () => {
    console.log("Connected to Sim!");
    connected = true;
    connectedWarn = false;
  });
  client.on("data", (data) => {
    const dataStr = data.toString();
    buffer += dataStr;
    for (const char of dataStr) {
      if (char === "{") {
        braceCount++;
      } else if (char === "}") {
        braceCount--;
      }
    }
    ;
    if (braceCount === 0) {
      try {
        const json = JSON.parse(buffer);
        if (json.Code == 201) {
          club = json.Player.Club;
        }
      } catch (err) {
        console.error("Failed to parse JSON:", err.message);
      }
      buffer = "";
    }
  });
  client.on("end", () => {
    connected = false;
    console.log("Disconnected from sim");
  });
  client.on("error", function(e) {
    if (!connectedWarn) {
      console.log("Sim not found");
      connectedWarn = true;
    }
    connected = false;
  });
}
var requestListener = async function(req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      const data = getAsset("index.html", "utf8");
      res.end(data);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Endpoint not found");
    }
  } else if (req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      let postData = {};
      if (body.length > 0) {
        postData = JSON.parse(Buffer.concat(body).toString());
      }
      if (req.url === "/ping") {
        if (!connected) {
          initSocket();
        }
        if (!connected) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Simulator not connected");
          return;
        }
        const readyData = {
          "DeviceID": "LMEmulator",
          "Units": "Metres",
          "ShotNumber": -1,
          "APIversion": "1",
          "BallData": {},
          "ClubData": {},
          "ShotDataOptions": {
            "ContainsBallData": false,
            "ContainsClubData": false,
            "LaunchMonitorIsReady": true,
            "LaunchMonitorBallDetected": true,
            "IsHeartBeat": false
          }
        };
        client.write(JSON.stringify(readyData));
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(club);
      } else if (req.url === "/shot") {
        if (!connected) {
          initSocket();
        }
        if (!connected) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Simulator not connected");
          return;
        }
        const shotData = {
          "DeviceID": "LMEmulator",
          "Units": "Metres",
          "ShotNumber": postData.shot_number,
          "APIversion": "1",
          "BallData": {
            "Speed": postData.ball_speed_kmh * 0.621371,
            "SpinAxis": postData.spin_axis_deg,
            "TotalSpin": postData.spin_rpm,
            "HLA": postData.hla,
            "VLA": postData.vla
          },
          "ClubData": {
            "Speed": 0,
            "AngleOfAttack": 0,
            "Path": 0,
            "HorizontalFaceImpact": 0
          },
          "ShotDataOptions": {
            "ContainsBallData": true,
            "ContainsClubData": true,
            "LaunchMonitorIsReady": false,
            "LaunchMonitorBallDetected": false,
            "IsHeartBeat": false
          }
        };
        client.write(JSON.stringify(shotData));
        if (connected) {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Shot sent to simulator");
        } else {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Write to simulator failed");
        }
      }
    });
  }
};
initSocket();
var httpServer = http.createServer(requestListener);
httpServer.listen(3e3, () => {
  console.log(`HTTP listening on port: 3000`);
  startMdns("lm-emulator", 3e3);
});
function startMdns(hostname, port) {
  const mdns = multicastDns();
  mdns.on("query", (query) => {
    for (const question of query.questions) {
      if (question.name === `${hostname}.local` && question.type === "A") {
        mdns.respond({
          answers: [
            {
              name: `${hostname}.local`,
              type: "A",
              ttl: 300,
              data: getLocalIp()
            }
          ]
        });
      }
      if (question.type === "PTR" && question.name === "_http._tcp.local") {
        mdns.respond({
          answers: [
            {
              name: "_http._tcp.local",
              type: "PTR",
              ttl: 300,
              data: `${hostname}._http._tcp.local`
            },
            {
              name: `${hostname}._http._tcp.local`,
              type: "SRV",
              ttl: 300,
              data: { port, target: `${hostname}.local`, weight: 0, priority: 0 }
            },
            {
              name: `${hostname}.local`,
              type: "A",
              ttl: 300,
              data: getLocalIp()
            }
          ]
        });
      }
    }
  });
  console.log(`mDNS: advertising http://${hostname}.local:${port}`);
  return mdns;
}
function getLocalIp() {
  const { networkInterfaces } = require("os");
  const nets = networkInterfaces();
  for (const iface of Object.values(nets)) {
    for (const addr of iface) {
      if (addr.family === "IPv4" && !addr.internal) {
        return addr.address;
      }
    }
  }
  return "127.0.0.1";
}
