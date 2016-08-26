(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _calculator = require('./calculator');

var _calculator2 = _interopRequireDefault(_calculator);

var _bookmain = require('./bookmain');

var _bookmain2 = _interopRequireDefault(_bookmain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;

	ReactDOM.render(React.createElement(
		Router,
		{ history: ReactRouter.hashHistory },
		React.createElement(
			Route,
			{ path: '/', component: _bookmain2.default },
			React.createElement(Route, { path: '/calc', component: _calculator2.default })
		)
	), document.getElementById('container'));
});

},{"./bookmain":3,"./calculator":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bookrow = require("./bookrow");

var _bookrow2 = _interopRequireDefault(_bookrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookList = function (_React$Component) {
	_inherits(BookList, _React$Component);

	function BookList(props) {
		_classCallCheck(this, BookList);

		var _this = _possibleConstructorReturn(this, (BookList.__proto__ || Object.getPrototypeOf(BookList)).call(this, props));

		_this.state = {
			titleFilter: "",
			authorFilter: "",
			sort: "title",
			books: [{ id: 1, title: "Harry Potter", author: "Rowling", description: "Wizards 'n' stuff" }, { id: 2, title: "Lord of the rings", author: "Tolkien", description: "Hobbits 'n' stuff" }, { id: 3, title: "James Bond", author: "Fleming", description: "Guns 'n' stuff" }]
		};
		_this.authorFilterChanged = _this.authorFilterChanged.bind(_this);
		_this.titleFilterChanged = _this.titleFilterChanged.bind(_this);
		_this.sortChanged = _this.sortChanged.bind(_this);
		return _this;
	}

	_createClass(BookList, [{
		key: "authorFilterChanged",
		value: function authorFilterChanged(event) {
			this.setState({ authorFilter: event.target.value });
		}
	}, {
		key: "titleFilterChanged",
		value: function titleFilterChanged(event) {
			this.setState({ titleFilter: event.target.value });
		}
	}, {
		key: "sortChanged",
		value: function sortChanged(event) {
			this.setState({ sort: event.target.value });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var titleFilter = function titleFilter(book) {
				return book.title.toUpperCase().indexOf(_this2.state.titleFilter.toUpperCase());
			};
			var authorFilter = function authorFilter(book) {
				return book.author.toUpperCase().indexOf(_this2.state.authorFilter.toUpperCase());
			};
			return React.createElement(
				"table",
				{ className: "table" },
				React.createElement(
					"thead",
					null,
					React.createElement(
						"tr",
						null,
						React.createElement(
							"th",
							null,
							React.createElement(
								"select",
								{ onChange: this.sortChanged, value: this.state.sort },
								React.createElement(
									"option",
									{ value: "title" },
									"Title"
								),
								React.createElement(
									"option",
									{ value: "author" },
									"Author"
								)
							)
						),
						React.createElement(
							"th",
							null,
							React.createElement("input", { onChange: this.titleFilterChanged, value: this.state.titleFilter })
						),
						React.createElement(
							"th",
							null,
							React.createElement("input", { onChange: this.authorFilterChanged, value: this.state.authorFilter })
						),
						React.createElement(
							"th",
							null,
							"Description"
						)
					)
				),
				React.createElement(
					"tbody",
					null,
					this.state.books.sort(function (a, b) {
						return a[_this2.state.sort] < b[_this2.state.sort] ? -1 : a[_this2.state.sort] > b[_this2.state.sort] ? 1 : 0;
					}).map(function (book) {
						if (titleFilter(book) >= 0 && authorFilter(book) >= 0) {
							return React.createElement(_bookrow2.default, { key: book.id, book: book });
						}
					})
				)
			);
		}
	}]);

	return BookList;
}(React.Component);

exports.default = BookList;

},{"./bookrow":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _booklist = require('./booklist');

var _booklist2 = _interopRequireDefault(_booklist);

var _simplemenu = require('./simplemenu');

var _simplemenu2 = _interopRequireDefault(_simplemenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookMain = function (_React$Component) {
	_inherits(BookMain, _React$Component);

	function BookMain(props) {
		_classCallCheck(this, BookMain);

		var _this = _possibleConstructorReturn(this, (BookMain.__proto__ || Object.getPrototypeOf(BookMain)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(BookMain, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					' Main Books'
				),
				React.createElement(_simplemenu2.default, null),
				this.props.children || React.createElement(_booklist2.default, null)
			);
		}
	}]);

	return BookMain;
}(React.Component);

exports.default = BookMain;

},{"./booklist":2,"./simplemenu":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookRow = function (_React$Component) {
	_inherits(BookRow, _React$Component);

	function BookRow(props) {
		_classCallCheck(this, BookRow);

		return _possibleConstructorReturn(this, (BookRow.__proto__ || Object.getPrototypeOf(BookRow)).call(this, props));
	}

	_createClass(BookRow, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"tr",
				null,
				React.createElement(
					"td",
					null,
					this.props.book.id
				),
				React.createElement(
					"td",
					null,
					this.props.book.title
				),
				React.createElement(
					"td",
					null,
					this.props.book.author
				),
				React.createElement(
					"td",
					null,
					this.props.book.description
				)
			);
		}
	}]);

	return BookRow;
}(React.Component);

