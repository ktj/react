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
		{ history: ReactRouter.browserHistory },
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

			var tx = this.context.tx;
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
									tx.book.title
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


BookList.contextTypes = {
	tx: React.PropTypes.object
};

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

var Translations = {
	buttons: {},
	book: {},
	load: function load(loc, cb) {
		$.getJSON("translations/translations_" + loc + ".json", function (data) {
			for (var k in data) {
				Translations[k] = data[k];
			}
			cb();
		});
	}
};

var BookMain = function (_React$Component) {
	_inherits(BookMain, _React$Component);

	function BookMain(props, context) {
		_classCallCheck(this, BookMain);

		var _this = _possibleConstructorReturn(this, (BookMain.__proto__ || Object.getPrototypeOf(BookMain)).call(this, props, context));

		_this.state = {};
		_this.gotTranslations = _this.gotTranslations.bind(_this);
		return _this;
	}

	_createClass(BookMain, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			Translations.load("fi", this.gotTranslations);
		}
	}, {
		key: 'gotTranslations',
		value: function gotTranslations() {
			this.forceUpdate();
		}
	}, {
		key: 'getChildContext',
		value: function getChildContext() {
			return { tx: Translations };
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(po) {
			var loc = po.location.query.lang;
			if (!loc) return;
			Translations.load(loc, this.gotTranslations);
		}
	}, {
		key: 'render',
		value: function render() {
			var tx = Translations;
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					tx.title
				),
				React.createElement(_simplemenu2.default, null),
				this.props.children || React.createElement(_booklist2.default, null)
			);
		}
	}]);

	return BookMain;
}(React.Component);

exports.default = BookMain;


BookMain.childContextTypes = {
	tx: React.PropTypes.object.isRequired
};

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
				),
				React.createElement(
					Link,
					{ to: "/?lang=fi" },
					"Fi"
				),
				React.createElement(
					Link,
					{ to: "/?lang=en" },
					"En"
				)
			);
		}
	}]);

	return SimpleMenu;
}(React.Component);

