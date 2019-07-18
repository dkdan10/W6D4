import DOMNodeCollection from "./dom_node_collection";

// $(() => {
//   const $div = $('.second-div')
//   const div = document.getElementsByClassName('second-div')
//   console.log($div)
//   console.log(div[0])
//   // $div.append('<p>Hello World</p>')
//   div[0].textContent = "Hello World"
// });


const $1 =function (selector) {
  if (typeof selector === 'string'){
    const nodeList = this.document.querySelectorAll(selector);
    // debugger
    // this.console.log(nodeList);
    const htmlArray = Array.from(nodeList);
    const DOMNodeObject = new DOMNodeCollection(htmlArray);
    return DOMNodeObject;    
  }else if (selector instanceof HTMLElement) {
    const arrayOfHtml = [selector];
    const DOMNodeObject = new DOMNodeCollection(arrayOfHtml);
    return DOMNodeObject; 
  }else if(selector instanceof Function){
    const arr = Array.from(arguments);
    document.addEventListener("DOMContentLoaded",() => {
      arr.forEach(fxn => fxn());
    })
  }
  
}

function extend(...objectsAgrs) {
  const realObj = {}
  objectsAgrs.forEach(obj => {
    const keys = Object.keys(obj)
    keys.forEach(key => {
      realObj[key] = obj[key];
    });
  });
  return realObj;
}

function ajax(optionObject) {

  const defaults = {
    method: 'GET',
    url: "https://progress.appacademy.io/me",
    success: (resp)  => console.log(resp),
    error: (e) => console.log(e),
    data: {},
    contentType: "application/x-www-form-urlencoded charset=utf-8"
  }
  const params = extend(defaults, optionObject);

  const xhr = new XMLHttpRequest();
  xhr.open(params.method, params.url);

  xhr.onload = function () {
    if (xhr.status === 200) { // for status info
      params.success(xhr.response) //RESPONE
    } else {
      params.error(xhr.response)
    }
    // console.log(xhr.responseType) //the type of data that was returned
  }
  xhr.send(params.data);
}

window.$1 = $1;
window.$1.extend = extend;
window.$1.ajax = ajax;

const objA = { a: 'a', b: 'a', c: 'a' };
const objB = { b: 'b', c: 'b' };
const objC = { c: 'c' };
// $l.extend(objA, objB, objC); //=> {a: 'a', b: 'b', c: 'c'}
// objA //=> {a: 'a', b: 'b', c: 'c'}