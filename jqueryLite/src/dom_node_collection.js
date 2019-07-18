export default class DOMNodeCollection{
  constructor(htmlArray){
    this.htmlArray = htmlArray;
  }

  html(string){
    if (typeof string === 'string') {
      this.htmlArray.forEach(htmlEl => {
        htmlEl.innerHTML = string;
      });
    }else{
      return this.htmlArray[0].innerHTML;
    }
  }

  empty(){
    this.html("");
    // this.htmlArray.forEach(htmlEl => {
    //   htmlEl.html = "";
    // });
  }

  append(element){
    let thingToAppend = ""
    // FIND WHAT TO APPEND
    if (element instanceof DOMNodeCollection) {
      element.htmlArray.forEach(htmlEl => {
        thingToAppend += htmlEl.outerHTML;
      });
    } else if (element instanceof HTMLElement) {
      thingToAppend += element.outerHTML;
    } else if (typeof element === 'string') {
      thingToAppend += element
    }
    // APPEND TO OUR HTML ARRAY
    this.htmlArray.forEach(htmlEl => {
      htmlEl.innerHTML += thingToAppend;
    })
  }

  addClass (className) {
    this.htmlArray.forEach(htmlEl => {
      htmlEl.classList.add(className);
    });
  }
  
  attr (attrName, attrValue) {
    if (attrValue === undefined) {
      return this.htmlArray[0].getAttribute(attrName);
    } else {
      this.htmlArray.forEach(htmlEl => {
        htmlEl.setAttribute(attrName, attrValue)
      })
    }
  }


  removeClass (className) {
    this.htmlArray.forEach(htmlEl => {
      htmlEl.classList.remove(className);
    });
  }

  children(){
    let allChildren = [];
    this.htmlArray.forEach(htmlEl => {
       allChildren = allChildren.concat(Array.from(htmlEl.children))
    })
    return new DOMNodeCollection(allChildren);
  }

  parent(){
    let allParents = [];
    this.htmlArray.forEach(htmlEl => {
      allParents.push(htmlEl.parentElement);
    })
    return new DOMNodeCollection(allParents);
  }

  find(selector){
    let found = [];
    this.htmlArray.forEach(htmlEl => {
      found = found.concat(Array.from(htmlEl.querySelectorAll(selector)));
    })
    return new DOMNodeCollection(found);
  }

  remove(){
    this.htmlArray.forEach(htmlEl => {
      htmlEl.outerHTML = "";
    })
  }

  on(eventString, cb){
    this.htmlArray.forEach(htmlEl => {
      htmlEl.addEventListener(eventString, cb);
      htmlEl[eventString] = cb;
    });
  }

  off(eventString){
    this.htmlArray.forEach(htmlEl => {
      htmlEl.removeEventListener(eventString, htmlEl[eventString]);
      htmlEl[eventString] = null;
    })
  }

}