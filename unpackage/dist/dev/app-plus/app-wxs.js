var __wxsModules={};

__wxsModules.bca0bb86 = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // <stdin>
  var require_stdin = __commonJS({
    "<stdin>"(exports, module) {
      var currentDis = 0;
      var isPCFlag = -1;
      var startY = -1;
      function propObserver(newVal, oldVal, ownerIns, ins) {
        var state = ownerIns.getState() || {};
        state.currentIns = ins;
        var dataset = ins.getDataset();
        var loading = dataset.loading == true;
        if (newVal && newVal.indexOf("end") != -1) {
          var transition = newVal.split("end")[0];
          _setTransform("translateY(0px)", ins, false, transition);
          state.moveDis = 0;
          state.oldMoveDis = 0;
          currentDis = 0;
        } else if (newVal && newVal.indexOf("begin") != -1) {
          var refresherThreshold = ins.getDataset().refresherthreshold;
          _setTransformValue(refresherThreshold, ins, state, false);
        }
      }
      function touchstart(e, ownerIns) {
        var ins = _getIns(ownerIns);
        var state = {};
        var dataset = {};
        ownerIns.callMethod("_handleListTouchstart");
        if (ins) {
          state = ins.getState();
          dataset = ins.getDataset();
          if (_touchDisabled(e, ins, 0))
            return;
        }
        var isTouchEnded = state.isTouchEnded;
        state.oldMoveDis = 0;
        var touch = _getTouch(e);
        var loading = _isTrue(dataset.loading);
        state.startY = touch.touchY;
        startY = state.startY;
        state.lastTouch = touch;
        if (!loading && isTouchEnded) {
          state.isTouchmoving = false;
        }
        state.isTouchEnded = false;
        ownerIns.callMethod("_handleRefresherTouchstart", touch);
      }
      function touchmove(e, ownerIns) {
        var touch = _getTouch(e);
        var ins = _getIns(ownerIns);
        var dataset = ins.getDataset();
        var refresherThreshold = dataset.refresherthreshold;
        var refresherF2Threshold = dataset.refresherf2threshold;
        var refresherF2Enabled = _isTrue(dataset.refresherf2enabled);
        var isIos = _isTrue(dataset.isios);
        var state = ins.getState();
        var watchTouchDirectionChange = _isTrue(dataset.watchtouchdirectionchange);
        var moveDisObj = {};
        var moveDis = 0;
        var prevent = false;
        if (watchTouchDirectionChange) {
          moveDisObj = _getMoveDis(e, ins);
          moveDis = moveDisObj.currentDis;
          prevent = moveDisObj.isDown;
          var direction = prevent ? "top" : "bottom";
          if (prevent == state.oldTouchDirection && prevent != state.oldEmitedTouchDirection) {
            ownerIns.callMethod("_handleTouchDirectionChange", { direction });
            state.oldEmitedTouchDirection = prevent;
          }
          state.oldTouchDirection = prevent;
        }
        if (_touchDisabled(e, ins, 1)) {
          _handlePullingDown(state, ownerIns, false);
          return true;
        }
        if (!_getAngleIsInRange(e, touch, state, dataset)) {
          _handlePullingDown(state, ownerIns, false);
          return true;
        }
        moveDisObj = _getMoveDis(e, ins);
        moveDis = moveDisObj.currentDis;
        prevent = moveDisObj.isDown;
        if (moveDis < 0) {
          _setTransformValue(0, ins, state, false);
          _handlePullingDown(state, ownerIns, false);
          return true;
        }
        if (prevent && !state.disabledBounce) {
          ownerIns.callMethod("_handleScrollViewBounce", { bounce: false });
          state.disabledBounce = true;
          _handlePullingDown(state, ownerIns, prevent);
          return !prevent;
        }
        _setTransformValue(moveDis, ins, state, false);
        var oldRefresherStatus = state.refresherStatus;
        var oldIsTouchmoving = _isTrue(dataset.oldistouchmoving);
        var hasTouchmove = _isTrue(dataset.hastouchmove);
        var isTouchmoving = state.isTouchmoving;
        state.refresherStatus = moveDis >= refresherThreshold ? refresherF2Enabled && moveDis > refresherF2Threshold ? "goF2" : "releaseToRefresh" : "default";
        if (!isTouchmoving) {
          state.isTouchmoving = true;
          isTouchmoving = true;
        }
        if (state.isTouchEnded) {
          state.isTouchEnded = false;
        }
        if (hasTouchmove) {
          ownerIns.callMethod("_handleWxsPullingDown", { moveDis, diffDis: moveDisObj.diffDis });
        }
        if (oldRefresherStatus == void 0 || oldRefresherStatus != state.refresherStatus || oldIsTouchmoving != isTouchmoving) {
          ownerIns.callMethod("_handleRefresherTouchmove", moveDis, touch);
        }
        _handlePullingDown(state, ownerIns, prevent);
        return !prevent;
      }
      function touchend(e, ownerIns) {
        var touch = _getTouch(e);
        var ins = _getIns(ownerIns);
        var dataset = ins.getDataset();
        var state = ins.getState();
        if (state.disabledBounce) {
          ownerIns.callMethod("_handleScrollViewBounce", { bounce: true });
          state.disabledBounce = false;
        }
        if (_touchDisabled(e, ins, 2))
          return;
        state.reachMaxAngle = true;
        state.hitReachMaxAngleCount = 0;
        state.fixedIsTopHitCount = 0;
        if (!state.isTouchmoving)
          return;
        var oldRefresherStatus = state.refresherStatus;
        var oldMoveDis = state.moveDis;
        var refresherThreshold = ins.getDataset().refresherthreshold;
        var moveDis = _getMoveDis(e, ins).currentDis;
        if (!(moveDis >= refresherThreshold && oldRefresherStatus === "releaseToRefresh")) {
          state.isTouchmoving = false;
        }
        ownerIns.callMethod("_handleRefresherTouchend", moveDis);
        state.isTouchEnded = true;
        if (oldMoveDis < refresherThreshold)
          return;
        var animate = false;
        if (moveDis >= refresherThreshold) {
          moveDis = refresherThreshold;
          animate = true;
        }
        _setTransformValue(moveDis, ins, state, animate);
      }
      function isPC() {
        if (!navigator)
          return false;
        if (isPCFlag != -1)
          return isPCFlag;
        var agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        isPCFlag = agents.every(function(item) {
          return navigator.userAgent.indexOf(item) < 0;
        });
        return isPCFlag;
      }
      var movable = false;
      function mousedown(e, ins) {
        if (!isPC())
          return;
        touchstart(e, ins);
        movable = true;
      }
      function mousemove(e, ins) {
        if (!isPC() || !movable)
          return;
        touchmove(e, ins);
      }
      function mouseup(e, ins) {
        if (!isPC())
          return;
        touchend(e, ins);
        movable = false;
      }
      function mouseleave(e, ins) {
        if (!isPC())
          return;
        movable = false;
      }
      function _setTransformValue(value, ins, state, animate) {
        value = value || 0;
        if (state.moveDis == value)
          return;
        state.moveDis = value;
        _setTransform("translateY(" + value + "px)", ins, animate, "");
      }
      function _setTransform(transform, ins, animate, transition) {
        var dataset = ins.getDataset();
        if (_isTrue(dataset.refreshernotransform))
          return;
        transform = transform == "translateY(0px)" ? "none" : transform;
        ins.requestAnimationFrame(function() {
          var stl = { "transform": transform };
          if (animate) {
            stl["transition"] = "transform .1s linear";
          }
          if (transition.length) {
            stl["transition"] = transition;
          }
          ins.setStyle(stl);
        });
      }
      function _getMoveDis(e, ins) {
        var state = ins.getState();
        var refresherThreshold = parseFloat(ins.getDataset().refresherthreshold);
        var refresherOutRate = parseFloat(ins.getDataset().refresheroutrate);
        var refresherPullRate = parseFloat(ins.getDataset().refresherpullrate);
        var touch = _getTouch(e);
        var currentStartY = !state.startY || state.startY == "NaN" ? startY : state.startY;
        var moveDis = touch.touchY - currentStartY;
        var oldMoveDis = state.oldMoveDis || 0;
        state.oldMoveDis = moveDis;
        var diffDis = moveDis - oldMoveDis;
        if (diffDis > 0) {
          diffDis = diffDis * refresherPullRate;
          if (currentDis > refresherThreshold) {
            diffDis = diffDis * (1 - refresherOutRate);
          }
        }
        diffDis = diffDis > 100 ? diffDis / 100 : diffDis > 20 ? diffDis / 2.2 : diffDis;
        currentDis += diffDis;
        currentDis = Math.max(0, currentDis);
        return {
          currentDis,
          diffDis,
          isDown: diffDis > 0
        };
      }
      function _getTouch(e) {
        var touch = e;
        if (e.touches && e.touches.length) {
          touch = e.touches[0];
        } else if (e.changedTouches && e.changedTouches.length) {
          touch = e.changedTouches[0];
        } else if (e.datail && e.datail != {}) {
          touch = e.datail;
        }
        return {
          touchX: touch.clientX,
          touchY: touch.clientY
        };
      }
      function _getIns(ownerIns) {
        var ins = ownerIns.getState().currentIns;
        if (!ins) {
          ownerIns.callMethod("_handlePropUpdate");
        }
        return ins;
      }
      function _touchDisabled(e, ins, processTag) {
        var dataset = ins.getDataset();
        var state = ins.getState();
        var loading = _isTrue(dataset.loading);
        var useChatRecordMode = _isTrue(dataset.usechatrecordmode);
        var refresherEnabled = _isTrue(dataset.refresherenabled);
        var useCustomRefresher = _isTrue(dataset.usecustomrefresher);
        var usePageScroll = _isTrue(dataset.usepagescroll);
        var pageScrollTop = parseFloat(dataset.pagescrolltop);
        var scrollTop = parseFloat(dataset.scrolltop);
        var finalScrollTop = usePageScroll ? pageScrollTop : scrollTop;
        var fixedIsTop = false;
        var handleFaultTolerantMove = false;
        if (handleFaultTolerantMove && finalScrollTop == (state.startScrollTop || 0) && finalScrollTop <= 105) {
          fixedIsTop = true;
        }
        var fixedIsTopHitCount = state.fixedIsTopHitCount || 0;
        if (fixedIsTop) {
          fixedIsTopHitCount++;
          if (fixedIsTopHitCount <= 2) {
            fixedIsTop = false;
          }
          state.fixedIsTopHitCount = fixedIsTopHitCount;
        } else {
          state.fixedIsTopHitCount = 0;
        }
        if (handleFaultTolerantMove && processTag === 0) {
          state.startScrollTop = finalScrollTop || 0;
        }
        if (handleFaultTolerantMove && processTag === 2) {
          fixedIsTop = true;
        }
        return loading || useChatRecordMode || !refresherEnabled || !useCustomRefresher || usePageScroll && useCustomRefresher && pageScrollTop > 5 && !fixedIsTop || !usePageScroll && useCustomRefresher && scrollTop > 5 && !fixedIsTop;
      }
      function _getAngleIsInRange(e, touch, state, dataset) {
        var maxAngle = dataset.refreshermaxangle;
        var refresherAecc = _isTrue(dataset.refresheraecc);
        var lastTouch = state.lastTouch;
        var reachMaxAngle = state.reachMaxAngle;
        var moveDis = state.oldMoveDis;
        if (!lastTouch)
          return true;
        if (maxAngle >= 0 && maxAngle <= 90 && lastTouch) {
          if ((!moveDis || moveDis < 1) && !refresherAecc && reachMaxAngle != null && !reachMaxAngle)
            return false;
          var x = Math.abs(touch.touchX - lastTouch.touchX);
          var y = Math.abs(touch.touchY - lastTouch.touchY);
          var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
          if ((x || y) && x > 1) {
            var angle = Math.asin(y / z) / Math.PI * 180;
            if (angle < maxAngle) {
              var hitReachMaxAngleCount = state.hitReachMaxAngleCount || 0;
              state.hitReachMaxAngleCount = ++hitReachMaxAngleCount;
              if (state.hitReachMaxAngleCount > 2) {
                state.lastTouch = touch;
                state.reachMaxAngle = false;
              }
              return false;
            }
          }
        }
        state.lastTouch = touch;
        return true;
      }
      function _handlePullingDown(state, ins, onPullingDown) {
        var oldOnPullingDown = state.onPullingDown || false;
        if (oldOnPullingDown != onPullingDown) {
          ins.callMethod("_handleWxsPullingDownStatusChange", onPullingDown);
        }
        state.onPullingDown = onPullingDown;
      }
      function _isTrue(value) {
        value = (typeof value === "string" ? JSON.parse(value) : value) || false;
        return value == true || value == "true";
      }
      module.exports = {
        touchstart,
        touchmove,
        touchend,
        mousedown,
        mousemove,
        mouseup,
        mouseleave,
        propObserver
      };
    }
  });
  return require_stdin();
})();