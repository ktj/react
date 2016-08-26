(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _calculator = require('./calculator');

var _calculator2 = _interopRequireDefault(_calculator);

var _bookmain = require('./bookmain');

var _bookmain2 = _interopRequireDefault(_bookmain);

var _booklist = require('./booklist');

var _booklist2 = _interopRequireDefault(_booklist);

var _authors = require('./authors');

var _authors2 = _interopRequireDefault(_authors);

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
			React.createElement(
				Route,
				{ path: 'books' },
				React.createElement(IndexRoute, { component: _booklist2.default }),
				React.createElement(Route, { path: 'authors', component: _authors2.default })
			),
			React.createElement(Route, { path: '/calc', component: _calculator2.default })
		)
	), document.getElementById('container'));
});

},{"./authors":2,"./booklist":3,"./bookmain":4,"./calculator":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Authors = function (_React$Component) {
	_inherits(Authors, _React$Component);

	function Authors(props, context) {
		_classCallCheck(this, Authors);

		var _this = _possibleConstructorReturn(this, (Authors.__proto__ || Object.getPrototypeOf(Authors)).call(this, props, context));

		_this.goBack = _this.goBack.bind(_this);
		return _this;
	}

	_createClass(Authors, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"p",
					null,
					"Authors"
				),
				React.createElement(
					"button",
					{ onClick: this.goBack },
					"Back"
				)
			);
		}
	}, {
		key: "goBack",
		value: function goBack(event) {
			event.preventDefault();
			this.context.router.goBack();
		}
	}]);

	return Authors;
}(React.Component);

exports.default = Authors;

