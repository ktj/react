(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _calculator = require('./calculator');

var _calculator2 = _interopRequireDefault(_calculator);

var _booklist = require('./booklist');

var _booklist2 = _interopRequireDefault(_booklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
	ReactDOM.render(React.createElement(_booklist2.default, null), document.getElementById('container'));
});

},{"./booklist":2,"./calculator":4}],2:[function(require,module,exports){
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

},{"./bookrow":3}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnRFUzYvYXBwLmpzeCIsImNsaWVudEVTNi9ib29rbGlzdC5qc3giLCJjbGllbnRFUzYvYm9va3Jvdy5qc3giLCJjbGllbnRFUzYvY2FsY3VsYXRvci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7OztBQUNBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVztBQUM1QixVQUFTLE1BQVQsQ0FDSSw2Q0FESixFQUVFLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUZGO0FBSUEsQ0FMRDs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7O0lBRXFCLFE7OztBQUNwQixtQkFBWSxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsa0hBQ1gsS0FEVzs7QUFFakIsUUFBSyxLQUFMLEdBQWE7QUFDWixnQkFBWSxFQURBO0FBRVosaUJBQWEsRUFGRDtBQUdaLFNBQUssT0FITztBQUlaLFVBQU0sQ0FBQyxFQUFDLElBQUcsQ0FBSixFQUFNLE9BQU0sY0FBWixFQUEyQixRQUFPLFNBQWxDLEVBQTRDLGFBQVksbUJBQXhELEVBQUQsRUFDQyxFQUFDLElBQUcsQ0FBSixFQUFNLE9BQU0sbUJBQVosRUFBZ0MsUUFBTyxTQUF2QyxFQUFpRCxhQUFZLG1CQUE3RCxFQURELEVBRUMsRUFBQyxJQUFHLENBQUosRUFBTSxPQUFNLFlBQVosRUFBeUIsUUFBTyxTQUFoQyxFQUEwQyxhQUFZLGdCQUF0RCxFQUZEO0FBSk0sR0FBYjtBQVFBLFFBQUssbUJBQUwsR0FBeUIsTUFBSyxtQkFBTCxDQUF5QixJQUF6QixPQUF6QjtBQUNBLFFBQUssa0JBQUwsR0FBd0IsTUFBSyxrQkFBTCxDQUF3QixJQUF4QixPQUF4QjtBQUNBLFFBQUssV0FBTCxHQUFpQixNQUFLLFdBQUwsQ0FBaUIsSUFBakIsT0FBakI7QUFaaUI7QUFhakI7Ozs7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LCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL2NhbGN1bGF0b3InO1xuaW1wb3J0IEJvb2tMaXN0IGZyb20gJy4vYm9va2xpc3QnO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFJlYWN0RE9NLnJlbmRlcihcblx0ICAgIDxCb29rTGlzdC8+LFxuXHQgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuXHQpO1xufSk7IiwiaW1wb3J0IEJvb2tSb3cgZnJvbSAnLi9ib29rcm93JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZUZpbHRlcjpcIlwiLFxuXHRcdFx0YXV0aG9yRmlsdGVyOlwiXCIsXG5cdFx0XHRzb3J0OlwidGl0bGVcIixcblx0XHRcdGJvb2tzOlt7aWQ6MSx0aXRsZTpcIkhhcnJ5IFBvdHRlclwiLGF1dGhvcjpcIlJvd2xpbmdcIixkZXNjcmlwdGlvbjpcIldpemFyZHMgJ24nIHN0dWZmXCJ9LFxuXHRcdFx0ICAgICAgIHtpZDoyLHRpdGxlOlwiTG9yZCBvZiB0aGUgcmluZ3NcIixhdXRob3I6XCJUb2xraWVuXCIsZGVzY3JpcHRpb246XCJIb2JiaXRzICduJyBzdHVmZlwifSxcblx0XHRcdCAgICAgICB7aWQ6Myx0aXRsZTpcIkphbWVzIEJvbmRcIixhdXRob3I6XCJGbGVtaW5nXCIsZGVzY3JpcHRpb246XCJHdW5zICduJyBzdHVmZlwifV1cblx0XHR9XG5cdFx0dGhpcy5hdXRob3JGaWx0ZXJDaGFuZ2VkPXRoaXMuYXV0aG9yRmlsdGVyQ2hhbmdlZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudGl0bGVGaWx0ZXJDaGFuZ2VkPXRoaXMudGl0bGVGaWx0ZXJDaGFuZ2VkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zb3J0Q2hhbmdlZD10aGlzLnNvcnRDaGFuZ2VkLmJpbmQodGhpcyk7XG5cdH1cblxuXHRhdXRob3JGaWx0ZXJDaGFuZ2VkKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHthdXRob3JGaWx0ZXI6ZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG5cdH1cblxuXHR0aXRsZUZpbHRlckNoYW5nZWQoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe3RpdGxlRmlsdGVyOmV2ZW50LnRhcmdldC52YWx1ZX0pO1xuXHR9XG5cblx0c29ydENoYW5nZWQoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe3NvcnQ6ZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHRcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHZhciB0aXRsZUZpbHRlcj0oYm9vayk9PntyZXR1cm4gYm9vay50aXRsZS50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGhpcy5zdGF0ZS50aXRsZUZpbHRlci50b1VwcGVyQ2FzZSgpKX07XG5cdFx0dmFyIGF1dGhvckZpbHRlcj0oYm9vayk9PntyZXR1cm4gYm9vay5hdXRob3IudG9VcHBlckNhc2UoKS5pbmRleE9mKHRoaXMuc3RhdGUuYXV0aG9yRmlsdGVyLnRvVXBwZXJDYXNlKCkpfTtcblx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG5cdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0XHQ8dGg+XG5cdFx0XHRcdFx0XHQ8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLnNvcnRDaGFuZ2VkfSB2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0fT5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInRpdGxlXCI+VGl0bGU8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImF1dGhvclwiPkF1dGhvcjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0PC90aD5cblx0XHRcdFx0XHQ8dGg+PGlucHV0IG9uQ2hhbmdlPXt0aGlzLnRpdGxlRmlsdGVyQ2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUudGl0bGVGaWx0ZXJ9Lz48L3RoPlxuXHRcdFx0XHRcdDx0aD48aW5wdXQgb25DaGFuZ2U9e3RoaXMuYXV0aG9yRmlsdGVyQ2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuYXV0aG9yRmlsdGVyfS8+PC90aD5cblx0XHRcdFx0XHQ8dGg+RGVzY3JpcHRpb248L3RoPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC90aGVhZD5cblx0XHRcdDx0Ym9keT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuYm9va3Ncblx0XHRcdFx0XHQuc29ydCgoYSxiKT0+e1xuXHRcdFx0XHRcdFx0cmV0dXJuIGFbdGhpcy5zdGF0ZS5zb3J0XSA8IGJbdGhpcy5zdGF0ZS5zb3J0XSA/IC0xXG5cdFx0XHRcdFx0XHQ6IGFbdGhpcy5zdGF0ZS5zb3J0XSA+IGJbdGhpcy5zdGF0ZS5zb3J0XSA/IDFcblx0XHRcdFx0XHRcdDogMDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5tYXAoXG5cdFx0XHRcdFx0XHQoYm9vayk9Pntcblx0XHRcdFx0XHRcdFx0aWYodGl0bGVGaWx0ZXIoYm9vayk+PTAgJiYgYXV0aG9yRmlsdGVyKGJvb2spPj0wKXtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPEJvb2tSb3cga2V5PXtib29rLmlkfSBib29rPXtib29rfSAvPlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdDwvdGFibGU+XG5cdH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9O1xuXHRcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gPHRyPlxuXHRcdFx0PHRkPnt0aGlzLnByb3BzLmJvb2suaWR9PC90ZD5cblx0XHRcdDx0ZD57dGhpcy5wcm9wcy5ib29rLnRpdGxlfTwvdGQ+XG5cdFx0XHQ8dGQ+e3RoaXMucHJvcHMuYm9vay5hdXRob3J9PC90ZD5cblx0XHRcdDx0ZD57dGhpcy5wcm9wcy5ib29rLmRlc2NyaXB0aW9ufTwvdGQ+XG5cdFx0PC90cj5cblx0fVxuXG59IiwiY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZT17ZmllbGQxOjAsZmllbGQyOjAsIHJlc3VsdDowfTtcblx0XHR0aGlzLmZpZWxkQ2hhbmdlZD10aGlzLmZpZWxkQ2hhbmdlZC5iaW5kKHRoaXMpO1xuXHR9O1xuXHRcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gPGRpdj5cblx0XHRcdDxwPk51bTE6IFxuXHRcdFx0XHQ8aW5wdXQgbmFtZT1cImZpZWxkMVwiIG9uQ2hhbmdlPXt0aGlzLmZpZWxkQ2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuZmllbGQxfS8+IDwvcD5cblx0XHRcdDxwPk51bTI6IFxuXHRcdFx0XHQ8aW5wdXQgbmFtZT1cImZpZWxkMlwiIG9uQ2hhbmdlPXt0aGlzLmZpZWxkQ2hhbmdlZH0gdmFsdWU9e3RoaXMuc3RhdGUuZmllbGQyfSAvPjwvcD5cblx0XHRcdDxwPlJlc3VsdDoge3RoaXMuc3RhdGUucmVzdWx0fTwvcD5cblx0XHQ8L2Rpdj5cblx0fVxuXHRmaWVsZENoYW5nZWQoZXZlbnQpe1xuXHRcdHRoaXMuc3RhdGVbZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0dGhpcy5zdGF0ZS5yZXN1bHQgPSBwYXJzZUludCh0aGlzLnN0YXRlLmZpZWxkMSkgKyBwYXJzZUludCh0aGlzLnN0YXRlLmZpZWxkMik7XG5cdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcblx0XHRpZih0aGlzLnByb3BzLm9uUmVzdWx0Q2hhbmdlKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uUmVzdWx0Q2hhbmdlKHRoaXMuc3RhdGUucmVzdWx0KTtcblx0XHR9XG5cdH1cbn0iXX0=
