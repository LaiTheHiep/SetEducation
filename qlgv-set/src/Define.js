
var assets={
  //   small_logo:require('assets/images/small_logo.svg'),
  //   name_logo:require('assets/images/name_logo.svg'),

  // defaultavatar:require('../resources/img/defaultavatar.png'),
  // call_agv_bubble:require('../resources/img/call_agv_bubble.png'),
  // agv:require('../resources/img/agv.png'),
  // chat_bubble:require('../resources/img/chat_bubble.png'),
  // chat_bubble_long:require('../resources/img/chat_bubble_long.png'),
  // agv_no_cargo:require('../resources/img/agv_no_cargo.png'),
  // agv_cargo_only:require('../resources/img/agv_cargo_only.png'),
  // station:require('../resources/img/station.png'),
  // station_no_cargo:require('../resources/img/station_no_cargo.png'),
  // station_cargo_only:require('../resources/img/station_cargo_only.png'),
  // charging:require('../resources/img/charging.png'),
  // ready:require('../resources/img/ready.png'),
  // error:require('../resources/img/error.png'),
  // return:require('../resources/img/return.png'),
  // waitting:require('../resources/img/waitting.png'),

//   fire:{
//     ['headerbar'] : require('assets/fire/headerbar.png'),
//     ['114'] : require('assets/fire/114.png'),
//   },
//   ['CAT-MANHINHCHINH']:{
//     ['menu-dung']:{
//       ['bancong3x'] : require('assets/images/CAT-MANHINHCHINH/menu-dung/bancong3x.png'),
//       ['caidat3x'] : require('assets/images/CAT-MANHINHCHINH/menu-dung/caidat3x.png'),
//       ['hanhlang3x'] : require('assets/images/CAT-MANHINHCHINH/menu-dung/hanhlang3x.png'),
//       ['phongan3x'] : require('assets/images/CAT-MANHINHCHINH/menu-dung/phongan3x.png'),
//       ['phongkhach3x'] : require('assets/images/CAT-MANHINHCHINH/menu-dung/phongkhach3x.png'),
//       ['phongngu3x'] : require('assets/images/CAT-MANHINHCHINH/menu-dung/phongngu3x.png'),
//       ['phongtam3x'] : require('assets/images/CAT-MANHINHCHINH/menu-dung/phongtam3x.png'),
//       ['santhuong3x'] : require('assets/images/CAT-MANHINHCHINH/menu-dung/santhuong3x.png'),
//     },
//     thietbi:{
//       ['binhnuoc3x'] : require('assets/images/CAT-MANHINHCHINH/thietbi/binhnuoc3x.png'),
//       ['congtac3x'] : require('assets/images/CAT-MANHINHCHINH/thietbi/congtac3x.png'),
//       ['den3x'] : require('assets/images/CAT-MANHINHCHINH/thietbi/den3x.png'),
//       ['dieuhoa3x'] : require('assets/images/CAT-MANHINHCHINH/thietbi/dieuhoa3x.png'),
//       ['maygiat3x'] : require('assets/images/CAT-MANHINHCHINH/thietbi/maygiat3x.png'),
//       ['ocam3x'] : require('assets/images/CAT-MANHINHCHINH/thietbi/ocam3x.png'),
//       ['quat3x'] : require('assets/images/CAT-MANHINHCHINH/thietbi/quat3x.png'),
//       ['smoke'] : require('assets/images/CAT-MANHINHCHINH/thietbi/smoke.png'),
//
//       ['battery-status'] : require('assets/images/CAT-MANHINHCHINH/thietbi/battery-status.png'),
//       ['battery-status-1'] : require('assets/images/CAT-MANHINHCHINH/thietbi/battery-status-1.png'),
//       ['battery-status-2'] : require('assets/images/CAT-MANHINHCHINH/thietbi/battery-status-2.png'),
//       ['battery-status-3'] : require('assets/images/CAT-MANHINHCHINH/thietbi/battery-status-3.png'),
//       ['battery-status-4'] : require('assets/images/CAT-MANHINHCHINH/thietbi/battery-status-4.png'),
//       ['battery-status-full'] : require('assets/images/CAT-MANHINHCHINH/thietbi/battery-status-full.png'),
//       ['battery-with-plus-and-minus-signs.png'] : require('assets/images/CAT-MANHINHCHINH/thietbi/battery-with-plus-and-minus-signs.png'),
//
//       ['temperature-0'] : require('assets/images/CAT-MANHINHCHINH/thietbi/temperature-0.png'),
//       ['temperature-1'] : require('assets/images/CAT-MANHINHCHINH/thietbi/temperature-1.png'),
//       ['temperature-2'] : require('assets/images/CAT-MANHINHCHINH/thietbi/temperature-2.png'),
//       ['temperature-3'] : require('assets/images/CAT-MANHINHCHINH/thietbi/temperature-3.png'),
//       ['temperature-4'] : require('assets/images/CAT-MANHINHCHINH/thietbi/temperature-4.png'),
//       ['temperature-5'] : require('assets/images/CAT-MANHINHCHINH/thietbi/temperature-5.png'),
//
//       ['3-molecules'] : require('assets/images/CAT-MANHINHCHINH/thietbi/3-molecules.png'),
//     }
//   }
}
var Define = {
  assets: assets, //(__DEV__)? assets:PlatformConfig.default.processAsset(assets,mapAssets),
  constants:{
    version: "1.0.0",
    // availableHeightScreen: heightScreen,
    // widthScreen:widthScreen,
    // heightScreen:heightScreen,
    // screenSizeByInch:screenSizeByInch,
    deviceId:'',
    deviceInfo:{},

    // nativeVersion:DeviceInfo.getBuildNumber(),

    imageThumbRate:(20/9),
    smallImageThumbRate:(9/6),

    // fontScale : Math.floor(4/PixelRatio.getFontScale()),

    // navBarHeight: PlatformConfig.default.navBarHeight,
    // X : (widthScreen<heightScreen? widthScreen : heightScreen)/ ((screenSizeByInch<7)?9.25:12) ,

    googleAnalyticsTrackerId:'UA-117100169-1',
    serverAddr : (process.env.REACT_APP_serverAddr?`https://${process.env.REACT_APP_serverAddr}:3029`:`http://${window.location.hostname}:3028`),
    // serverAddr : "https://smarthome.makipos.net:3029",
    // serverAddr : "https://makipos-server.ddns.net:3029",
    mqttServerAddr:(process.env.REACT_APP_serverAddr?`wss://${process.env.REACT_APP_serverAddr}:8084/mqtt`:`ws://${window.location.hostname}:8083/mqtt`),
    // mqttServerAddr : `wss://smarthome.makipos.net:8084/mqtt`,
    // mqttServerAddr : `wss://makipos-server.ddns.net:8084/mqtt`,

    policyAddr:'http://www.makipos.com/dieu-khoan-su-dung-ung-dung-safety-connect/',
    websiteAddr:'http://www.makipos.com',

    // font:PlatformConfig.font,
    // fontBold:PlatformConfig.fontBold,
    // dataBase:'database.db',
    // crashLog: RNFS.DocumentDirectoryPath + '/CrashLog.txt',
    // trackingLog: RNFS.DocumentDirectoryPath + '/TrackingLog.txt',
    alarmListTable:'AlarmList',
    appColor:'#3ab54a',
    signoutBeforeDisconnect:true,
    accountTest:{
      user:'',   // TODO : must = '' when release
      pass:'',
    },
    getMoreHeight:100,
    getMoreHeightMin:1,
    timeoutToHideContent:5000,
    timeoutToHideContent2:10000,
    elevation:3,
    periodOfAccelerometer:1000,
    requestTimeout:26000,
    debug:false,  // must false in release
    debugStyle:false,
    review:false,
    debugTrackerLogLength:166,
    logLevel:10,  // must be 10 when release
  },
  config:{
    farmer:false,
    mode:'NORMAL', // FARMER , NORMAL
    level1Name: 'tầng', // 'tầng', // 'trang trại',
    level2Name: 'phòng' ,// 'phòng',//'bể',
    properties:{
      dtid: "0",
      spid: "0",
    },
    currentHybridVersion:0,
    waitToken: true,
    fcmToken: '',
  }
};

module.exports = Define;