exports.default = BookRow;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

exports.default = Calculator;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleMenu = function (_React$Component) {
	_inherits(SimpleMenu, _React$Component);

	function SimpleMenu(props) {
		_classCallCheck(this, SimpleMenu);

		var _this = _possibleConstructorReturn(this, (SimpleMenu.__proto__ || Object.getPrototypeOf(SimpleMenu)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(SimpleMenu, [{
		key: "render",
		value: function render() {
			var Link = ReactRouter.Link;
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					"Menu"
				),
				React.createElement(
					Link,
					{ to: "/" },
					"Root"
				),
				React.createElement(
					Link,
					{ to: "/calc" },
					"Calculator"
				)
			);
		}
	}]);

	return SimpleMenu;
}(React.Component);

exports.default = SimpleMenu;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnRFUzYvYXBwLmpzeCIsImNsaWVudEVTNi9ib29rbGlzdC5qc3giLCJjbGllbnRFUzYvYm9va21haW4uanN4IiwiY2xpZW50RVM2L2Jvb2tyb3cuanN4IiwiY2xpZW50RVM2L2NhbGN1bGF0b3IuanN4IiwiY2xpZW50RVM2L3NpbXBsZW1lbnUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFDQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVc7QUFDNUIsS0FBSSxTQUFPLFlBQVksTUFBdkI7QUFDQSxLQUFJLFFBQU0sWUFBWSxLQUF0QjtBQUNBLEtBQUksYUFBVyxZQUFZLFVBQTNCOztBQUVBLFVBQVMsTUFBVCxDQUNDO0FBQUMsUUFBRDtBQUFBLElBQVEsU0FBUyxZQUFZLFdBQTdCO0FBQ0M7QUFBQyxRQUFEO0FBQUEsS0FBTyxNQUFLLEdBQVosRUFBZ0IsNkJBQWhCO0FBQ0MsdUJBQUMsS0FBRCxJQUFPLE1BQUssT0FBWixFQUFvQiwrQkFBcEI7QUFERDtBQURELEVBREQsRUFPRSxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FQRjtBQVNBLENBZEQ7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7Ozs7OztJQUVxQixROzs7QUFDcEIsbUJBQVksS0FBWixFQUFrQjtBQUFBOztBQUFBLGtIQUNYLEtBRFc7O0FBRWpCLFFBQUssS0FBTCxHQUFhO0FBQ1osZ0JBQVksRUFEQTtBQUVaLGlCQUFhLEVBRkQ7QUFHWixTQUFLLE9BSE87QUFJWixVQUFNLENBQUMsRUFBQyxJQUFHLENBQUosRUFBTSxPQUFNLGNBQVosRUFBMkIsUUFBTyxTQUFsQyxFQUE0QyxhQUFZLG1CQUF4RCxFQUFELEVBQ0MsRUFBQyxJQUFHLENBQUosRUFBTSxPQUFNLG1CQUFaLEVBQWdDLFFBQU8sU0FBdkMsRUFBaUQs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Iiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL2NhbGN1bGF0b3InO1xuaW1wb3J0IEJvb2tNYWluIGZyb20gJy4vYm9va21haW4nO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdHZhciBSb3V0ZXI9UmVhY3RSb3V0ZXIuUm91dGVyO1xuXHR2YXIgUm91dGU9UmVhY3RSb3V0ZXIuUm91dGU7XG5cdHZhciBJbmRleFJvdXRlPVJlYWN0Um91dGVyLkluZGV4Um91dGU7XG5cblx0UmVhY3RET00ucmVuZGVyKFxuXHRcdDxSb3V0ZXIgaGlzdG9yeT17UmVhY3RSb3V0ZXIuaGFzaEhpc3Rvcnl9PlxuXHRcdFx0PFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtCb29rTWFpbn0+XG5cdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL2NhbGNcIiBjb21wb25lbnQ9e0NhbGN1bGF0b3J9IC8+XG5cdFx0XHQ8L1JvdXRlPlxuXHRcdDwvUm91dGVyPlxuXHQgICxcblx0ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcblx0KTtcbn0pOyIsImltcG9ydCBCb29rUm93IGZyb20gJy4vYm9va3Jvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dGl0bGVGaWx0ZXI6XCJcIixcblx0XHRcdGF1dGhvckZpbHRlcjpcIlwiLFxuXHRcdFx0c29ydDpcInRpdGxlXCIsXG5cdFx0XHRib29rczpbe2lkOjEsdGl0bGU6XCJIYXJyeSBQb3R0ZXJcIixhdXRob3I6XCJSb3dsaW5nXCIsZGVzY3JpcHRpb246XCJXaXphcmRzICduJyBzdHVmZlwifSxcblx0XHRcdCAgICAgICB7aWQ6Mix0aXRsZTpcIkxvcmQgb2YgdGhlIHJpbmdzXCIsYXV0aG9yOlwiVG9sa2llblwiLGRlc2NyaXB0aW9uOlwiSG9iYml0cyAnbicgc3R1ZmZcIn0sXG5cdFx0XHQgICAgICAge2lkOjMsdGl0bGU6XCJKYW1lcyBCb25kXCIsYXV0aG9yOlwiRmxlbWluZ1wiLGRlc2NyaXB0aW9uOlwiR3VucyAnbicgc3R1ZmZcIn1dXG5cdFx0fVxuXHRcdHRoaXMuYXV0aG9yRmlsdGVyQ2hhbmdlZD10aGlzLmF1dGhvckZpbHRlckNoYW5nZWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRpdGxlRmlsdGVyQ2hhbmdlZD10aGlzLnRpdGxlRmlsdGVyQ2hhbmdlZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc29ydENoYW5nZWQ9dGhpcy5zb3J0Q2hhbmdlZC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0YXV0aG9yRmlsdGVyQ2hhbmdlZChldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7YXV0aG9yRmlsdGVyOmV2ZW50LnRhcmdldC52YWx1ZX0pO1xuXHR9XG5cblx0dGl0bGVGaWx0ZXJDaGFuZ2VkKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHt0aXRsZUZpbHRlcjpldmVudC50YXJnZXQudmFsdWV9KTtcblx0fVxuXG5cdHNvcnRDaGFuZ2VkKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHtzb3J0OmV2ZW50LnRhcmdldC52YWx1ZX0pO1x0XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHR2YXIgdGl0bGVGaWx0ZXI9KGJvb2spPT57cmV0dXJuIGJvb2sudGl0bGUudG9VcHBlckNhc2UoKS5pbmRleE9mKHRoaXMuc3RhdGUudGl0bGVGaWx0ZXIudG9VcHBlckNhc2UoKSl9O1xuXHRcdHZhciBhdXRob3JGaWx0ZXI9KGJvb2spPT57cmV0dXJuIGJvb2suYXV0aG9yLnRvVXBwZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmF1dGhvckZpbHRlci50b1VwcGVyQ2FzZSgpKX07XG5cdFx0cmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuXHRcdFx0PHRoZWFkPlxuXHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRoPlxuXHRcdFx0XHRcdFx0PHNlbGVjdCBvbkNoYW5nZT17dGhpcy5zb3J0Q2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuc29ydH0+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJ0aXRsZVwiPlRpdGxlPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJhdXRob3JcIj5BdXRob3I8L29wdGlvbj5cblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDwvdGg+XG5cdFx0XHRcdFx0PHRoPjxpbnB1dCBvbkNoYW5nZT17dGhpcy50aXRsZUZpbHRlckNoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlRmlsdGVyfS8+PC90aD5cblx0XHRcdFx0XHQ8dGg+PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmF1dGhvckZpbHRlckNoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLmF1dGhvckZpbHRlcn0vPjwvdGg+XG5cdFx0XHRcdFx0PHRoPkRlc2NyaXB0aW9uPC90aD5cblx0XHRcdFx0PC90cj5cblx0XHRcdDwvdGhlYWQ+XG5cdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmJvb2tzXG5cdFx0XHRcdFx0LnNvcnQoKGEsYik9Pntcblx0XHRcdFx0XHRcdHJldHVybiBhW3RoaXMuc3RhdGUuc29ydF0gPCBiW3RoaXMuc3RhdGUuc29ydF0gPyAtMVxuXHRcdFx0XHRcdFx0OiBhW3RoaXMuc3RhdGUuc29ydF0gPiBiW3RoaXMuc3RhdGUuc29ydF0gPyAxXG5cdFx0XHRcdFx0XHQ6IDA7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQubWFwKFxuXHRcdFx0XHRcdFx0KGJvb2spPT57XG5cdFx0XHRcdFx0XHRcdGlmKHRpdGxlRmlsdGVyKGJvb2spPj0wICYmIGF1dGhvckZpbHRlcihib29rKT49MCl7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxCb29rUm93IGtleT17Ym9vay5pZH0gYm9vaz17Ym9va30gLz5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXHRcdFx0PC90Ym9keT5cblx0XHQ8L3RhYmxlPlxuXHR9XG5cbn0iLCJpbXBvcnQgQm9va0xpc3QgZnJvbSAnLi9ib29rbGlzdCc7XG5pbXBvcnQgU2ltcGxlTWVudSBmcm9tICcuL3NpbXBsZW1lbnUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va01haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIDxkaXY+XG5cdFx0XHQ8aDI+IE1haW4gQm9va3M8L2gyPlxuXHRcdFx0PFNpbXBsZU1lbnUgLz5cblx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVuIHx8IDxCb29rTGlzdC8+fVxuXHRcdDwvZGl2PlxuXHR9XG5cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va1JvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH07XG5cdFxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiA8dHI+XG5cdFx0XHQ8dGQ+e3RoaXMucHJvcHMuYm9vay5pZH08L3RkPlxuXHRcdFx0PHRkPnt0aGlzLnByb3BzLmJvb2sudGl0bGV9PC90ZD5cblx0XHRcdDx0ZD57dGhpcy5wcm9wcy5ib29rLmF1dGhvcn08L3RkPlxuXHRcdFx0PHRkPnt0aGlzLnByb3BzLmJvb2suZGVzY3JpcHRpb259PC90ZD5cblx0XHQ8L3RyPlxuXHR9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlPXtmaWVsZDE6MCxmaWVsZDI6MCwgcmVzdWx0OjB9O1xuXHRcdHRoaXMuZmllbGRDaGFuZ2VkPXRoaXMuZmllbGRDaGFuZ2VkLmJpbmQodGhpcyk7XG5cdH1cblx0XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIDxkaXY+XG5cdFx0XHQ8cD5OdW0xOiBcblx0XHRcdFx0PGlucHV0IG5hbWU9XCJmaWVsZDFcIiBvbkNoYW5nZT17dGhpcy5maWVsZENoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLmZpZWxkMX0vPiA8L3A+XG5cdFx0XHQ8cD5OdW0yOiBcblx0XHRcdFx0PGlucHV0IG5hbWU9XCJmaWVsZDJcIiBvbkNoYW5nZT17dGhpcy5maWVsZENoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLmZpZWxkMn0gLz48L3A+XG5cdFx0XHQ8cD5SZXN1bHQ6IHt0aGlzLnN0YXRlLnJlc3VsdH08L3A+XG5cdFx0PC9kaXY+XG5cdH1cblx0ZmllbGRDaGFuZ2VkKGV2ZW50KXtcblx0XHR0aGlzLnN0YXRlW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdHRoaXMuc3RhdGUucmVzdWx0ID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5maWVsZDEpICsgcGFyc2VJbnQodGhpcy5zdGF0ZS5maWVsZDIpO1xuXHRcdHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG5cdFx0aWYodGhpcy5wcm9wcy5vblJlc3VsdENoYW5nZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vblJlc3VsdENoYW5nZSh0aGlzLnN0YXRlLnJlc3VsdCk7XG5cdFx0fVxuXHR9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHR2YXIgTGluaz1SZWFjdFJvdXRlci5MaW5rO1xuXHRcdHJldHVybiA8ZGl2PlxuXHRcdFx0XHQ8aDE+TWVudTwvaDE+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL1wiPlJvb3Q8L0xpbms+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL2NhbGNcIj5DYWxjdWxhdG9yPC9MaW5rPlxuXHRcdFx0PC9kaXY+XG5cdH1cblxufVxuXG4iXX0=
