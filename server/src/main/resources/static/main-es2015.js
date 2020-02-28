(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container fullscreen >\r\n  <mat-sidenav #sidenav>\r\n    <mat-nav-list>\r\n      <a  mat-list-item routerLink=\"\" (click)=\"sidenav.close()\">\r\n        <mat-icon>home</mat-icon>\r\n        <span>Home</span>\r\n      </a>\r\n\r\n      <div  >\r\n        <a  mat-list-item *ngFor=\"let member of members\" routerLink=\"{{member.url}}\" (click)=\"sidenav.close()\">\r\n          <mat-icon md-font-set=\"material-icons\">{{member.icon}}</mat-icon>\r\n          &nbsp;\r\n          {{member.title}}\r\n        </a>\r\n      </div>\r\n\r\n\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n\r\n\r\n  <mat-toolbar color=\"primary\" class=\"main-toolbar\">\r\n    <button mat-icon-button (click)=\"sidenav.open()\">\r\n      <mat-icon md-font-set=\"material-icons\">menu</mat-icon>\r\n    </button>\r\n    <span>{{APP_NAME}}</span>\r\n\r\n    <span class=\"fill-remaining-space\"></span>\r\n\r\n\r\n\r\n  </mat-toolbar>\r\n\r\n\r\n  <router-outlet></router-outlet>\r\n</mat-sidenav-container>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datatableclient/add-datatable/add-datatable.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datatableclient/add-datatable/add-datatable.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form fxLayout=\"column\" [formGroup]=\"addItemForm\" (ngSubmit)=\"save()\">\n\n  <h1 mat-dialog-title>\n    <mat-icon>contacts</mat-icon>\n    Add Item\n  </h1>\n\n\n  <mat-dialog-content>\n\n    <div class=\"spinner-container\" *ngIf=\"adding$ | async\">\n      <mat-spinner></mat-spinner>\n    </div>\n\n\n    <div class=\"input-row\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutGap.lt-md=\"0px\">\n    <mat-form-field fxFlex>\n      <input matInput type=\"text\" placeholder=\"Item No\" formControlName=\"itemNo\" required >\n    </mat-form-field>\n\n  </div>\n\n    <div class=\"input-row\">\n      <mat-form-field fxFlex>\n        <textarea  matInput  placeholder=\"Item Description\" formControlName=\"itemDesc\"  maxlength=\"200\" rows=\"10\" cols=\"10\" autocomplete=\"off\">   </textarea>\n      </mat-form-field>\n\n    </div>\n\n  <div class=\"input-row\">\n    <mat-form-field fxFlex>\n      <input matInput  type=\"text\"  placeholder=\"Customer No\" formControlName=\"custno\" required>\n    </mat-form-field>\n  </div>\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button mat-button type=\"submit\"  class=\"button-primary\" (click)=\"save()\" [disabled]=\"!addItemForm.valid\">Add</button>\n    <button mat-button type=\"button\" mat-dialog-close class=\"button-primary\">Cancel</button>\n  </mat-dialog-actions>\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datatableclient/datatable.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datatableclient/datatable.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br>\n\n<!--\nThe mat-table provides the Material Design styled data-table that can be used to display rows of data.\n\nThis table builds on the foundation of the CDK data-table and uses a similar interface for its data input and template,\nexcept that its element and attribute selectors will be prefixed with mat- instead of cdk-\n\nEach column is inside its own ng-container element.ng-container will not be\nrendered on the screen but will provide an element for applying the matColumnDef directive\nmatColumnDef directive uniquely identifies a given column with a key\nInside the ng-container element, we will have all the configuration for a given column.\n\nInside of each ng-container with a given column definition, there are a couple of configuration elements:\nmatHeaderCellDef - structural directive -defines how to display the header of a given column\n\nmatCellDef-structural directive -defines how to display the data cells of a given column\nmatCellDef has access to the data that is being displayed.\n\nmat-sort-header to sort columns.\nmat-header-cell and mat-cell -apply styling instead of plain div\n\nmatHeaderRowDef -identifies a configuration element for the table header row, but it does not apply any styling to the element\ndefines in which order the columns should be displayed.In our case, the directive expression is pointing to a\ncomponent variable named displayedColumns.\ndisplayedColumns keys are identical to names of ng-container keys.\nThe mat-header-row and mat-row on the other hand applies some minimal Material stying\n\nhttps://tburleson-layouts-demos.firebaseapp.com/#/docs\n\n-->\n\n<div fxLayout=\"row\" fxLayoutAlign=\"end end\" fxLayoutGap=\"20px\">\n\n  <button mat-raised-button color=\"accent\" (click)=\"exporter.exportTable('csv')\">\n    <mat-icon>cloud_download</mat-icon>\n    CSV\n  </button>\n\n  <button mat-raised-button color=\"accent\" (click)=\"exporter.exportTable('json')\">\n    <mat-icon>cloud_download</mat-icon>\n    JSON\n  </button>\n\n  <button mat-raised-button color=\"accent\" (click)=\"exporter.exportTable('txt')\">\n    <mat-icon>cloud_download</mat-icon>\n    Txt\n  </button>\n\n  <button mat-raised-button color=\"accent\" (click)=\"exporter.exportTable('xlsx')\">\n    <mat-icon>cloud_download</mat-icon>\n    Excel\n  </button>\n\n  <button mat-raised-button color=\"accent\"  (click)=\"displayAddDialog()\">\n    <mat-icon>add</mat-icon>\n    Add\n  </button>\n  &nbsp;\n\n</div>\n\n\n<br>\n<div fxLayout=\"column\" fxLayoutGap=\"32px\">\n\n  <mat-table  [dataSource]=\"dataSource\" matSort matTableExporter   class=\"lessons-table mat-elevation-z8\"  #exporter=\"matTableExporter\" >\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.id}} </mat-cell>\n    </ng-container>\n\n    <!-- Custno Column -->\n    <ng-container matColumnDef=\"custno\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Customer </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.custno}} </mat-cell>\n    </ng-container>\n\n    <!-- Itemno Column -->\n    <ng-container matColumnDef=\"itemno\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Item </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.itemno}} </mat-cell>\n    </ng-container>\n\n    <!-- itemDescription Column -->\n    <ng-container matColumnDef=\"itemDescription\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Item Description </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.itemDescription}}</mat-cell>\n    </ng-container>\n\n    <!-- actions Column -->\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef > Action </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button matTooltip=\"Click to Edit\" class=\"iconbutton\" color=\"primary\">\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\n        </button>\n        <button mat-icon-button matTooltip=\"Click to Delete\" class=\"iconbutton\" color=\"warn\" (click)=\"openConfirmationDialog(element)\">\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns;sticky:true\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" ></mat-row>\n  </mat-table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datatableserver/datatableserver.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datatableserver/datatableserver.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<br>\n\n\n<div fxLayout=\"row\"  fxLayoutAlign=\"center center\">\n  <mat-file-upload\n    [labelText]=\"'Select a file  to upload:'\"\n    [selectButtonText]=\"'Choose File(s)'\"\n    [uploadButtonText]=\"'Submit'\"\n    [allowMultipleFiles]=\"false\"\n    [showUploadButton]=\"true\"\n    (uploadClicked)=\"onUpload()\"\n    (selectedFilesChanged)=\"onFileSelected($event)\">\n  </mat-file-upload>\n\n\n  <!--\n  <button mat-button  class=\"button button-primary\">Export All</button>\n  -->\n\n</div>\n\n\n<br><br>\n\n<div fxLayout=\"column\" fxLayoutGap=\"32px\">\n\n    <table mat-table #table [dataSource]=\"dataSource\" matSort  class=\"lessons-table mat-elevation-z8\"  multiTemplateDataRows>\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>ID </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container>\n\n      <!-- Custno Column -->\n      <ng-container matColumnDef=\"custno\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.custno}} </td>\n      </ng-container>\n\n      <!-- Itemno Column -->\n      <ng-container matColumnDef=\"itemno\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Item </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.itemno}} </td>\n      </ng-container>\n\n      <!-- itemDescription Column -->\n      <ng-container matColumnDef=\"itemDescription\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.itemDescription}}</td>\n      </ng-container>\n\n      <!-- actions Column -->\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef > Action </th>\n        <td mat-cell *matCellDef=\"let element\" (click)=\"$event.stopPropagation()\" >\n          <button mat-icon-button matTooltip=\"Click to Edit\" class=\"iconbutton\" color=\"primary\">\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\n          </button>\n          <button mat-icon-button matTooltip=\"Click to Delete\" class=\"iconbutton\" color=\"warn\" (click)=\"openConfirmationDialog(element)\">\n            <mat-icon aria-label=\"Delete\">delete</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n\n\n      <!-- Expanded Content Column -->\n      <ng-container matColumnDef=\"expandedDetail\">\n        <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\">\n          <div class=\"element-detail\"\n               [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n\n            <div class=\"container-fluid\"  style=\"box-sizing: border-box;width: 80%;height: 100%\" >\n              <div class=\"row\">\n\n                <mat-card>\n                  <mat-card-header>\n\n                    <mat-card-subtitle>Record selected :: {{element.id}}</mat-card-subtitle>\n                  </mat-card-header>\n\n                  <mat-card-content>\n                    Place expanded content details for record here.\n                  </mat-card-content>\n                </mat-card>\n\n\n              </div>\n\n\n\n\n\n            </div>\n          </div>\n        </td>\n      </ng-container>\n\n\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\n      <!-- when you click on  a row the element will be assigned to expanded Element -->\n      <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"   class=\"element-row\"  [class.expanded-row]=\"expandedElement === element\"\n          (click)=\"expandedElement = expandedElement === element ? null : element\">\n      </tr>\n\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"detail-row\"></tr>\n\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errordialog/errordialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errordialog/errordialog.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p mat-dialog-title class=\"small\">Something went wrong :( </p>\n\n<mat-dialog-content>\n  <div>\n    <div>\n      <p class=\"small\">\n       {{data}}\n      </p>\n\n    </div>\n  </div>\n\n</mat-dialog-content>\n\n\n\n\n<mat-dialog-actions>\n  <button mat-button type=\"button\" mat-dialog-close class=\"button button-primary\">Close</button>\n</mat-dialog-actions>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br>\n<div fxLayout=\"row\"  fxLayoutGap=\"12px\"  [style.margin-top]=\"'12px'\"  fxLayoutAlign=\"center center\"  >\n\n\n  <mat-card class=\"card-flex clickable\" routerLink=\"{{member.url}}\" style=\" margin-bottom: 20px\" *ngFor=\"let member of members\" >\n    <div class=\"icon-container\">\n      <mat-icon class=\"icon\">{{member.icon}}</mat-icon>\n    </div>\n    <div style=\"text-align:center\">{{member.title}}</div>\n  </mat-card>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-content>\n  {{confirmMessage}}\n</div>\n<br>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"dialogRef.close(false)\" class=\"button button-primary\">No</button>\n  &nbsp;\n  <button mat-button (click)=\"dialogRef.close(true)\" class=\"button button-primary\">Yes</button>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-toolbar {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXG5hdGFzaGFcXGFuZ3VsYXJ3b3Jrc3BhY2VcXEFuZ3VsYXItc3RhcnRlclxcY2xpZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tdG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxufVxyXG4iLCIubWFpbi10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_home_menuitemservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/menuitemservice */ "./src/app/pages/home/menuitemservice.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




let AppComponent = class AppComponent {
    constructor(menuitemservice) {
        this.menuitemservice = menuitemservice;
        this.APP_NAME = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appName;
    }
    ngOnInit() {
        this.members = this.menuitemservice.members;
    }
    ngAfterViewInit() {
        var that = this;
    }
};
AppComponent.ctorParameters = () => [
    { type: _pages_home_menuitemservice__WEBPACK_IMPORTED_MODULE_2__["Menuitemservice"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _routing_app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing/app.routes */ "./src/app/routing/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_datatableclient_datatable_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/datatableclient/datatable.module */ "./src/app/pages/datatableclient/datatable.module.ts");
/* harmony import */ var _pages_datatableserver_datatableserver_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/datatableserver/datatableserver.module */ "./src/app/pages/datatableserver/datatableserver.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptors/http-interceptor */ "./src/app/interceptors/http-interceptor.ts");
/* harmony import */ var _pages_errordialog_errordialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/errordialog/errordialog.component */ "./src/app/pages/errordialog/errordialog.component.ts");
/* harmony import */ var _pages_errordialog_errordialogservice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/errordialog/errordialogservice */ "./src/app/pages/errordialog/errordialogservice.ts");




//app routes

//components.


//import all app modules.










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _pages_errordialog_errordialog_component__WEBPACK_IMPORTED_MODULE_15__["ErrordialogComponent"],
        ],
        entryComponents: [
            _pages_errordialog_errordialog_component__WEBPACK_IMPORTED_MODULE_15__["ErrordialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _routing_app_routes__WEBPACK_IMPORTED_MODULE_4__["AppRouters"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _pages_datatableclient_datatable_module__WEBPACK_IMPORTED_MODULE_10__["DatatableModule"],
            _pages_datatableserver_datatableserver_module__WEBPACK_IMPORTED_MODULE_11__["DatatableserverModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"]
        ],
        exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]],
        providers: [
            _pages_errordialog_errordialogservice__WEBPACK_IMPORTED_MODULE_16__["ErrorDialogService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_14__["AppHttpInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/interceptors/http-interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptors/http-interceptor.ts ***!
  \**************************************************/
/*! exports provided: AppHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHttpInterceptor", function() { return AppHttpInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _pages_errordialog_errordialogservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/errordialog/errordialogservice */ "./src/app/pages/errordialog/errordialogservice.ts");






/**
 * Http Interceptor
 * Intercepts HTTP requests
 *
 *
 */
let AppHttpInterceptor = class AppHttpInterceptor {
    constructor(errorDialogService) {
        this.errorDialogService = errorDialogService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error, caught) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = `Error: ${error.error.message}`;
                }
                else {
                    // server-side error
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                }
                this.errorDialogService.openDialog(errorMessage);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    } //end intercept
};
AppHttpInterceptor.ctorParameters = () => [
    { type: _pages_errordialog_errordialogservice__WEBPACK_IMPORTED_MODULE_5__["ErrorDialogService"] }
];
AppHttpInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppHttpInterceptor);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm2015/mat-table-exporter.js");
/* harmony import */ var mat_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mat-file-upload */ "./node_modules/mat-file-upload/fesm2015/mat-file-upload.js");





