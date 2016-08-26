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

},{"./authors":2,"./booklist":3,"./bookmain":4,"./calculator":7}],2:[function(require,module,exports){
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
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bookrow = require('./bookrow');

var _bookrow2 = _interopRequireDefault(_bookrow);

var _bookmodel = require('./bookmodel');

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
			books: _bookmodel.BookModel.books
		};
		_this.authorFilterChanged = _this.authorFilterChanged.bind(_this);
		_this.titleFilterChanged = _this.titleFilterChanged.bind(_this);
		_this.sortChanged = _this.sortChanged.bind(_this);
		_this.receivedBooks = _this.receivedBooks.bind(_this);
		return _this;
	}

	_createClass(BookList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_bookmodel.BookModel.load(this.receivedBooks);
		}
	}, {
		key: 'receivedBooks',
		value: function receivedBooks() {
			this.setState({ books: _bookmodel.BookModel.books });
		}
	}, {
		key: 'authorFilterChanged',
		value: function authorFilterChanged(event) {
			this.setState({ authorFilter: event.target.value });
		}
	}, {
		key: 'titleFilterChanged',
		value: function titleFilterChanged(event) {
			this.setState({ titleFilter: event.target.value });
		}
	}, {
		key: 'sortChanged',
		value: function sortChanged(event) {
			this.setState({ sort: event.target.value });
		}
	}, {
		key: 'render',
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
				'table',
				{ className: 'table' },
				React.createElement(
					'thead',
					null,
					React.createElement(
						'tr',
						null,
						React.createElement(
							'th',
							null,
							React.createElement(
								'select',
								{ onChange: this.sortChanged, value: this.state.sort },
								React.createElement(
									'option',
									{ value: 'title' },
									tx.book.title
								),
								React.createElement(
									'option',
									{ value: 'author' },
									'Author'
								)
							)
						),
						React.createElement(
							'th',
							null,
							React.createElement('input', { onChange: this.titleFilterChanged, value: this.state.titleFilter })
						),
						React.createElement(
							'th',
							null,
							React.createElement('input', { onChange: this.authorFilterChanged, value: this.state.authorFilter })
						),
						React.createElement(
							'th',
							null,
							'Description'
						)
					)
				),
				React.createElement(
					'tbody',
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

},{"./bookmodel":5,"./bookrow":6}],4:[function(require,module,exports){
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

},{"./booklist":3,"./simplemenu":8}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var BookModel = exports.BookModel = {
	books: [],

	load: function load(cb) {
		$.getJSON("/api/books", function (data) {
			BookModel.books = data;
			cb();
		});
	}
};

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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
					"span",
					null,
					React.createElement(
						Link,
						{ to: "/books" },
						"Root"
					),
					" "
				),
				React.createElement(
					"span",
					null,
					React.createElement(
						Link,
						{ to: "/books/authors" },
						"Authors"
					),
					" "
				),
				React.createElement(
					"span",
					null,
					React.createElement(
						Link,
						{ to: "/calc" },
						"Calculator"
					),
					" "
				),
				React.createElement(
					"span",
					null,
					React.createElement(
						Link,
						{ to: "/?lang=fi" },
						"Fi"
					),
					" "
				),
				React.createElement(
					"span",
					null,
					React.createElement(
						Link,
						{ to: "/?lang=en" },
						"En"
					),
					" "
				)
			);
		}
	}]);

	return SimpleMenu;
}(React.Component);

