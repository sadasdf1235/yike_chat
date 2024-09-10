"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const queryKey = "Query";
const fetchParamsKey = "FetchParams";
const fetchResultKey = "FetchResult";
const language2LocalKey = "Language2Local";
function handleQuery(callback) {
  _addHandleByKey(queryKey, callback);
  return this;
}
function _handleQuery(pageNo, pageSize, from, lastItem) {
  const callback = _getHandleByKey(queryKey);
  return callback ? callback(pageNo, pageSize, from, lastItem) : [pageNo, pageSize, from];
}
function handleFetchParams(callback) {
  _addHandleByKey(fetchParamsKey, callback);
  return this;
}
function _handleFetchParams(parmas, extraParams) {
  const callback = _getHandleByKey(fetchParamsKey);
  return callback ? callback(parmas, extraParams || {}) : __spreadValues({ pageNo: parmas.pageNo, pageSize: parmas.pageSize }, extraParams || {});
}
function handleFetchResult(callback) {
  _addHandleByKey(fetchResultKey, callback);
  return this;
}
function _handleFetchResult(result, paging, params) {
  const callback = _getHandleByKey(fetchResultKey);
  callback && callback(result, paging, params);
  return callback ? true : false;
}
function handleLanguage2Local(callback) {
  _addHandleByKey(language2LocalKey, callback);
  return this;
}
function _handleLanguage2Local(language, local) {
  const callback = _getHandleByKey(language2LocalKey);
  return callback ? callback(language, local) : local;
}
function _getApp() {
  return getApp();
}
function _hasGlobalData() {
  return _getApp() && _getApp().globalData;
}
function _addHandleByKey(key, callback) {
  try {
    setTimeout(function() {
      if (_hasGlobalData()) {
        _getApp().globalData[`zp_handle${key}Callback`] = callback;
      }
    }, 1);
  } catch (_) {
  }
}
function _getHandleByKey(key) {
  return _hasGlobalData() ? _getApp().globalData[`zp_handle${key}Callback`] : null;
}
const interceptor = {
  handleQuery,
  _handleQuery,
  handleFetchParams,
  _handleFetchParams,
  handleFetchResult,
  _handleFetchResult,
  handleLanguage2Local,
  _handleLanguage2Local
};
exports.interceptor = interceptor;