let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_3__["MatTableExporterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            mat_file_upload__WEBPACK_IMPORTED_MODULE_4__["MatFileUploadModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_3__["MatTableExporterModule"],
            mat_file_upload__WEBPACK_IMPORTED_MODULE_4__["MatFileUploadModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/model/item.ts":
/*!*******************************!*\
  !*** ./src/app/model/item.ts ***!
  \*******************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Item {
}


/***/ }),

/***/ "./src/app/pages/datatableclient/add-datatable/add-datatable.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/datatableclient/add-datatable/add-datatable.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button:disabled,\nbutton[disabled] {\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGF0YXRhYmxlY2xpZW50L2FkZC1kYXRhdGFibGUvQzpcXG5hdGFzaGFcXGFuZ3VsYXJ3b3Jrc3BhY2VcXEFuZ3VsYXItc3RhcnRlclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcZGF0YXRhYmxlY2xpZW50XFxhZGQtZGF0YXRhYmxlXFxhZGQtZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXRhdGFibGVjbGllbnQvYWRkLWRhdGF0YWJsZS9hZGQtZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXRhdGFibGVjbGllbnQvYWRkLWRhdGF0YWJsZS9hZGQtZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uOmRpc2FibGVkLFxyXG5idXR0b25bZGlzYWJsZWRde1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG4iLCJidXR0b246ZGlzYWJsZWQsXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgY29sb3I6ICM2NjY2NjY7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/datatableclient/add-datatable/add-datatable.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/datatableclient/add-datatable/add-datatable.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddDatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDatatableComponent", function() { return AddDatatableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _model_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/item */ "./src/app/model/item.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let AddDatatableComponent = class AddDatatableComponent {
    constructor(fb, dialogRef, _snackBar) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this._snackBar = _snackBar;
        //adding progress indicator.
        this.addingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.adding$ = this.addingSubject.asObservable();
        this.addItemForm = this.fb.group({
            itemNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            itemDesc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            custno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    closeDialog() {
        this.dialogRef.close();
    }
    save() {
        this.addingSubject.next(true);
        let item = new _model_item__WEBPACK_IMPORTED_MODULE_3__["Item"]();
        item.custno = this.addItemForm.get('custno').value;
        item.itemDescription = this.addItemForm.get('itemDesc').value;
        item.itemno = this.addItemForm.get('itemNo').value;
        this.service.createItem(item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.addingSubject.next(false);
            this.closeDialog();
        }))
            .subscribe(data => {
            this.openSnackBar("Item added successfully.", "Close");
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
            verticalPosition: 'top'
        });
    }
};
AddDatatableComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
AddDatatableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-datatable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-datatable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datatableclient/add-datatable/add-datatable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-datatable.component.scss */ "./src/app/pages/datatableclient/add-datatable/add-datatable.component.scss")).default]
    })
], AddDatatableComponent);