exports.default = SimpleMenu;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnRFUzYvYXBwLmpzeCIsImNsaWVudEVTNi9hdXRob3JzLmpzeCIsImNsaWVudEVTNi9ib29rbGlzdC5qc3giLCJjbGllbnRFUzYvYm9va21haW4uanN4IiwiY2xpZW50RVM2L2Jvb2tyb3cuanN4IiwiY2xpZW50RVM2L2NhbGN1bGF0b3IuanN4IiwiY2xpZW50RVM2L3NpbXBsZW1lbnUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsRUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFXO0FBQzVCLEtBQUksU0FBTyxZQUFZLE1BQXZCO0FBQ0EsS0FBSSxRQUFNLFlBQVksS0FBdEI7QUFDQSxLQUFJLGFBQVcsWUFBWSxVQUEzQjs7QUFFQSxVQUFTLE1BQVQsQ0FDQztBQUFDLFFBQUQ7QUFBQSxJQUFRLFNBQVMsWUFBWSxjQUE3QjtBQUNDO0FBQUMsUUFBRDtBQUFBLEtBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQUNDO0FBQUMsU0FBRDtBQUFBLE1BQU8sTUFBSyxPQUFaO0FBQ0Msd0JBQUMsVUFBRCxJQUFZLDZCQUFaLEdBREQ7QUFFQyx3QkFBQyxLQUFELElBQU8sTUFBSyxTQUFaLEVBQXNCLDRCQUF0QjtBQUZELElBREQ7QUFLQyx1QkFBQyxLQUFELElBQU8sTUFBSyxPQUFaLEVBQW9CLCtCQUFwQjtBQUxEO0FBREQsRUFERCxFQVdFLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQVhGO0FBYUEsQ0FsQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDTHFCLE87OztBQUNwQixrQkFBWSxLQUFaLEVBQWtCLE9BQWxCLEVBQTBCO0FBQUE7O0FBQUEsZ0hBQ25CLEtBRG1CLEVBQ2IsT0FEYTs7QUFFekIsUUFBSyxNQUFMLEdBQVksTUFBSyxNQUFMLENBQVks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QUE4QixTQUFTLEtBQUssS0FBTCxDQUFXLE1BQXBCLENBQWxEO0FBQ0EsUUFBSyxRQUFMLENBQWMsS0FBSyxLQUFuQjtBQUNBLE9BQUcsS0FBSyxLQUFMLENBQVcsY0FBZCxFQUE4QjtBQUM3QixTQUFLLEtBQUwsQ0FBVyxjQUFYLENBQTBCLEtBQUssS0FBTCxDQUFXLE1BQXJDO0FBQ0E7QUFDRDs7OztFQXhCc0MsTUFBTSxTOztrQkFBekIsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxVOzs7QUFDcEIscUJBQVksS0FBWixFQUFrQjtBQUFBOztBQUFBLHNIQUNYLEtBRFc7O0FBRWpCLFFBQUssS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFJakI7Ozs7MkJBRU87QUFDUCxPQUFJLE9BQUssWUFBWSxJQUFyQjtBQUNBLFVBQU87QUFBQTtBQUFBO0FBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURLO0FBRUw7QUFBQyxTQUFEO0FBQUEsT0FBTSxJQUFHLFFBQVQ7QUFBQTtBQUFBLEtBRks7QUFHTDtBQUFDLFNBQUQ7QUFBQSxPQUFNLElBQUcsZ0JBQVQ7QUFBQTtBQUFBLEtBSEs7QUFJTDtBQUFDLFNBQUQ7QUFBQSxPQUFNLElBQUcsT0FBVDtBQUFBO0FBQUEsS0FKSztBQUtMO0FBQUMsU0FBRDtBQUFBLE9BQU0sSUFBRyxXQUFUO0FBQUE7QUFBQSxLQUxLO0FBTUw7QUFBQyxTQUFEO0FBQUEsT0FBTSxJQUFHLFdBQVQ7QUFBQTtBQUFBO0FBTkssSUFBUDtBQVFBOzs7O0VBakJzQyxNQUFNLFM7O2tCQUF6QixVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vY2FsY3VsYXRvcic7XG5pbXBvcnQgQm9va01haW4gZnJvbSAnLi9ib29rbWFpbic7XG5pbXBvcnQgQm9va0xpc3QgZnJvbSAnLi9ib29rbGlzdCc7XG5pbXBvcnQgQXV0aG9ycyBmcm9tICcuL2F1dGhvcnMnO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0dmFyIFJvdXRlcj1SZWFjdFJvdXRlci5Sb3V0ZXI7XG5cdHZhciBSb3V0ZT1SZWFjdFJvdXRlci5Sb3V0ZTtcblx0dmFyIEluZGV4Um91dGU9UmVhY3RSb3V0ZXIuSW5kZXhSb3V0ZTtcblxuXHRSZWFjdERPTS5yZW5kZXIoXG5cdFx0PFJvdXRlciBoaXN0b3J5PXtSZWFjdFJvdXRlci5icm93c2VySGlzdG9yeX0+XG5cdFx0XHQ8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0Jvb2tNYWlufT5cblx0XHRcdFx0PFJvdXRlIHBhdGg9XCJib29rc1wiID5cblx0XHRcdFx0XHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0Jvb2tMaXN0fSAvPlxuXHRcdFx0XHRcdDxSb3V0ZSBwYXRoPVwiYXV0aG9yc1wiIGNvbXBvbmVudD17QXV0aG9yc30gLz5cblx0XHRcdFx0PC9Sb3V0ZT5cblx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvY2FsY1wiIGNvbXBvbmVudD17Q2FsY3VsYXRvcn0gLz5cblx0XHRcdDwvUm91dGU+XG5cdFx0PC9Sb3V0ZXI+XG5cdCAgLFxuXHQgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuXHQpO1xufSk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9ycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCl7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dClcblx0XHR0aGlzLmdvQmFjaz10aGlzLmdvQmFjay5iaW5kKHRoaXMpO1xuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiA8ZGl2PlxuXHRcdDxwPkF1dGhvcnM8L3A+XG5cdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdvQmFja30+QmFjazwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHR9XG5cdGdvQmFjayhldmVudCl7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLmNvbnRleHQucm91dGVyLmdvQmFjaygpO1xuXHR9XG59XG5BdXRob3JzLmNvbnRleHRUeXBlcyA9IHtcblx0cm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuXHRoaXN0b3J5OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59IiwiaW1wb3J0IEJvb2tSb3cgZnJvbSAnLi9ib29rcm93JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZUZpbHRlcjpcIlwiLFxuXHRcdFx0YXV0aG9yRmlsdGVyOlwiXCIsXG5cdFx0XHRzb3J0OlwidGl0bGVcIixcblx0XHRcdGJvb2tzOlt7aWQ6MSx0aXRsZTpcIkhhcnJ5IFBvdHRlclwiLGF1dGhvcjpcIlJvd2xpbmdcIixkZXNjcmlwdGlvbjpcIldpemFyZHMgJ24nIHN0dWZmXCJ9LFxuXHRcdFx0ICAgICAgIHtpZDoyLHRpdGxlOlwiTG9yZCBvZiB0aGUgcmluZ3NcIixhdXRob3I6XCJUb2xraWVuXCIsZGVzY3JpcHRpb246XCJIb2JiaXRzICduJyBzdHVmZlwifSxcblx0XHRcdCAgICAgICB7aWQ6Myx0aXRsZTpcIkphbWVzIEJvbmRcIixhdXRob3I6XCJGbGVtaW5nXCIsZGVzY3JpcHRpb246XCJHdW5zICduJyBzdHVmZlwifV1cblx0XHR9XG5cdFx0dGhpcy5hdXRob3JGaWx0ZXJDaGFuZ2VkPXRoaXMuYXV0aG9yRmlsdGVyQ2hhbmdlZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudGl0bGVGaWx0ZXJDaGFuZ2VkPXRoaXMudGl0bGVGaWx0ZXJDaGFuZ2VkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zb3J0Q2hhbmdlZD10aGlzLnNvcnRDaGFuZ2VkLmJpbmQodGhpcyk7XG5cdH1cblxuXHRhdXRob3JGaWx0ZXJDaGFuZ2VkKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHthdXRob3JGaWx0ZXI6ZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG5cdH1cblxuXHR0aXRsZUZpbHRlckNoYW5nZWQoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe3RpdGxlRmlsdGVyOmV2ZW50LnRhcmdldC52YWx1ZX0pO1xuXHR9XG5cblx0c29ydENoYW5nZWQoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe3NvcnQ6ZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHRcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHZhciB0eD10aGlzLmNvbnRleHQudHg7XG5cdFx0dmFyIHRpdGxlRmlsdGVyPShib29rKT0+e3JldHVybiBib29rLnRpdGxlLnRvVXBwZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLnRpdGxlRmlsdGVyLnRvVXBwZXJDYXNlKCkpfTtcblx0XHR2YXIgYXV0aG9yRmlsdGVyPShib29rKT0+e3JldHVybiBib29rLmF1dGhvci50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGhpcy5zdGF0ZS5hdXRob3JGaWx0ZXIudG9VcHBlckNhc2UoKSl9O1xuXHRcdHJldHVybiA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cblx0XHRcdDx0aGVhZD5cblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0aD5cblx0XHRcdFx0XHRcdDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuc29ydENoYW5nZWR9IHZhbHVlPXt0aGlzLnN0YXRlLnNvcnR9PlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwidGl0bGVcIj57dHguYm9vay50aXRsZX08L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImF1dGhvclwiPkF1dGhvcjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0PC90aD5cblx0XHRcdFx0XHQ8dGg+PGlucHV0IG9uQ2hhbmdlPXt0aGlzLnRpdGxlRmlsdGVyQ2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUudGl0bGVGaWx0ZXJ9Lz48L3RoPlxuXHRcdFx0XHRcdDx0aD48aW5wdXQgb25DaGFuZ2U9e3RoaXMuYXV0aG9yRmlsdGVyQ2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuYXV0aG9yRmlsdGVyfS8+PC90aD5cblx0XHRcdFx0XHQ8dGg+RGVzY3JpcHRpb248L3RoPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC90aGVhZD5cblx0XHRcdDx0Ym9keT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuYm9va3Ncblx0XHRcdFx0XHQuc29ydCgoYSxiKT0+e1xuXHRcdFx0XHRcdFx0cmV0dXJuIGFbdGhpcy5zdGF0ZS5zb3J0XSA8IGJbdGhpcy5zdGF0ZS5zb3J0XSA/IC0xXG5cdFx0XHRcdFx0XHQ6IGFbdGhpcy5zdGF0ZS5zb3J0XSA+IGJbdGhpcy5zdGF0ZS5zb3J0XSA/IDFcblx0XHRcdFx0XHRcdDogMDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5tYXAoXG5cdFx0XHRcdFx0XHQoYm9vayk9Pntcblx0XHRcdFx0XHRcdFx0aWYodGl0bGVGaWx0ZXIoYm9vayk+PTAgJiYgYXV0aG9yRmlsdGVyKGJvb2spPj0wKXtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPEJvb2tSb3cga2V5PXtib29rLmlkfSBib29rPXtib29rfSAvPlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdDwvdGFibGU+XG5cdH1cblxufVxuXG5Cb29rTGlzdC5jb250ZXh0VHlwZXM9e1xuXHR0eDpSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59IiwiaW1wb3J0IEJvb2tMaXN0IGZyb20gJy4vYm9va2xpc3QnO1xuaW1wb3J0IFNpbXBsZU1lbnUgZnJvbSAnLi9zaW1wbGVtZW51JztcbnZhciBUcmFuc2xhdGlvbnMgPSB7XG5cdGJ1dHRvbnM6e30sXG5cdGJvb2s6e30sXG5cdGxvYWQ6ZnVuY3Rpb24obG9jLGNiKXtcblx0XHQkLmdldEpTT04oXCJ0cmFuc2xhdGlvbnMvdHJhbnNsYXRpb25zX1wiK2xvYytcIi5qc29uXCIsZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRmb3IodmFyIGsgaW4gZGF0YSl7XG5cdFx0XHRcdFRyYW5zbGF0aW9uc1trXT1kYXRhW2tdO1xuXHRcdFx0fVxuXHRcdFx0Y2IoKTtcdFxuXHRcdH0pO1xuXHRcdFxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpe1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0fVxuXHRcdHRoaXMuZ290VHJhbnNsYXRpb25zPXRoaXMuZ290VHJhbnNsYXRpb25zLmJpbmQodGhpcyk7XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRUcmFuc2xhdGlvbnMubG9hZChcImZpXCIsdGhpcy5nb3RUcmFuc2xhdGlvbnMpO1xuXHR9XG5cblx0Z290VHJhbnNsYXRpb25zKCl7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHR9XG5cblx0Z2V0Q2hpbGRDb250ZXh0KCl7XG5cdFx0cmV0dXJuIHt0eDpUcmFuc2xhdGlvbnN9O1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwbyl7XG4gICAgdmFyIGxvYz1wby5sb2NhdGlvbi5xdWVyeS5sYW5nO1xuICAgIGlmICghbG9jKSByZXR1cm47XG5cdFx0VHJhbnNsYXRpb25zLmxvYWQobG9jLHRoaXMuZ290VHJhbnNsYXRpb25zKTtcbiAgfVxuXG5cdHJlbmRlcigpe1xuXHRcdHZhciB0eD1UcmFuc2xhdGlvbnM7XG5cdFx0cmV0dXJuIDxkaXY+XG5cdFx0XHQ8aDI+e3R4LnRpdGxlfTwvaDI+XG5cdFx0XHQ8U2ltcGxlTWVudSAvPlxuXHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW4gfHwgPEJvb2tMaXN0Lz59XG5cdFx0PC9kaXY+XG5cdH1cblxufVxuXG5Cb29rTWFpbi5jaGlsZENvbnRleHRUeXBlcz17XG4gIHR4OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va1JvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH07XG5cdFxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiA8dHI+XG5cdFx0XHQ8dGQ+e3RoaXMucHJvcHMuYm9vay5pZH08L3RkPlxuXHRcdFx0PHRkPnt0aGlzLnByb3BzLmJvb2sudGl0bGV9PC90ZD5cblx0XHRcdDx0ZD57dGhpcy5wcm9wcy5ib29rLmF1dGhvcn08L3RkPlxuXHRcdFx0PHRkPnt0aGlzLnByb3BzLmJvb2suZGVzY3JpcHRpb259PC90ZD5cblx0XHQ8L3RyPlxuXHR9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGN1bGF0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGU9e2ZpZWxkMTowLGZpZWxkMjowLCByZXN1bHQ6MH07XG5cdFx0dGhpcy5maWVsZENoYW5nZWQ9dGhpcy5maWVsZENoYW5nZWQuYmluZCh0aGlzKTtcblx0fVxuXHRcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gPGRpdj5cblx0XHRcdDxwPk51bTE6IFxuXHRcdFx0XHQ8aW5wdXQgbmFtZT1cImZpZWxkMVwiIG9uQ2hhbmdlPXt0aGlzLmZpZWxkQ2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuZmllbGQxfS8+IDwvcD5cblx0XHRcdDxwPk51bTI6IFxuXHRcdFx0XHQ8aW5wdXQgbmFtZT1cImZpZWxkMlwiIG9uQ2hhbmdlPXt0aGlzLmZpZWxkQ2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuZmllbGQyfSAvPjwvcD5cblx0XHRcdDxwPlJlc3VsdDoge3RoaXMuc3RhdGUucmVzdWx0fTwvcD5cblx0XHQ8L2Rpdj5cblx0fVxuXHRmaWVsZENoYW5nZWQoZXZlbnQpe1xuXHRcdHRoaXMuc3RhdGVbZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0dGhpcy5zdGF0ZS5yZXN1bHQgPSBwYXJzZUludCh0aGlzLnN0YXRlLmZpZWxkMSkgKyBwYXJzZUludCh0aGlzLnN0YXRlLmZpZWxkMik7XG5cdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcblx0XHRpZih0aGlzLnByb3BzLm9uUmVzdWx0Q2hhbmdlKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uUmVzdWx0Q2hhbmdlKHRoaXMuc3RhdGUucmVzdWx0KTtcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHZhciBMaW5rPVJlYWN0Um91dGVyLkxpbms7XG5cdFx0cmV0dXJuIDxkaXY+XG5cdFx0XHRcdDxoMT5NZW51PC9oMT5cblx0XHRcdFx0PExpbmsgdG89XCIvYm9va3NcIj5Sb290PC9MaW5rPlxuXHRcdFx0XHQ8TGluayB0bz1cIi9ib29rcy9hdXRob3JzXCI+QXV0aG9yczwvTGluaz5cblx0XHRcdFx0PExpbmsgdG89XCIvY2FsY1wiPkNhbGN1bGF0b3I8L0xpbms+XG5cdFx0XHRcdDxMaW5rIHRvPVwiLz9sYW5nPWZpXCI+Rmk8L0xpbms+XG5cdFx0XHRcdDxMaW5rIHRvPVwiLz9sYW5nPWVuXCI+RW48L0xpbms+XG5cdFx0XHQ8L2Rpdj5cblx0fVxuXG59XG5cbiJdfQ==
