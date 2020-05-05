import { Message } from "element-ui";
import _ from "lodash";

export function clone(obj) {
  return obj.deep ? _.cloneDeep(obj.value) : _.clone(obj.value);
}

export function uniqueArr(arr) {
  return [...new Set(arr)];
}

export function createUniqueString() {
  return (+new Date()).toString(32);
  //   const timestamp = +new Date() + "";
  //   const randomNum = parseInt((1 + Math.random()) * 65536) + "";
  //   return (+(randomNum + timestamp)).toString(32);
}

export function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    Message({
      message: "setStorage error",
      type: "error"
    });
    return false;
  }
}

export function getStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    Message({
      message: "getStorage error",
      type: "error"
    });
  }
}

export function setToken(token) {
  setStorage("token", token);
}

export function getToken() {
  return getStorage("token");
}

export class LocalStorage {
  static setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      Message({
        message: "LocalStorage setStorage error",
        type: "error"
      });
      return false;
    }
  }
  static getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      Message({
        message: "LocalStorage getStorage error",
        type: "error"
      });
      return "";
    }
  }
}

export class SessionStorage {
  static setItem(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      Message({
        message: "SessionStorage setStorage error",
        type: "error"
      });
      return false;
    }
  }
  static getItem(key) {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch (error) {
      Message({
        message: "SessionStorage getStorage error",
        type: "error"
      });
      return "";
    }
  }
}
