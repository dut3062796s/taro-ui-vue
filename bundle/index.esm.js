import Taro$1 from '@tarojs/taro';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _classnames_2_2_6_classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var ActionSheetBody = {
  name: 'AtActionSheetBody',
  props: {
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-action-sheet__body', this.className);
    return h("view", {
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var ActionSheetFooter = {
  name: 'AtActionSheetFooter',
  props: {
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  methds: {
    handleClick: function handleClick(e) {
      this.onClick && this.onClick(e);
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-action-sheet__footer', this.className);
    return h("view", {
      "on": {
        "tap": this.handleClick
      },
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var ActionSheetHeader = {
  name: 'AtActionSheetHeader',
  props: {
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-action-sheet__header', this.className);
    return h("view", {
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var index = {
  name: 'AtActionSheet',
  props: {
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onCancel: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  data: function data() {
    return {
      show: this.isOpened
    };
  },
  watch: {
    isOpened: function isOpened(val) {
      this.show = val;
      !val && this.handleClose();
    }
  },
  methods: {
    handleClose: function handleClose() {
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    },
    handleCancel: function handleCancel() {
      if (typeof this.onCancel === 'function') {
        return this.onCancel();
      }

      this.close();
    },
    close: function close() {
      this.show = false;
    },
    handleTouchMove: function handleTouchMove(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  },
  render: function render() {
    var h = arguments[0];
    var title = this.title,
        cancelText = this.cancelText,
        className = this.className;
    var show = this.show;
    var rootClass = _classnames_2_2_6_classnames('at-action-sheet', {
      'at-action-sheet--active': show
    }, className);
    return h("view", {
      "class": rootClass,
      "on": {
        "touchMove": this.handleTouchMove
      }
    }, [h("view", {
      "on": {
        "tap": this.close
      },
      "class": "at-action-sheet__overlay"
    }), h("view", {
      "class": "at-action-sheet__container"
    }, [title && h(ActionSheetHeader, [title]), h(ActionSheetBody, [this.$slots.default]), cancelText && h(ActionSheetFooter, {
      "on": {
        "tap": this.handleCancel
      }
    }, [cancelText])])]);
  }
};

var index$1 = {
  name: 'AtActionSheetItem',
  props: {
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      this.onClick && this.onClick(e);
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-action-sheet__item', this.className);
    return h("view", {
      "class": rootClass,
      "on": {
        "tap": this.handleClick
      }
    }, [this.$slots.default]);
  }
};

var Loading = {
  name: 'AtLoading',
  props: {
    size: {
      type: [String, Number],
      default: 0
    },
    color: {
      type: [String, Number],
      default: ''
    }
  },
  render: function render() {
    var h = arguments[0];
    var color = this.color,
        size = this.size;
    var loadingSize = typeof size === 'string' ? size : String(size);
    var sizeStyle = {
      width: size ? "".concat(Taro.pxTransform(parseInt(loadingSize))) : '',
      height: size ? "".concat(Taro.pxTransform(parseInt(loadingSize))) : ''
    };
    var colorStyle = {
      border: color ? "1px solid ".concat(color) : '',
      'border-color': color ? "".concat(color, " transparent transparent transparent") : ''
    };
    var ringStyle = Object.assign({}, colorStyle, sizeStyle);
    return h("view", {
      "class": "at-loading",
      "style": sizeStyle
    }, [h("view", {
      "class": "at-loading__ring",
      "style": ringStyle
    }), h("view", {
      "class": "at-loading__ring",
      "style": ringStyle
    }), h("view", {
      "class": "at-loading__ring",
      "style": ringStyle
    })]);
  }
};

var AtActivityIndicator = {
  name: 'AtActivityIndicator',
  props: {
    size: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'normal'
    },
    color: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    isOpened: {
      type: Boolean,
      default: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var color = this.color,
        size = this.size,
        mode = this.mode,
        content = this.content,
        isOpened = this.isOpened,
        className = this.className;
    var rootClass = _classnames_2_2_6_classnames('at-activity-indicator', {
      'at-activity-indicator--center': mode === 'center',
      'at-activity-indicator--isopened': isOpened
    }, className);
    return h("view", {
      "class": rootClass
    }, [h("view", {
      "class": "at-activity-indicator__body"
    }, [h(Loading, {
      "attrs": {
        "size": size,
        "color": color
      }
    })]), content && h("view", {
      "class": "at-activity-indicator__content"
    }, [content])]);
  }
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small'
};
var index$2 = {
  name: 'AtAvatar',
  props: {
    size: {
      type: String,
      default: 'normal',
      validator: function validator(val) {
        return ['large', 'normal', 'small'].includes(val);
      }
    },
    circle: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    openData: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    customStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render(h) {
    var _classObject;

    var size = this.size,
        circle = this.circle,
        image = this.image,
        text = this.text,
        openData = this.openData,
        customStyle = this.customStyle,
        className = this.className;
    var rootClassName = ['at-avatar'];
    var iconSize = SIZE_CLASS[size || 'normal'];
    var classObject = (_classObject = {}, _defineProperty(_classObject, "at-avatar--".concat(iconSize), iconSize), _defineProperty(_classObject, 'at-avatar--circle', circle), _classObject);
    var letter = '';
    if (text) letter = text[0];
    var isOpenData = openData && openData.type === 'userAvatarUrl' && this.$isWEAPP();
    var isImage = !isOpenData && image !== '';
    var isText = !isOpenData && !image;
    return h("view", {
      "class": _classnames_2_2_6_classnames(rootClassName, classObject, className),
      "style": customStyle
    }, [isOpenData && h("OpenData", {
      "attrs": {
        "type": openData.type
      }
    }), isImage && h("image", {
      "class": "at-avatar__img",
      "attrs": {
        "src": image
      }
    }), isText && h("view", {
      "class": "at-avatar__text"
    }, [letter])]);
  }
};

/**
 * formatValue
 * @param {string | number | undefined} value
 * @param {number} maxValue
 * @return string | number
 */

var formatValue = function formatValue(value, maxValue) {
  if (value === '' || value === null || value === undefined) return '';
  var numValue = +value;

  if (Number.isNaN(numValue)) {
    return value;
  }

  return numValue > maxValue ? "".concat(maxValue, "+") : numValue;
};

var Badge = {
  name: 'AtBadge',
  props: {
    dot: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    },
    maxValue: {
      type: Number,
      default: 99
    },
    customStyle: {
      type: [String, Object],
      default: function _default() {}
    },
    className: {
      type: [String, Array],
      default: ''
    }
  },
  render: function render() {
    var h = arguments[0];
    var dot = this.dot,
        customStyle = this.customStyle,
        className = this.className,
        maxValue = this.maxValue,
        value = this.value;
    var rootClassName = ['at-badge'];
    var val = formatValue(value, maxValue);
    return h("view", {
      "class": _classnames_2_2_6_classnames(rootClassName, className),
      "style": customStyle
    }, [this.$slots.default, dot ? h("view", {
      "class": "at-badge__dot"
    }) : val !== '' && h("view", {
      "class": "at-badge__num"
    }, [val])]);
  }
};

var getEnv = Taro$1.getEnv,
    ENV_TYPE = Taro$1.ENV_TYPE;
var env = getEnv();
var SIZE_CLASS$1 = {
  normal: 'normal',
  small: 'small'
};
var TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary'
};
var Button = {
  name: 'AtButton',
  components: {
    Loading: Loading
  },
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    type: {
      type: String,
      default: undefined
    },
    circle: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    className: {
      type: [Object, String],
      default: function _default() {}
    },
    formType: {
      type: String,
      default: undefined
    },
    openType: {
      type: String,
      default: undefined
    },
    lang: {
      type: String,
      default: 'en'
    },
    sessionFrom: {
      type: String,
      default: ''
    },
    sendMessageTitle: {
      type: String,
      default: ''
    },
    sendMessagePath: {
      type: String,
      default: ''
    },
    sendMessageImg: {
      type: String,
      default: ''
    },
    showMessageCard: {
      type: Boolean,
      default: false
    },
    appParameter: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: function _default() {}
    },
    onGetUserInfo: {
      type: Function,
      default: function _default() {}
    },
    onContact: {
      type: Function,
      default: function _default() {}
    },
    onGetPhoneNumber: {
      type: Function,
      default: function _default() {}
    },
    onError: {
      type: Function,
      default: function _default() {}
    },
    onOpenSetting: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      isWEB: env === ENV_TYPE.WEB,
      isWEAPP: env === ENV_TYPE.WEAPP,
      isALIPAY: env === ENV_TYPE.ALIPAY
    };
  },
  mounted: function mounted() {
    console.log('this.onGetPhoneNumber', this.onGetPhoneNumber);
  },
  methods: {
    hanldeClick: function hanldeClick(event) {
      if (!this.disabled) {
        this.onClick && this.onClick(event);
      }
    },
    handleGetUserInfo: function handleGetUserInfo(event) {
      this.onGetUserInfo && this.onGetUserInfo(event);
    },
    handleGetPhoneNumber: function handleGetPhoneNumber(event) {
      this.onGetPhoneNumber && this.onGetPhoneNumber(event);
    },
    handleOpenSetting: function handleOpenSetting(event) {
      this.onOpenSetting && this.onOpenSetting(event);
    },
    handleError: function handleError(event) {
      this.onError && this.onError(event);
    },
    handleContact: function handleContact(event) {
      this.onContact && this.onContact(event);
    },
    handleSubmit: function handleSubmit(event) {
      if (this.isWEAPP || this.isWEB) {
        this.$scope.triggerEvent('submit', event.detail, {
          bubbles: true,
          composed: true
        });
      }
    },
    handleReset: function handleReset(event) {
      if (this.isWEAPP || this.isWEB) {
        this.$scope.triggerEvent('reset', event.detail, {
          bubbles: true,
          composed: true
        });
      }
    }
  },
  render: function render() {
    var _classObject;

    var h = arguments[0];
    // props
    var _this$size = this.size,
        size = _this$size === void 0 ? 'normal' : _this$size,
        _this$type = this.type,
        type = _this$type === void 0 ? '' : _this$type,
        circle = this.circle,
        full = this.full,
        loading = this.loading,
        disabled = this.disabled,
        customStyle = this.customStyle,
        className = this.className,
        formType = this.formType,
        openType = this.openType,
        lang = this.lang,
        sessionFrom = this.sessionFrom,
        sendMessageTitle = this.sendMessageTitle,
        sendMessagePath = this.sendMessagePath,
        sendMessageImg = this.sendMessageImg,
        showMessageCard = this.showMessageCard,
        appParameter = this.appParameter; // data

    var isWEB = this.isWEB,
        isWEAPP = this.isWEAPP,
        isALIPAY = this.isALIPAY;
    var rootClassName = ['at-button'];
    var classObject = (_classObject = {}, _defineProperty(_classObject, "at-button--".concat(SIZE_CLASS$1[size]), SIZE_CLASS$1[size]), _defineProperty(_classObject, 'at-button--disabled', disabled), _defineProperty(_classObject, "at-button--".concat(type), TYPE_CLASS[type]), _defineProperty(_classObject, 'at-button--circle', circle), _defineProperty(_classObject, 'at-button--full', full), _classObject);
    var loadingColor = type === 'primary' ? '#fff' : '';
    var loadingSize = size === 'small' ? '30' : 0;

    if (loading) {
      rootClassName.push('at-button--icon');
    }

    var webButton = h("button", {
      "attrs": {
        "className": "at-button__wxbutton",
        "lang": lang,
        "formType": formType === 'submit' || formType === 'reset' ? formType : undefined
      }
    });
    var button = h("button", {
      "attrs": {
        "className": "at-button__wxbutton",
        "formType": formType,
        "openType": openType,
        "lang": lang,
        "sessionFrom": sessionFrom,
        "sendMessageTitle": sendMessageTitle,
        "sendMessagePath": sendMessagePath,
        "sendMessageImg": sendMessageImg,
        "showMessageCard": showMessageCard,
        "appParameter": appParameter
      },
      "on": {
        "getUserInfo": this.handleGetUserInfo,
        "getPhoneNumber": this.hanldeGetPhoneNumber,
        "openSetting": this.hanldeSetting,
        "error": this.hanldeError,
        "contact": this.hanldeContact
      }
    });
    return h("view", {
      "on": {
        "tap": this.hanldeClick
      },
      "class": _classnames_2_2_6_classnames(rootClassName, classObject, className),
      "style": customStyle
    }, [isWEB && !disabled && webButton, isWEAPP && !disabled && h("form", {
      "on": {
        "submit": this.handleSubmit,
        "reset": this.handleReset
      }
    }, [button]), isALIPAY && !disabled && button, loading && h("view", {
      "class": "at-button__icon"
    }, [h(Loading, {
      "attrs": {
        "color": loadingColor,
        "size": loadingSize
      }
    })]), h("view", {
      "class": "at-button__text"
    }, [this.$slots.default])]);
  }
};

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var index$3 = {
  name: 'AtCard',
  props: {
    note: {
      type: String,
      default: ''
    },
    isFull: {
      type: Boolean,
      default: false
    },
    thumb: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extra: {
      type: String,
      default: ''
    },
    icon: {
      type: Object,
      default: function _default() {}
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    renderIcon: {
      type: String,
      default: ''
    },
    extraStyle: {
      type: Object,
      default: function _default() {}
    },
    className: {
      type: [String, Array],
      default: ''
    }
  },
  methods: {
    handleClick: function handleClick(args) {
      if (typeof this.onClick === 'function') {
        this.onClick(args);
      }
    }
  },
  render: function render() {
    var _classNames;

    var h = arguments[0];
    var title = this.title,
        note = this.note,
        extra = this.extra,
        extraStyle = this.extraStyle,
        thumb = this.thumb,
        isFull = this.isFull,
        icon = this.icon,
        renderIcon = this.renderIcon;
    var rootClass = _classnames_2_2_6_classnames('at-card', {
      'at-card--full': isFull
    }, this.className);
    var iconClass = _classnames_2_2_6_classnames((_classNames = {
      'at-icon': true
    }, _defineProperty(_classNames, "at-icon-".concat(icon && icon.value), icon && icon.value), _defineProperty(_classNames, 'at-card__header-icon', true), _classNames));
    var iconStyle = {
      color: icon && icon.color || '',
      fontSize: icon && "".concat(icon.size, "px") || ''
    };
    return h("view", {
      "on": {
        "click": this.handleClick
      },
      "class": rootClass
    }, [h("view", {
      "class": "at-card__header"
    }, [thumb && h("view", {
      "class": "at-card__header-thumb"
    }, [h("image", {
      "class": "at-card__header-thumb-info",
      "attrs": {
        "mode": "scaleToFill",
        "src": thumb
      }
    })]), renderIcon || this.$slots.renderIcon || '', !thumb && icon && icon.value && h("view", {
      "class": iconClass,
      "style": iconStyle
    }), h("view", {
      "class": "at-card__header-title"
    }, [title]), extra && h("view", {
      "style": _objectSpread2({}, extraStyle),
      "class": "at-card__header-extra"
    }, [extra])]), h("view", {
      "class": "at-card__content"
    }, [h("view", {
      "class": "at-card__content-info"
    }, [this.$slots.default]), note && h("view", {
      "class": "at-card__content-note"
    }, [note])])]);
  }
};

var mixins = {
    methods: {
        setState: function (newState, fn) {
            var _this = this;
            var ks = Object.keys(newState);
            if (Array.isArray(ks)) {
                ks.forEach(function (k) {
                    if (k in _this.state) {
                        _this.state[k] = newState[k];
                    }
                });
            }
            this.$nextTick(function () {
                typeof fn === 'function' && fn.call(_this);
            });
        },
    },
};

var getEnv$1 = Taro$1.getEnv, ENV_TYPE$1 = Taro$1.ENV_TYPE;
var ENV = Taro$1.getEnv();
var getEnvs = function () {
    var env = getEnv$1();
    return {
        isWEAPP: env === ENV_TYPE$1.WEAPP,
        isALIPAY: env === ENV_TYPE$1.ALIPAY,
        isWEB: env === ENV_TYPE$1.WEB,
    };
};
function delay(delayTime) {
    if (delayTime === void 0) { delayTime = 500; }
    return new Promise(function (resolve) {
        if ([Taro$1.ENV_TYPE.WEB, Taro$1.ENV_TYPE.SWAN].includes(ENV)) {
            setTimeout(function () {
                resolve();
            }, delayTime);
            return;
        }
        resolve();
    });
}
function delayGetScrollOffset(_a) {
    var _b = _a.delayTime, delayTime = _b === void 0 ? 500 : _b;
    return new Promise(function (resolve) {
        delay(delayTime).then(function () {
            Taro$1.createSelectorQuery()
                .selectViewport()
                .scrollOffset()
                .exec(function (res) {
                resolve(res);
            });
        });
    });
}
function delayGetClientRect(_a) {
    var _ = _a._, selectorStr = _a.selectorStr, _b = _a.delayTime, delayTime = _b === void 0 ? 500 : _b;
    var selector = Taro$1.createSelectorQuery();
    return new Promise(function (resolve) {
        delay(delayTime).then(function () {
            selector
                .select(selectorStr)
                .boundingClientRect()
                .exec(function (res) {
                resolve(res);
            });
        });
    });
}
function delayQuerySelector(_, selectorStr, delayTime) {
    if (delayTime === void 0) { delayTime = 500; }
    var selector = Taro$1.createSelectorQuery();
    return new Promise(function (resolve) {
        delay(delayTime).then(function () {
            selector
                .select(selectorStr)
                .boundingClientRect()
                .exec(function (res) {
                resolve(res);
            });
        });
    });
}
function uuid(len, radix) {
    if (len === void 0) { len = 8; }
    if (radix === void 0) { radix = 16; }
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var value = [];
    var i = 0;
    radix = radix || chars.length;
    if (len) {
        // Compact form
        for (i = 0; i < len; i++)
            value[i] = chars[0 | (Math.random() * radix)];
    }
    else {
        // rfc4122, version 4 form
        var r 
        // rfc4122 requires these characters
        /* eslint-disable-next-line */
        = void 0;
        // rfc4122 requires these characters
        /* eslint-disable-next-line */
        value[8] = value[13] = value[18] = value[23] = '-';
        value[14] = '4';
        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!value[i]) {
                r = 0 | (Math.random() * 16);
                value[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return value.join('');
}
function isTest() {
    return process.env.NODE_ENV === 'test';
}
var scrollTop = 0;
function handleTouchScroll(flag) {
    if (ENV !== Taro$1.ENV_TYPE.WEB) {
        return;
    }
    if (flag) {
        scrollTop = document.documentElement.scrollTop;
        // 使body脱离文档流
        document.body.classList.add('at-frozen');
        // 把脱离文档流的body拉上去！否则页面会回到顶部！
        document.body.style.top = -scrollTop + "px";
    }
    else {
        document.body.style.top = '';
        document.body.classList.remove('at-frozen');
        document.documentElement.scrollTop = scrollTop;
    }
}
function pxTransform(size) {
    if (!size)
        return '';
    return Taro$1.pxTransform(size);
}

var index$4 = {
  name: 'AtFloatLayout',
  mixins: [mixins],
  props: {
    title: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollWithAnimation: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onScroll: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onScrollToLower: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onScrollToUpper: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    },
    upperThreshold: {
      type: Number,
      default: 0
    },
    lowerThreshold: {
      type: Number,
      default: 0
    },
    className: {
      type: [String, Array],
      default: ''
    }
  },
  data: function data() {
    var isOpened = this.isOpened;
    return {
      state: {
        _isOpened: isOpened
      }
    };
  },
  watch: {
    isOpened: function isOpened(val, oldVal) {
      if (val !== oldVal) {
        handleTouchScroll(val);
      }

      if (val !== this.state._isOpened) {
        this.setState({
          _isOpened: val
        });
      }
    }
  },
  methods: {
    handleClose: function handleClose() {
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    },
    close: function close() {
      this.setState({
        _isOpened: false
      }, this.handleClose);
    },

    /**
     *
     * @param {event} e
     */
    handleTouchMove: function handleTouchMove(e) {
      e.stopPropagation();
    }
  },
  render: function render() {
    var h = arguments[0];
    var _isOpened = this.state._isOpened;
    var title = this.title,
        scrollY = this.scrollY,
        scrollX = this.scrollX,
        scrollTop = this.scrollTop,
        scrollLeft = this.scrollLeft,
        upperThreshold = this.upperThreshold,
        lowerThreshold = this.lowerThreshold,
        scrollWithAnimation = this.scrollWithAnimation;
    var rootClass = _classnames_2_2_6_classnames('at-float-layout', {
      'at-float-layout--active': _isOpened
    }, this.className);
    return h("view", {
      "class": rootClass,
      "on": {
        "touchMove": this.handleTouchMove
      }
    }, [h("view", {
      "on": {
        "tap": this.close
      },
      "class": "at-float-layout__overlay"
    }), h("view", {
      "class": "at-float-layout__container layout"
    }, [title ? h("view", {
      "class": "layout-header"
    }, [h("view", {
      "class": "layout-header__title"
    }, [title]), h("view", {
      "class": "layout-header__btn-close",
      "on": {
        "tap": this.close
      }
    })]) : null, h("view", {
      "class": "layout-body"
    }, [h("scroll-view", {
      "attrs": {
        "scrollY": scrollY,
        "scrollX": scrollX,
        "scrollTop": scrollTop,
        "scrollLeft": scrollLeft,
        "upperThreshold": upperThreshold,
        "lowerThreshold": lowerThreshold,
        "scrollWithAnimation": scrollWithAnimation
      },
      "on": {
        "scroll": this.onScroll,
        "scrollToLower": this.onScrollToLower,
        "scrollToUpper": this.onScrollToUpper
      },
      "class": "layout-body__content"
    }, [this.$slots.default])])])]);
  }
};

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? _isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger_1(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = _baseSlice(array, index, (index += size));
  }
  return result;
}

var chunk_1 = chunk;

var index$5 = {
  name: 'AtGrid',
  props: {
    mode: {
      type: String,
      default: 'square',
      validator: function validator(val) {
        return ['rect', 'square'].includes(val);
      }
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    columnNum: {
      type: Number,
      default: 3
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    className: {
      type: [Object, String],
      default: ''
    }
  },
  methods: {
    /**
     *
     * @param {AtGridItem} item
     * @param {number} index
     * @param {number} row
     * @param {event} event
     */
    handleClick: function handleClick(item, index, row, event) {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          columnNum = _this$props.columnNum;

      if (typeof onClick === 'function') {
        var clickIndex = row * columnNum + index;
        onClick(item, clickIndex, event);
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var data = this.data,
        mode = this.mode,
        columnNum = this.columnNum,
        hasBorder = this.hasBorder;

    if (Array.isArray(data) && data.length === 0) {
      return null;
    }

    var gridGroup = chunk_1(data, columnNum);

    var bodyClass = _classnames_2_2_6_classnames(['at-grid__flex-item', 'at-grid-item', "at-grid-item--".concat(mode)], {
      'at-grid-item--no-border': !hasBorder
    });
    return h("view", {
      "class": _classnames_2_2_6_classnames('at-grid', this.className)
    }, [gridGroup.map(function (item, i) {
      return h("view", {
        "class": "at-grid__flex",
        "key": "at-grid-group-".concat(i)
      }, [item.map(function (childItem, index) {
        return h("view", {
          "key": "at-grid-item-".concat(index),
          "class": _classnames_2_2_6_classnames(bodyClass, {
            'at-grid-item--last': index === columnNum - 1
          }),
          "on": {
            "click": _this.handleClick.bind(_this, childItem, index, i)
          },
          "style": {
            flex: "0 0 ".concat(100 / columnNum, "%")
          }
        }, [h("view", {
          "class": "at-grid-item__content"
        }, [h("view", {
          "class": "at-grid-item__content-inner"
        }, [h("view", {
          "class": "content-inner__icon"
        }, [childItem.image && h("image", {
          "class": "content-inner__img",
          "attrs": {
            "src": childItem.image,
            "mode": "scaleToFill"
          }
        }), childItem.iconInfo && !childItem.image && h("view", {
          "class": _classnames_2_2_6_classnames(childItem.iconInfo.prefixClass || 'at-icon', _defineProperty({}, "".concat(childItem.iconInfo.prefixClass || 'at-icon', "-").concat(childItem.iconInfo.value), childItem.iconInfo.value), childItem.iconInfo.className),
          "style": _this.$mergeStyle({
            color: childItem.iconInfo.color,
            fontSize: "".concat(childItem.iconInfo.size || 24, "px")
          }, childItem.iconInfo.customStyle)
        })]), h("view", {
          "class": "content-inner__text"
        }, [childItem.value])])])]);
      })]);
    })]);
  }
};

var index$6 = {
  name: 'AtIcon',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    },
    prefixClass: {
      type: String,
      default: 'at-icon'
    },
    value: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number],
      default: ''
    },
    handleClick: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    handleTab: function handleTab(event) {
      this.handleClick && this.handleClick(event);
    }
  },
  render: function render() {
    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        prefixClass = this.prefixClass,
        value = this.value,
        size = this.size,
        color = this.color;
    var rootStyle = {
      fontSize: "".concat(Taro$1.pxTransform(parseInt(String(size)) * 2)),
      color: color
    };
    var iconName = value ? "".concat(prefixClass, "-").concat(value) : '';
    return h("view", {
      "class": _classnames_2_2_6_classnames(prefixClass, iconName, className),
      "style": this.$mergeStyle(rootStyle, customStyle),
      "on": {
        "tab": this.handleTab
      }
    });
  }
};

var AtList = {
  name: 'AtList',
  props: {
    hasBorder: {
      type: Boolean,
      default: true
    },
    className: {
      type: [Array, String],
      default: ''
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-list', {
      'at-list--no-border': !this.hasBorder
    }, this.className);
    return h("view", {
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var AtListItem = {
  name: 'AtListItem',
  props: {
    className: {
      type: [Array, String],
      default: ''
    },
    note: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    thumb: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    isSwitch: {
      type: Boolean,
      default: false
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    switchColor: {
      type: String,
      default: '#6190E8'
    },
    switchIsCheck: {
      type: Boolean,
      default: false
    },
    extraText: {
      type: String,
      default: ''
    },
    extraThumb: {
      type: String,
      default: ''
    },
    iconInfo: {
      type: Object,
      default: function _default() {
        return {
          value: ''
        };
      }
    },
    onSwitchChange: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    arrow: {
      type: String,
      default: 'up',
      validator: function validator(val) {
        return ['up', 'down', 'right'].includes(val);
      }
    }
  },
  methods: {
    /**
     *
     * @param {event} event
     */
    handleClick: function handleClick(event) {
      if (typeof this.onClick === 'function' && !this.disabled) {
        this.onClick(event);
      }
    },

    /**
     *
     * @param {event} event
     */
    handleSwitchClick: function handleSwitchClick(evente) {
      event.stopPropagation();
    },

    /**
     *
     * @param {event} event
     */
    handleSwitchChange: function handleSwitchChange(event) {
      if (typeof this.onSwitchChange === 'function' && !this.disabled) {
        this.onSwitchChange(event);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var note = this.note,
        arrow = this.arrow,
        thumb = this.thumb,
        iconInfo = this.iconInfo,
        disabled = this.disabled,
        isSwitch = this.isSwitch,
        hasBorder = this.hasBorder,
        extraThumb = this.extraThumb,
        switchColor = this.switchColor,
        switchIsCheck = this.switchIsCheck;
    var extraText = this.extraText,
        title = this.title;
    extraText = String(extraText);
    title = String(title);
    var rootClass = _classnames_2_2_6_classnames('at-list__item', {
      'at-list__item--thumb': thumb,
      'at-list__item--multiple': note,
      'at-list__item--disabled': disabled,
      'at-list__item--no-border': !hasBorder
    }, this.className);
    var iconClass = _classnames_2_2_6_classnames(iconInfo.prefixClass || 'at-icon', _defineProperty({}, "".concat(iconInfo.prefixClass || 'at-icon', "-").concat(iconInfo.value), iconInfo.value), iconInfo.className);
    return h("view", {
      "class": rootClass,
      "on": {
        "tap": this.handleClick
      }
    }, [h("view", {
      "class": "at-list__item-container"
    }, [thumb && h("view", {
      "class": "at-list__item-thumb item-thumb"
    }, [h("image", {
      "class": "item-thumb__info",
      "attrs": {
        "mode": "scaleToFill",
        "src": thumb
      }
    })]), iconInfo.value && h("view", {
      "class": "at-list__item-icon item-icon"
    }, [h("view", {
      "class": iconClass,
      "style": this.mergeStyle({
        color: iconInfo.color || '',
        fontSize: "".concat(iconInfo.size || 24, "px")
      }, iconInfo.customStyle)
    })]), h("view", {
      "class": "at-list__item-content item-content"
    }, [h("view", {
      "class": "item-content__info"
    }, [h("view", {
      "class": "item-content__info-title"
    }, [title]), note && h("view", {
      "class": "item-content__info-note"
    }, [note])])]), h("view", {
      "class": "at-list__item-extra item-extra"
    }, [extraText && h("view", {
      "class": "item-extra__info"
    }, [extraText]), extraThumb && !extraText && h("view", {
      "class": "item-extra__image"
    }, [h("image", {
      "class": "item-extra__image-info",
      "attrs": {
        "mode": "aspectFit",
        "src": extraThumb
      }
    })]), isSwitch && !extraThumb && !extraText && h("view", {
      "class": "item-extra__switch",
      "on": {
        "tap": this.handleSwitchClick
      }
    }, [h("switch", {
      "attrs": {
        "color": switchColor,
        "disabled": disabled,
        "checked": switchIsCheck
      },
      "on": {
        "change": this.handleSwitchChange
      }
    })]), arrow ? h("view", {
      "class": "item-extra__icon"
    }, [h("view", {
      "class": "at-icon item-extra__icon-arrow at-icon-chevron-".concat(arrow)
    })]) : null])])]);
  }
};

var ModalAction = {
  name: 'AtModalAction',
  props: {
    isSimple: {
      type: Boolean,
      default: false
    },
    className: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-modal__footer', {
      'at-modal__footer--simple': this.isSimple
    }, this.className);
    return h("view", {
      "class": rootClass
    }, [h("view", {
      "class": "at-modal__action"
    }, [this.$slots.default])]);
  }
};

var ModalContent = {
  name: 'AtModalContent',
  props: {
    className: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-modal__content', this.className);
    return h("scroll-view", {
      "attrs": {
        "scrollY": true
      },
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var ModalHeader = {
  name: 'AtModalHeader',
  props: {
    className: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-modal__header', this.className);
    return h("view", {
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var index$7 = {
  name: 'AtModal',
  mixins: [mixins],
  props: {
    title: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    onCancel: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onConfirm: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onClose: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    content: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      state: _objectSpread2(_objectSpread2({}, getEnvs()), {}, {
        _isOpened: this.isOpened
      })
    };
  },
  watch: {
    isOpened: function isOpened(val) {
      if (val !== this.state._isOpened) {
        this.setState({
          _isOpened: val
        });
      }
    }
  },
  methods: {
    handleClickOverlay: function handleClickOverlay() {
      if (this.closeOnClickOverlay) {
        this.setState({
          _isOpened: false
        }, this.handleClose);
      }
    },
    handleClose: function handleClose(event) {
      if (typeof this.onClose === 'function') {
        this.onClose(event);
      }
    },
    handleCancel: function handleCancel(event) {
      if (typeof this.onCancel === 'function') {
        this.onCancel(event);
      }
    },
    handleConfirm: function handleConfirm(event) {
      if (typeof this.onConfirm === 'function') {
        this.onConfirm(event);
      }
    },
    handleTouchMove: function handleTouchMove(e) {
      e.stopPropagation();
    }
  },
  render: function render() {
    var h = arguments[0];
    var _this$state = this.state,
        _isOpened = _this$state._isOpened,
        isWEB = _this$state.isWEB;
    var title = this.title,
        content = this.content,
        cancelText = this.cancelText,
        confirmText = this.confirmText;
    var rootClass = _classnames_2_2_6_classnames('at-modal', {
      'at-modal--active': _isOpened
    }, this.className);

    if (title || content) {
      var isRenderAction = cancelText || confirmText;
      return h("view", {
        "class": rootClass
      }, [h("view", {
        "on": {
          "tap": this.handleClickOverlay
        },
        "class": "at-modal__overlay"
      }), h("view", {
        "class": "at-modal__container"
      }, [title && h(ModalHeader, [h("view", [title])]), content && h(ModalContent, [h("view", {
        "class": "content-simple"
      }, [isWEB ? h("view", {
        "attrs": {
          "dangerouslySetInnerHTML": {
            __html: content.replace(/\n/g, '<br/>')
          }
        }
      }) : h("view", [content])])]), isRenderAction && h(ModalAction, {
        "attrs": {
          "isSimple": true
        }
      }, [cancelText && h("button", {
        "on": {
          "tap": this.handleCancel
        }
      }, [cancelText]), confirmText && h("button", {
        "on": {
          "tap": this.handleConfirm
        }
      }, [confirmText])])])]);
    }

    return h("view", {
      "on": {
        "touchMove": this.handleTouchMove
      },
      "class": rootClass
    }, [h("view", {
      "class": "at-modal__overlay",
      "on": {
        "tap": this.handleClickOverlay
      }
    }), h("view", {
      "class": "at-modal__container"
    }, [this.$slots.default])]);
  }
};

var index$8 = {
  name: 'AtNavBar',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    },
    leftIconType: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    onClickLeftIcon: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onClickRgIconSt: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onClickRgIconNd: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    rightFirstIconType: {
      type: [String, Object],
      default: ''
    },
    rightSecondIconType: {
      type: [String, Object],
      default: ''
    }
  },
  methods: {
    /**
     *
     * @param {event} event
     */
    handleClickLeftView: function handleClickLeftView(event) {
      this.onClickLeftIcon && this.onClickLeftIcon(event);
    },

    /**
     *
     * @param {event} event
     */
    handleClickSt: function handleClickSt(event) {
      this.onClickRgIconSt && this.onClickRgIconSt(event);
    },

    /**
     *
     * @param {event} event
     */
    handleClickNd: function handleClickNd(event) {
      this.onClickRgIconNd && this.onClickRgIconNd(event);
    }
  },
  render: function render() {
    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        color = this.color,
        fixed = this.fixed,
        border = this.border,
        leftIconType = this.leftIconType,
        leftText = this.leftText,
        title = this.title,
        rightFirstIconType = this.rightFirstIconType,
        rightSecondIconType = this.rightSecondIconType;
    var linkStyle = {
      color: color
    };
    var defaultIconInfo = {
      customStyle: '',
      className: '',
      prefixClass: 'at-icon',
      value: '',
      color: '',
      size: 24
    };
    var leftIconInfo = leftIconType instanceof Object ? _objectSpread2(_objectSpread2({}, defaultIconInfo), leftIconType) : _objectSpread2(_objectSpread2({}, defaultIconInfo), {}, {
      value: leftIconType
    });
    var leftIconClass = _classnames_2_2_6_classnames(leftIconInfo.prefixClass, _defineProperty({}, "".concat(leftIconInfo.prefixClass, "-").concat(leftIconInfo.value), leftIconInfo.value), leftIconInfo.className);
    var rightFirstIconInfo = rightFirstIconType instanceof Object ? _objectSpread2(_objectSpread2({}, defaultIconInfo), rightFirstIconType) : _objectSpread2(_objectSpread2({}, defaultIconInfo), {}, {
      value: rightFirstIconType
    });
    var rightFirstIconClass = _classnames_2_2_6_classnames(rightFirstIconInfo.prefixClass, _defineProperty({}, "".concat(rightFirstIconInfo.prefixClass, "-").concat(rightFirstIconInfo.value), rightFirstIconInfo.value), rightFirstIconInfo.className);
    var rightSecondIconInfo = rightSecondIconType instanceof Object ? _objectSpread2(_objectSpread2({}, defaultIconInfo), rightSecondIconType) : _objectSpread2(_objectSpread2({}, defaultIconInfo), {}, {
      value: rightSecondIconType
    });
    var rightSecondIconClass = _classnames_2_2_6_classnames(rightSecondIconInfo.prefixClass, _defineProperty({}, "".concat(rightSecondIconInfo.prefixClass, "-").concat(rightSecondIconInfo.value), rightSecondIconInfo.value), rightSecondIconInfo.className);
    return h("view", {
      "class": _classnames_2_2_6_classnames({
        'at-nav-bar': true,
        'at-nav-bar--fixed': fixed,
        'at-nav-bar--no-border': !border
      }, className),
      "style": customStyle
    }, [h("view", {
      "class": "at-nav-bar__left-view",
      "on": {
        "tap": this.handleClickLeftView.bind(this)
      },
      "style": linkStyle
    }, [leftIconType && h("view", {
      "class": leftIconClass,
      "style": this.$mergeStyle({
        color: leftIconInfo.color,
        fontSize: "".concat(Taro$1.pxTransform(parseInt(leftIconInfo.size.toString()) * 2))
      }, leftIconInfo.customStyle)
    }), h("view", {
      "class": "at-nav-bar__text"
    }, [leftText])]), h("view", {
      "class": "at-nav-bar__title"
    }, [title || this.$slots.default]), h("view", {
      "class": "at-nav-bar__right-view"
    }, [h("view", {
      "class": _classnames_2_2_6_classnames({
        'at-nav-bar__container': true,
        'at-nav-bar__container--hide': !rightSecondIconType
      }),
      "style": linkStyle,
      "on": {
        "tap": this.handleClickNd.bind(this)
      }
    }, [rightSecondIconType && h("view", {
      "class": rightSecondIconClass,
      "style": this.$mergeStyle({
        color: rightSecondIconInfo.color,
        fontSize: "".concat(Taro$1.pxTransform(parseInt(rightSecondIconInfo.size.toString()) * 2))
      }, rightSecondIconInfo.customStyle)
    })]), h("view", {
      "class": _classnames_2_2_6_classnames({
        'at-nav-bar__container': true,
        'at-nav-bar__container--hide': !rightFirstIconType
      }),
      "style": linkStyle,
      "on": {
        "tap": this.handleClickSt.bind(this)
      }
    }, [rightFirstIconType && h("view", {
      "class": rightFirstIconClass,
      "style": this.$mergeStyle({
        color: rightFirstIconInfo.color,
        fontSize: "".concat(Taro$1.pxTransform(parseInt(rightFirstIconInfo.size.toString()) * 2))
      }, rightFirstIconInfo.customStyle)
    })])])]);
  }
};

var index$9 = {
  name: 'AtNoticebar',
  mixins: [mixins],
  props: {
    close: {
      type: Boolean,
      default: false
    },
    single: {
      type: Boolean,
      default: false
    },
    marquee: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 100
    },
    moreText: {
      type: String,
      default: '查看详情'
    },
    showMore: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    customStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    onClose: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onGotoMore: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  data: function data() {
    var animElemId = "J_".concat(Math.ceil(Math.random() * 10e5).toString(36));
    return {
      timeout: null,
      interval: null,
      state: _objectSpread2(_objectSpread2({}, getEnvs()), {}, {
        show: true,
        animElemId: animElemId,
        animationData: [{}],
        dura: 15
      })
    };
  },
  mounted: function mounted() {
    if (!this.marquee) return;
    this.initAnimation();
  },
  methods: {
    handleClose: function handleClose(event) {
      this.setState({
        show: false
      });
      this.onClose && this.onClose(event);
    },
    handleGotoMore: function handleGotoMore(event) {
      this.onGotoMore && this.onGotoMore(event);
    },
    initAnimation: function initAnimation() {
      var _this = this;

      var _this$state = this.state,
          isWEAPP = _this$state.isWEAPP,
          isALIPAY = _this$state.isALIPAY;
      this.timeout = setTimeout(function () {
        _this.timeout = null;

        if (_this.state.isWEB) {
          var elem = document.querySelector(".".concat(_this.state.animElemId));
          if (!elem) return;
          var width = elem.getBoundingClientRect().width;
          var dura = width / +_this.speed;

          _this.setState({
            dura: dura
          });
        } else if (isWEAPP || isALIPAY) {
          var query = isALIPAY ? Taro$1.createSelectorQuery() : Taro$1.createSelectorQuery().in(_this.$scope);
          query.select(".".concat(_this.state.animElemId)).boundingClientRect().exec(function (res) {
            var queryRes = res[0];
            if (!queryRes) return;
            var width = queryRes.width;
            var dura = width / +_this.speed;
            var animation = Taro$1.createAnimation({
              duration: dura * 1000,
              timingFunction: 'linear'
            });
            var resetAnimation = Taro$1.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            });
            var resetOpacityAnimation = Taro$1.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            });

            var animBody = function animBody() {
              resetOpacityAnimation.opacity(0).step();

              _this.setState({
                animationData: resetOpacityAnimation.export()
              });

              setTimeout(function () {
                resetAnimation.translateX(0).step();

                _this.setState({
                  animationData: resetAnimation.export()
                });
              }, 300);
              setTimeout(function () {
                resetOpacityAnimation.opacity(1).step();

                _this.setState({
                  animationData: resetOpacityAnimation.export()
                });
              }, 600);
              setTimeout(function () {
                animation.translateX(-width).step();

                _this.setState({
                  animationData: animation.export()
                });
              }, 900);
            };

            animBody();
            _this.interval = setInterval(animBody, dura * 1000 + 1000);
          });
        }
      }, 100);
    }
  },
  render: function render() {
    var h = arguments[0];
    var single = this.single,
        icon = this.icon,
        marquee = this.marquee,
        customStyle = this.customStyle,
        className = this.className;
    var showMore = this.showMore,
        close = this.close;
    var dura = this.state.dura;
    var rootClassName = ['at-noticebar'];
    var _moreText = this.moreText;
    if (!single) showMore = false;
    if (!_moreText) _moreText = '查看详情';
    var style = {};
    var innerClassName = ['at-noticebar__content-inner'];

    if (marquee) {
      close = false;
      style['animation-duration'] = "".concat(dura, "s");
      innerClassName.push(this.state.animElemId);
    }

    var classObject = {
      'at-noticebar--marquee': marquee,
      'at-noticebar--weapp': marquee && (this.state.isWEAPP || this.state.isALIPAY),
      'at-noticebar--single': !marquee && single
    };
    var iconClass = ['at-icon'];
    if (icon) iconClass.push("at-icon-".concat(icon));
    return this.state.show && h("view", {
      "class": _classnames_2_2_6_classnames(rootClassName, classObject, className),
      "style": customStyle
    }, [close && h("view", {
      "class": "at-noticebar__close",
      "on": {
        "click": this.handlClose
      }
    }, [h("view", {
      "class": "at-icon at-icon-close"
    })]), h("view", {
      "class": "at-noticebar__content"
    }, [icon && h("view", {
      "class": "at-noticebar__content-icon"
    }, [h("view", {
      "class": _classnames_2_2_6_classnames(iconClass, iconClass)
    })]), h("view", {
      "class": "at-noticebar__content-text"
    }, [h("view", {
      "attrs": {
        "animation": this.state.animationData
      },
      "class": _classnames_2_2_6_classnames(innerClassName),
      "style": style
    }, [this.$slots.default])])]), showMore && h("view", {
      "class": "at-noticebar__more",
      "on": {
        "click": this.handleGotoMore
      }
    }, [h("view", {
      "class": "text"
    }, [_moreText]), h("view", {
      "class": "at-noticebar__more-icon"
    }, [h("view", {
      "class": "at-icon at-icon-chevron-right"
    })])])]);
  }
};

var MIN_MAXPAGE = 1;
/**
 *
 * @param {number} maxPage
 */

var getMaxPage = function getMaxPage() {
  var maxPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if (maxPage <= 0) return MIN_MAXPAGE;
  return maxPage;
};
/**
 *
 * @param {number} maxPage
 */


var createPickerRange = function createPickerRange(max) {
  var range = new Array(max).fill(0).map(function (val, index) {
    return index + 1;
  });
  return range;
};

var index$a = {
  name: 'AtPagination',
  mixins: [mixins],
  props: {
    customStyle: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 20
    },
    icon: {
      type: Boolean,
      default: false
    },
    onPageChange: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  data: function data() {
    var current = this.current,
        pageSize = this.pageSize,
        total = this.total;
    var maxPage = getMaxPage(Math.ceil(total / pageSize));
    return {
      state: {
        currentPage: current || 1,
        maxPage: maxPage,
        pickerRange: createPickerRange(maxPage)
      }
    };
  },
  methods: {
    onPrev: function onPrev() {
      var currentPage = this.state.currentPage;
      var originCur = currentPage;
      currentPage -= 1;
      currentPage = Math.max(1, currentPage);
      if (originCur === currentPage) return;
      this.onPageChange && this.onPageChange({
        type: 'prev',
        current: currentPage
      });
      this.setState({
        currentPage: currentPage
      });
    },
    onNext: function onNext() {
      var currentPage = this.state.currentPage;
      var originCur = currentPage;
      var maxPage = this.state.maxPage;
      currentPage += 1;
      currentPage = Math.min(maxPage, currentPage);
      if (originCur === currentPage) return;
      this.onPageChange && this.onPageChange({
        type: 'next',
        current: currentPage
      });
      this.setState({
        currentPage: currentPage
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var icon = this.icon,
        customStyle = this.customStyle;
    var _this$state = this.state,
        currentPage = _this$state.currentPage,
        maxPage = _this$state.maxPage;
    var rootClassName = ['at-pagination'];
    var prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1;
    var nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage;
    var classObject = {
      'at-pagination--icon': icon
    };
    return h("view", {
      "class": _classnames_2_2_6_classnames(rootClassName, classObject, this.className),
      "style": customStyle
    }, [h("view", {
      "class": "at-pagination__btn-prev"
    }, [icon && h("button", {
      "on": {
        "tap": this.onPrev.bind(this)
      },
      "attrs": {
        "size": "small",
        "disabled": prevDisabled
      }
    }, [h("view", {
      "class": "at-icon at-icon-chevron-left text"
    })]), !icon && h("button", {
      "on": {
        "tap": this.onPrev.bind(this)
      },
      "attrs": {
        "size": "small",
        "disabled": prevDisabled
      }
    }, ["\u4E0A\u4E00\u9875"])]), h("view", {
      "class": "at-pagination__number"
    }, [h("view", {
      "class": "at-pagination__number-current text"
    }, [currentPage]), "/", maxPage]), h("view", {
      "class": "at-pagination__btn-next"
    }, [icon && h("button", {
      "on": {
        "tap": this.onNext.bind(this)
      },
      "attrs": {
        "size": "small",
        "disabled": nextDisabled
      }
    }, [h("view", {
      "class": "at-icon at-icon-chevron-right text"
    })]), !icon && h("button", {
      "on": {
        "tap": this.onNext.bind(this)
      },
      "attrs": {
        "size": "small",
        "disabled": nextDisabled
      }
    }, ["\u4E0B\u4E00\u9875"])])]);
  }
};

var index$b = {
  name: 'AtProgress',
  props: {
    color: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: 'progress',
      validator: function validator(val) {
        return ['progress', 'error', 'success'].includes(val);
      }
    },
    percent: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 0
    },
    isHidePercent: {
      type: Boolean,
      default: false
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var color = this.color;
    var percent = this.percent;
    var strokeWidth = this.strokeWidth,
        status = this.status,
        isHidePercent = this.isHidePercent;

    if (typeof percent !== 'number') {
      percent = 0;
    }

    if (percent < 0) {
      percent = 0;
    } else if (percent > 100) {
      percent = 100;
    }

    var rootClass = _classnames_2_2_6_classnames('at-progress', _defineProperty({}, "at-progress--".concat(status), !!status), this.className);
    var iconClass = _classnames_2_2_6_classnames('at-icon', {
      'at-icon-close-circle': status === 'error',
      'at-icon-check-circle': status === 'success'
    });
    var progressStyle = {
      width: percent && "".concat(+percent, "%"),
      height: strokeWidth && "".concat(+strokeWidth, "px"),
      backgroundColor: color
    };
    return h("view", {
      "class": rootClass
    }, [h("view", {
      "class": "at-progress__outer"
    }, [h("view", {
      "class": "at-progress__outer-inner"
    }, [h("view", {
      "class": "at-progress__outer-inner-background",
      "style": progressStyle
    })])]), !isHidePercent && h("view", {
      "class": "at-progress__content"
    }, [!status || status === 'progress' ? "".concat(percent, "%") : h("view", {
      "class": iconClass
    })])]);
  }
};

var index$c = {
  name: 'AtSegmentedControl',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    },
    current: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: ''
    },
    fontSize: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selectedColor: {
      type: String,
      default: ''
    },
    values: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  methods: {
    /**
     *
     * @param {number} index
     * @param {event} event
     */
    handleClick: function handleClick(index, event) {
      if (this.disabled) return;
      this.onClick(index, event);
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        disabled = this.disabled,
        values = this.values,
        selectedColor = this.selectedColor,
        current = this.current,
        color = this.color,
        fontSize = this.fontSize;
    var rootStyle = {
      borderColor: selectedColor
    };
    var itemStyle = {
      color: selectedColor,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: color
    };
    var selectedItemStyle = {
      color: color,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: selectedColor
    };
    var rootCls = _classnames_2_2_6_classnames('at-segmented-control', {
      'at-segmented-control--disabled': disabled
    }, className);
    return h("view", {
      "class": rootCls,
      "style": this.$mergeStyle(rootStyle, customStyle)
    }, [values.map(function (value, i) {
      return h("view", {
        "class": _classnames_2_2_6_classnames('at-segmented-control__item', {
          'at-segmented-control__item--active': current === i
        }),
        "style": current === i ? selectedItemStyle : itemStyle,
        "key": value,
        "on": {
          "tap": _this.handleClick.bind(_this, i)
        }
      }, [value]);
    })]);
  }
};

var index$d = {
  name: 'AtTabBar',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    },
    current: {
      type: Number,
      default: 0
    },
    iconSize: {
      type: [Number, String],
      default: ''
    },
    fontSize: {
      type: [Number, String],
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    selectedColor: {
      type: String,
      default: ''
    },
    tabList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  methods: {
    /**
     *
     * @param {number} index
     * @param {event} event
     */
    handleClick: function handleClick(index, event) {
      this.onClick && this.onClick(index, event);
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        fixed = this.fixed,
        backgroundColor = this.backgroundColor,
        tabList = this.tabList,
        current = this.current,
        color = this.color,
        iconSize = this.iconSize,
        fontSize = this.fontSize,
        selectedColor = this.selectedColor; // const { isIPhoneX } = this.state

    var defaultStyle = {
      color: color || ''
    };
    var selectedStyle = {
      color: selectedColor || ''
    };
    var titleStyle = {
      fontSize: fontSize ? "".concat(fontSize, "px") : ''
    };
    var rootStyle = {
      backgroundColor: backgroundColor || ''
    };
    var imgStyle = {
      width: "".concat(iconSize, "px"),
      height: "".concat(iconSize, "px")
    };
    return h("view", {
      "class": _classnames_2_2_6_classnames({
        'at-tab-bar': true,
        'at-tab-bar--fixed': fixed // 'at-tab-bar--ipx': isIPhoneX

      }, className),
      "style": this.$mergeStyle(rootStyle, customStyle)
    }, [tabList.map(function (item, i) {
      var _classNames;

      return h("view", {
        "class": _classnames_2_2_6_classnames('at-tab-bar__item', {
          'at-tab-bar__item--active': current === i
        }),
        "style": current === i ? selectedStyle : defaultStyle,
        "key": item.title,
        "on": {
          "tap": _this.handleClick.bind(_this, i)
        }
      }, [item.iconType ? h(Badge, {
        "attrs": {
          "dot": !!item.dot,
          "value": item.text,
          "maxValue": Number(item.max)
        }
      }, [h("view", {
        "class": "at-tab-bar__icon"
      }, [h("view", {
        "class": _classnames_2_2_6_classnames("".concat(item.iconPrefixClass || 'at-icon'), (_classNames = {}, _defineProperty(_classNames, "".concat(item.iconPrefixClass || 'at-icon', "-").concat(item.selectedIconType), current === i && item.selectedIconType), _defineProperty(_classNames, "".concat(item.iconPrefixClass || 'at-icon', "-").concat(item.iconType), !(current === i && item.selectedIconType)), _classNames)),
        "style": {
          color: current === i ? selectedColor : color,
          fontSize: iconSize ? "".concat(iconSize, "px") : ''
        }
      })])]) : null, item.image ? h(Badge, {
        "attrs": {
          "dot": !!item.dot,
          "value": item.text,
          "maxValue": Number(item.max)
        }
      }, [h("view", {
        "class": "at-tab-bar__icon"
      }, [h("image", {
        "class": _classnames_2_2_6_classnames('at-tab-bar__inner-img', {
          'at-tab-bar__inner-img--inactive': current !== i
        }),
        "attrs": {
          "mode": "widthFix",
          "src": item.selectedImage || item.image
        },
        "style": imgStyle
      }), h("image", {
        "class": _classnames_2_2_6_classnames('at-tab-bar__inner-img', {
          'at-tab-bar__inner-img--inactive': current === i
        }),
        "attrs": {
          "mode": "widthFix",
          "src": item.image
        },
        "style": imgStyle
      })])]) : null, h("view", [h(Badge, {
        "attrs": {
          "dot": item.iconType || item.image ? false : !!item.dot,
          "value": item.iconType || item.image ? '' : item.text,
          "maxValue": item.iconType || item.image ? 0 : Number(item.max)
        }
      }, [h("view", {
        "class": "at-tab-bar__title",
        "style": titleStyle
      }, [item.title])])])]);
    })]);
  }
};

var ENV$1 = Taro$1.getEnv();
var MIN_DISTANCE = 100;
var MAX_INTERVAL = 10;
var index$e = {
  name: 'AtTabs',
  mixins: [mixins],
  props: {
    customStyle: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    tabDirection: {
      type: String,
      default: 'horizontal',
      validator: function validator(val) {
        return ['horizontal', 'vertical'].includes(val);
      }
    },
    height: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 0
    },
    swipeable: {
      type: Boolean,
      default: true
    },
    scroll: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: true
    },
    tabList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  data: function data() {
    return {
      tabId: isTest() ? 'tabs-AOTU2018' : uuid(),
      // 触摸时的原点
      touchDot: 0,
      // 定时器
      timer: null,
      // 滑动时间间隔
      interval: 0,
      // 是否已经在滑动
      isMoving: false,
      state: {
        _scrollLeft: 0,
        _scrollTop: 0,
        _scrollIntoView: ''
      }
    };
  },
  watch: {
    scroll: function scroll() {
      this.getTabHeaderRef();
    },
    current: function current(val) {
      this.updateState(val);
    }
  },
  mounted: function mounted() {
    this.getTabHeaderRef();
    this.updateState(this.current);
  },
  beforeDestroy: function beforeDestroy() {
    this.tabHeaderRef = null;
  },
  methods: {
    /**
     *
     * @param {number} idx
     */
    updateState: function updateState(idx) {
      if (this.scroll) {
        // 标签栏滚动
        switch (ENV$1) {
          case Taro$1.ENV_TYPE.WEAPP:
          case Taro$1.ENV_TYPE.ALIPAY:
          case Taro$1.ENV_TYPE.SWAN:
            {
              var index = Math.max(idx - 1, 0);
              this.setState({
                _scrollIntoView: "tab".concat(index)
              });
              break;
            }

          case Taro$1.ENV_TYPE.WEB:
            {
              var _index = Math.max(idx - 1, 0);

              var prevTabItem = this.tabHeaderRef.childNodes[_index];
              prevTabItem && this.setState({
                _scrollTop: prevTabItem.offsetTop,
                _scrollLeft: prevTabItem.offsetLeft
              });
              break;
            }

          default:
            {
              console.warn('AtTab 组件在该环境还未适配');
              break;
            }
        }
      }
    },

    /**
     *
     * @param {number} index
     * @param {event} event
     */
    handleClick: function handleClick(index, event) {
      this.onClick(index, event);
    },

    /**
     *
     * @param {event} e
     */
    handleTouchStart: function handleTouchStart(e) {
      var _this = this;

      var swipeable = this.swipeable,
          tabDirection = this.tabDirection;
      if (!swipeable || tabDirection === 'vertical') return; // 获取触摸时的原点

      this.touchDot = e.touches[0].pageX; // 使用js计时器记录时间

      this.timer = setInterval(function () {
        _this.interval++;
      }, 100);
    },

    /**
     *
     * @param {event} e
     */
    handleTouchMove: function handleTouchMove(e) {
      var swipeable = this.swipeable,
          tabDirection = this.tabDirection,
          current = this.current,
          tabList = this.tabList;
      if (!swipeable || tabDirection === 'vertical') return;
      var touchMove = e.touches[0].pageX;
      var moveDistance = touchMove - this.touchDot;
      var maxIndex = tabList.length;

      if (!this.isMoving && this.interval < MAX_INTERVAL && this.touchDot > 20) {
        // 向左滑动
        if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
          this.isMoving = true;
          this.handleClick(current + 1, e); // 向右滑动
        } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
          this.isMoving = true;
          this.handleClick(current - 1, e);
        }
      }
    },
    handleTouchEnd: function handleTouchEnd() {
      var swipeable = this.swipeable,
          tabDirection = this.tabDirection;
      if (!swipeable || tabDirection === 'vertical') return;
      clearInterval(this.timer);
      this.interval = 0;
      this.isMoving = false;
    },
    getTabHeaderRef: function getTabHeaderRef() {
      if (ENV$1 === Taro$1.ENV_TYPE.WEB) {
        this.tabHeaderRef = document.getElementById(this.tabId);
      }
    }
  },
  render: function render() {
    var _this2 = this,
        _classNames;

    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        height = this.height,
        tabDirection = this.tabDirection,
        animated = this.animated,
        tabList = this.tabList,
        scroll = this.scroll,
        current = this.current;
    var _this$state = this.state,
        _scrollLeft = _this$state._scrollLeft,
        _scrollTop = _this$state._scrollTop,
        _scrollIntoView = _this$state._scrollIntoView;
    var heightStyle = {
      height: height
    };
    var underlineStyle = {
      height: tabDirection === 'vertical' ? "".concat(tabList.length * 100, "%") : '1PX',
      width: tabDirection === 'horizontal' ? "".concat(tabList.length * 100, "%") : '1PX'
    };
    var bodyStyle = {};
    var transformStyle = "translate3d(0px, -".concat(current * 100, "%, 0px)");

    if (tabDirection === 'horizontal') {
      transformStyle = "translate3d(-".concat(current * 100, "%, 0px, 0px)");
    }

    Object.assign(bodyStyle, {
      transform: transformStyle,
      '-webkit-transform': transformStyle
    });

    if (!animated) {
      bodyStyle.transition = 'unset';
    }

    var tabItems = tabList.map(function (item, idx) {
      var itemCls = _classnames_2_2_6_classnames({
        'at-tabs__item': true,
        'at-tabs__item--active': current === idx
      });
      return h("view", {
        "class": itemCls,
        "attrs": {
          "id": "tab".concat(idx)
        },
        "key": item.title,
        "on": {
          "tap": _this2.handleClick.bind(_this2, idx)
        }
      }, [item.title, h("view", {
        "class": "at-tabs__item-underline"
      })]);
    });
    var rootCls = _classnames_2_2_6_classnames((_classNames = {
      'at-tabs': true,
      'at-tabs--scroll': scroll
    }, _defineProperty(_classNames, "at-tabs--".concat(tabDirection), true), _defineProperty(_classNames, "at-tabs--".concat(ENV$1), true), _classNames), className);
    var scrollX = tabDirection === 'horizontal';
    var scrollY = tabDirection === 'vertical';
    return h("view", {
      "class": rootCls,
      "style": this.$mergeStyle(heightStyle, customStyle)
    }, [scroll ? h("scroll-view", {
      "attrs": {
        "id": this.tabId,
        "scrollX": scrollX,
        "scrollY": scrollY,
        "scrollWithAnimation": true,
        "scrollLeft": _scrollLeft,
        "scrollTop": _scrollTop,
        "scrollIntoView": _scrollIntoView
      },
      "class": "at-tabs__header",
      "style": heightStyle
    }, [tabItems]) : h("view", {
      "attrs": {
        "id": this.tabId
      },
      "class": "at-tabs__header"
    }, [tabItems]), h("view", {
      "class": "at-tabs__body",
      "on": {
        "touchStart": this.handleTouchStart.bind(this),
        "touchEnd": this.handleTouchEnd.bind(this),
        "touchMove": this.handleTouchMove.bind(this)
      },
      "style": this.$mergeStyle(bodyStyle, heightStyle)
    }, [h("view", {
      "class": "at-tabs__underline",
      "style": underlineStyle
    }), this.$slots.default])]);
  }
};

var index$f = {
  name: 'AtTabsPane',
  props: {
    customStyle: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    tabDirection: {
      type: String,
      default: 'horizontal',
      validator: function validator(val) {
        return ['horizontal', 'vertical'].includes(val);
      }
    },
    index: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 0
    }
  },
  render: function render() {
    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        tabDirection = this.tabDirection,
        index = this.index,
        current = this.current;
    return h("view", {
      "class": _classnames_2_2_6_classnames({
        'at-tabs-pane': true,
        'at-tabs-pane--vertical': tabDirection === 'vertical',
        'at-tabs-pane--active': index === current,
        'at-tabs-pane--inactive': index !== current
      }, className),
      "style": customStyle
    }, [this.$slots.default]);
  }
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var index$g = {
  name: 'AtTimeline',
  props: {
    pending: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      },
      validator: function validator(val) {
        return val.every(function (item) {
          return _typeof(item) === 'object';
        });
      }
    },
    customStyle: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    },
    className: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var pending = this.pending,
        items = this.items,
        customStyle = this.customStyle,
        className = this.className;
    var rootClassName = ['at-timeline'];
    if (pending) rootClassName.push('at-timeline--pending');
    var rootClassObject = {
      'at-timeline--pending': pending
    };
    var itemElems = items.map(function (item, index) {
      var _item$title = item.title,
          title = _item$title === void 0 ? '' : _item$title,
          color = item.color,
          icon = item.icon,
          _item$content = item.content,
          content = _item$content === void 0 ? [] : _item$content;
      var iconClass = _classnames_2_2_6_classnames(_defineProperty({
        'at-icon': true
      }, "at-icon-".concat(icon), icon));
      var itemRootClassName = ['at-timeline-item'];
      if (color) itemRootClassName.push("at-timeline-item--".concat(color));
      var dotClass = [];

      if (icon) {
        dotClass.push('at-timeline-item__icon');
      } else {
        dotClass.push('at-timeline-item__dot');
      }

      return h("view", {
        "class": _classnames_2_2_6_classnames(itemRootClassName),
        "key": "at-timeline-item-".concat(index)
      }, [h("view", {
        "class": "at-timeline-item__tail"
      }), h("view", {
        "class": _classnames_2_2_6_classnames(dotClass)
      }, [icon && h("view", {
        "class": iconClass
      })]), h("view", {
        "class": "at-timeline-item__content"
      }, [h("view", {
        "class": "at-timeline-item__content-item"
      }, [title]), content.map(function (sub, subIndex) {
        return h("view", {
          "class": "at-timeline-item__content-item at-timeline-item__content--sub",
          "key": subIndex
        }, [sub]);
      })])]);
    });
    return h("view", {
      "class": _classnames_2_2_6_classnames(rootClassName, rootClassObject, className),
      "style": customStyle
    }, [itemElems]);
  }
};

var error = "data:image/png;base64,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";
var success = "data:image/png;base64,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";
var loading = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA6AN+QRH69xUI7Z7x2sWzcWYvphvj4MxiXVIiGAuH08K9ibepmI+Oc2tKHQ+helY5NykfkF5N9AAABmhJREFUeNrdnWlT4kAQhjt3CARIwg1yH3Lpqv3/f9tabsYJMUGCsM6b56NVVjGV6WP6pLvTijTb8bS2X29U581BaBEmLY9T1LrVpukSGhFn06n2W4SExvn4q2ecL6PxeSbrPwRBxN/iG0NSHyHs55kGB1KdVqTxBTjLnU6qo1csdx+ag8CIujXOxe+pf5QEIzPYNDo5OnlbITD2/WObM9AeHwiOYbDMEB/PgHRiwo3GaWpbKFkR6LvI4RTdF4Lk0JtyihXk/Xrnbe2kRKVHoLjjlImphwSKZXicxH4iVB4eNU6ywPHy01SME1nRTIJluOAEtgFpU/4xaHOC2YhgeRjbJble9Dplid0nXHSDEzQJGFNjyZyAGc1YUgVWXqfXqwH3dsy7XnVUf/iD1oQ/mUCfxKonvgn07ao0EnKCLPGkVxO6i6AZl8SeEDVLYuNPToLsd53cLhvZF35HSrwG/D55R5daeAathKkiLaNB0FiTsohJS/sUE9wo0QcmCxaEjcEC3BjkB/rsU0xg48L/GH2KSZ2wkWICm3VIi4kH/V4k0qccsyJsXm2OAc0zfnWEu9g+Fz20OWZL2Aw4pgYu77QoiRtMQ0eoYMC6lWxj8kjYVDThz0PHHt95LIvievBEpRq4LSGjLL6jJepWfPRP8umo7AgbV9iSJYGzFvXC6lc+n+eNYwICR7ywpgROj2MQOgTOcXBK4gNTJEwJgbPjGJBOmlx04QOvCZyNKIkgcEKOAc8yyEa0ZwJnWZKgIwVlUcBDjsHqMc2gXY5yCKJjOaqGiPoiBkHg7EtjSUQ/I3gJAVGjHGVcRJuySLswiV0CxxQ5HwJnxDHoySsSoVPwkg6iLv9jQOBEZdG/Rjkqm4mCshgSkXRvEDhmSeq3KCzLa1c48u2PASxaBPvodUXGPR6J46GexBLVHMKiRIRJRWTgSBOfBhNd1M+SqKwDzVfLg4i8D2h5irxaHrZDL4Vdww6oSPUroo57gkQaRB/7iSVdlDp2iEs6jQ3st6J046vYJR3yYTXHrh+QT90mQztbMvgwwA46ynBQiB10lAE6i2MgW2CTIdMasiFJBrG7yPo3mVYQhmRDgCQTPU3kEFcy9WYip3iTyVCXcR350/R0B7cOIlkwIKX9SHDIEo7ksdoEx2lRTQu2Ejhd5uSjmsR04dkKtYMhXQr4zKBh03RxpsuYkZSv5bITTHfrawHzWtwtqEh2Rkn5H8jOq6wifx8xApHVdmEAdl5lNsIMARstZWtSVufVjGDIbhYLOOaNQMhp3zs4aN0xeQ2VS/F3kMyVbHHNU8pjgiC36Vj3oWZ0nGkD70HN6DjTmK93gGZ0nB2VsAWa0SGHV2DP6Pjmpz7CSIkc8HL+4jmKh1O+HbljgIxBlEOQ8pUzQtL9+7FUUnG1FVbBlwwK07sAjsr8ktFtLxxjv5KiXDhMb8UxU0UDKpeON7Q8xY3JxQMne8wqp6sLjACtqzxEu8hQ1tBWd4h2sTG5T+oO0S44uHihqpgUHSXtyiHaSpX+Fx/ubdoqLmG5Zty6oeASlqsG4Osz5ZawXLmSYKSptoSl8JIIKSZKOcLXr+3oK7WEJblIBXmdzM9+y5xVuV0/XTZ0VGNlXHL90/FKjafCyrhbLOSq1H9/ZdxtVqRZyZVxLSqKQkvrrPoPdpAqtUYweUO50Ipb1RY76sffWXGbXrV51G8SECt+vVRcftrkotdL1XW0fZsl01f6BoUXBJ98ZXv8QLmovrL5RO64PaAc1F+irRs2J1gMKQuIteYn14sdI0etAyyadxecRHtMiQrQ6v8nm5N4hkU3xTI8TmI/0Z0I63xCbezSzXDHNT6hHtL96Hl8grN+o5vwtnb4BK9Hd8VacYpZ70A/5NCbcYqVRffmpcspnGin09Xou8jhFN0X+g/o2xqn0TbhlWK30ThNbavT3ZHqJY22DIYFTV+wFKcoqAzvpPAl7WN/Txex7x/bLMk1T/ensu1wJp3GJjBHlMvIDDaNvP/dVuj/o/d8zqXWjYxgYIZ716roesVy96E5CIyoW+Nc/J5Ov4O+Wzp8I5zlTqdf5BBM+QZMAwXaC4aGzz/CN5SpdPuznvCVTNaKLatwn1c+F8RfPatZwd7qVzt8IZ1qX6nk9xdcs1kVOjZPM1ebpppf4itWOGjOq42639Y8x7YdT2v79UZ13hyEFt2Fv6Loy9OZgJFyAAAAAElFTkSuQmCC";
var statusImg = {
	error: error,
	success: success,
	loading: loading
};

var AtToast = {
  name: 'AtToast',
  mixins: [mixins],
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    hasMask: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3000
    },
    status: {
      type: String,
      default: '',
      validator: function validator(val) {
        return ['', 'error', 'loading', 'success'].includes(val);
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onClose: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    className: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    }
  },
  data: function data() {
    return {
      state: {
        _timer: null,
        _isOpened: this.isOpened
      }
    };
  },
  watch: {
    isOpened: {
      immediate: true,
      handler: function handler() {
        this.handleChange();
      }
    },
    duration: function duration() {
      this.handleChange();
    }
  },
  methods: {
    clearTimmer: function clearTimmer() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    },
    makeTimer: function makeTimer(duration) {
      var _this = this;

      if (duration === 0) {
        return;
      }

      this._timer = setTimeout(function () {
        _this.close();
      }, +duration);
    },
    close: function close() {
      var _isOpened = this.state._isOpened;

      if (_isOpened) {
        this.setState({
          _isOpened: false
        }, this.handleClose);
        this.clearTimmer();
      }
    },
    handleClose: function handleClose(event) {
      if (typeof this.onClose === 'function') {
        this.onClose(event);
      }
    },
    handleClick: function handleClick(event) {
      var onClick = this.onClick,
          status = this.status;

      if (status === 'loading') {
        return;
      }

      if (onClick) {
        return onClick(event);
      }

      this.close();
    },
    handleChange: function handleChange() {
      var isOpened = this.isOpened,
          duration = this.duration;

      if (!isOpened) {
        this.close();
        return;
      }

      if (!this.state._isOpened) {
        this.setState({
          _isOpened: true
        });
      } else {
        this.clearTimmer();
      }

      this.makeTimer(duration || 0);
    }
  },
  render: function render() {
    var h = arguments[0];
    var _isOpened = this.state._isOpened;
    var customStyle = this.customStyle,
        text = this.text,
        icon = this.icon,
        status = this.status,
        image = this.image,
        hasMask = this.hasMask;
    var realImg = image || statusImg[status] || null;
    var isRenderIcon = !!(icon && !(image || statusImg[status]));
    var bodyClass = _classnames_2_2_6_classnames('toast-body', _defineProperty({
      'at-toast__body--custom-image': image,
      'toast-body--text': !realImg && !icon
    }, "at-toast__body--".concat(status), !!status));
    var iconClass = _classnames_2_2_6_classnames('at-icon', _defineProperty({}, "at-icon-".concat(icon), icon));
    return _isOpened ? h("view", {
      "class": _classnames_2_2_6_classnames('at-toast', this.className)
    }, [hasMask && h("view", {
      "class": "at-toast__overlay"
    }), h("view", {
      "class": bodyClass,
      "style": customStyle,
      "on": {
        "click": this.handleClick
      }
    }, [h("view", {
      "class": "toast-body-content"
    }, [realImg ? h("view", {
      "class": "toast-body-content__img"
    }, [h("image", {
      "class": "toast-body-content__img-item",
      "attrs": {
        "src": realImg,
        "mode": "scaleToFill"
      }
    })]) : null, isRenderIcon && h("view", {
      "class": "toast-body-content__icon"
    }, [h("view", {
      "class": iconClass
    })]), text && h("view", {
      "class": "toast-body-content__info"
    }, [h("view", [text])])])])]) : null;
  }
};

var index$h = {
  name: 'AtAccordion',
  mixins: [mixins],
  props: {
    open: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    note: {
      type: String,
      default: ''
    },
    icon: {
      type: Object,
      default: function _default() {
        return {
          value: ''
        };
      }
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    isAnimation: {
      type: Boolean,
      default: true
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  data: function data() {
    return {
      isCompleted: true,
      startOpen: false,
      state: {
        wrapperHeight: 0
      }
    };
  },
  watch: {
    open: function open(val, oldVal) {
      if (val !== oldVal) {
        this.startOpen = !!val && !!this.isAnimation;
        this.toggleWithAnimation();
      }
    }
  },
  methods: {
    /**
     *
     * @param {event} event
     */
    handleClick: function handleClick(event) {
      var open = this.open;
      if (!this.isCompleted) return;
      this.onClick && this.onClick(!open, event);
    },
    toggleWithAnimation: function toggleWithAnimation() {
      var _this = this;

      var open = this.open,
          isAnimation = this.isAnimation;
      if (!this.isCompleted || !isAnimation) return;
      this.isCompleted = false;
      delayQuerySelector(this, '.at-accordion__body', 0).then(function (rect) {
        var height = parseInt(rect[0].height.toString());
        var startHeight = open ? height : 0;
        var endHeight = open ? 0 : height;
        _this.startOpen = false;

        _this.setState({
          wrapperHeight: startHeight
        }, function () {
          setTimeout(function () {
            _this.setState({
              wrapperHeight: endHeight
            }, function () {
              setTimeout(function () {
                _this.isCompleted = true;

                _this.setState({});
              }, 700);
            });
          }, 100);
        });
      });
    }
  },
  render: function render() {
    var _classNames;

    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        title = this.title,
        icon = this.icon,
        hasBorder = this.hasBorder,
        open = this.open,
        note = this.note;
    var wrapperHeight = this.state.wrapperHeight;
    var rootCls = _classnames_2_2_6_classnames('at-accordion', className);
    var prefixClass = icon && icon.prefixClass || 'at-icon';
    var iconCls = _classnames_2_2_6_classnames((_classNames = {}, _defineProperty(_classNames, prefixClass, true), _defineProperty(_classNames, "".concat(prefixClass, "-").concat(icon && icon.value), icon && icon.value), _defineProperty(_classNames, 'at-accordion__icon', true), _classNames));
    var headerCls = _classnames_2_2_6_classnames('at-accordion__header', {
      'at-accordion__header--noborder': !hasBorder
    });
    var arrowCls = _classnames_2_2_6_classnames('at-accordion__arrow', {
      'at-accordion__arrow--folded': !!open
    });
    var contentCls = _classnames_2_2_6_classnames('at-accordion__content', {
      'at-accordion__content--inactive': !open && this.isCompleted || this.startOpen
    });
    var iconStyle = {
      color: icon && icon.color || '',
      fontSize: icon && "".concat(icon.size, "px") || ''
    };
    var contentStyle = {
      height: "".concat(wrapperHeight, "px")
    };

    if (this.isCompleted) {
      contentStyle.height = '';
    }

    return h("view", {
      "class": rootCls,
      "style": customStyle
    }, [h("view", {
      "class": headerCls,
      "on": {
        "tap": this.handleClick
      }
    }, [icon && icon.value && h("view", {
      "class": iconCls,
      "style": iconStyle
    }), h("view", {
      "class": "at-accordion__info"
    }, [h("view", {
      "class": "at-accordion__info__title"
    }, [title]), h("view", {
      "class": "at-accordion__info__note"
    }, [note])]), h("view", {
      "class": arrowCls
    }, [h("view", {
      "class": "at-icon at-icon-chevron-down"
    })])]), h("view", {
      "style": contentStyle,
      "class": contentCls
    }, [h("view", {
      "class": "at-accordion__body"
    }, [this.$slots.default])])]);
  }
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max,
    nativeMin = Math.min;

/**
 * The base implementation of `_.inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function baseInRange(number, start, end) {
  return number >= nativeMin(start, end) && number < nativeMax$1(start, end);
}

var _baseInRange = baseInRange;

/**
 * Checks if `n` is between `start` and up to, but not including, `end`. If
 * `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support
 * negative ranges.
 *
 * @static
 * @memberOf _
 * @since 3.3.0
 * @category Number
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @see _.range, _.rangeRight
 * @example
 *
 * _.inRange(3, 2, 4);
 * // => true
 *
 * _.inRange(4, 8);
 * // => true
 *
 * _.inRange(4, 2);
 * // => false
 *
 * _.inRange(2, 2);
 * // => false
 *
 * _.inRange(1.2, 2);
 * // => true
 *
 * _.inRange(5.2, 4);
 * // => false
 *
 * _.inRange(-3, -2, -6);
 * // => true
 */
function inRange(number, start, end) {
  start = toFinite_1(start);
  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = toFinite_1(end);
  }
  number = toNumber_1(number);
  return _baseInRange(number, start, end);
}

var inRange_1 = inRange;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$2;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$3.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$4 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$4.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (_Map && getTag(new _Map) != mapTag) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$3.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    setTag$2 = '[object Set]';

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_1(value) &&
      (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
    return !value.length;
  }
  var tag = _getTag(value);
  if (tag == mapTag$2 || tag == setTag$2) {
    return !value.size;
  }
  if (_isPrototype(value)) {
    return !_baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty$4.call(value, key)) {
      return false;
    }
  }
  return true;
}

var isEmpty_1 = isEmpty;

var AtSwipeActionOptions = {
  name: 'AtSwipeActionOptions',
  props: {
    componentId: {
      type: String,
      default: ''
    },
    onQueryedDom: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    }
  },
  methods: {
    trrigerOptionsDomUpadte: function trrigerOptionsDomUpadte() {
      var _this = this;

      delayQuerySelector(this, "#swipeActionOptions-".concat(this.componentId)).then(function (res) {
        _this.onQueryedDom(res[0]);
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-swipe-action__options', this.className);
    return h("view", {
      "attrs": {
        "id": "swipeActionOptions-".concat(this.componentId)
      },
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var index$i = {
  name: 'AtSwipeAction',
  mixins: [mixins],
  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      },
      validator: function validator(options) {
        return options.every(function (item) {
          if (_typeof(item) === 'object') {
            if (!item.text) return false;
            if (item.style && typeof item.style !== 'string' && _typeof(item.style) !== 'object') return false;
            if (item.className && typeof item.className !== 'string' && typeof item.className !== 'array' && _typeof(item.className) !== 'object') return false;
            return true;
          } else {
            return false;
          }
        });
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onOpened: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onClosed: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    }
  },
  data: function data() {
    var isOpened = this.isOpened;
    return {
      endValue: 0,
      startX: 0,
      startY: 0,
      maxOffsetSize: 0,
      domInfo: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      isMoving: false,
      isTouching: false,
      state: {
        componentId: isTest() ? 'tabs-AOTU2018' : uuid(),
        offsetSize: 0,
        _isOpened: !!isOpened
      }
    };
  },
  methods: {
    getDomInfo: function getDomInfo() {
      var _this = this;

      return Promise.all([delayGetClientRect({
        self: this,
        delayTime: 0,
        selectorStr: "#swipeAction-".concat(this.state.componentId)
      }), delayGetScrollOffset({
        delayTime: 0
      })]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            rect = _ref2[0],
            scrollOffset = _ref2[1];

        rect[0].top += scrollOffset[0].scrollTop;
        rect[0].bottom += scrollOffset[0].scrollTop;
        _this.domInfo = rect[0];
      });
    },

    /**
     *
     * @param {boolean} isOpened
     */
    _reset: function _reset(isOpened) {
      this.isMoving = false;
      this.isTouching = false;

      if (isOpened) {
        this.endValue = -this.maxOffsetSize;
        this.setState({
          _isOpened: true,
          offsetSize: -this.maxOffsetSize
        });
      } else {
        this.endValue = 0;
        this.setState({
          offsetSize: 0,
          _isOpened: false
        });
      }
    },

    /**
     *
     * @param {number} value
     */
    computeTransform: function computeTransform(value) {
      return value ? "translate3d(".concat(value, "px,0,0)") : null;
    },

    /**
     *
     * @param {event} event
     */
    handleOpened: function handleOpened(event) {
      var onOpened = this.onOpened;

      if (typeof onOpened === 'function' && !this.state._isOpened) {
        onOpened(event);
      }
    },

    /**
     *
     * @param {event} event
     */
    handleClosed: function handleClosed(event) {
      var onClosed = this.onClosed;

      if (typeof onClosed === 'function' && this.state._isOpened) {
        onClosed(event);
      }
    },
    handleTouchStart: function handleTouchStart(e) {
      var _e$touches$ = e.touches[0],
          clientX = _e$touches$.clientX,
          clientY = _e$touches$.clientY;
      if (this.disabled) return;
      this.getDomInfo();
      this.startX = clientX;
      this.startY = clientY;
      this.isTouching = true;
    },
    handleTouchMove: function handleTouchMove(e) {
      if (isEmpty_1(this.domInfo)) {
        return;
      }

      var startX = this.startX,
          startY = this.startY;
      var _this$domInfo = this.domInfo,
          top = _this$domInfo.top,
          bottom = _this$domInfo.bottom,
          left = _this$domInfo.left,
          right = _this$domInfo.right;
      var _e$touches$2 = e.touches[0],
          clientX = _e$touches$2.clientX,
          clientY = _e$touches$2.clientY,
          pageX = _e$touches$2.pageX,
          pageY = _e$touches$2.pageY;
      var x = Math.abs(clientX - startX);
      var y = Math.abs(clientY - startY);

      var inDom = inRange_1(pageX, left, right) && inRange_1(pageY, top, bottom);

      if (!this.isMoving && inDom) {
        this.isMoving = y === 0 || x / y >= Number.parseFloat(Math.tan(45 * Math.PI / 180).toFixed(2));
      }

      if (this.isTouching && this.isMoving) {
        e.preventDefault();
        var offsetSize = clientX - this.startX;
        var isRight = offsetSize > 0;
        if (this.state.offsetSize === 0 && isRight) return;
        var value = this.endValue + offsetSize;
        this.setState({
          offsetSize: value >= 0 ? 0 : value
        });
      }
    },
    handleTouchEnd: function handleTouchEnd(event) {
      this.isTouching = false;
      var offsetSize = this.state.offsetSize;
      this.endValue = offsetSize;
      var breakpoint = this.maxOffsetSize / 2;
      var absOffsetSize = Math.abs(offsetSize);

      if (absOffsetSize > breakpoint) {
        this._reset(true);

        this.handleOpened(event);
        return;
      }

      this._reset(false); // TODO: Check behavior


      this.handleClosed(event);
    },

    /**
     *
     * @param {{width: number}} param0
     */
    handleDomInfo: function handleDomInfo(_ref3) {
      var width = _ref3.width;
      var _isOpened = this.state._isOpened;
      this.maxOffsetSize = width;

      this._reset(_isOpened);
    },

    /**
     *
     * @param {{text: string, style?: object | string, className?: object | string | string[]}} item
     * @param {number} index
     * @param {event} event
     */
    handleClick: function handleClick(item, index, event) {
      var onClick = this.onClick,
          autoClose = this.autoClose;

      if (typeof onClick === 'function') {
        onClick(item, index, event);
      }

      if (autoClose) {
        this._reset(false);

        this.handleClosed(event);
      }
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var _this$state = this.state,
        offsetSize = _this$state.offsetSize,
        componentId = _this$state.componentId;
    var options = this.options;
    var rootClass = _classnames_2_2_6_classnames('at-swipe-action', this.className);
    var transform = this.computeTransform(offsetSize);
    var transformStyle = transform ? {
      transform: transform
    } : {};
    return h("view", {
      "attrs": {
        "id": "swipeAction-".concat(componentId)
      },
      "class": rootClass,
      "on": {
        "touchMove": this.handleTouchMove,
        "touchEnd": this.handleTouchEnd,
        "touchStart": this.handleTouchStart
      }
    }, [h("view", {
      "class": _classnames_2_2_6_classnames('at-swipe-action__content', {
        animtion: !this.isTouching
      }),
      "style": transformStyle
    }, [this.$slots.default]), Array.isArray(options) && options.length > 0 ? h(AtSwipeActionOptions, {
      "attrs": {
        "options": options,
        "componentId": componentId
      },
      "on": {
        "queryedDom": this.handleDomInfo
      }
    }, [options.map(function (item, key) {
      return h("view", {
        "key": "".concat(item.text, "-").concat(key),
        "style": item.style,
        "on": {
          "tap": function tap(e) {
            return _this2.handleClick(item, key, e);
          }
        },
        "class": _classnames_2_2_6_classnames('at-swipe-action__option', item.className)
      }, [h("view", {
        "class": "option__text"
      }, [item.text])]);
    })]) : null]);
  }
};

var index$j = {
  name: 'AtLoadMore',
  props: {
    customStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    noMoreTextStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    moreBtnStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    status: {
      type: String,
      default: 'more',
      validator: function validator(val) {
        return ['more', 'loading', 'noMore'].includes(val);
      }
    },
    loadingText: {
      type: String,
      default: '加载中'
    },
    moreText: {
      type: String,
      default: '查看更多'
    },
    noMoreText: {
      type: String,
      default: '没有更多'
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  methods: {},
  render: function render() {
    var h = arguments[0];
    var className = this.className,
        customStyle = this.customStyle,
        loadingText = this.loadingText,
        moreText = this.moreText,
        status = this.status,
        moreBtnStyle = this.moreBtnStyle,
        noMoreTextStyle = this.noMoreTextStyle,
        noMoreText = this.noMoreText;
    var component;

    if (status === 'loading') {
      component = h(AtActivityIndicator, {
        "attrs": {
          "mode": "center",
          "content": loadingText
        }
      });
    } else if (status === 'more') {
      component = h("view", {
        "class": "at-load-more__cnt"
      }, [h(Button, {
        "attrs": {
          "full": true,
          "customStyle": moreBtnStyle
        },
        "on": {
          "tap": this.onClick
        }
      }, [moreText])]);
    } else {
      component = h("view", {
        "class": "at-load-more__tip",
        "style": noMoreTextStyle
      }, [noMoreText]);
    }

    return h("view", {
      "class": _classnames_2_2_6_classnames('at-load-more', className),
      "style": customStyle
    }, [component]);
  }
};

var index$k = {
  name: 'AtDivider',
  props: {
    content: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 0
    },
    fontColor: {
      type: String,
      default: ''
    },
    fontSize: {
      type: Number,
      default: 0
    },
    lineColor: {
      type: String,
      default: ''
    },
    className: {
      type: [Object, String],
      default: function _default() {}
    }
  },
  render: function render() {
    var h = arguments[0];
    var className = this.className,
        customStyle = this.customStyle,
        content = this.content,
        height = this.height,
        fontColor = this.fontColor,
        fontSize = this.fontSize,
        lineColor = this.lineColor;
    var rootStyle = {
      height: height ? "".concat(Taro.pxTransform(Number(height))) : ''
    };
    var fontStyle = {
      color: fontColor,
      'font-size': fontSize ? "".concat(Taro.pxTransform(Number(fontSize))) : ''
    };
    var lineStyle = {
      backgroundColor: lineColor
    };
    return h("view", {
      "class": _classnames_2_2_6_classnames('at-divider', className),
      "style": this.$mergeStyle(rootStyle, customStyle)
    }, [h("view", {
      "class": "at-divider__content",
      "style": fontStyle
    }, [content === '' ? this.$slots.default : content]), h("view", {
      "class": "at-divider__line",
      "style": lineStyle
    })]);
  }
};

/**
 *
 * @param {number} num
 */
var formatNum = function formatNum(num) {
  return num <= 9 ? "0".concat(num) : "".concat(num);
};

var CountdownItem = {
  name: 'AtCountdownItem',
  props: {
    num: {
      type: Number,
      default: 0
    },
    separator: {
      type: String,
      default: ''
    }
  },
  render: function render() {
    var h = arguments[0];
    var num = this.num,
        separator = this.separator;
    return h("view", {
      "class": "at-countdown__item"
    }, [h("view", {
      "class": "at-countdown__time-box"
    }, [h("view", {
      "class": "at-countdown__time"
    }, [formatNum(num)])]), h("view", {
      "class": "at-countdown__separator"
    }, [separator])]);
  }
};

/**
 *
 * @param {number} day
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 */

var toSeconds = function toSeconds(day, hours, minutes, seconds) {
  return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
};

var index$l = {
  name: 'AtCountdown',
  props: {
    customStyle: {
      type: [String, Object],
      default: function _default() {}
    },
    className: {
      type: [String, Array],
      default: ''
    },
    isCard: {
      type: Boolean,
      default: false
    },
    isShowDay: {
      type: Boolean,
      default: false
    },
    isShowHour: {
      type: Boolean,
      default: true
    },
    format: {
      type: Object,
      default: function _default() {
        return {
          day: '天',
          hours: '时',
          minutes: '分',
          seconds: '秒'
        };
      }
    },
    day: {
      type: Number,
      default: 0
    },
    hours: {
      type: Number,
      default: 0
    },
    minutes: {
      type: Number,
      default: 0
    },
    seconds: {
      type: Number,
      default: 0
    },
    handleTimeUp: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    var day = this.day,
        hours = this.hours,
        minutes = this.minutes,
        seconds = this.seconds;
    var stateSeconds = toSeconds(day, hours, minutes, seconds);
    var state = this.calculateTime();
    return {
      state: state,
      stateSeconds: stateSeconds,
      timer: null
    };
  },
  mounted: function mounted() {
    this.setTimer();
  },
  beforeDestroy: function beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    calculateTime: function calculateTime() {
      var day = 0,
          hours = 0,
          minutes = 0,
          seconds = 0;

      if (this.stateSeconds > 0) {
        day = this.isShowDay ? Math.floor(this.stateSeconds / (60 * 60 * 24)) : 0;
        hours = Math.floor(this.stateSeconds / (60 * 60)) - day * 24;
        minutes = Math.floor(this.stateSeconds / 60) - day * 24 * 60 - hours * 60;
        seconds = Math.floor(this.stateSeconds) - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
      }

      return {
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    },
    setTimer: function setTimer() {
      if (!this.timer) this.countdonwn();
    },
    clearTimer: function clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    countdonwn: function countdonwn() {
      var _this = this;

      this.state = this.calculateTime();
      this.stateSeconds--;

      if (this.stateSeconds < 0) {
        this.clearTimer();
        this.onTimeUp && this.onTimeUp();
        return;
      }

      this.timer = setTimeout(function () {
        _this.countdonwn();
      }, 1000);
    }
  },
  render: function render() {
    var h = arguments[0];
    var isShowDay = this.isShowDay,
        isShowHour = this.isShowHour,
        className = this.className,
        customStyle = this.customStyle,
        isCard = this.isCard,
        format = this.format;
    var _this$state = this.state,
        day = _this$state.day,
        hours = _this$state.hours,
        minutes = _this$state.minutes,
        seconds = _this$state.seconds;
    return h("view", {
      "class": _classnames_2_2_6_classnames({
        'at-countdown': true,
        'at-countdown--card': isCard
      }, className),
      "style": customStyle
    }, [isShowDay && h(CountdownItem, {
      "attrs": {
        "num": day,
        "separator": format.day
      }
    }), isShowHour && h(CountdownItem, {
      "attrs": {
        "num": hours,
        "separator": format.hours
      }
    }), h(CountdownItem, {
      "attrs": {
        "num": minutes,
        "separator": format.minutes
      }
    }), h(CountdownItem, {
      "attrs": {
        "num": seconds,
        "separator": format.seconds
      }
    })]);
  }
};

var index$m = {
  name: 'AtSteps',
  props: {
    customStyle: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    },
    className: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    },
    current: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      },
      validator: function validator(ary) {
        return ary.every(function (item) {
          return Array.isArray(item) || typeof item === 'string';
        });
      }
    },
    onChange: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  methods: {
    handleClick: function handleClick(event) {
      this.onClick && this.onClick(event);
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        items = this.items,
        current = this.current;
    return h("view", {
      "class": _classnames_2_2_6_classnames('at-steps', className),
      "style": customStyle
    }, [!!items && items.map(function (item, i) {
      var _classNames;

      return h("view", {
        "key": item.title,
        "class": _classnames_2_2_6_classnames({
          'at-steps__item': true,
          'at-steps__item--active': i === current,
          'at-steps__item--inactive': i !== current
        }),
        "on": {
          "click": _this.handleClick.bind(_this, i)
        }
      }, [h("view", {
        "class": "at-steps__circular-wrap"
      }, [i !== 0 && h("view", {
        "class": "at-steps__left-line"
      }), item.status ? h("view", {
        "class": _classnames_2_2_6_classnames({
          'at-icon': true,
          'at-icon-check-circle': item.status === 'success',
          'at-icon-close-circle': item.status === 'error',
          'at-steps__single-icon': true,
          'at-steps__single-icon--success': item.status === 'success',
          'at-steps__single-icon--error': item.status === 'error'
        })
      }) : h("view", {
        "class": "at-steps__circular"
      }, [item.icon ? h("view", {
        "class": _classnames_2_2_6_classnames('at-icon', (_classNames = {}, _defineProperty(_classNames, "at-icon-".concat(item.icon.value), item.icon.value), _defineProperty(_classNames, 'at-steps__circle-icon', true), _classNames))
      }) : h("view", {
        "class": "at-steps__num"
      }, [i + 1])]), i !== items.length - 1 && h("view", {
        "class": "at-steps__right-line"
      })]), h("view", {
        "class": "at-steps__title"
      }, [item.title]), h("view", {
        "class": "at-steps__desc"
      }, [item.desc])]);
    })]);
  }
};

var index$n = {
  name: 'AtCurtain',
  props: {
    customStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    closeBtnPosition: {
      type: String,
      default: 'bottom'
    },
    onClose: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    handleTab: function handleTab(event) {
      event.stopPropagation();
      console.log(this.onClose);
      this.onClose && this.onClose(event);
    },
    stopPropagation: function stopPropagation(event) {
      event.stopPropagation();
    }
  },
  render: function render() {
    var h = arguments[0];
    var className = this.className,
        customStyle = this.customStyle,
        isOpened = this.isOpened,
        closeBtnPosition = this.closeBtnPosition;
    var curtainClass = _classnames_2_2_6_classnames({
      'at-curtain': true,
      'at-curtain--closed': !isOpened
    }, className);
    var btnCloseClass = _classnames_2_2_6_classnames(_defineProperty({
      'at-curtain__btn-close': true
    }, "at-curtain__btn-close--".concat(closeBtnPosition), closeBtnPosition));
    return h("view", {
      "class": curtainClass,
      "style": customStyle,
      "on": {
        "tap": this.stopPropagation
      }
    }, [h("view", {
      "class": "at-curtain__container"
    }, [h("view", {
      "class": "at-curtain__body"
    }, [this.$slots.default, h("view", {
      "class": btnCloseClass,
      "on": {
        "tap": this.handleTab
      }
    })])])]);
  }
};

var index$o = {
  name: 'AtMessage',
  mixins: [mixins],
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    }
  },
  data: function data() {
    return {
      timer: null,
      state: {
        _isOpened: false,
        _message: '',
        _type: 'info',
        _duration: 3000
      }
    };
  },
  mounted: function mounted() {
    this.bindMessageListener();
  },
  beforeDestroy: function beforeDestroy() {
    Taro$1.eventCenter.off('atMessage');
  },
  methods: {
    bindMessageListener: function bindMessageListener() {
      var _this = this;

      Taro$1.eventCenter.on('atMessage', function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var message = options.message,
            type = options.type,
            duration = options.duration;
        var newState = {
          _isOpened: true,
          _message: message,
          _type: type,
          _duration: duration || _this.state._duration
        };

        _this.setState(newState, function () {
          clearTimeout(_this.timer);
          _this.timer = setTimeout(function () {
            _this.setState({
              _isOpened: false
            });
          }, _this.state._duration);
        });
      }); // 绑定函数

      Taro$1.atMessage = Taro$1.eventCenter.trigger.bind(Taro$1.eventCenter, 'atMessage');
    }
  },
  render: function render() {
    var h = arguments[0];
    var className = this.className,
        customStyle = this.customStyle;
    var _this$state = this.state,
        _message = _this$state._message,
        _isOpened = _this$state._isOpened,
        _type = _this$state._type;
    var rootCls = _classnames_2_2_6_classnames({
      'at-message': true,
      'at-message--show': _isOpened,
      'at-message--hidden': !_isOpened
    }, "at-message--".concat(_type), className);
    return h("view", {
      "class": rootCls,
      "style": customStyle
    }, [_message]);
  }
};

var ENV$2 = Taro$1.getEnv();
var index$p = {
  name: 'AtIndexes',
  mixins: [mixins],
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    },
    animation: {
      type: Boolean,
      default: false
    },
    isVibrate: {
      type: Boolean,
      default: true
    },
    isShowToast: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    topKey: {
      type: String,
      default: 'Top'
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onScrollIntoView: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  data: function data() {
    return {
      // 右侧导航高度
      menuHeight: 0,
      // 右侧导航距离顶部高度
      startTop: 0,
      // 右侧导航元素高度
      itemHeight: 0,
      // 当前索引
      currentIndex: -1,
      listId: isTest() ? 'indexes-list-AOTU2018' : "list-".concat(uuid()),
      timeoutTimerL: null,
      state: {
        _scrollIntoView: '',
        _scrollTop: 0,
        _tipText: '',
        _isShowToast: false,
        isWEB: Taro$1.getEnv() === Taro$1.ENV_TYPE.WEB
      }
    };
  },
  computed: {
    listLen: function listLen() {
      return this.list.length;
    }
  },
  watch: {
    listLen: function listLen() {
      this.initData();
    }
  },
  beforeMount: function beforeMount() {
    this.onScrollIntoView && this.onScrollIntoView(this.__jumpTarget.bind(this));
  },
  mounted: function mounted() {
    if (ENV$2 === Taro$1.ENV_TYPE.WEB) {
      this.listRef = document.getElementById(this.listId);
    }

    this.initData();
  },
  methods: {
    handleClick: function handleClick(item) {
      this.onClick && this.onClick(item);
    },
    handleTouchMove: function handleTouchMove(event) {
      event.stopPropagation();
      event.preventDefault();
      var list = this.list;
      var pageY = event.touches[0].pageY;
      var index = Math.floor((pageY - this.startTop) / this.itemHeight);

      if (index >= 0 && index <= list.length && this.currentIndex !== index) {
        this.currentIndex = index;
        var key = index > 0 ? list[index - 1].key : 'top';
        var touchView = "at-indexes__list-".concat(key);
        this.jumpTarget(touchView, index);
      }
    },
    handleTouchEnd: function handleTouchEnd() {
      this.currentIndex = -1;
    },

    /**
     *
     * @param {string} _scrollIntoView
     * @param {number} idx
     */
    jumpTarget: function jumpTarget(_scrollIntoView, idx) {
      var _this = this;

      var topKey = this.topKey,
          list = this.list;

      var _tipText = idx === 0 ? topKey : list[idx - 1].key;

      if (ENV$2 === Taro$1.ENV_TYPE.WEB) {
        delayQuerySelector(this, '.at-indexes', 0).then(function (rect) {
          var targetOffsetTop = _this.listRef.childNodes[idx].offsetTop;

          var _scrollTop = targetOffsetTop - rect[0].top;

          _this.updateState({
            _scrollTop: _scrollTop,
            _scrollIntoView: _scrollIntoView,
            _tipText: _tipText
          });
        });
        return;
      }

      this.updateState({
        _scrollIntoView: _scrollIntoView,
        _tipText: _tipText
      });
    },

    /**
     *
     * @param {string} key
     */
    __jumpTarget: function __jumpTarget(key) {
      var list = this.list; // const index = _findIndex(list, ['key', key])

      var index = list.findIndex(function (item) {
        return item.key === key;
      });
      var targetView = "at-indexes__list-".concat(key);
      this.jumpTarget(targetView, index + 1);
    },
    updateState: function updateState(state) {
      var _this2 = this;

      var isShowToast = this.isShowToast,
          isVibrate = this.isVibrate;
      var _scrollIntoView = state._scrollIntoView,
          _tipText = state._tipText,
          _scrollTop = state._scrollTop; // TODO: Fix dirty hack

      this.setState({
        _scrollIntoView: _scrollIntoView,
        _tipText: _tipText,
        _scrollTop: _scrollTop,
        _isShowToast: isShowToast
      }, function () {
        clearTimeout(_this2.timeoutTimer);
        _this2.timeoutTimer = setTimeout(function () {
          _this2.setState({
            _tipText: '',
            _isShowToast: false
          });
        }, 3000);
      });

      if (isVibrate) {
        Taro$1.vibrateShort();
      }
    },
    initData: function initData() {
      var _this3 = this;

      delayQuerySelector(this, '.at-indexes__menu').then(function (rect) {
        var len = _this3.list.length;
        _this3.menuHeight = rect[0].height;
        _this3.startTop = rect[0].top;
        _this3.itemHeight = Math.floor(_this3.menuHeight / (len + 1));
      });
    },
    handleScroll: function handleScroll(e) {
      if (e && e.detail) {
        this.setState({
          _scrollTop: e.detail.scrollTop
        });
      }
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var className = this.className,
        customStyle = this.customStyle,
        animation = this.animation,
        topKey = this.topKey,
        list = this.list;
    var _this$state = this.state,
        _scrollTop = _this$state._scrollTop,
        _scrollIntoView = _this$state._scrollIntoView,
        _tipText = _this$state._tipText,
        _isShowToast = _this$state._isShowToast,
        isWEB = _this$state.isWEB;
    var toastStyle = {
      minWidth: Taro$1.pxTransform(100)
    };
    var rootCls = _classnames_2_2_6_classnames('at-indexes', className);
    var menuList = list.map(function (dataList, i) {
      var key = dataList.key;
      var targetView = "at-indexes__list-".concat(key);
      return h("view", {
        "class": "at-indexes__menu-item",
        "key": key,
        "on": {
          "tap": _this4.jumpTarget.bind(_this4, targetView, i + 1)
        }
      }, [key]);
    });
    var indexesList = list.map(function (dataList) {
      return h("view", {
        "attrs": {
          "id": "at-indexes__list-".concat(dataList.key)
        },
        "class": "at-indexes__list",
        "key": dataList.key
      }, [h("view", {
        "class": "at-indexes__list-title"
      }, [dataList.title]), h(AtList, [dataList.items && dataList.items.map(function (item) {
        return h(AtListItem, {
          "key": item.name,
          "attrs": {
            "title": item.name
          },
          "on": {
            "tap": _this4.handleClick.bind(_this4, item)
          }
        });
      })])]);
    });
    return h("view", {
      "class": rootCls,
      "style": customStyle
    }, [h(AtToast, {
      "attrs": {
        "customStyle": toastStyle,
        "isOpened": _isShowToast,
        "text": _tipText,
        "duration": 2000
      }
    }), h("view", {
      "class": "at-indexes__menu",
      "on": {
        "touchMove": this.handleTouchMove,
        "touchEnd": this.handleTouchEnd
      }
    }, [h("view", {
      "class": "at-indexes__menu-item",
      "on": {
        "tap": this.jumpTarget.bind(this, 'at-indexes__top', 0)
      }
    }, [topKey]), menuList]), h("scroll-view", {
      "class": "at-indexes__body",
      "attrs": {
        "id": this.listId,
        "scrollY": true,
        "scrollWithAnimation": animation,
        "scrollTop": isWEB ? _scrollTop : undefined,
        "scrollIntoView": !isWEB ? _scrollIntoView : ''
      },
      "on": {
        "scroll": this.handleScroll.bind(this)
      }
    }, [h("view", {
      "class": "at-indexes__content",
      "attrs": {
        "id": "at-indexes__top"
      }
    }, [this.$slots.default]), indexesList])]);
  }
};

var index$q = {
  name: 'AtFab',
  props: {
    size: {
      type: String,
      default: 'normal',
      validator: function validator(val) {
        return ['normal', 'small'].includes(val);
      }
    },
    className: {
      type: String,
      default: ''
    },
    handleClick: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    handleTab: function handleTab(event) {
      this.handleClick && this.handleClick(event);
    }
  },
  render: function render() {
    var h = arguments[0];
    var size = this.size,
        className = this.className;
    var rootClass = _classnames_2_2_6_classnames('at-fab', className, _defineProperty({}, "at-fab--".concat(size), size));
    return h("view", {
      "class": rootClass,
      "on": {
        "tab": this.handleTab
      }
    }, [this.$slots.default]);
  }
};

export { index$h as AtAccordion, index as AtActionSheet, index$1 as AtActionSheetItem, AtActivityIndicator, index$2 as AtAvatar, Badge as AtBadge, Button as AtButton, index$3 as AtCard, index$l as AtCountdown, index$n as AtCurtain, index$k as AtDivider, index$q as AtFab, index$4 as AtFloatLayout, index$5 as AtGrid, index$6 as AtIcon, index$p as AtIndexes, AtList, AtListItem, index$j as AtLoadMore, Loading as AtLoading, index$o as AtMessage, index$7 as AtModal, ModalAction as AtModalAction, ModalContent as AtModalContent, ModalHeader as AtModalHeader, index$8 as AtNavBar, index$9 as AtNoticebar, index$a as AtPagination, index$b as AtProgress, index$c as AtSegmentedControl, index$m as AtSteps, index$i as AtSwipeAction, index$d as AtTabBar, index$e as AtTabs, index$f as AtTabsPane, index$g as AtTimeline, AtToast };
//# sourceMappingURL=index.esm.js.map