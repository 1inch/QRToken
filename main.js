(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./issue-cards/issue-cards.module": [
		"./src/app/issue-cards/issue-cards.module.ts",
		"default~issue-cards-issue-cards-module~redeem-redeem-module",
		"issue-cards-issue-cards-module"
	],
	"./redeem/redeem.module": [
		"./src/app/redeem/redeem.module.ts",
		"default~issue-cards-issue-cards-module~redeem-redeem-module",
		"redeem-redeem-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: routes, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/base.component */ "./src/app/base/base.component.ts");
/* harmony import */ var _no_content_no_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./no-content/no-content.component */ "./src/app/no-content/no-content.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/web3.service */ "./src/app/util/web3.service.ts");











var routes = [
    {
        path: '',
        component: _base_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"],
        children: [
            {
                path: '',
                loadChildren: './issue-cards/issue-cards.module#IssueCardsModule'
            },
            {
                path: 'r/:data',
                loadChildren: './redeem/redeem.module#RedeemModule'
            },
            {
                path: 'r2/:data',
                loadChildren: './redeem/redeem.module#RedeemModule'
            }
        ]
    },
    {
        path: '**',
        component: _no_content_no_content_component__WEBPACK_IMPORTED_MODULE_8__["NoContentComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _base_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"],
                _no_content_no_content_component__WEBPACK_IMPORTED_MODULE_8__["NoContentComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes, {
                    enableTracing: false,
                    useHash: true
                })
            ],
            providers: [
                _util_web3_service__WEBPACK_IMPORTED_MODULE_10__["Web3Service"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base/base.component.css":
/*!*****************************************!*\
  !*** ./src/app/base/base.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\n  font-size: 1.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS9iYXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9iYXNlL2Jhc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/base/base.component.html":
/*!******************************************!*\
  !*** ./src/app/base/base.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n  <button (click)=\"goBack()\" [hidden]=\"!navigationService.showBackButton\"\n          class=\"btn btn-link my-2 my-sm-0 text-success mr-auto\" type=\"submit\">\n    <fa-icon [icon]=\"backIcon\" style=\"font-size: 30px;\"></fa-icon>\n  </button>\n\n  <div class=\"ml-auto mr-auto\" style=\"display: flex!important;flex-basis: auto;\">\n    <a routerLink=\"/\" class=\"navbar-brand\">\n      <img alt=\"QRToken\" height=\"50\" src=\"assets/logo.svg\"> QR<strong>Token</strong>\n    </a>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<br>\n<br>\n<h5 style=\"text-align: center\">Smart Contract: <a href=\"https://etherscan.io/address/{{QRTOKEN_SMART_CONTRACT_ADDRESS}}\" target=\"_blank\">{{QRTOKEN_SMART_CONTRACT_ADDRESS}}</a></h5>\n"

/***/ }),

/***/ "./src/app/base/base.component.ts":
/*!****************************************!*\
  !*** ./src/app/base/base.component.ts ***!
  \****************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.service */ "./src/app/base/navigation.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _util_qrtoken_smart_contract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/qrtoken-smart-contract */ "./src/app/util/qrtoken-smart-contract.ts");








var BaseComponent = /** @class */ (function () {
    function BaseComponent(location, navigationService, route, router, web3Service) {
        this.location = location;
        this.navigationService = navigationService;
        this.route = route;
        this.router = router;
        this.web3Service = web3Service;
        this.backIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowLeft"];
        this.QRTOKEN_SMART_CONTRACT_ADDRESS = _util_qrtoken_smart_contract__WEBPACK_IMPORTED_MODULE_7__["QRTOKEN_SMART_CONTRACT_ADDRESS"];
    }
    BaseComponent.prototype.ngOnInit = function () {
    };
    BaseComponent.prototype.goBack = function () {
        this.router.navigate(['../']);
    };
    BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base',
            template: __webpack_require__(/*! ./base.component.html */ "./src/app/base/base.component.html"),
            styles: [__webpack_require__(/*! ./base.component.css */ "./src/app/base/base.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _util_web3_service__WEBPACK_IMPORTED_MODULE_6__["Web3Service"]])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/base/navigation.service.ts":
/*!********************************************!*\
  !*** ./src/app/base/navigation.service.ts ***!
  \********************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.showBackButton = false;
    }
    NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/no-content/no-content.component.css":
/*!*****************************************************!*\
  !*** ./src/app/no-content/no-content.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#not-found {\n  text-align: center;\n}\n\n#not-found,\n#not-found .row\n{\n  height: 100%;\n}\n\n#not-found .row div {\n  background: white;\n  padding: 2rem;\n  border-radius: 0.4rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbm90LWZvdW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbm90LWZvdW5kLFxuI25vdC1mb3VuZCAucm93XG57XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI25vdC1mb3VuZCAucm93IGRpdiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/no-content/no-content.component.html":
/*!******************************************************!*\
  !*** ./src/app/no-content/no-content.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"not-found\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-sm-12\">\n      <h1>Page Not Found!</h1>\n      <p>\n        Seems you're looking for something that doesn't exist. <a routerLink=\"/\">Return home</a>\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/no-content/no-content.component.ts":
/*!****************************************************!*\
  !*** ./src/app/no-content/no-content.component.ts ***!
  \****************************************************/
/*! exports provided: NoContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoContentComponent", function() { return NoContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoContentComponent = /** @class */ (function () {
    function NoContentComponent() {
    }
    NoContentComponent.prototype.ngOnInit = function () {
    };
    NoContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-no-content',
            template: __webpack_require__(/*! ./no-content.component.html */ "./src/app/no-content/no-content.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./no-content.component.css */ "./src/app/no-content/no-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoContentComponent);
    return NoContentComponent;
}());



/***/ }),

/***/ "./src/app/util/qrtoken-smart-contract.ts":
/*!************************************************!*\
  !*** ./src/app/util/qrtoken-smart-contract.ts ***!
  \************************************************/
/*! exports provided: QRTOKEN_SMART_CONTRACT_ADDRESS, QRTOKEN_SMART_CONTRACT_ADDRESS_v1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRTOKEN_SMART_CONTRACT_ADDRESS", function() { return QRTOKEN_SMART_CONTRACT_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRTOKEN_SMART_CONTRACT_ADDRESS_v1", function() { return QRTOKEN_SMART_CONTRACT_ADDRESS_v1; });
var QRTOKEN_SMART_CONTRACT_ADDRESS = '0x1ab601a2e158fbfd44b314e3a9dae742332c7f48';
var QRTOKEN_SMART_CONTRACT_ADDRESS_v1 = '0xE687951e1b7049f4aEa2D6598a20A6f2EAda09CC';


/***/ }),

/***/ "./src/app/util/web3.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/web3.service.ts ***!
  \**************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
var Web3Service = /** @class */ (function () {
    function Web3Service() {
        var _this = this;
        window.addEventListener('load', function (event) {
            _this.bootstrapWeb3();
        });
    }
    Web3Service.prototype.bootstrapWeb3 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!window.ethereum) return [3 /*break*/, 5];
                        window.web3 = new Web3(ethereum);
                        this.web3 = window.web3;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        // Request account access if needed
                        return [4 /*yield*/, ethereum.enable()];
                    case 2:
                        // Request account access if needed
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        // User denied account access...
                        alert('Please connect Metamask to QRToken dApp!');
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        if (typeof window.web3 !== 'undefined') {
                            // Use Mist/MetaMask's provider
                            this.web3 = new Web3(window.web3.currentProvider);
                        }
                        else {
                            console.log('No web3? You should consider trying MetaMask!');
                            // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
                            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
                            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
                            this.web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws'));
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Web3Service.prototype.getAccounts = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
            var scope = _this;
            var callback = function () {
                if (scope.web3) {
                    scope.web3.eth.getAccounts(function (err, accs) {
                        // console.log('Account request', accs);
                        if (err != null) {
                            console.warn('There was an error fetching your accounts.');
                            obs.error(err);
                            obs.complete();
                            return;
                        }
                        // Get the initial account balance so it can be displayed.
                        if (accs.length === 0) {
                            var error = 'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.';
                            obs.error(error);
                            obs.complete();
                            // console.warn(error);
                            return;
                        }
                        obs.next(accs);
                        obs.complete();
                    });
                }
                else {
                    setTimeout(callback, 200);
                }
            };
            if (!_this.web3 || (_this.web3 && !_this.web3['eth'])) {
                setTimeout(callback, 200);
            }
            else {
                callback();
            }
        });
    };
    Web3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Web3Service);
    return Web3Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/circleci/repo/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map