/***/ }),

/***/ "./src/app/pages/datatableclient/dataservice.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/datatableclient/dataservice.ts ***!
  \******************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataService = class DataService {
    constructor(http) {
        this.http = http;
        var myContext = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
        this.url = window.location.origin + myContext + "/items";
    }
    findAll() {
        return this.http.get(this.url);
    }
    delete(item) {
        return this.http.delete(this.url + "/" + item.id);
    }
    createItem(item) {
        return this.http.post(`${this.url}`, item);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/pages/datatableclient/datatable.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/datatableclient/datatable.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGF0YWJsZWNsaWVudC9kYXRhdGFibGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/datatableclient/datatable.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/datatableclient/datatable.component.ts ***!
  \**************************************************************/
/*! exports provided: DatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dataservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataservice */ "./src/app/pages/datatableclient/dataservice.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _add_datatable_add_datatable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-datatable/add-datatable.component */ "./src/app/pages/datatableclient/add-datatable/add-datatable.component.ts");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");






//Component is a typescript class with @Component decorator.
let DatatableComponent = class DatatableComponent {
    //use constructor to initialize class members and for DI
    //helps prepare the initialization of a class.
    constructor(dataService, dialog, _snackBar) {
        this.dataService = dataService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](); //Define a MatTableDataSource
        this.displayedColumns = ['id', 'custno', 'itemno', 'itemDescription', "actions"];
    }
    //ngOnInit is called after the constructor
    //use for initialization work
    //components lifecycle method.
    ngOnInit() {
        //subscribe to an observable ..functinon is executed when subscribe function is called
        //3 types of notifications a observable can send.
        //1.next - required The handler for each delivered value called zero or more times after execution starts.
        //2.error - optional The handler for error notification.
        //3.complete - optional The handler for an execution-complete notification
        this.reloadData();
        this.dataSource.paginator = this.paginator; //attach paginator object to the datasource
        this.dataSource.sort = this.sort; //attach sort object to the datasource
        this.openSnackBar("Demo of angular material table with client side pagination & sorting.", "Close");
    }
    reloadData() {
        this.dataService.findAll().subscribe(data => {
            this.dataSource.data = data;
            console.log("Reload data");
            console.log(data);
        });
    }
    openConfirmationDialog(item) {
        this.confirmationDialogRef = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmationDialogRef.componentInstance.confirmMessage = "Are you sure you want to delete this record ?";
        this.confirmationDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(item);
            }
            this.confirmationDialogRef = null;
        });
    }
    delete(item) {
        this.dataService.delete(item)
            .subscribe(data => {
            this.dataSource.data = this.dataSource.data.filter(u => u !== item);
        });
    }
    displayAddDialog() {
        let dialogRef = this.dialog.open(_add_datatable_add_datatable_component__WEBPACK_IMPORTED_MODULE_4__["AddDatatableComponent"], { width: '800px' });
        dialogRef.componentInstance.service = this.dataService;
        dialogRef.afterClosed().subscribe(data => {
            //reload the data.
            this.dataService.findAll().subscribe(data => {
                this.dataSource.data = data;
            });
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
            verticalPosition: 'top'
        });
    }
};
DatatableComponent.ctorParameters = () => [
    { type: _dataservice__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], DatatableComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], DatatableComponent.prototype, "sort", void 0);
DatatableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datatable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datatable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datatableclient/datatable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./datatable.component.scss */ "./src/app/pages/datatableclient/datatable.component.scss")).default]
    })
], DatatableComponent);



/***/ }),

/***/ "./src/app/pages/datatableclient/datatable.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/datatableclient/datatable.module.ts ***!
  \***********************************************************/
/*! exports provided: DatatableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableModule", function() { return DatatableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _datatable_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datatable.routing */ "./src/app/pages/datatableclient/datatable.routing.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _datatable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datatable.component */ "./src/app/pages/datatableclient/datatable.component.ts");
/* harmony import */ var _add_datatable_add_datatable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-datatable/add-datatable.component */ "./src/app/pages/datatableclient/add-datatable/add-datatable.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");











let DatatableModule = class DatatableModule {
};
DatatableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_datatable_component__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _add_datatable_add_datatable_component__WEBPACK_IMPORTED_MODULE_8__["AddDatatableComponent"]],
        exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _datatable_routing__WEBPACK_IMPORTED_MODULE_5__["DatatableRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
        ]
    })
], DatatableModule);



/***/ }),

/***/ "./src/app/pages/datatableclient/datatable.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/datatableclient/datatable.routing.ts ***!
  \************************************************************/
/*! exports provided: DatatableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRoutingModule", function() { return DatatableRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datatable.component */ "./src/app/pages/datatableclient/datatable.component.ts");
/* harmony import */ var _add_datatable_add_datatable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-datatable/add-datatable.component */ "./src/app/pages/datatableclient/add-datatable/add-datatable.component.ts");





