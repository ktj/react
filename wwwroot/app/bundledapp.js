(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _calculator = require('./calculator');

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(
  'h1',
  null,
  'Hello, world!'
), document.getElementById('example'));

},{"./calculator":2}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
	_inherits(Calculator, _React$Component);

	function Calculator(props) {
		_classCallCheck(this, Calculator);

		var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

		_this.state = { field1: 0, field2: 0, result: 0 };
		_this.fieldChanged = _this.fieldChanged.bind(_this);
		return _this;
	}

	_createClass(Calculator, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"p",
					null,
					"Num1:",
					React.createElement("input", { name: "field1", onChange: this.fieldChanged, value: this.state.field1 }),
					" "
				),
				React.createElement(
					"p",
					null,
					"Num2:",
					React.createElement("input", { name: "field2", onChange: this.fieldChanged, value: this.state.field2 })
				),
				React.createElement(
					"p",
					null,
					"Result: ",
					this.state.result
				)
			);
		}
	}, {
		key: "fieldChanged",
		value: function fieldChanged(event) {
			this.state[event.target.name] = event.target.value;
			this.state.result = parseInt(this.state.field1) + parseInt(this.state.field2);
			this.setState(this.state);
			if (this.props.onResultChange) {
				this.props.onResultChange(this.state.result);
			}
		}
	}]);

	return Calculator;
}(React.Component);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnRFUzYvYXBwLmpzeCIsImNsaWVudEVTNi9jYWxjdWxhdG9yLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUNBLFNBQVMsTUFBVCxDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FERixFQUVFLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQUZGOzs7Ozs7Ozs7Ozs7O0lDRE0sVTs7O0FBQ0wscUJBQVksS0FBWixFQUFrQjtBQUFBOztBQUFBLHNIQUNYLEtBRFc7O0FBRWpCLFFBQUssS0FBTCxHQUFXLEVBQUMsUUFBTyxDQUFSLEVBQVUsUUFBTyxDQUFqQixFQUFvQixRQUFPLENBQTNCLEVBQVg7QUFDQSxRQUFLLFlBQUwsR0FBa0IsTUFBSyxZQUFMLENBQWtCLElBQWxCLE9BQWxCO0FBSGlCO0FBSWpCOzs7OzJCQUdPO0FBQ1AsVUFBTztBQUFBO0FBQUE7QUFDTjtBQUFBO0FBQUE7QUFBQTtBQUNDLG9DQUFPLE1BQUssUUFBWixFQUFxQixVQUFVLEtBQUssWUFBcEMsRUFBa0QsT0FBTyxLQUFLLEtBQUwsQ0FBVyxNQUFwRSxHQUREO0FBQUE7QUFBQSxLQURNO0FBR047QUFBQTtBQUFBO0FBQUE7QUFDQyxvQ0FBTyxNQUFLLFFBQVosRUFBcUIsVUFBVSxLQUFLLFlBQXBDLEVBQWtELE9BQU8sS0FBSyxLQUFMLENBQVcsTUFBcEU7QUFERCxLQUhNO0FBS047QUFBQTtBQUFBO0FBQUE7QUFBWSxVQUFLLEtBQUwsQ0FBVztBQUF2QjtBQUxNLElBQVA7QUFPQTs7OytCQUNZLEssRUFBTTtBQUNsQixRQUFLLEtBQUwsQ0FBVyxNQUFNLE1BQU4sQ0FBYSxJQUF4QixJQUFnQyxNQUFNLE1BQU4sQ0FBYSxLQUE3QztBQUNBLFFBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsU0FBUyxLQUFLLEtBQUwsQ0FBVyxNQUFwQixJQUE4QixTQUFTLEtBQUssS0FBTCxDQUFXLE1BQXBCLENBQWxEO0FBQ0EsUUFBSyxRQUFMLENBQWMsS0FBSyxLQUFuQjtBQUNBLE9BQUcsS0FBSyxLQUFMLENBQVcsY0FBZCxFQUE4QjtBQUM3QixTQUFLLEtBQUwsQ0FBVyxjQUFYLENBQTBCLEtBQUssS0FBTCxDQUFXLE1BQXJDO0FBQ0E7QUFDRDs7OztFQXhCdUIsTUFBTSxTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vY2FsY3VsYXRvcic7XG5SZWFjdERPTS5yZW5kZXIoXG4gIDxoMT5IZWxsbywgd29ybGQhPC9oMT4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcbik7IiwiY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZT17ZmllbGQxOjAsZmllbGQyOjAsIHJlc3VsdDowfTtcblx0XHR0aGlzLmZpZWxkQ2hhbmdlZD10aGlzLmZpZWxkQ2hhbmdlZC5iaW5kKHRoaXMpO1xuXHR9O1xuXHRcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gPGRpdj5cblx0XHRcdDxwPk51bTE6IFxuXHRcdFx0XHQ8aW5wdXQgbmFtZT1cImZpZWxkMVwiIG9uQ2hhbmdlPXt0aGlzLmZpZWxkQ2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuZmllbGQxfS8+IDwvcD5cblx0XHRcdDxwPk51bTI6IFxuXHRcdFx0XHQ8aW5wdXQgbmFtZT1cImZpZWxkMlwiIG9uQ2hhbmdlPXt0aGlzLmZpZWxkQ2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuZmllbGQyfSAvPjwvcD5cblx0XHRcdDxwPlJlc3VsdDoge3RoaXMuc3RhdGUucmVzdWx0fTwvcD5cblx0XHQ8L2Rpdj5cblx0fVxuXHRmaWVsZENoYW5nZWQoZXZlbnQpe1xuXHRcdHRoaXMuc3RhdGVbZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0dGhpcy5zdGF0ZS5yZXN1bHQgPSBwYXJzZUludCh0aGlzLnN0YXRlLmZpZWxkMSkgKyBwYXJzZUludCh0aGlzLnN0YXRlLmZpZWxkMik7XG5cdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcblx0XHRpZih0aGlzLnByb3BzLm9uUmVzdWx0Q2hhbmdlKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uUmVzdWx0Q2hhbmdlKHRoaXMuc3RhdGUucmVzdWx0KTtcblx0XHR9XG5cdH1cbn0iXX0=