Authors.contextTypes = {
	router: React.PropTypes.object,
	history: React.PropTypes.object
};

},{}],3:[function(require,module,exports){
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

},{"./bookrow":5}],4:[function(require,module,exports){
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

},{"./booklist":3,"./simplemenu":7}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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
					{ to: "/books" },
					"Root"
				),
				React.createElement(
					Link,
					{ to: "/books/authors" },
					"Authors"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnRFUzYvYXBwLmpzeCIsImNsaWVudEVTNi9hdXRob3JzLmpzeCIsImNsaWVudEVTNi9ib29rbGlzdC5qc3giLCJjbGllbnRFUzYvYm9va21haW4uanN4IiwiY2xpZW50RVM2L2Jvb2tyb3cuanN4IiwiY2xpZW50RVM2L2NhbGN1bGF0b3IuanN4IiwiY2xpZW50RVM2L3NpbXBsZW1lbnUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0EsRUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFXO0FBQzVCLEtBQUksU0FBTyxZQUFZLE1BQXZCO0FBQ0EsS0FBSSxRQUFNLFlBQVksS0FBdEI7QUFDQSxLQUFJLGFBQVcsWUFBWSxVQUEzQjs7QUFFQSxVQUFTLE1BQVQsQ0FDQztBQUFDLFFBQUQ7QUFBQSxJQUFRLFNBQVMsWUFBWSxXQUE3QjtBQUNDO0FBQUMsUUFBRDtBQUFBLEtBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQUNDO0FBQUMsU0FBRDtBQUFBLE1BQU8sTUFBSyxPQUFaO0FBQ0Msd0JBQUMsVUFBRCxJQUFZLDZCQUFaLEdBREQ7QUFFQyx3QkFBQyxLQUFELElBQU8sTUFBSyxTQUFaLEVBQXNCLDRCQUF0QjtBQUZELElBREQ7QUFLQyx1QkFBQyxLQUFELElBQU8sTUFBSyxPQUFaLEVBQW9CLCtCQUFwQjtBQUxEO0FBREQsRUFERCxFQVdFLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQVhGO0FBYUEsQ0FsQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSnFCLE87OztBQUNwQixrQkFBWSxLQUFaLEVBQWtCLE9BQWxCLEVBQTBCO0FBQUE7O0FBQUEsZ0hBQ25CLEtBRG1CLEVBQ2IsT0FEYTs7QUFFekIsUUFBSyxNQUFMLEdBQVksTUFBSyxNQUFMLENBQVks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QUFhLEtBQTdDO0FBQ0EsUUFBSyxLQUFMLENBQVcsTUFBWCxHQUFvQixTQUFTLEtBQUssS0FBTCxDQUFXLE1BQXBCLElBQThCLFNBQVMsS0FBSyxLQUFMLENBQVcsTUFBcEIsQ0FBbEQ7QUFDQSxRQUFLLFFBQUwsQ0FBYyxLQUFLLEtBQW5CO0FBQ0EsT0FBRyxLQUFLLEtBQUwsQ0FBVyxjQUFkLEVBQThCO0FBQzdCLFNBQUssS0FBTCxDQUFXLGNBQVgsQ0FBMEIsS0FBSyxLQUFMLENBQVcsTUFBckM7QUFDQTtBQUNEOzs7O0VBeEJzQyxNQUFNLFM7O2tCQUF6QixVOzs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLFU7OztBQUNwQixxQkFBWSxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsc0hBQ1gsS0FEVzs7QUFFakIsUUFBSyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUlqQjs7OzsyQkFFTztBQUNQLE9BQUksT0FBSyxZQUFZLElBQXJCO0FBQ0EsVUFBTztBQUFBO0FBQUE7QUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREs7QUFFTDtBQUFDLFNBQUQ7QUFBQSxPQUFNLElBQUcsUUFBVDtBQUFBO0FBQUEsS0FGSztBQUdMO0FBQUMsU0FBRDtBQUFBLE9BQU0sSUFBRyxnQkFBVDtBQUFBO0FBQUEsS0FISztBQUlMO0FBQUMsU0FBRDtBQUFBLE9BQU0sSUFBRyxPQUFUO0FBQUE7QUFBQTtBQUpLLElBQVA7QUFNQTs7OztFQWZzQyxNQUFNLFM7O2tCQUF6QixVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vY2FsY3VsYXRvcic7XG5pbXBvcnQgQm9va01haW4gZnJvbSAnLi9ib29rbWFpbic7XG5pbXBvcnQgQm9va0xpc3QgZnJvbSAnLi9ib29rbGlzdCc7XG5pbXBvcnQgQXV0aG9ycyBmcm9tICcuL2F1dGhvcnMnO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdHZhciBSb3V0ZXI9UmVhY3RSb3V0ZXIuUm91dGVyO1xuXHR2YXIgUm91dGU9UmVhY3RSb3V0ZXIuUm91dGU7XG5cdHZhciBJbmRleFJvdXRlPVJlYWN0Um91dGVyLkluZGV4Um91dGU7XG5cblx0UmVhY3RET00ucmVuZGVyKFxuXHRcdDxSb3V0ZXIgaGlzdG9yeT17UmVhY3RSb3V0ZXIuaGFzaEhpc3Rvcnl9PlxuXHRcdFx0PFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtCb29rTWFpbn0+XG5cdFx0XHRcdDxSb3V0ZSBwYXRoPVwiYm9va3NcIiA+XG5cdFx0XHRcdFx0PEluZGV4Um91dGUgY29tcG9uZW50PXtCb29rTGlzdH0gLz5cblx0XHRcdFx0XHQ8Um91dGUgcGF0aD1cImF1dGhvcnNcIiBjb21wb25lbnQ9e0F1dGhvcnN9IC8+XG5cdFx0XHRcdDwvUm91dGU+XG5cdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL2NhbGNcIiBjb21wb25lbnQ9e0NhbGN1bGF0b3J9IC8+XG5cdFx0XHQ8L1JvdXRlPlxuXHRcdDwvUm91dGVyPlxuXHQgICxcblx0ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcblx0KTtcbn0pOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpe1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpXG5cdFx0dGhpcy5nb0JhY2s9dGhpcy5nb0JhY2suYmluZCh0aGlzKTtcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gPGRpdj5cblx0XHQ8cD5BdXRob3JzPC9wPlxuXHRcdDxidXR0b24gb25DbGljaz17dGhpcy5nb0JhY2t9PkJhY2s8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0fVxuXHRnb0JhY2soZXZlbnQpe1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5jb250ZXh0LnJvdXRlci5nb0JhY2soKTtcblx0fVxufVxuQXV0aG9ycy5jb250ZXh0VHlwZXMgPSB7XG5cdHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcblx0aGlzdG9yeTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufSIsImltcG9ydCBCb29rUm93IGZyb20gJy4vYm9va3Jvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dGl0bGVGaWx0ZXI6XCJcIixcblx0XHRcdGF1dGhvckZpbHRlcjpcIlwiLFxuXHRcdFx0c29ydDpcInRpdGxlXCIsXG5cdFx0XHRib29rczpbe2lkOjEsdGl0bGU6XCJIYXJyeSBQb3R0ZXJcIixhdXRob3I6XCJSb3dsaW5nXCIsZGVzY3JpcHRpb246XCJXaXphcmRzICduJyBzdHVmZlwifSxcblx0XHRcdCAgICAgICB7aWQ6Mix0aXRsZTpcIkxvcmQgb2YgdGhlIHJpbmdzXCIsYXV0aG9yOlwiVG9sa2llblwiLGRlc2NyaXB0aW9uOlwiSG9iYml0cyAnbicgc3R1ZmZcIn0sXG5cdFx0XHQgICAgICAge2lkOjMsdGl0bGU6XCJKYW1lcyBCb25kXCIsYXV0aG9yOlwiRmxlbWluZ1wiLGRlc2NyaXB0aW9uOlwiR3VucyAnbicgc3R1ZmZcIn1dXG5cdFx0fVxuXHRcdHRoaXMuYXV0aG9yRmlsdGVyQ2hhbmdlZD10aGlzLmF1dGhvckZpbHRlckNoYW5nZWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRpdGxlRmlsdGVyQ2hhbmdlZD10aGlzLnRpdGxlRmlsdGVyQ2hhbmdlZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc29ydENoYW5nZWQ9dGhpcy5zb3J0Q2hhbmdlZC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0YXV0aG9yRmlsdGVyQ2hhbmdlZChldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7YXV0aG9yRmlsdGVyOmV2ZW50LnRhcmdldC52YWx1ZX0pO1xuXHR9XG5cblx0dGl0bGVGaWx0ZXJDaGFuZ2VkKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHt0aXRsZUZpbHRlcjpldmVudC50YXJnZXQudmFsdWV9KTtcblx0fVxuXG5cdHNvcnRDaGFuZ2VkKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHtzb3J0OmV2ZW50LnRhcmdldC52YWx1ZX0pO1x0XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHR2YXIgdGl0bGVGaWx0ZXI9KGJvb2spPT57cmV0dXJuIGJvb2sudGl0bGUudG9VcHBlckNhc2UoKS5pbmRleE9mKHRoaXMuc3RhdGUudGl0bGVGaWx0ZXIudG9VcHBlckNhc2UoKSl9O1xuXHRcdHZhciBhdXRob3JGaWx0ZXI9KGJvb2spPT57cmV0dXJuIGJvb2suYXV0aG9yLnRvVXBwZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmF1dGhvckZpbHRlci50b1VwcGVyQ2FzZSgpKX07XG5cdFx0cmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuXHRcdFx0PHRoZWFkPlxuXHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRoPlxuXHRcdFx0XHRcdFx0PHNlbGVjdCBvbkNoYW5nZT17dGhpcy5zb3J0Q2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuc29ydH0+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJ0aXRsZVwiPlRpdGxlPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJhdXRob3JcIj5BdXRob3I8L29wdGlvbj5cblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDwvdGg+XG5cdFx0XHRcdFx0PHRoPjxpbnB1dCBvbkNoYW5nZT17dGhpcy50aXRsZUZpbHRlckNoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlRmlsdGVyfS8+PC90aD5cblx0XHRcdFx0XHQ8dGg+PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmF1dGhvckZpbHRlckNoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLmF1dGhvckZpbHRlcn0vPjwvdGg+XG5cdFx0XHRcdFx0PHRoPkRlc2NyaXB0aW9uPC90aD5cblx0XHRcdFx0PC90cj5cblx0XHRcdDwvdGhlYWQ+XG5cdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmJvb2tzXG5cdFx0XHRcdFx0LnNvcnQoKGEsYik9Pntcblx0XHRcdFx0XHRcdHJldHVybiBhW3RoaXMuc3RhdGUuc29ydF0gPCBiW3RoaXMuc3RhdGUuc29ydF0gPyAtMVxuXHRcdFx0XHRcdFx0OiBhW3RoaXMuc3RhdGUuc29ydF0gPiBiW3RoaXMuc3RhdGUuc29ydF0gPyAxXG5cdFx0XHRcdFx0XHQ6IDA7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQubWFwKFxuXHRcdFx0XHRcdFx0KGJvb2spPT57XG5cdFx0XHRcdFx0XHRcdGlmKHRpdGxlRmlsdGVyKGJvb2spPj0wICYmIGF1dGhvckZpbHRlcihib29rKT49MCl7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxCb29rUm93IGtleT17Ym9vay5pZH0gYm9vaz17Ym9va30gLz5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXHRcdFx0PC90Ym9keT5cblx0XHQ8L3RhYmxlPlxuXHR9XG5cbn0iLCJpbXBvcnQgQm9va0xpc3QgZnJvbSAnLi9ib29rbGlzdCc7XG5pbXBvcnQgU2ltcGxlTWVudSBmcm9tICcuL3NpbXBsZW1lbnUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va01haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIDxkaXY+XG5cdFx0XHQ8aDI+IE1haW4gQm9va3M8L2gyPlxuXHRcdFx0PFNpbXBsZU1lbnUgLz5cblx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVuIHx8IDxCb29rTGlzdC8+fVxuXHRcdDwvZGl2PlxuXHR9XG5cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va1JvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH07XG5cdFxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiA8dHI+XG5cdFx0XHQ8dGQ+e3RoaXMucHJvcHMuYm9vay5pZH08L3RkPlxuXHRcdFx0PHRkPnt0aGlzLnByb3BzLmJvb2sudGl0bGV9PC90ZD5cblx0XHRcdDx0ZD57dGhpcy5wcm9wcy5ib29rLmF1dGhvcn08L3RkPlxuXHRcdFx0PHRkPnt0aGlzLnByb3BzLmJvb2suZGVzY3JpcHRpb259PC90ZD5cblx0XHQ8L3RyPlxuXHR9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlPXtmaWVsZDE6MCxmaWVsZDI6MCwgcmVzdWx0OjB9O1xuXHRcdHRoaXMuZmllbGRDaGFuZ2VkPXRoaXMuZmllbGRDaGFuZ2VkLmJpbmQodGhpcyk7XG5cdH1cblx0XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIDxkaXY+XG5cdFx0XHQ8cD5OdW0xOiBcblx0XHRcdFx0PGlucHV0IG5hbWU9XCJmaWVsZDFcIiBvbkNoYW5nZT17dGhpcy5maWVsZENoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLmZpZWxkMX0vPiA8L3A+XG5cdFx0XHQ8cD5OdW0yOiBcblx0XHRcdFx0PGlucHV0IG5hbWU9XCJmaWVsZDJcIiBvbkNoYW5nZT17dGhpcy5maWVsZENoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLmZpZWxkMn0gLz48L3A+XG5cdFx0XHQ8cD5SZXN1bHQ6IHt0aGlzLnN0YXRlLnJlc3VsdH08L3A+XG5cdFx0PC9kaXY+XG5cdH1cblx0ZmllbGRDaGFuZ2VkKGV2ZW50KXtcblx0XHR0aGlzLnN0YXRlW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdHRoaXMuc3RhdGUucmVzdWx0ID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5maWVsZDEpICsgcGFyc2VJbnQodGhpcy5zdGF0ZS5maWVsZDIpO1xuXHRcdHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG5cdFx0aWYodGhpcy5wcm9wcy5vblJlc3VsdENoYW5nZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vblJlc3VsdENoYW5nZSh0aGlzLnN0YXRlLnJlc3VsdCk7XG5cdFx0fVxuXHR9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHR2YXIgTGluaz1SZWFjdFJvdXRlci5MaW5rO1xuXHRcdHJldHVybiA8ZGl2PlxuXHRcdFx0XHQ8aDE+TWVudTwvaDE+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL2Jvb2tzXCI+Um9vdDwvTGluaz5cblx0XHRcdFx0PExpbmsgdG89XCIvYm9va3MvYXV0aG9yc1wiPkF1dGhvcnM8L0xpbms+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL2NhbGNcIj5DYWxjdWxhdG9yPC9MaW5rPlxuXHRcdFx0PC9kaXY+XG5cdH1cblxufVxuXG4iXX0=
