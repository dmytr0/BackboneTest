webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(14);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(2);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	new _app2.default();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone, $) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Cubes = __webpack_require__(6);
	
	var _Cubes2 = _interopRequireDefault(_Cubes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var collectionMain = new _Cubes2.default.Collection();
	exports.default = Backbone.View.extend({
	    initialize: function initialize() {
	        this.listenTo(collectionMain, 'reset', this.render);
	
	        collectionMain.fetch({ reset: true });
	    },
	
	
	    someFunc: function someFunc() {
	        console.log("some func");
	        console.log(this);
	    },
	
	    render: function render() {
	        console.log("app main rendering...");
	
	        $('#app').empty();
	        var view = new _Cubes2.default.View({ collection: collectionMain });
	        var html = view.render().el;
	        $('#app').append(html);
	
	        return this;
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(5)))

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Cubes = __webpack_require__(7);
	
	var _Cubes2 = _interopRequireDefault(_Cubes);
	
	var _Cubes3 = __webpack_require__(13);
	
	var _Cubes4 = _interopRequireDefault(_Cubes3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { View: _Cubes4.default, Collection: _Cubes2.default };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Cube = __webpack_require__(8);
	
	var _Cube2 = _interopRequireDefault(_Cube);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = Backbone.Collection.extend({
	    url: 'http://81.162.233.67/oil/',
	    model: _Cube2.default.Model,
	
	    parse: function parse(data) {
	        return data.content;
	    }
	
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Cube = __webpack_require__(9);
	
	var _Cube2 = _interopRequireDefault(_Cube);
	
	var _Cube3 = __webpack_require__(11);
	
	var _Cube4 = _interopRequireDefault(_Cube3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { View: _Cube4.default, Model: _Cube2.default };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _nopicture = __webpack_require__(10);
	
	var _nopicture2 = _interopRequireDefault(_nopicture);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = Backbone.Model.extend({
	    defaults: {
	        amount: 0.00,
	        image: "",
	        name: "Unknown oil",
	        url: "#"
	    },
	    parse: function parse(resp) {
	        if (resp.image === "/imgbank/Image/no_picture.gif") {
	            resp.image = _nopicture2.default;
	        }
	        return resp;
	    }
	
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ed28d25d624390d34054d70e8d4fe01e.svg";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone, _) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var template = __webpack_require__(12);
	
	exports.default = Backbone.View.extend({
	    template: _.template(template),
	    events: {
	        'click li': 'divHandler'
	    },
	    initialize: function initialize() {
	        this.listenTo(this.model, 'change', this.render);
	    },
	
	    className: 'cube',
	    render: function render() {
	        var html = this.template(this.model.toJSON());
	        this.$el.html(html);
	        return this;
	    },
	    divHandler: function divHandler(e) {
	        this.$el.slideToggle();
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(4)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"imageContainer\">\r\n    <p class=\"figure\"><img src=\"<%= image %>\" alt=\"<%= name %>\" /></p>\r\n</div>\r\n<div class=\"infoContainer\">\r\n    <h1><span><%= id %>. </span> <%= name %></h1>\r\n    <div class=\"oildetails\">\r\n        <p><span>Цена:</span><strong><%= amount %> грн.</strong></p>\r\n        <p>Ссылка:<a href=\"<%= url %>\">Перейти...</a></p>\r\n    </div>\r\n</div>";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Cube = __webpack_require__(8);
	
	var _Cube2 = _interopRequireDefault(_Cube);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = Backbone.View.extend({
	    className: 'cubes',
	
	    render: function render() {
	        this.$el.empty();
	        this.collection.each(this.addOne, this);
	        return this;
	    },
	    addOne: function addOne(cube) {
	        var cube = new _Cube2.default.View({ model: cube });
	        var html = cube.render().el;
	        this.$el.append(html);
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC9hcHAubW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAvYXBwLnZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0N1YmVzL0N1YmVzLk1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ3ViZXMvQ3ViZXMuQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ3ViZXMvQ3ViZS9DdWJlLk1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ3ViZXMvQ3ViZS9DdWJlLk1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWdiYW5rL0ltYWdlL25vcGljdHVyZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0N1YmVzL0N1YmUvQ3ViZS5WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9DdWJlcy9DdWJlL0N1YmUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ3ViZXMvQ3ViZXMuVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcyJdLCJuYW1lcyI6WyJjb2xsZWN0aW9uTWFpbiIsIkNvbGxlY3Rpb24iLCJCYWNrYm9uZSIsIlZpZXciLCJleHRlbmQiLCJpbml0aWFsaXplIiwibGlzdGVuVG8iLCJyZW5kZXIiLCJmZXRjaCIsInJlc2V0Iiwic29tZUZ1bmMiLCJjb25zb2xlIiwibG9nIiwiJCIsImVtcHR5IiwidmlldyIsImNvbGxlY3Rpb24iLCJodG1sIiwiZWwiLCJhcHBlbmQiLCJ1cmwiLCJtb2RlbCIsIk1vZGVsIiwicGFyc2UiLCJkYXRhIiwiY29udGVudCIsImRlZmF1bHRzIiwiYW1vdW50IiwiaW1hZ2UiLCJuYW1lIiwicmVzcCIsInRlbXBsYXRlIiwicmVxdWlyZSIsIl8iLCJldmVudHMiLCJjbGFzc05hbWUiLCJ0b0pTT04iLCIkZWwiLCJkaXZIYW5kbGVyIiwi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YTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OzttQkFFZXRDLFNBQVNDLElBQVQsQ0FBY0MsTUFBZCxDQUFxQjtBQUNoQytCLGdCQUFXLE9BRHFCOztBQUdoQzVCLGFBQVEsa0JBQVc7QUFDZixjQUFLOEIsR0FBTCxDQUFTdkIsS0FBVDtBQUNBLGNBQUtFLFVBQUwsQ0FBZ0J5QixJQUFoQixDQUFxQixLQUFLQyxNQUExQixFQUFrQyxJQUFsQztBQUNBLGdCQUFPLElBQVA7QUFDSCxNQVArQjtBQVFoQ0EsYUFBUSxnQkFBU0MsSUFBVCxFQUFlO0FBQ25CLGFBQUlBLE9BQU8sSUFBSSxlQUFNeEMsSUFBVixDQUFnQixFQUFFa0IsT0FBT3NCLElBQVQsRUFBaEIsQ0FBWDtBQUNBLGFBQUkxQixPQUFPMEIsS0FBS3BDLE1BQUwsR0FBY1csRUFBekI7QUFDQSxjQUFLbUIsR0FBTCxDQUFTbEIsTUFBVCxDQUFpQkYsSUFBakI7QUFDSDtBQVorQixFQUFyQixDOzs7Ozs7O0FDRmYsMEMiLCJmaWxlIjoianMvYXBwLmpzPzQ1NzRiNWYzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2FwcC9hcHAubW9kdWxlJztcclxuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJ1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiLCJpbXBvcnQgQXBwVmlldyBmcm9tICcuL2FwcC52aWV3JztcclxuXHJcbihuZXcgQXBwVmlldyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAvYXBwLm1vZHVsZS5qcyIsImltcG9ydCBDdWJlcyBmcm9tICcuLi9DdWJlcy9DdWJlcy5Nb2R1bGUnO1xyXG5cclxubGV0IGNvbGxlY3Rpb25NYWluID0gbmV3IEN1YmVzLkNvbGxlY3Rpb24oKTtcclxuZXhwb3J0IGRlZmF1bHQgQmFja2JvbmUuVmlldy5leHRlbmQoe1xyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLmxpc3RlblRvKGNvbGxlY3Rpb25NYWluLCAncmVzZXQnLCB0aGlzLnJlbmRlcik7XHJcblxyXG4gICAgICAgIGNvbGxlY3Rpb25NYWluLmZldGNoKHtyZXNldDogdHJ1ZX0pO1xyXG4gICAgICAgfSxcclxuXHJcbiAgICBzb21lRnVuYzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJzb21lIGZ1bmNcIik7XHJcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBwIG1haW4gcmVuZGVyaW5nLi4uXCIpO1xyXG5cclxuICAgICAgICAkKCcjYXBwJykuZW1wdHkoKTtcclxuICAgICAgICBsZXQgdmlldyA9IG5ldyBDdWJlcy5WaWV3KHsgY29sbGVjdGlvbjogY29sbGVjdGlvbk1haW4gfSk7XHJcbiAgICAgICAgbGV0IGh0bWwgPSB2aWV3LnJlbmRlcigpLmVsO1xyXG4gICAgICAgICQoJyNhcHAnKS5hcHBlbmQoaHRtbCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwL2FwcC52aWV3LmpzIiwiaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi9DdWJlcy5Db2xsZWN0aW9uJztcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi9DdWJlcy5WaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtWaWV3LCBDb2xsZWN0aW9ufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvQ3ViZXMvQ3ViZXMuTW9kdWxlLmpzIiwiaW1wb3J0IEN1YmUgZnJvbSAnLi9DdWJlL0N1YmUuTW9kdWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcclxuICAgIHVybDogJ2h0dHA6Ly84MS4xNjIuMjMzLjY3L29pbC8nLFxyXG4gICAgbW9kZWw6IEN1YmUuTW9kZWwsXHJcblxyXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEuY29udGVudDtcclxuICAgIH1cclxuXHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9DdWJlcy9DdWJlcy5Db2xsZWN0aW9uLmpzIiwiaW1wb3J0IE1vZGVsIGZyb20gJy4vQ3ViZS5Nb2RlbCc7XHJcbmltcG9ydCBWaWV3IGZyb20gJy4vQ3ViZS5WaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtWaWV3LCBNb2RlbH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL0N1YmVzL0N1YmUvQ3ViZS5Nb2R1bGUuanMiLCJpbXBvcnQgZW1wdHlJbWcgZnJvbSAnLi4vLi4vLi4vaW1nYmFuay9JbWFnZS9ub3BpY3R1cmUuc3ZnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tib25lLk1vZGVsLmV4dGVuZCh7XHJcbiAgICBkZWZhdWx0czoge1xyXG4gICAgICAgIGFtb3VudDogMC4wMCxcclxuICAgICAgICBpbWFnZTogXCJcIixcclxuICAgICAgICBuYW1lOiBcIlVua25vd24gb2lsXCIsXHJcbiAgICAgICAgdXJsOiBcIiNcIlxyXG4gICAgfSxcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgIGlmKHJlc3AuaW1hZ2UgPT09IFwiL2ltZ2JhbmsvSW1hZ2Uvbm9fcGljdHVyZS5naWZcIil7XHJcbiAgICAgICAgICAgIHJlc3AuaW1hZ2UgPSBlbXB0eUltZztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3A7XHJcbiAgICB9XHJcblxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvQ3ViZXMvQ3ViZS9DdWJlLk1vZGVsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWQyOGQyNWQ2MjQzOTBkMzQwNTRkNzBlOGQ0ZmUwMWUuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nYmFuay9JbWFnZS9ub3BpY3R1cmUuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJsZXQgdGVtcGxhdGUgPSByZXF1aXJlKCdodG1sIS4vQ3ViZS50ZW1wbGF0ZS5odG1sJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XHJcbiAgICB0ZW1wbGF0ZTogXy50ZW1wbGF0ZSh0ZW1wbGF0ZSksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgICAnY2xpY2sgbGknOiAnZGl2SGFuZGxlcidcclxuICAgIH0sXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZScsIHRoaXMucmVuZGVyKTtcclxuICAgIH0sXHJcbiAgICBjbGFzc05hbWU6ICdjdWJlJyxcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBodG1sID0gdGhpcy50ZW1wbGF0ZSh0aGlzLm1vZGVsLnRvSlNPTigpKTtcclxuICAgICAgICB0aGlzLiRlbC5odG1sKGh0bWwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGRpdkhhbmRsZXIoZSkge1xyXG4gICAgICAgIHRoaXMuJGVsLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9DdWJlcy9DdWJlL0N1YmUuVmlldy5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJpbWFnZUNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxwIGNsYXNzPVxcXCJmaWd1cmVcXFwiPjxpbWcgc3JjPVxcXCI8JT0gaW1hZ2UgJT5cXFwiIGFsdD1cXFwiPCU9IG5hbWUgJT5cXFwiIC8+PC9wPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImluZm9Db250YWluZXJcXFwiPlxcclxcbiAgICA8aDE+PHNwYW4+PCU9IGlkICU+LiA8L3NwYW4+IDwlPSBuYW1lICU+PC9oMT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwib2lsZGV0YWlsc1xcXCI+XFxyXFxuICAgICAgICA8cD48c3Bhbj7QptC10L3QsDo8L3NwYW4+PHN0cm9uZz48JT0gYW1vdW50ICU+INCz0YDQvS48L3N0cm9uZz48L3A+XFxyXFxuICAgICAgICA8cD7QodGB0YvQu9C60LA6PGEgaHJlZj1cXFwiPCU9IHVybCAlPlxcXCI+0J/QtdGA0LXQudGC0LguLi48L2E+PC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHRtbC1sb2FkZXIhLi9zcmMvanMvQ3ViZXMvQ3ViZS9DdWJlLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDdWJlcyBmcm9tICcuL0N1YmUvQ3ViZS5Nb2R1bGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFja2JvbmUuVmlldy5leHRlbmQoe1xyXG4gICAgY2xhc3NOYW1lOiAnY3ViZXMnLFxyXG5cclxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy4kZWwuZW1wdHkoKTtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24uZWFjaCh0aGlzLmFkZE9uZSwgdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgYWRkT25lOiBmdW5jdGlvbihjdWJlKSB7XHJcbiAgICAgICAgdmFyIGN1YmUgPSBuZXcgQ3ViZXMuVmlldyAoeyBtb2RlbDogY3ViZSB9KTtcclxuICAgICAgICBsZXQgaHRtbCA9IGN1YmUucmVuZGVyKCkuZWw7XHJcbiAgICAgICAgdGhpcy4kZWwuYXBwZW5kKCBodG1sICk7XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9DdWJlcy9DdWJlcy5WaWV3LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3Mvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9