const secondaryRoutes = [
    { path: '', component: _datatable_component__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], },
    { path: 'add-datatable', component: _add_datatable_add_datatable_component__WEBPACK_IMPORTED_MODULE_4__["AddDatatableComponent"] }
];
//taken from angular.io
//Only call RouterModule.forRoot in the root AppRoutingModule (or the AppModule if
//that's where you register top level application routes). In any other module, you
//must call the RouterModule.forChild method to register additional routes.
let DatatableRoutingModule = class DatatableRoutingModule {
};
DatatableRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(secondaryRoutes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], DatatableRoutingModule);



/***/ }),

/***/ "./src/app/pages/datatableserver/dataserviceserver.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/datatableserver/dataserviceserver.ts ***!
  \************************************************************/
/*! exports provided: Dataserviceserver, ItemDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dataserviceserver", function() { return Dataserviceserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDataSource", function() { return ItemDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let Dataserviceserver = class Dataserviceserver {
    //public uploadUrl:string;
    constructor(http) {
        this.http = http;
        var myContext = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
        this.baseUrl = window.location.origin + myContext + "/items";
        this.pagedUrl = window.location.origin + myContext + "/itemsToPage";
        //this.uploadUrl = window.location.origin + myContext + "/items/upload"
    }
    findAll() {
        return this.http.get(this.baseUrl);
    }
    fetchItems(pageIndex, pageSize, column, direction) {
        return this.http.get(this.pagedUrl, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('pageIndex', pageIndex.toString())
                .set('pageSize', pageSize.toString())
                .set('column', column.toString())
                .set('direction', direction.toString())
        });
    }
    delete(item) {
        return this.http.delete(this.baseUrl + "/" + item.id);
    }
    uploadFile(selectedFile) {
        const fd = new FormData();
        fd.append('file', selectedFile);
        return this.http.post(this.baseUrl + "/upload", fd); //.subscribe(res=> console.log(res))
    }
}; //end Dataserviceserver
Dataserviceserver.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
Dataserviceserver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Dataserviceserver);

/**
 * Custom Observable CDK Data source for Datatable server component.
 *
 */
