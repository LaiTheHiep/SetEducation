import routes from '../routes'

export const FilterID = (item) => {
  var strJSON = JSON.stringify(item);
    var patt = /"_id":"(.*?)",/gm;
    var list_id = strJSON.match(patt);
    if(list_id != null){
      list_id.forEach(e => {
        strJSON = strJSON.replace(e, "")
      })
    }
    var valueJSON = JSON.parse(strJSON);
    return valueJSON;
}

export const convertDate = (time) => {
  if(time == undefined || time == null)
    return "";
  
  var ls = time.split('T');
  if(ls == undefined || ls == null || ls.length == 0)
    return time;
  
  var result = "";
  var date = ls[0].split('-');
  var t = ls[1].split('.');
  result = `${date[2]}/${date[1]}/${date[0]} - ${t[0]}`;
  return result;
}

export const getIdByLink = () => {
  try {
    var arr = window.location.href.split('/');
    var pathID = `/${arr[arr.length - 1]}`;
    var idItem = routes.find(e => e.path === pathID);
    if (idItem) {
      return null;
    } else {
      return arr[arr.length - 1];
    }
  }
  catch (e) {
    console.log(e)
  }
}

export const changeIdToLink = (id) => {
  var arr = window.location.href.split('/');
  if (arr[arr.length - 1] === "") {
    let temp = routes.find(e => e.path === "/" + arr[arr.length - 2]);
    if (temp == undefined) {
      window.location.href = window.location.href + id;
    } else {
      window.location.href = window.location.href.replace(arr[arr.length - 1] + "/", id);
    }
  } 
  else {
    let temp = routes.find(e => e.path === "/" + arr[arr.length - 2]);
    if (temp == undefined) {
      window.location.href = window.location.href + "/" + id;
    } else {
      window.location.href = window.location.href.replace(arr[arr.length - 1], id);
    }
  }
}

export const resetLink = () => {
  var idItem = getIdByLink();
  if(idItem != null){
    window.location.href = window.location.href.replace(`/${idItem}`, "");
  }
  window.location.reload();
}

export const openNewLink = (newLink) => {
  window.open(window.location.origin + newLink)
}