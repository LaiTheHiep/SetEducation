import * as _ from 'lodash'

// var React = require('react-native');
// var {
//   StyleSheet,
// } = React;

import Debug from './Debug'

var Util = {
  debug:{
    log:()=>{},
    level:{},
  },
  enableDebug:function(){
    this.debug = Debug;
  },

  timeToHours: function(time) {
    const dateInstance = new Date(time);
    let hours = dateInstance.getHours();
    if(hours < 10) {
      hours = '0' + hours;
    }

    let minutes = dateInstance.getMinutes();
    if(minutes < 10) {
      minutes = '0' + minutes;
    }

    return hours + ":" + minutes;
  },
  sctvTime: function(date) { // Date Object from 00:00:00 of a date
    const current = Date.now();
    const time = date.getTime(); // miliseconds

    let prefix = '';
    const delta = current - time;
    if( delta >= 0 && delta <= 86400000) {
      prefix = 'Hôm nay ';
    } else if ( delta < 0 && delta >= -86400000) {
      prefix = 'Ngày mai ';
    } else if ( delta > 86400000 && delta <= 2*86400000) {
      prefix = 'Hôm qua ';
    } else {
      prefix = 'Ngày ';
    }

    let dateString = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

    return {
      prefix,
      dateString
    }
  },
  formatDateFromNow : function(timeIn)
  {
      var time = timeIn;
      switch (typeof time)
      {
          case 'number':
          {
              break;
          }
          case 'string':
          {
              time = +new Date(time);
              break;
          }
          case 'object':
          {
              if (time.constructor === Date)
              {
                  time = time.getTime();
              }
              break;
          }
          default:
          {
              time = +new Date();
          }
      }

      var timeNow = new Date();
      var time_formats =
      [
          [60, 'giây', 1], // 60
          [120, '1 phút trước', '1 phút nữa'], // 60*2
          [3600, 'phút', 60], // 60*60, 60
          [7200, '1 giờ trước', '1 giờ nữa'], // 60*60*2
          [86400, 'giờ', 3600], // 60*60*24, 60*60
          [(86400 - (((timeNow.getHours()*60)+timeNow.getMinutes())*60)+timeNow.getSeconds()) + 86400, 'Hôm qua', 'Ngày mai'], // exactly tomorow
          [604800, 'Ngày', 86400], // 60*60*24*7, 60*60*24
          [1209600, 'Tuần trước', 'Tuần tới'], // 60*60*24*7*4*2
          [2419200, 'Tuần', 604800], // 60*60*24*7*4, 60*60*24*7
          [4838400, 'Tháng trước', 'Tháng tới'], // 60*60*24*7*4*2
          [29030400, 'Tháng', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
          [58060800, 'Năm ngoái', 'Năm tới'], // 60*60*24*7*4*12*2
          [2903040000, 'Năm', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
          [5806080000, 'Thế kỷ trước', 'Thế kỷ tới'], // 60*60*24*7*4*12*100*2
          [58060800000, 'Thế kỷ', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
      ];

      var seconds     = (+new Date() - time) / 1000;
      var token       = 'trước';
      var list_choice = 1;

      if (seconds == 0)
      {
          return 'Đang diễn ra'
      }

      if (seconds < 0)
      {
          seconds     = Math.abs(seconds);
          token       = 'Sắp tới';
          list_choice = 2;
      }

      var i = 0;
      var format;

      while (format = time_formats[i++])
      {
          if (seconds < format[0])
          {
              if (typeof format[2] == 'string')
              {
                  return format[list_choice];
              }
              else
              {
                  return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
              }
          }
      }
      return time;
  },

  second2String:function(second){
    var stringReturn = '';
    var timeDu = Math.floor( second/60/60);
    if (timeDu>0) {
      stringReturn+=timeDu.toString();
      stringReturn+=':';
    }
    timeDu = Math.floor(second%(60*60)/60);

    stringReturn+=timeDu.toString();
    stringReturn+=':';

    timeDu = (second%60);

    stringReturn+='0'.repeat(2-timeDu.toString().length) + timeDu.toString();

    return stringReturn;
  },

  stringDate2Date:function(stringDate,format='HH:MM:SS-yyyy-mm-dd'){
    var date= new Date();
    if (!stringDate) {
      return date;
    }
    var indexHours= format.indexOf('HH');
    var indexMinutes= format.indexOf('MM');
    var indexSecond= format.indexOf('SS');
    var indexYear= format.indexOf('yyyy');
    var indexMonth= format.indexOf('mm');
    var indexDay= format.indexOf('dd');


    var temp = parseInt(stringDate.slice(indexYear,indexYear+4));
    if (indexYear>=0 && !isNaN(temp)) {date.setYear(temp);}
    temp = parseInt(parseInt(stringDate.slice(indexMonth,indexMonth+2))-1);
    if (indexMonth>=0 && !isNaN(temp)) {date.setMonth(temp);}
    temp = parseInt(stringDate.slice(indexDay,indexDay+2));
    if (indexDay>=0 && !isNaN(temp)) {date.setDate(temp);}

    temp = parseInt(stringDate.slice(indexHours,indexHours+2));
    if (indexHours>=0 && !isNaN(temp)) {date.setHours(temp);}
    temp = parseInt(stringDate.slice(indexMinutes,indexMinutes+2));
    if (indexMinutes>=0 && !isNaN(temp)) {date.setMinutes(temp);}
    temp = parseInt(stringDate.slice(indexSecond,indexSecond+2));
    if (indexSecond>=0 && !isNaN(temp)) {date.setSeconds(temp);}

    return date;
  },


  date2String:function(date,formatString='HH:MM - Ngày dd/mm'){
    var stringReturn = 'unknown';
    try{
      stringReturn= formatString.replace(/HH/, '0'.repeat(2-date.getHours().toString().length) +  date.getHours().toString() );
      stringReturn= stringReturn.replace(/MM/,'0'.repeat(2-date.getMinutes().toString().length) +date.getMinutes().toString());
      stringReturn= stringReturn.replace(/SS/,'0'.repeat(2-date.getSeconds().toString().length) +date.getSeconds().toString());

      stringReturn= stringReturn.replace(/yyyy/,'0'.repeat(4-date.getFullYear().toString().length) +date.getFullYear().toString());
      stringReturn= stringReturn.replace(/mm/,'0'.repeat(2-(date.getMonth()+1).toString().length) +(date.getMonth()+1).toString());
      stringReturn= stringReturn.replace(/dd/,'0'.repeat(2-date.getDate().toString().length) +date.getDate().toString());
    }
    catch(ex){}
    return stringReturn;
  },

  formatNumber:function(number,c, d, t){
    var n = number,
    c = isNaN(c = Math.abs(c)) ? 0 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 },

 //
 formatObject:function(org,format={}){
   if (org === null || org === undefined ) {
     return format;
   }
   Object.keys(format).forEach((key)=>{
     if ( !org.hasOwnProperty(key)) {
       org[key] = format[key];
     }
     else if((org[key] === undefined || org[key] === null) && (format[key] !== undefined)){
       org[key] = format[key];
     }
   })
   return org;

 },

 dataProtectAndMap:function(orgIn,format={},map={}){
   let org=orgIn;
   if ( Array.isArray(format) && !Array.isArray(org)) {
     this.debug.log('1 : WRONG TYPE',this.debug.level.WARN)
     org = [];
   }else if (typeof(format) === 'object'  &&  typeof(org) !== 'object') {
     this.debug.log('2 : WRONG TYPE',this.debug.level.WARN)
      org = {};
   }
   else{
    if (org === null || org === undefined) {
      return format;
    }
   }


   Object.keys(format).forEach((key)=>{

     if ((!org.hasOwnProperty(key) || ( (format[key] !== undefined) && (typeof(org[key]) !== typeof(format[key])) )) && (typeof(format[key]) !== 'object') ) {
       this.debug.log('3 : WRONG TYPE ' + key,this.debug.level.WARN)
       if (map[key]) {
         org[map[key]] = Array.isArray(format[key]) ? [] : format[key];
       }
       else{
         org[key] = Array.isArray(format[key]) ? [] : format[key];
       }
     }
     else if((org[key] === undefined || org[key] === null) && (format[key] !== undefined) && (typeof(format[key]) !== 'object') ){
       this.debug.log('4 : VALUE UNDEFINED '+ key,this.debug.level.WARN)
       if (map[key]) {
         org[map[key]] = Array.isArray(format[key]) ? [] : format[key];
       }
       else{
         org[key] = Array.isArray(format[key]) ? [] : format[key];
       }
     }
     else{
       var temp;
       if(Array.isArray(format[key]) && (format[key].length===0)  ){
         if ((org[key]===undefined) || (!Array.isArray(org[key])) ){
           this.debug.log('5 : WRONG TYPE ' + key,this.debug.level.WARN)
           temp =[];
         }else {
           temp = org[key];
         }
       }
       else if(Array.isArray(format[key]) && (format[key].length>0)  ){
         temp = [];
         if (!org[key] || (!Array.isArray(org[key]))) {
           this.debug.log('7 : WRONG TYPE OR UNDEFINED '+key,this.debug.level.WARN)
           org[key]=[];
           if (typeof(format[key][0]) === 'object') {
             temp = [this.dataProtectAndMap(undefined,format[key][0],map)]
           }

         }else{
           org[key].forEach((current)=>{
             if (typeof(format[key][0]) === 'object') {
               temp.push(this.dataProtectAndMap(current,format[key][0],map));
             }else{
               if ((format[key][0] !== undefined) && (typeof(current) !== typeof(format[key][0]))) {
                 temp.push(format[key][0]);
               }else{
                 temp.push(current);
               }
             }
           })
         }

       }
       else if ((typeof(format[key]) === 'object') && (!Array.isArray(format[key])) ) {
         temp = this.dataProtectAndMap(org[key],format[key],map);
       }
       else{
         temp = org[key];
       }

       if (map[key]) {
         org[map[key]] = temp;
         org[key] = undefined;
       }
       else{
         org[key] = temp;
       }

     }
   })
   return org;
 },
 // dataProtectAndMap:function(org,format={},map={}){
 //   var dataRet = {};
 //   if (org === null || org === undefined) {
 //     if (typeof(format) === 'object') {
 //        org = new Object();
 //     }
 //     else{
 //      return format;
 //     }
 //   }
 //   Object.keys(format).forEach((key)=>{
 //
 //     if (!org.hasOwnProperty(key) || ((format[key] !== undefined) && (typeof(org[key]) !== typeof(format[key])))) {
 //       if (map[key]) {
 //         dataRet[map[key]] = Array.isArray(format[key]) ? [] : format[key];
 //       }
 //       else{
 //         dataRet[key] = Array.isArray(format[key]) ? [] : format[key];
 //       }
 //     }
 //     else if((org[key] === undefined || org[key] === null) && (format[key] !== undefined)){
 //       if (map[key]) {
 //         dataRet[map[key]] = Array.isArray(format[key]) ? [] : format[key];
 //       }
 //       else{
 //         dataRet[key] = Array.isArray(format[key]) ? [] : format[key];
 //       }
 //     }
 //     else{
 //       var temp ;
 //
 //       if(Array.isArray(format[key]) && (format[key].length>0) && (typeof(format[key][0]) === 'object') ){
 //         temp = [];
 //         org[key].forEach((current)=>{
 //           temp.push(this.dataProtectAndMap(current,format[key][0]));
 //         })
 //       }
 //       else if ((typeof(format[key]) === 'object') && (!Array.isArray(format[key])) ) {
 //         temp = this.dataProtectAndMap(org[key],format[key]);
 //       }
 //       else{
 //         temp = org[key];
 //       }
 //
 //       if (map[key]) {
 //         dataRet[map[key]] = temp;
 //       }
 //       else{
 //         dataRet[key] = temp;
 //       }
 //
 //     }
 //   })
 //   return dataRet;
 // }
  change_alias:function( alias )
  {
      var str = alias;
      str= str.toLowerCase();
      str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
      str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
      str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
      str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
      str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
      str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
      str= str.replace(/đ/g,"d");
      str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"");
      /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
      // str= str.replace(/-+-/g,"-"); //thay thế 2- thành 1-
      // str= str.replace(/^\-+|\-+$/g,"");
      //cắt bỏ ký tự - ở đầu và cuối chuỗi
      return str;
  },
  searchText:function(text2Search,str){
    let text2SearchArray = text2Search.split(',')
    let strTemp = this.change_alias(str)
    return text2SearchArray.some((current)=>{
      let text2SearchTemp = this.change_alias(current);
      if (!text2SearchTemp || text2SearchTemp === '') {
        return false;
      }
      return (strTemp.search(text2SearchTemp) > -1)
    })
  },
  searchTextQuick:function(text2Search,str){
    let text2SearchArray = text2Search.split(',')
    // let strTemp = this.change_alias(str)
    return text2SearchArray.some((current)=>{
      let text2SearchTemp = this.change_alias(current);
      if (!text2SearchTemp || text2SearchTemp === '') {
        return false;
      }
      return (str.search(text2SearchTemp) > -1)
    })
  },
  full2ShortUUID(fullUUID){
    if (fullUUID.length > 4) {
      let temp = fullUUID.split('-')
      return temp[0].slice(4)
    }else{
      return fullUUID
    }
  },
  parseGroupObject(groupsInfo){
    var groupsObj={}
    Object.keys(groupsInfo).forEach((group)=>{
      let obj = groupsInfo[group]
      var temp = group.split('/')
      let tempObj = groupsObj
      temp.forEach((current)=>{
        if (!tempObj[current]) {
          tempObj[current]={
            childDevice:{}
          }
        }
        tempObj = tempObj[current]
      })
      tempObj._path=group
      Object.keys(obj).forEach((key)=>{
          tempObj[key] = obj[key]
      })
    })
    return groupsObj
  },
  getDeviceGroupNameAndIcon(info={},useLocalId = true,userReducer={},deviceReducer={}){
    //info : { deviceId,propertyName }
    var deviceId
    if (info.deviceId) {
      deviceId = info.deviceId
    }else if(deviceReducer.childDevicesByProductId[info.productId]){
      deviceId = deviceReducer.childDevicesByProductId[info.productId]._id
    }else{
      return {
        name: info.productId ||  info.deviceId,
        nameLocal:info.productId ||  info.deviceId,
        nameDeviceType : info.productId ||  info.deviceId,
        icon: '',
        group : '', //groups.join(' '),
        groupsMap:[],
        groups :'',
        location: '',
        propertyId:''
      }
    }
    userReducer.userSetting = userReducer.userSetting || {}
    var groups = []
    var groupsMap = {}
    Object.keys(userReducer.userSetting.groups||{}).some((current)=>{
      let obj = userReducer.userSetting.groups[current]
      if (obj.childDevice&&obj.childDevice[deviceId]) {
        groups.push(current)
        groupsMap[current]=obj
      }
    })

    var deviceInfo = deviceReducer.devices[deviceId]
    var deviceTypeInfo = deviceReducer.devicesTypes[deviceInfo.deviceTypeId]
    var propertyInfo ={}
    var localId = ''
    if (info.propertyInfo && info.propertyInfo.localId) {
      localId = info.propertyInfo.localId
      propertyInfo = info.propertyInfo
    }else if (info.propertyName || (info.propertyCode && info.localId) || (info.localId)) {
      let count =0
      deviceTypeInfo.properties.some((c)=>{
        if (info.propertyName) {
          if (info.propertyName === c.name) {
            localId = c.localId
            propertyInfo = c
            return true
          }
        }else if(info.propertyCode && info.localId){
          if (info.localId.toString() === c.localId &&
                  info.propertyCode === deviceReducer.devicesProperties[c.propertyId].code ) {
            localId = c.localId
            propertyInfo = c
            return true
          }
        }else{
          if (info.localId.toString() === c.localId) {
            if (count>0) {
              localId = c.localId
              propertyInfo = {}
              return true
            }
            count ++
            localId = c.localId
            propertyInfo = c
            return false
          }
        }
        return false
      })
    }
    else{
      let count =0
      deviceTypeInfo.properties.some((c)=>{
        if (count>0) {
          localId = c.localId
          propertyInfo = {}
          return true
        }
        count ++
        localId = c.localId
        propertyInfo = c
        return false
      })
    }

    var propertyDetailInfo ={}
    if (propertyInfo && propertyInfo.propertyId) {
      propertyDetailInfo = deviceReducer.devicesProperties[propertyInfo.propertyId]
    }

    var nameProperty = ''
    var namePropertyLocal = ''
    if (localId && useLocalId) {
      nameProperty = _.get(userReducer,`userSetting.devices.${deviceId}.properties.localId-${localId}.name`,
          ((propertyDetailInfo && (propertyDetailInfo.displayName || propertyDetailInfo.name))?`${propertyDetailInfo.displayName || propertyDetailInfo.name}-${localId}` :undefined)
          || (propertyInfo.name?`${propertyInfo.name}`:undefined) )
    }else if(propertyInfo){
      if (localId) {
        namePropertyLocal = _.get(userReducer,`userSetting.devices.${deviceId}.properties.localId-${localId}.name`,`${propertyDetailInfo.displayName || propertyDetailInfo.name}-${localId}` || `${propertyInfo.name}` )
      }
      if (propertyInfo.displayName || propertyInfo.name) {
        nameProperty = `${propertyDetailInfo.displayName}-${localId}` || propertyInfo.name
      }
    }

    var iconLocalProperty = ''
    if (localId && useLocalId) {
      iconLocalProperty = _.get(userReducer,`userSetting.devices.${deviceId}.properties.localId-${localId}.icon`,'')
    }
    var iconProperty = ''
    iconProperty = _.get(userReducer,`userSetting.devices.${deviceId}.properties.${propertyInfo.name}.icon`,propertyDetailInfo?propertyDetailInfo.icon:'')

    var nameDevice = ''
    nameDevice = _.get(userReducer,`userSetting.devices.${deviceId}.name`,deviceTypeInfo.displayName||deviceTypeInfo.name)

    var iconDevice = ''
    iconDevice = _.get(userReducer,`userSetting.devices.${deviceId}.icon`,deviceTypeInfo.icon)

    return {
      name: nameProperty || `${nameDevice}${useLocalId?`-${localId}`:''}` ,
      nameLocal:namePropertyLocal,
      nameDeviceType : deviceTypeInfo.displayName||deviceTypeInfo.name,
      icon: iconLocalProperty || iconProperty ,
      // group : groups.join(' '),
      group : groups[0]||'', //groups.join(' '),
      groupsMap,
      groups :groups,
      location: _.get(groupsMap,`${groups[0]}._setting.location`,{}),
      locationDevice: _.get(userReducer,`userSetting.devices.${deviceId}._setting.location`,{}),
      propertyId:propertyInfo.propertyId
    }
  },
  verifyType(value,type){
    switch (type) {
      case 'NUMBER':{
        if (typeof(value)==='boolean') {
          return (value?1:0)
        }
        return parseFloat(value) || 0
        break;
      }
      case 'STRING':{
        return value+''
        break;
      }
      case 'BOOLEAN':{
        if (typeof(value)==='string') {
          return ((value==='true'||value==='TRUE') ?true:false)
        }else if(typeof(value)==='number'){
          return ((value>0)?true:false)
        }else{
          return !!value
        }
        break;
      }
      default:
        return value
    }
  },
  verifyValue(value,propertyInfo){
    if (!(Array.isArray(propertyInfo.params) && propertyInfo.params.length > 0)) {
      return value
    }
    let retValue
    if (propertyInfo.methode) {
      retValue =[]
      propertyInfo.params.forEach((c,i)=>{
        if (!Array.isArray(value)) {value=[value];}
        retValue.push(this.verifyValue( (value[i]!==undefined&&value[i]!==null)?value[i]:0 , {methode:false,params:[c]} ))
      })
    }else{
      let type = propertyInfo.params[0].type || 'NUMBER'
      let rangeInfo = propertyInfo.params[0].range || []

      switch (type) {
        case 'NUMBER':{
          value = this.verifyType(value,'NUMBER')
          retValue=value
          rangeInfo.some((c)=>{
            if ((c.value !== undefined) && value === c.value) {
              retValue = value
              return true
            }else if(((value>=c.min) && (value<=c.max))||
                      ((value>=c.min) && (c.max===undefined))||
                      ((c.min===undefined) && (value<=c.max)) ) {
              retValue = value
              return true
            }else if( (c.max!==undefined) && (value>c.max) ){
              retValue = c.max
            }else if( (c.min!==undefined)&&(value<c.min)){
              retValue = c.min
            }
          })
          break;
        }
        case 'STRING':{
          value = this.verifyType(value,'STRING')
          retValue=value
          break;
        }
        case 'BOOLEAN':{
          value = this.verifyType(value,'BOOLEAN')
          retValue=false
          break;
        }
        case 'ARRAY_STRING':{
          retValue=[]
          if (Array.isArray(value)) {
            retValue=value.map(c=>this.verifyType(c,'STRING'))
          }
          break;
        }
        case 'ARRAY_NUMBER':{
          retValue=[]
          if (Array.isArray(value)) {
            retValue=value.map(c=>this.verifyType(c,'NUMBER'))
          }
          break;
        }
        case 'ARRAY':{
          retValue=[]
          if (Array.isArray(value)) {retValue=value;}
          break;
        }
        default:
      }
    }
    return retValue;
  },
  processPropertyInfo(propertyInfo){
    let ret ={
      writeable:false,
      type:'NUMBER',
      verifyValue:(value)=>{return this.verifyType(value,'NUMBER')},
      configType:'INPUT',
      viewType:'TEXT',
      guildString:''
    }
    if (!propertyInfo) {return ret;}
    ret.writeable = propertyInfo.writeable
    if (!propertyInfo.methode && Array.isArray(propertyInfo.params) && propertyInfo.params.length === 1) {
      ret.verifyValue=(value)=>{
        return this.verifyValue(value,propertyInfo)
      }
      ret.type = propertyInfo.params[0].type
      let rangeInfo = propertyInfo.params[0].range
      if (rangeInfo) {
        if (rangeInfo.length===2 &&
                rangeInfo[0].value !== undefined &&
                rangeInfo[1].value !== undefined) {
          if (ret.writeable) {ret.configType = 'SWITCH';}
          else{ret.viewType = 'SWITCH';}
          if (rangeInfo[0].name && rangeInfo[1].name) {
            ret.guildString = `${rangeInfo[0].name}/${rangeInfo[1].name}`
          }
        }else if (rangeInfo.length>2 && rangeInfo[0].value){
          if (ret.writeable) {ret.configType = 'SELECT';}
          else{ret.viewType = 'SELECT';}
        }else if(ret.type === 'ARRAY' || ret.type === 'ARRAY_NUMBER' || ret.type === 'ARRAY_STRING'){
          if (ret.writeable) {ret.configType = 'LIST';}
          else{ret.viewType = 'LIST';}
        }else if(rangeInfo[0] && rangeInfo[0].step>0){
          if (ret.writeable) {ret.configType = 'SLIDE';}
          else{ret.viewType = 'SLIDE';}
        }
      }
    }else if(propertyInfo.methode){ // method
      ret.configType = 'ACTIVATE'
      ret.guildString = 'Kích hoạt'
    }
    return ret
  },
  getPropertyValueInfo(value,propertyInfo){
    let ret ={}
    if (!propertyInfo || !propertyInfo.params || propertyInfo.params.length===0) {
      return ret
    }
    value = this.verifyValue(value,propertyInfo)
    if (Array.isArray(propertyInfo.params) && propertyInfo.params.length === 1 ) {
      if (propertyInfo.params[0].range) {
        propertyInfo.params[0].range.some((c)=>{
          if ((c.value !== undefined) && value === c.value) {
            ret = c
            return true
          }else if(((value>=c.min) && (value<=c.max))||
                    ((value>=c.min) && (c.max===undefined))||
                    ((c.min===undefined) && (value<=c.max)) ) {
            ret = c
            return true
          }
        })
      }
    }
    return ret
  },

  getNextPropertyValue(value,propertyInfo){
    let index = -1
    let rangeLength = 0
    let nextIndex = -1
    if (Array.isArray(propertyInfo.params) && propertyInfo.params.length === 1 ) {
      if (propertyInfo.params[0].range) {
        rangeLength = propertyInfo.params[0].range.length
        index = propertyInfo.params[0].range.findIndex((c)=>{
          if ((c.value !== undefined) && value === c.value) {
            return true
          }
        })
        if (index >-1 ) {
          if (index < (rangeLength-1)) {
            nextIndex = index+1
          }else{
            nextIndex = 0
          }
        }
      }
    }
    let nextValue = undefined
    if (nextIndex>-1) {
      nextValue = propertyInfo.params[0].range[nextIndex].value
    }
    return nextValue
  },

  processMessage(message,processFunc){
    let retMessage = message
    let pattern = message.match(/{[^\{\}]+}/gi);
    if (Array.isArray(pattern) ) {
      pattern.forEach((c)=>{
        if (c) {
          let cTemp =c.replace(/[\{\}]/gi,'')
          let element = cTemp.split(':')
          if (element.length===2) {
            retMessage = retMessage.replace(c,processFunc ? processFunc(element[0],element[1]) : element[1] )
          }
        }
      })
    }
    return retMessage
  }
}



export default Util