class ItemDataSource {
    constructor(dataserviceserver) {
        this.dataserviceserver = dataserviceserver;
        //Item subject is a behaviour subject so subscribers
        //will always get its latest emitted value even if they subscribed late.
        this.itemSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.countSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
        //expose as public observable
        this.counter$ = this.countSubject.asObservable();
    }
    /**
     * Called multiple times when pagination,sorting and
     * when page is loaded
     * @param pageIndex
     * @param pageSize
     * @param column
     * @param direction
     */
    loadItems(pageIndex, pageSize, column, direction) {
        // use pipe operator to chain functions with Observable type
        this.dataserviceserver.fetchItems(pageIndex, pageSize, column, direction)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([])), //emits fallback values..in this case an empty error when an error occurs.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => console.log('Fetch items complete')))
            // subscribe method to receive Observable type data when it is ready
            .subscribe((result) => {
            this.itemSubject.next(result.data);
            this.countSubject.next(result.total);
        });
    }
    //called just once at boot time.
    //since DS is subscribed to the connect observable it will always get data if its
    //still being loaded or already loaded.
    connect(collectionViewer) {
        console.log("Connecting data source");
        return this.itemSubject.asObservable();
    }
    //method called once at destruction time.
    //complete observables to avoid any memory leaks
    disconnect(collectionViewer) {
        this.itemSubject.complete();
        this.countSubject.complete();
    }
} //end ItemDataSource


/***/ }),

/***/ "./src/app/pages/datatableserver/datatableserver-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/datatableserver/datatableserver-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DatatableserverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableserverRoutingModule", function() { return DatatableserverRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _datatableserver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datatableserver.component */ "./src/app/pages/datatableserver/datatableserver.component.ts");




const serverRoutes = [
    { path: '', component: _datatableserver_component__WEBPACK_IMPORTED_MODULE_3__["DatatableserverComponent"] }
];
let DatatableserverRoutingModule = class DatatableserverRoutingModule {
};
DatatableserverRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(serverRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DatatableserverRoutingModule);



/***/ }),

