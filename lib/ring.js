'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _get4 = require('babel-runtime/helpers/get');

var _get5 = _interopRequireDefault(_get4);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

function install(_ref) {
  var _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      flow = utils.flow,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var RingAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(RingAttr, _Shape$Attr);

    function RingAttr(subject) {
      (0, _classCallCheck3.default)(this, RingAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (RingAttr.__proto__ || (0, _getPrototypeOf2.default)(RingAttr)).call(this, subject));

      _this.setDefault({
        innerRaius: 10,
        outerRadius: 20,
        startAngle: 0,
        endAngle: Math.PI * 2,
        lineWidth: 1,
        maxRadius: 0 // 当需要绘制多个环且环的半径不一致,为了统一圆心,所设属性
      });
      return _this;
    }

    // 内圆半径


    (0, _createClass3.default)(RingAttr, [{
      key: 'innerRadius',
      set: function set(val) {
        this.clearFlow();
        this.set('innerRadius', val);
      }

      // 外圆半径

    }, {
      key: 'outerRadius',
      set: function set(val) {
        this.clearFlow();
        this.set('outerRadius', val);
      }
    }, {
      key: 'maxRadius',
      set: function set(val) {
        this.clearFlow();
        this.set('maxRadius', val);
      }
    }, {
      key: 'startAngle',
      set: function set(val) {
        this.clearFlow();
        this.set('startAngle', val);
      }
    }, {
      key: 'endAngle',
      set: function set(val) {
        this.clearFlow();
        this.set('endAngle', val);
      }
    }, {
      key: 'center',
      set: function set(val) {
        this.clearFlow();
        this.set('center', val);
      }
    }]);
    return RingAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'innerRadius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'innerRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'outerRadius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'outerRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'maxRadius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'maxRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'endAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'endAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'center', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'center'), _class.prototype)), _class);
  var Ring = (_class2 = (_temp = _class3 = function (_Shape) {
    (0, _inherits3.default)(Ring, _Shape);

    function Ring() {
      (0, _classCallCheck3.default)(this, Ring);
      return (0, _possibleConstructorReturn3.default)(this, (Ring.__proto__ || (0, _getPrototypeOf2.default)(Ring)).apply(this, arguments));
    }

    (0, _createClass3.default)(Ring, [{
      key: 'pointCollision',
      value: function pointCollision(evt) {
        if ((0, _get5.default)(Ring.prototype.__proto__ || (0, _getPrototypeOf2.default)(Ring.prototype), 'pointCollision', this).call(this, evt)) {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;

          var _attr = this.attr('anchor'),
              _attr2 = (0, _slicedToArray3.default)(_attr, 2),
              anchorX = _attr2[0],
              anchorY = _attr2[1];

          var _contentSize = (0, _slicedToArray3.default)(this.contentSize, 2),
              width = _contentSize[0],
              height = _contentSize[1];

          offsetX += width * anchorX;
          offsetY += height * anchorY;

          var r = this.attr('maxRadius');
          var offset = this.attr('outerRadius'); // 偏移量

          if (r <= 0) {
            r = offset;
          }

          offset = r - offset; // 如果未设置maxRadius，偏移量应当０
          var r0 = this.attr('innerRadius');

          var TAU = Math.PI * 2;
          var startAngle = this.attr('startAngle');
          if (startAngle > TAU) {
            startAngle %= TAU;
          } else {
            startAngle = (startAngle + Math.ceil(Math.abs(startAngle) / TAU) * TAU) % TAU;
          }
          var endAngle = this.attr('endAngle') - this.attr('startAngle') + startAngle;

          var d = Math.sqrt(Math.pow(offsetX - r, 2) + Math.pow(offsetY - r, 2));
          var angle = Math.atan2(offsetY - r, offsetX - r);

          if (angle < 0 || endAngle > TAU) {
            angle += TAU;
          }

          return d >= r0 && d <= r - offset && angle >= startAngle && angle <= endAngle;
        }
      }
    }, {
      key: 'render',
      value: function render(t, ctx) {
        (0, _get5.default)(Ring.prototype.__proto__ || (0, _getPrototypeOf2.default)(Ring.prototype), 'render', this).call(this, t, ctx);
        var innerRadius = Math.min(this.attr('innerRadius'), this.attr('outerRadius'));
        var outerRadius = Math.max(this.attr('innerRadius'), this.attr('outerRadius'));

        var lw = this.attr('lineWidth');
        var startAngle = this.startAngle;
        var endAngle = this.endAngle;

        ctx.miterLimit = 0;
        ctx.lineWidth = lw;
        ctx.lineCap = this.attr('lineCap');
        ctx.lineJoin = this.attr('lineJoin');
        ctx.setLineDash(this.attr('lineDash'));
        ctx.lineDashOffset = this.attr('lineDashOffset');
        ctx.strokeStyle = findColor(ctx, this, 'color');
        ctx.fillStyle = findColor(ctx, this, 'fillColor');

        var x = 0,
            y = 0;

        var maxRadius = this.attr('maxRadius');

        if (maxRadius <= 0) {
          maxRadius = outerRadius;
        }

        var lineBoundings = this.lineBoundings;
        ctx.translate(lineBoundings[2] / 2 - x + lw, lineBoundings[3] / 2 - y + lw);

        ctx.beginPath();
        ctx.arc(x, y, outerRadius, startAngle, endAngle, false);
        if (endAngle - startAngle === Math.PI * 2) {
          ctx.moveTo(outerRadius + innerRadius, outerRadius);
        }
        ctx.arc(x, y, innerRadius, endAngle, startAngle, true);
        ctx.closePath();

        ctx.fill();

        if (lw > 0) {
          ctx.stroke();
        }

        return ctx;
      }
    }, {
      key: 'lineBoundings',


      // 边界依赖于最大圆
      get: function get() {
        var maxRadius = this.attr('maxRadius');

        if (maxRadius <= 0) {
          var radius = Math.max(this.attr('innerRadius'), this.attr('outerRadius'));
          maxRadius = radius;
        }

        return [0, 0, 2 * maxRadius, 2 * maxRadius];
      }
    }, {
      key: 'startAngle',
      get: function get() {
        return this.attr('startAngle');
      }
    }, {
      key: 'endAngle',
      get: function get() {
        return this.attr('endAngle');
      }
    }, {
      key: 'contentSize',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _attrSize = (0, _slicedToArray3.default)(this.attrSize, 2),
            width = _attrSize[0],
            height = _attrSize[1];

        if (width === '') {
          width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
        }
        if (height === '') {
          height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
        }

        return [width, height].map(Math.ceil);
      }
    }, {
      key: 'originalRect',
      get: function get() {
        var lineBoundings = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _get2 = (0, _get5.default)(Ring.prototype.__proto__ || (0, _getPrototypeOf2.default)(Ring.prototype), 'originalRect', this),
            _get3 = (0, _slicedToArray3.default)(_get2, 4),
            x = _get3[0],
            y = _get3[1],
            w = _get3[2],
            h = _get3[3];

        var rect = [x - lineBoundings[0] / 2, y - lineBoundings[1] / 2, w, h];

        return rect;
      }
    }]);
    return Ring;
  }(Shape), _class3.Attr = RingAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);


  registerNodeType('ring', Ring);
  return { Ring: Ring };
}