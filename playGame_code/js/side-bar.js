"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
        didErr = false,
        err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally {
                if (didErr) throw err;
            }
        }
    };
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    /* function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });*/

    feather.replace();

    (function() { //left
        var sidebar = document.querySelector('.sidebar'),
            sidebar_r = document.querySelector('.right'),
            sidebarBtns = document.querySelectorAll('.sidebar-toggle');

        var _iterator = _createForOfIteratorHelper(sidebarBtns),
            _step;

        try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var sidebarBtn = _step.value;

                if (sidebarBtn && sidebarBtn) {
                    sidebarBtn.addEventListener('click', function() {
                        var _iterator2 = _createForOfIteratorHelper(sidebarBtns),
                            _step2;

                        try {
                            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                var sdbrBtn = _step2.value;
                                sdbrBtn.classList.toggle('rotated');
                            }
                        } catch (err) {
                            _iterator2.e(err);
                        } finally {
                            _iterator2.f();
                        }
                        sidebar.classList.toggle('hidden');
                        sidebar_r.classList.remove('hidden');
                    });
                }
            }
        } catch (err) {
            _iterator.e(err);
        } finally {
            _iterator.f();
        }
    })();

    (function() { //right
        var sidebar_r = document.querySelector('.right'),
            sidebar = document.querySelector('.sidebar'),
            sidebarBtns_r = document.querySelectorAll('.sidebar-toggle-right');

        var _iterator = _createForOfIteratorHelper(sidebarBtns_r),
            _step;

        try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var sidebarBtn_r = _step.value;

                if (sidebarBtn_r && sidebarBtn_r) {
                    sidebarBtn_r.addEventListener('click', function() {
                        var _iterator2 = _createForOfIteratorHelper(sidebarBtns_r),
                            _step2;

                        try {
                            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                var sdbrBtn_r = _step2.value;
                                sdbrBtn_r.classList.toggle('rotated');
                            }
                        } catch (err) {
                            _iterator2.e(err);
                        } finally {
                            _iterator2.f();
                        }

                        sidebar_r.classList.toggle('hidden');
                        sidebar.classList.remove('hidden');
                    });
                }
            }
        } catch (err) {
            _iterator.e(err);
        } finally {
            _iterator.f();
        }
    })();

    (function() {
        var showCatBtns = document.querySelectorAll('.show-cat-btn');

        if (showCatBtns) {
            showCatBtns.forEach(function(showCatBtn) {
                var catSubMenu = showCatBtn.nextElementSibling;
                showCatBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    catSubMenu.classList.toggle('visible');
                    var catBtnToRotate = document.querySelector('.category__btn');
                    catBtnToRotate.classList.toggle('rotated');
                });
            });
        }
    })();
});