/***/ "./src/app/pages/datatableserver/datatableserver.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/datatableserver/datatableserver.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\ntr.detail-row {\n  height: 0;\n}\n\ntr.element-row:not(.expanded-row):hover {\n  background: lightgrey;\n}\n\ntr.element-row:not(.expanded-row):active {\n  background: #efefef;\n}\n\n.element-row td {\n  border-bottom-width: 0;\n  cursor: pointer;\n}\n\n.element-detail {\n  overflow: hidden;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGF0YXRhYmxlc2VydmVyL0M6XFxuYXRhc2hhXFxhbmd1bGFyd29ya3NwYWNlXFxBbmd1bGFyLXN0YXJ0ZXJcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGRhdGF0YWJsZXNlcnZlclxcZGF0YXRhYmxlc2VydmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXRhdGFibGVzZXJ2ZXIvZGF0YXRhYmxlc2VydmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGF0YXRhYmxlc2VydmVyL2RhdGF0YWJsZXNlcnZlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudHIuZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5lbGVtZW50LXJvdzpub3QoLmV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxudHIuZWxlbWVudC1yb3c6bm90KC5leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmVsZW1lbnQtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG5cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudHIuZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxudHIuZWxlbWVudC1yb3c6bm90KC5leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xufVxuXG50ci5lbGVtZW50LXJvdzpub3QoLmV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/datatableserver/datatableserver.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/datatableserver/datatableserver.component.ts ***!
  \********************************************************************/
/*! exports provided: DatatableserverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableserverComponent", function() { return DatatableserverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/merge */ "./node_modules/rxjs-compat/_esm2015/observable/merge.js");
/* harmony import */ var _dataserviceserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataserviceserver */ "./src/app/pages/datatableserver/dataserviceserver.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");








let DatatableserverComponent = class DatatableserverComponent {
    constructor(dataService, _snackBar, dialog) {
        this.dataService = dataService;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'custno', 'itemno', 'itemDescription', "actions"];
        this.selectedFile = null;
    }
    ngOnInit() {
        this.dataSource = new _dataserviceserver__WEBPACK_IMPORTED_MODULE_4__["ItemDataSource"](this.dataService);
        this.reloadData();
        this.openSnackBar("Demo of angular material table with server side pagination & sorting.", "Close");
    }
    reloadData() {
        // set paginator page size
        this.paginator.pageIndex = 0;
        this.paginator.pageSize = 5;
        this.sort.active = 'id';
        this.sort.direction = 'asc';
        this.dataSource.loadItems(this.paginator.pageIndex, this.paginator.pageSize, 'id', 'asc');
    }
    //called after view is initialized and created.
    ngAfterViewInit() {
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.dataSource.counter$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((count) => {
            this.paginator.length = count;
        }))
            .subscribe();
        //use merge operator to combine the output of multiple observables so they act like one.
        // tap can perform side effects with observed data but does not modify the stream in any way.
        //tap returns identical observable as the source.
        //paginator has a observable based API and it exposes page observable and it emits new value
        //whenever user clicks pagination buttons.
        Object(rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.paginator.page, this.sort.sortChange)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.dataSource.loadItems(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction)))
            .subscribe();
    } //end ngAfterViewInit
    openConfirmationDialog(item) {
        this.confirmationDialogRef = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmationDialogRef.componentInstance.confirmMessage = "Are you sure you want to delete this record ?";
        this.confirmationDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(item);
            }
            this.confirmationDialogRef = null;
        });
    }
    delete(item) {
        this.dataService.delete(item)
            .subscribe(data => {
            this.reloadData();
        });
    }
    onFileSelected(fileList) {
        this.selectedFile = fileList[0];
    }
    onUpload() {
        if (this.selectedFile != null) {
            this.dataService.uploadFile(this.selectedFile)
                .subscribe(data => {
                this.reloadData();
            });
        }
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
            verticalPosition: 'top'
        });
    }
};
DatatableserverComponent.ctorParameters = () => [
    { type: _dataserviceserver__WEBPACK_IMPORTED_MODULE_4__["Dataserviceserver"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], DatatableserverComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], DatatableserverComponent.prototype, "sort", void 0);
DatatableserverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datatable-server',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datatableserver.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datatableserver/datatableserver.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./datatableserver.component.scss */ "./src/app/pages/datatableserver/datatableserver.component.scss")).default]
    })
], DatatableserverComponent);



/***/ }),

/***/ "./src/app/pages/datatableserver/datatableserver.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/datatableserver/datatableserver.module.ts ***!
  \*****************************************************************/
/*! exports provided: DatatableserverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableserverModule", function() { return DatatableserverModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _datatableserver_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datatableserver-routing.module */ "./src/app/pages/datatableserver/datatableserver-routing.module.ts");
/* harmony import */ var _datatableserver_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datatableserver.component */ "./src/app/pages/datatableserver/datatableserver.component.ts");










let DatatableserverModule = class DatatableserverModule {
};
DatatableserverModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_datatableserver_component__WEBPACK_IMPORTED_MODULE_9__["DatatableserverComponent"]],
        exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _datatableserver_routing_module__WEBPACK_IMPORTED_MODULE_8__["DatatableserverRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        ]
    })
], DatatableserverModule);