exports.default = SimpleMenu;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnRFUzYvYXBwLmpzeCIsImNsaWVudEVTNi9hdXRob3JzLmpzeCIsImNsaWVudEVTNi9ib29rbGlzdC5qc3giLCJjbGllbnRFUzYvYm9va21haW4uanN4IiwiY2xpZW50RVM2L2Jvb2ttb2RlbC5qc3giLCJjbGllbnRFUzYvYm9va3Jvdy5qc3giLCJjbGllbnRFUzYvY2FsY3VsYXRvci5qc3giLCJjbGllbnRFUzYvc2ltcGxlbWVudS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVc7QUFDNUIsS0FBSSxTQUFPLFlBQVksTUFBdkI7QUFDQSxLQUFJLFFBQU0sWUFBWSxLQUF0QjtBQUNBLEtBQUksYUFBVyxZQUFZLFVBQTNCOztBQUVBLFVBQVMsTUFBVCxDQUNDO0FBQUMsUUFBRDtBQUFBLElBQVEsU0FBUyxZQUFZLGNBQTdCO0FBQ0M7QUFBQyxRQUFEO0FBQUEsS0FBTyxNQUFLLEdBQVosRUFBZ0IsNkJBQWhCO0FBQ0M7QUFBQyxTQUFEO0FBQUEsTUFBTyxNQUFLLE9BQVo7QUFDQyx3QkFBQyxVQUFELElBQVksNkJBQVosR0FERDtBQUVDLHdCQUFDLEtBQUQsSUFBTyxNQUFLLFNBQVosRUFBc0IsNEJBQXRCO0FBRkQsSUFERDtBQUtDLHVCQUFDLEtBQUQsSUFBTyxNQUFLLE9BQVosRUFBb0IsK0JBQXBCO0FBTEQ7QUFERCxFQURELEVBV0UsU0FBUyxjQUFULENBQXdCLFdBQXhCLENBWEY7QUFhQSxDQWxCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNMcUIsTzs7O0FBQ3BCLGtCQUFZLEtBQVosRUFBa0IsT0FBbEIsRUFBMEI7QUFBQTs7QUFBQSxnSEFDbkIsS0FEbUIsRUFDYixPQURhOztBQUV6QixRQUFL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QVQ7QUFBQTtBQUFBLE1BQU47QUFBQTtBQUFBO0FBTkssSUFBUDtBQVFBOzs7O0VBakJzQyxNQUFNLFM7O2tCQUF6QixVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vY2FsY3VsYXRvcic7XG5pbXBvcnQgQm9va01haW4gZnJvbSAnLi9ib29rbWFpbic7XG5pbXBvcnQgQm9va0xpc3QgZnJvbSAnLi9ib29rbGlzdCc7XG5pbXBvcnQgQXV0aG9ycyBmcm9tICcuL2F1dGhvcnMnO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0dmFyIFJvdXRlcj1SZWFjdFJvdXRlci5Sb3V0ZXI7XG5cdHZhciBSb3V0ZT1SZWFjdFJvdXRlci5Sb3V0ZTtcblx0dmFyIEluZGV4Um91dGU9UmVhY3RSb3V0ZXIuSW5kZXhSb3V0ZTtcblxuXHRSZWFjdERPTS5yZW5kZXIoXG5cdFx0PFJvdXRlciBoaXN0b3J5PXtSZWFjdFJvdXRlci5icm93c2VySGlzdG9yeX0+XG5cdFx0XHQ8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0Jvb2tNYWlufT5cblx0XHRcdFx0PFJvdXRlIHBhdGg9XCJib29rc1wiID5cblx0XHRcdFx0XHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0Jvb2tMaXN0fSAvPlxuXHRcdFx0XHRcdDxSb3V0ZSBwYXRoPVwiYXV0aG9yc1wiIGNvbXBvbmVudD17QXV0aG9yc30gLz5cblx0XHRcdFx0PC9Sb3V0ZT5cblx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvY2FsY1wiIGNvbXBvbmVudD17Q2FsY3VsYXRvcn0gLz5cblx0XHRcdDwvUm91dGU+XG5cdFx0PC9Sb3V0ZXI+XG5cdCAgLFxuXHQgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuXHQpO1xufSk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9ycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCl7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dClcblx0XHR0aGlzLmdvQmFjaz10aGlzLmdvQmFjay5iaW5kKHRoaXMpO1xuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiA8ZGl2PlxuXHRcdDxwPkF1dGhvcnM8L3A+XG5cdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdvQmFja30+QmFjazwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHR9XG5cdGdvQmFjayhldmVudCl7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLmNvbnRleHQucm91dGVyLmdvQmFjaygpO1xuXHR9XG59XG5BdXRob3JzLmNvbnRleHRUeXBlcyA9IHtcblx0cm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuXHRoaXN0b3J5OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59IiwiaW1wb3J0IEJvb2tSb3cgZnJvbSAnLi9ib29rcm93JztcbmltcG9ydCB7Qm9va01vZGVsfSBmcm9tICcuL2Jvb2ttb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dGl0bGVGaWx0ZXI6XCJcIixcblx0XHRcdGF1dGhvckZpbHRlcjpcIlwiLFxuXHRcdFx0c29ydDpcInRpdGxlXCIsXG5cdFx0XHRib29rczogQm9va01vZGVsLmJvb2tzXG5cdFx0fVxuXHRcdHRoaXMuYXV0aG9yRmlsdGVyQ2hhbmdlZD10aGlzLmF1dGhvckZpbHRlckNoYW5nZWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRpdGxlRmlsdGVyQ2hhbmdlZD10aGlzLnRpdGxlRmlsdGVyQ2hhbmdlZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc29ydENoYW5nZWQ9dGhpcy5zb3J0Q2hhbmdlZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVjZWl2ZWRCb29rcz10aGlzLnJlY2VpdmVkQm9va3MuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0Qm9va01vZGVsLmxvYWQodGhpcy5yZWNlaXZlZEJvb2tzKTtcblx0fVxuXG5cdHJlY2VpdmVkQm9va3MoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtib29rczpCb29rTW9kZWwuYm9va3N9KTtcblx0fVxuXG5cdGF1dGhvckZpbHRlckNoYW5nZWQoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe2F1dGhvckZpbHRlcjpldmVudC50YXJnZXQudmFsdWV9KTtcblx0fVxuXG5cdHRpdGxlRmlsdGVyQ2hhbmdlZChldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7dGl0bGVGaWx0ZXI6ZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG5cdH1cblxuXHRzb3J0Q2hhbmdlZChldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c29ydDpldmVudC50YXJnZXQudmFsdWV9KTtcdFxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0dmFyIHR4PXRoaXMuY29udGV4dC50eDtcblx0XHR2YXIgdGl0bGVGaWx0ZXI9KGJvb2spPT57cmV0dXJuIGJvb2sudGl0bGUudG9VcHBlckNhc2UoKS5pbmRleE9mKHRoaXMuc3RhdGUudGl0bGVGaWx0ZXIudG9VcHBlckNhc2UoKSl9O1xuXHRcdHZhciBhdXRob3JGaWx0ZXI9KGJvb2spPT57cmV0dXJuIGJvb2suYXV0aG9yLnRvVXBwZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmF1dGhvckZpbHRlci50b1VwcGVyQ2FzZSgpKX07XG5cdFx0cmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuXHRcdFx0PHRoZWFkPlxuXHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRoPlxuXHRcdFx0XHRcdFx0PHNlbGVjdCBvbkNoYW5nZT17dGhpcy5zb3J0Q2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuc29ydH0+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJ0aXRsZVwiPnt0eC5ib29rLnRpdGxlfTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiYXV0aG9yXCI+QXV0aG9yPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHQ8L3RoPlxuXHRcdFx0XHRcdDx0aD48aW5wdXQgb25DaGFuZ2U9e3RoaXMudGl0bGVGaWx0ZXJDaGFuZ2VkfSB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZUZpbHRlcn0vPjwvdGg+XG5cdFx0XHRcdFx0PHRoPjxpbnB1dCBvbkNoYW5nZT17dGhpcy5hdXRob3JGaWx0ZXJDaGFuZ2VkfSB2YWx1ZT17dGhpcy5zdGF0ZS5hdXRob3JGaWx0ZXJ9Lz48L3RoPlxuXHRcdFx0XHRcdDx0aD5EZXNjcmlwdGlvbjwvdGg+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdFx0PHRib2R5PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5ib29rc1xuXHRcdFx0XHRcdC5zb3J0KChhLGIpPT57XG5cdFx0XHRcdFx0XHRyZXR1cm4gYVt0aGlzLnN0YXRlLnNvcnRdIDwgYlt0aGlzLnN0YXRlLnNvcnRdID8gLTFcblx0XHRcdFx0XHRcdDogYVt0aGlzLnN0YXRlLnNvcnRdID4gYlt0aGlzLnN0YXRlLnNvcnRdID8gMVxuXHRcdFx0XHRcdFx0OiAwO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Lm1hcChcblx0XHRcdFx0XHRcdChib29rKT0+e1xuXHRcdFx0XHRcdFx0XHRpZih0aXRsZUZpbHRlcihib29rKT49MCAmJiBhdXRob3JGaWx0ZXIoYm9vayk+PTApe1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8Qm9va1JvdyBrZXk9e2Jvb2suaWR9IGJvb2s9e2Jvb2t9IC8+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH1cblx0XHRcdDwvdGJvZHk+XG5cdFx0PC90YWJsZT5cblx0fVxuXG59XG5cbkJvb2tMaXN0LmNvbnRleHRUeXBlcz17XG5cdHR4OlJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn0iLCJpbXBvcnQgQm9va0xpc3QgZnJvbSAnLi9ib29rbGlzdCc7XG5pbXBvcnQgU2ltcGxlTWVudSBmcm9tICcuL3NpbXBsZW1lbnUnO1xudmFyIFRyYW5zbGF0aW9ucyA9IHtcblx0YnV0dG9uczp7fSxcblx0Ym9vazp7fSxcblx0bG9hZDpmdW5jdGlvbihsb2MsY2Ipe1xuXHRcdCQuZ2V0SlNPTihcInRyYW5zbGF0aW9ucy90cmFuc2xhdGlvbnNfXCIrbG9jK1wiLmpzb25cIixmdW5jdGlvbihkYXRhKXtcblx0XHRcdGZvcih2YXIgayBpbiBkYXRhKXtcblx0XHRcdFx0VHJhbnNsYXRpb25zW2tdPWRhdGFba107XG5cdFx0XHR9XG5cdFx0XHRjYigpO1x0XG5cdFx0fSk7XG5cdFx0XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCl7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHR9XG5cdFx0dGhpcy5nb3RUcmFuc2xhdGlvbnM9dGhpcy5nb3RUcmFuc2xhdGlvbnMuYmluZCh0aGlzKTtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdFRyYW5zbGF0aW9ucy5sb2FkKFwiZmlcIix0aGlzLmdvdFRyYW5zbGF0aW9ucyk7XG5cdH1cblxuXHRnb3RUcmFuc2xhdGlvbnMoKXtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdH1cblxuXHRnZXRDaGlsZENvbnRleHQoKXtcblx0XHRyZXR1cm4ge3R4OlRyYW5zbGF0aW9uc307XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHBvKXtcbiAgICB2YXIgbG9jPXBvLmxvY2F0aW9uLnF1ZXJ5Lmxhbmc7XG4gICAgaWYgKCFsb2MpIHJldHVybjtcblx0XHRUcmFuc2xhdGlvbnMubG9hZChsb2MsdGhpcy5nb3RUcmFuc2xhdGlvbnMpO1xuICB9XG5cblx0cmVuZGVyKCl7XG5cdFx0dmFyIHR4PVRyYW5zbGF0aW9ucztcblx0XHRyZXR1cm4gPGRpdj5cblx0XHRcdDxoMj57dHgudGl0bGV9PC9oMj5cblx0XHRcdDxTaW1wbGVNZW51IC8+XG5cdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbiB8fCA8Qm9va0xpc3QvPn1cblx0XHQ8L2Rpdj5cblx0fVxuXG59XG5cbkJvb2tNYWluLmNoaWxkQ29udGV4dFR5cGVzPXtcbiAgdHg6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTsiLCJleHBvcnQgdmFyIEJvb2tNb2RlbCA9IHtcblx0Ym9va3M6W10sXG5cblx0bG9hZChjYil7XG5cdFx0JC5nZXRKU09OKFwiL2FwaS9ib29rc1wiLGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0Qm9va01vZGVsLmJvb2tzID0gZGF0YTtcblx0XHRcdGNiKCk7XG5cdFx0fSk7XG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fTtcblx0XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIDx0cj5cblx0XHRcdDx0ZD57dGhpcy5wcm9wcy5ib29rLmlkfTwvdGQ+XG5cdFx0XHQ8dGQ+e3RoaXMucHJvcHMuYm9vay50aXRsZX08L3RkPlxuXHRcdFx0PHRkPnt0aGlzLnByb3BzLmJvb2suYXV0aG9yfTwvdGQ+XG5cdFx0XHQ8dGQ+e3RoaXMucHJvcHMuYm9vay5kZXNjcmlwdGlvbn08L3RkPlxuXHRcdDwvdHI+XG5cdH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZT17ZmllbGQxOjAsZmllbGQyOjAsIHJlc3VsdDowfTtcblx0XHR0aGlzLmZpZWxkQ2hhbmdlZD10aGlzLmZpZWxkQ2hhbmdlZC5iaW5kKHRoaXMpO1xuXHR9XG5cdFxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiA8ZGl2PlxuXHRcdFx0PHA+TnVtMTogXG5cdFx0XHRcdDxpbnB1dCBuYW1lPVwiZmllbGQxXCIgb25DaGFuZ2U9e3RoaXMuZmllbGRDaGFuZ2VkfSB2YWx1ZT17dGhpcy5zdGF0ZS5maWVsZDF9Lz4gPC9wPlxuXHRcdFx0PHA+TnVtMjogXG5cdFx0XHRcdDxpbnB1dCBuYW1lPVwiZmllbGQyXCIgb25DaGFuZ2U9e3RoaXMuZmllbGRDaGFuZ2VkfSB2YWx1ZT17dGhpcy5zdGF0ZS5maWVsZDJ9IC8+PC9wPlxuXHRcdFx0PHA+UmVzdWx0OiB7dGhpcy5zdGF0ZS5yZXN1bHR9PC9wPlxuXHRcdDwvZGl2PlxuXHR9XG5cdGZpZWxkQ2hhbmdlZChldmVudCl7XG5cdFx0dGhpcy5zdGF0ZVtldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWVcblx0XHR0aGlzLnN0YXRlLnJlc3VsdCA9IHBhcnNlSW50KHRoaXMuc3RhdGUuZmllbGQxKSArIHBhcnNlSW50KHRoaXMuc3RhdGUuZmllbGQyKTtcblx0XHR0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuXHRcdGlmKHRoaXMucHJvcHMub25SZXN1bHRDaGFuZ2UpIHtcblx0XHRcdHRoaXMucHJvcHMub25SZXN1bHRDaGFuZ2UodGhpcy5zdGF0ZS5yZXN1bHQpO1xuXHRcdH1cblx0fVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZU1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0dmFyIExpbms9UmVhY3RSb3V0ZXIuTGluaztcblx0XHRyZXR1cm4gPGRpdj5cblx0XHRcdFx0PGgxPk1lbnU8L2gxPlxuXHRcdFx0XHQ8c3Bhbj48TGluayB0bz1cIi9ib29rc1wiPlJvb3Q8L0xpbms+IDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4+PExpbmsgdG89XCIvYm9va3MvYXV0aG9yc1wiPkF1dGhvcnM8L0xpbms+IDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4+PExpbmsgdG89XCIvY2FsY1wiPkNhbGN1bGF0b3I8L0xpbms+IDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4+PExpbmsgdG89XCIvP2xhbmc9ZmlcIj5GaTwvTGluaz4gPC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj48TGluayB0bz1cIi8/bGFuZz1lblwiPkVuPC9MaW5rPiA8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0fVxuXG59XG5cbiJdfQ==
