const _random = require('lodash/random');
const dataOper = require('./dataOper');
const parser = require('./parser/');
const gv = require('./globalVarible');
const randomUseragent = require('random-useragent');

const {
  factorial,
  fibonacci,
  numToNumarr2,
  numToNumarr4,
  numToNumarr8,
  uuid,
  string2ascii,
  execRandomByNumber,
  hexnum,
  ascii2string,
  getFixedNumber,
  numarrAddTime,
  decode,
  decrypt,
  encryptMode1,
  encryptMode2,
  numarrJoin,
  numarr2string,
  numarrEncrypt,
  xor,
} = parser;

module.exports = class {
  constructor(ts, r2mkaText) {
    parser.init(ts, r2mkaText)
    this.config = {
      'window.navigator.maxTouchPoints': 0,
      'window.eval.toString().length': 33,
      'window.navigator.userAgent': randomUseragent.getRandom(),
      'window.navigator.platform': 'MacIntel',
      'window.name': '$_YWTU=LjFNq_oZCsth6KJ9xHOin6RRhL4fQt7Vsn8YCz9dRjl&$_YVTX=Wa&vdFm=_$hh',
      'window.navigator.battery': {
        charging: true, // 正在充电
        chargingTime: 0, // 距离充满时间
        dischargingTime: Infinity, // 预估可使用时间
        level: 1, // 电量100%
      },
      'window.navigator.connection': {
        downlink: 6.66, // 下行速度
        effectiveType: "4g", // 网络类型
        rtt: 0, // 往返延时
        saveData: false, // 节流模式
      },
    }
    this.runTime = Math.floor(new Date().getTime() / 1000); // 运行时间
    this.startTime = this.runTime - 1; // 模拟浏览器启动时间
    this.r2mkaTime = +ascii2string(gv.keys[21]); // r2mka文本解析出来的时间
  }

  run() {
    const { getTaskNumber: gtn } = this;
    const cookieBaseArr = numarrJoin(
      gv.cp2[58], // 3
      this.getSubOne(),
      gv.cp2[0], // 10
      this.getSubTwo(),
      gv.cp2[23], // 7
      this.getSubThree(),
      gtn('0>one>63-287', 4), // 0
      [gtn('0>one>63>one>4-290', 1)], // 0
      gv.cp2[55], // 6
      this.getSubFour(),
      gv.cp2[56], // 2
      this.getSubFive(),
      gv.cp2[6], // 9
      this.getSubSix(),
      gv.cp2[39], // 13
      [gtn('0>one>55>one>3-189', 6)],
    )
    return '0' + numarr2string(
      encryptMode1([
        ...numToNumarr4(this.r2mkaTime),
        ...numarrJoin(
          numarrJoin(
            gv.r2mka("0>one>32-126").taskarr[73],
            numarrJoin(
              numToNumarr4([this.r2mkaTime, this.startTime]),
              string2ascii(gv.cp0[399])
            ),
            gv.keys[gv.cp2[56]]
          ),
          encryptMode1(
            xor(
              numarrEncrypt(cookieBaseArr),
              gv.keys[gv.cp2[56]],
              gv.cp2[2]
            ),
            numarrAddTime(gv.keys[gv.cp2[24]], this.runTime)[0],
            0
          )
        )],
        numarrAddTime(gv.keys[gv.cp2[2]], this.runTime)[0]
      )
    );
  }

  getSubOne() {
    const { getTaskNumber: gtn } = this;
    const pfarr = string2ascii(this.config['window.navigator.platform']);
    return [
      gtn('0>one>62>one>30-272', 550),
      this.config['window.navigator.maxTouchPoints'],
      this.config['window.eval.toString().length'],
      gtn('0>one>62>one>28-270', 1) | (gtn('0>one>62>one>28-270', 92) << gv.cp2[23]),
      ...numToNumarr4(uuid(this.config['window.navigator.userAgent'])),
      pfarr.length,
      ...pfarr,
      ...numToNumarr4(_random(500, 1000)),
      ...execRandomByNumber(),
      gtn('0>one>62>one>12-246', 28),
      gtn('0>one>62-235', 36),
      ...numToNumarr4(Number(hexnum(gv.cp0_96(6, 76))))
    ]
  }

  getSubTwo() {
    const flag = +ascii2string(gv.keys[24]);
    return [
      flag > 0 && flag < gv.cp2[52] ? 1 : 0,
      gv.cp2[39],
      ...numToNumarr4(this.r2mkaTime + this.runTime - this.startTime), // ramka串返回的时间 + 当前时间 - 启动时间
      ...numToNumarr4(+ascii2string(gv.keys[gv.cp2[15]])),
      ...numToNumarr8(Math.floor(Math.random() * gv.cp2[207]) * gv.cp2[16] + (((this.runTime * 1000) & gv.cp2[17]) >>> 0)),
      flag,
    ]
  }

  getSubThree() {
    const { getTaskNumber: gtn } = this;
    return [
      ...numToNumarr4(Number(hexnum(gv.cp0_96(6, 76)))),
      ...numToNumarr4(gtn('0-0', 92)),
      ...numToNumarr2(getFixedNumber()),
      ...numToNumarr2(46228), // 根据方法的toString()计算
    ];
  }

  getSubFour() {
    const keyarr = numarrAddTime(gv.keys[gv.cp2[2]])[0];
    const name = this.config['window.name'].split('&').reduce((ans, it) => {
      const [key, val] = it.split('=');
      return { ...ans, [key]: val };
    }, {});
    return [
      1, 0, 0, 0, 0, 0,
      ...encryptMode2(decrypt(name.$_YWTU || ''), keyarr),
      ...numToNumarr2(+decode(decrypt(name.$_YVTX || ''))),
    ];
  }

  getSubFive() {
    return [
      factorial(gv.cp2[29]) - factorial(gv.cp2[58]) * gv.cp2[56],
      fibonacci(gv.cp2[57]) + gv.cp2[43],
      factorial(gv.cp2[55]) / gv.cp2[19],
      gv.cp2[57],
    ]
  }

  getSubSix() {
    // 网络与电量信息
    const { connType } = this.config['window.navigator.connection'];
    const { charging, chargingTime, level } = this.config['window.navigator.battery']
    const connTypeIdx = ['bluetooth', 'cellular', 'ethernet', 'wifi', 'wimax'].indexOf(connType) + 1;
    let oper = 0;
    if (level) oper |= gv.cp2[56];
    if (charging) oper |= 1;
    if (connTypeIdx !== undefined) oper |= gv.cp2[52]
    return [
      oper,
      level * 100,
      chargingTime >> gv.cp2[52],
      chargingTime & gv.cp2[34],
      connTypeIdx,
    ]
  }

  getTaskNumber(name, idx) {
    return gv.r2mka(name).taskarr[idx];
  }
}