/***/ }),

/***/ "./src/app/pages/errordialog/errordialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/errordialog/errordialog.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9yZGlhbG9nL2Vycm9yZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/errordialog/errordialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/errordialog/errordialog.component.ts ***!
  \************************************************************/
/*! exports provided: ErrordialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrordialogComponent", function() { return ErrordialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ErrordialogComponent = class ErrordialogComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
};
ErrordialogComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ErrordialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-errordialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./errordialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errordialog/errordialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./errordialog.component.scss */ "./src/app/pages/errordialog/errordialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ErrordialogComponent);



/***/ }),

/***/ "./src/app/pages/errordialog/errordialogservice.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/errordialog/errordialogservice.ts ***!
  \*********************************************************/
/*! exports provided: ErrorDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogService", function() { return ErrorDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _errordialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errordialog.component */ "./src/app/pages/errordialog/errordialog.component.ts");




let ErrorDialogService = class ErrorDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(data) {
        const dialogRef = this.dialog.open(_errordialog_component__WEBPACK_IMPORTED_MODULE_3__["ErrordialogComponent"], {
            width: '500px',
            data: data
        });
    }
};
ErrorDialogService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
ErrorDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorDialogService);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px black, 0 1px 1px 0 black, 0 1px 3px 0 black;\n}\n\n.card-flex {\n  display: flex;\n  flex-direction: column;\n}\n\n.icon-container {\n  display: flex;\n  justify-content: center;\n  height: 48px;\n  transform: scale(1.25);\n}\n\n.icon {\n  font-size: 48px;\n  margin-right: 15px;\n}\n\n.clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcbmF0YXNoYVxcYW5ndWxhcndvcmtzcGFjZVxcQW5ndWxhci1zdGFydGVyXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzRUFBQTtBQ0FGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDSEY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNGRjs7QURJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwxKSxcclxuICAwIDFweCAxcHggMCByZ2JhKDAsMCwwLDEpLFxyXG4gIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMSk7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxufVxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbn1cclxuLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBtYXJnaW4tcmlnaHQ6MTVweDtcclxufVxyXG5cclxuLmNsaWNrYWJsZSB7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbiIsIi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IGJsYWNrLCAwIDFweCAxcHggMCBibGFjaywgMCAxcHggM3B4IDAgYmxhY2s7XG59XG5cbi5jYXJkLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _menuitemservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuitemservice */ "./src/app/pages/home/menuitemservice.ts");



let HomeComponent = class HomeComponent {
    constructor(menuitemservice) {
        this.menuitemservice = menuitemservice;
    }
    ngOnInit() {
        this.members = this.menuitemservice.members;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _menuitemservice__WEBPACK_IMPORTED_MODULE_2__["Menuitemservice"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/home/menuitemservice.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/home/menuitemservice.ts ***!
  \***********************************************/
/*! exports provided: Menuitemservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menuitemservice", function() { return Menuitemservice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Menuitemservice = class Menuitemservice {
    constructor() {
        this.members = [
            { title: 'Mat-Table(client-side)', subtitle: 'Mat-Table(client-side)', content: '', url: 'datatable', icon: 'list' },
            { title: 'Mat-Table(server-side)', subtitle: 'Mat-Table(server-side)', content: '', url: 'datatableserver', icon: 'list' },
        ];
    }
};
Menuitemservice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root' //singleton service
    })
], Menuitemservice);



/***/ }),

/***/ "./src/app/routing/app.routes.ts":
/*!***************************************!*\
  !*** ./src/app/routing/app.routes.ts ***!
  \***************************************/
/*! exports provided: AppRouters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouters", function() { return AppRouters; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/home/home.component */ "./src/app/pages/home/home.component.ts");




const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'datatableserver', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../pages/datatableserver/datatableserver.module */ "./src/app/pages/datatableserver/datatableserver.module.ts")).then(m => m.DatatableserverModule) },
    { path: 'datatable', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../pages/datatableclient/datatable.module */ "./src/app/pages/datatableclient/datatable.module.ts")).then(m => m.DatatableModule) }
];
let AppRouters = class AppRouters {
};
AppRouters = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRouters);



/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
};
ConfirmDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-dialog.component.scss */ "./src/app/shared/confirm-dialog/confirm-dialog.component.scss")).default]
    })
], ConfirmDialogComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]],
        entryComponents: [
            _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], SharedModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    appName: "Angular-starter"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\natasha\angularworkspace\Angular-starter\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map