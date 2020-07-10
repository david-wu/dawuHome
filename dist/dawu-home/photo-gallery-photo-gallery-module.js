(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["photo-gallery-photo-gallery-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-uploader/file-uploader.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-uploader/file-uploader.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showUploadButton\" class=\"upload-container\">\n  <div class=\"file-label\">\n    {{ file ? file.name : 'no file selected' }}\n  </div>\n  <label for=\"select-file-button\">\n    <div class=\"upload-button\">\n      Select File\n    </div>\n  </label>\n  <div\n    (click)=\"upload()\"\n    class=\"upload-button\"\n    [attr.disabled]=\"file ? null : true\"\n  >\n    Upload\n  </div>\n</div>\n\n<label *ngIf=\"!showUploadButton\" for=\"select-file-button\">\n  <div class=\"upload-button\">\n    Upload File\n  </div>\n</label>\n\n<input\n  type=\"file\"\n  accept=\"image/*\"\n  (change)=\"onFileChange($event)\"\n  class=\"upload-input\"\n  id=\"select-file-button\"\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/photo-gallery.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/photo-gallery.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-container\">\n  <div class=\"right-side\">\n    <dwu-user-login></dwu-user-login>\n    <dwu-file-uploader\n      *ngIf=\"firebaseAuthService.user$ | async as user\"\n      (fileChange)=\"onFileChange($event, user)\"\n    ></dwu-file-uploader>\n    <div\n      *ngIf=\"(uploadedFiles$ | async) as uploadedFiles\"\n      class=\"uploaded-file-container\"\n    >\n      <div\n        *ngFor=\"let uploadedFile of uploadedFiles\"\n        class=\"uploaded-file\"\n      >\n        <div class=\"file-name\">\n          {{ uploadedFile.fileName }}\n        </div>\n        <img [src]=\"uploadedFile.uploadMeta.downloadUrl\" class=\"file-pic\">\n      </div>\n    </div>\n    <div class=\"footer\"></div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/file-uploader/file-uploader.component.scss":
/*!************************************************************!*\
  !*** ./src/app/file-uploader/file-uploader.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upload-container {\n  display: flex;\n  align-items: center;\n  width: 25rem;\n  border-radius: 0.25rem;\n  padding: 0.25rem;\n  background-color: #F2EEE1;\n}\n.upload-container > * {\n  margin: 0 0.125rem;\n  flex: 0 0 auto;\n  display: inline-block;\n}\n.upload-container .file-label {\n  flex: 1 1 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\nlabel {\n  display: inline-block;\n}\n.upload-button {\n  background-color: #3F4038;\n  color: #FCFCF9;\n  width: 8rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.upload-button:hover:not([disabled]) {\n  background-color: #4B5320;\n  color: #FCFCF9;\n}\n.upload-button.active:not([disabled]) {\n  background-color: #708238;\n  color: #FCFCF9;\n}\n.upload-button[disabled] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.upload-input {\n  position: absolute;\n  visibility: hidden;\n  width: 0;\n  height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJDU2U7QUNYakI7QUZHRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FFREo7QUZHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUVESjtBRklBO0VBQ0UscUJBQUE7QUVERjtBRkdBO0VHOExFLHlCRmpNWTtFRWtNWixjRjVNZTtFRWtMYixXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FEbEtKO0FDdUxFO0VBQ0UseUJGeE5TO0VFeU5ULGNGL01hO0FDMEJqQjtBQ3VMRTtFQUNFLHlCRjNOVTtFRTROVixjRm5OYTtBQzhCakI7QUN1TEU7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QURyTEo7QUZsQkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUVxQkYiLCJmaWxlIjoic3JjL2FwcC9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG4udXBsb2FkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyNXJlbTtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgJGJsYWNrLW9saXZlO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWdnc2hlbGwtbGlnaHQ7XG4gID4gKiB7XG4gICAgbWFyZ2luOiAwIDAuMTI1cmVtO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuZmlsZS1sYWJlbCB7XG4gICAgZmxleDogMSAxIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi51cGxvYWQtYnV0dG9uIHtcbiAgQGluY2x1ZGUgZGFyay1idXR0b247XG59XG4udXBsb2FkLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59IiwiXG4kZGFyay1ncmVlbjogIzI5MkUxMjtcbiRhcm15LWdyZWVuOiAjNEI1MzIwO1xuJG9saXZlLWdyZWVuOiAjNzA4MjM4O1xuJG1vc3MtZ3JlZW46ICM4QTlBNUI7XG4kbGF1cmVsLWdyZWVuOiAjQkFDMzlGO1xuXG4kc2F0dXJhdGVkLW9saXZlOiAjNzI5OTAwO1xuJHNhdHVyYXRlZC1ibHVlOiAjMTY0RUI3O1xuXG4vLyBuaWNlIGZvciB0ZXh0IGFnYWluc3QgZGFyayBiYWNrZ3JvdW5kXG4kbGlnaHQtZ3JlZW46ICNGNEY3RUE7XG4kbGlnaHRlc3QtZ3JlZW46ICNGQ0ZDRjk7XG5cbi8vIFVzZWQgZm9yIGZpbGUgc2VsZWN0b3JcbiRlZ2dzaGVsbC1kYXJrZXI6ICNEREQ5Q0Y7XG4kZWdnc2hlbGwtZGFyazogI0VBRTZEQTtcbiRlZ2dzaGVsbDogI0VGRUJERjtcbiRlZ2dzaGVsbC1saWdodDogI0YyRUVFMTtcblxuLy8gZ3JheXNcbiRiYXNpY2FsbHktYmxhY2s6ICMyMDIxMjQ7XG4kYmxhY2stb2xpdmU6ICMzRjQwMzg7XG4kZ3Jhbml0ZTogIzY1NjM1RjtcbiRsaWdodGVyLWdyYXk6ICM5RDlCOTk7XG4kd2hpdGU6ICNmZmY7XG5cbiRnb2xkOiAjRDZCOTAyO1xuJHN0YXItYmx1ZTogIzFENjJDNDtcblxuJGJyZWFrLXNtYWxsOiA1NTBweDtcbiRicmVhay1tZDogODAwcHg7XG4kYnJlYWstbGFyZ2U6IDEwMjRweDtcbiIsIi51cGxvYWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFRUUxO1xufVxuLnVwbG9hZC1jb250YWluZXIgPiAqIHtcbiAgbWFyZ2luOiAwIDAuMTI1cmVtO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnVwbG9hZC1jb250YWluZXIgLmZpbGUtbGFiZWwge1xuICBmbGV4OiAxIDEgMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udXBsb2FkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQwMzg7XG4gIGNvbG9yOiAjRkNGQ0Y5O1xuICB3aWR0aDogOHJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4udXBsb2FkLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI1MzIwO1xuICBjb2xvcjogI0ZDRkNGOTtcbn1cbi51cGxvYWQtYnV0dG9uLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA4MjM4O1xuICBjb2xvcjogI0ZDRkNGOTtcbn1cbi51cGxvYWQtYnV0dG9uW2Rpc2FibGVkXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi51cGxvYWQtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gYmFzZS1jb3JvbmEtZGFzaGJvYXJkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLmNoYXJ0LWhlYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIC5yYWRpby1idXR0b24tY29udGFpbmVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgICAgICAgIC5yYWRpby1idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmFkaW8tYnV0dG9uLWNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmLmNoYXJ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHd1LXN0YXQtdmlld2VyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAub3ZlcnZpZXcuY2hhcnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMi41cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgZHd1LWNoYXJ0LWxlZ2VuZCB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gcmFkaW8tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgQGluY2x1ZGUgbGlnaHQtbWluaS1idXR0b247XG4gICAgICAgIEBpbmNsdWRlIHNoYWRvdztcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBzaGFkb3cge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IGJveC1zaGFkb3cgMjVtcywgdHJhbnNmb3JtLCAyNW1zO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgJGxpZ2h0ZXItZ3JheTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgJjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG5cbkBtaXhpbiByZXNwb25zaXZlLXBhZ2Uge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIGRpdi5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMy4yNXJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgICAgLy8gbWluLXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCA1MG1zO1xuICAgICAgICAgICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDg1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmV4cGFuZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZGFyay10aGVtZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtb3NzLWdyZWVuO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMCA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLmV4cGFuZGVyLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgJi5mbGlwcGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcuNSU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgICAgICAgICAgLmV4cGFuZGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yaWdodC1zaWRlIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbkBtaXhpbiBsaWdodC1taW5pLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgbGlnaHQtdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXhzO1xufVxuXG5AbWl4aW4gbGlnaHQtc21hbGwtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBsaWdodC10aGVtZTtcbiAgICBAaW5jbHVkZSBidXR0b24tc207XG59XG5cbkBtaXhpbiBkYXJrLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZGFyay10aGVtZTtcbiAgICBAaW5jbHVkZSBidXR0b24tbWQ7XG59XG5cbkBtaXhpbiBidXR0b24teHMge1xuICAgIG1pbi13aWR0aDogMnJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBidXR0b24tc20ge1xuICAgIG1pbi13aWR0aDogM3JlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGJ1dHRvbi1tZCB7XG4gICAgd2lkdGg6IDhyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWdnc2hlbGwtZGFyaztcbiAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG4gIH1cbiAgJi5hY3RpdmU6bm90KFtkaXNhYmxlZF0pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUtZ3JlZW47XG4gICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgfVxuICAmW2Rpc2FibGVkXSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG5cbkBtaXhpbiBkYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrLW9saXZlO1xuICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFybXktZ3JlZW47XG4gICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgfVxuICAmLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRvbGl2ZS1ncmVlbjtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICB9XG4gICZbZGlzYWJsZWRdIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cblxuQG1peGluIHRvcC1uYXYtcGFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gIEBpZiAkbWVkaWEgPT0gc21hbGwge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrLXNtYWxsKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IG1lZGl1bSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstc21hbGwgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcmdlIC0gMSkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRtZWRpYSA9PSB3aWRlIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZSkgeyBAY29udGVudDsgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/file-uploader/file-uploader.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/file-uploader/file-uploader.component.ts ***!
  \**********************************************************/
/*! exports provided: FileUploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function() { return FileUploaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/firebase-storage.service */ "./src/app/services/firebase-storage.service.ts");



var FileUploaderComponent = /** @class */ (function () {
    function FileUploaderComponent(fss) {
        this.fss = fss;
        this.showUploadButton = false;
        this.fileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileUrl$ = this.fss.getFileUrl$();
    }
    FileUploaderComponent.prototype.onFileChange = function (fileEvent) {
        if (fileEvent.target.files) {
            this.file = fileEvent.target.files[0];
            this.fileChange.emit(this.file);
        }
    };
    FileUploaderComponent.prototype.upload = function () {
        console.log('upload', this.file);
        this.fss.uploadFile(this.file);
    };
    FileUploaderComponent.ctorParameters = function () { return [
        { type: _services_firebase_storage_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseStorageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FileUploaderComponent.prototype, "showUploadButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FileUploaderComponent.prototype, "fileChange", void 0);
    FileUploaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-file-uploader',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-uploader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-uploader/file-uploader.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-uploader.component.scss */ "./src/app/file-uploader/file-uploader.component.scss")).default]
        })
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());



/***/ }),

/***/ "./src/app/file-uploader/file-uploader.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/file-uploader/file-uploader.module.ts ***!
  \*******************************************************/
/*! exports provided: FileUploaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploaderModule", function() { return FileUploaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/file-uploader/file-uploader.component */ "./src/app/file-uploader/file-uploader.component.ts");
/* harmony import */ var _services_firebase_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/firebase-storage.service */ "./src/app/services/firebase-storage.service.ts");



// import { FirebaseAuthModule } from '@src/app/firebase-auth/firebase-auth.module';


var FileUploaderModule = /** @class */ (function () {
    function FileUploaderModule() {
    }
    FileUploaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_3__["FileUploaderComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [
                _app_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_3__["FileUploaderComponent"],
            ],
            providers: [
                _services_firebase_storage_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseStorageService"],
            ],
        })
    ], FileUploaderModule);
    return FileUploaderModule;
}());



/***/ }),

/***/ "./src/app/photo-gallery/photo-gallery.component.scss":
/*!************************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 750px) {\n  :host div.page-container {\n    flex-direction: column;\n  }\n  :host div.page-container .left-side {\n    flex: 0 0 auto;\n    height: 13.25rem;\n    width: 100%;\n    max-width: none;\n    transition: height 50ms;\n  }\n  :host div.page-container .left-side.expanded {\n    height: 85%;\n  }\n  :host div.page-container .left-side .expander {\n    background-color: #3F4038;\n    color: #FCFCF9;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 3.5rem;\n    height: 1rem;\n    border: 1px solid #8A9A5B;\n    border-radius: 5px 5px 0 0;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n  }\n  :host div.page-container .left-side .expander:hover:not([disabled]) {\n    background-color: #4B5320;\n    color: #FCFCF9;\n  }\n  :host div.page-container .left-side .expander.active:not([disabled]) {\n    background-color: #708238;\n    color: #FCFCF9;\n  }\n  :host div.page-container .left-side .expander[disabled] {\n    pointer-events: none;\n    opacity: 0.3;\n  }\n  :host div.page-container .left-side .expander .expander-icon {\n    font-size: 16px;\n  }\n  :host div.page-container .left-side .expander .expander-icon.flipped {\n    transform: rotate(180deg);\n  }\n}\n:host .page-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n:host .page-container .left-side {\n  position: relative;\n  flex: 1 1 0;\n  overflow: hidden;\n  max-width: 27.5%;\n  min-width: 20rem;\n}\n:host .page-container .left-side .expander {\n  display: none;\n}\n:host .page-container .right-side {\n  flex: 1 1 0;\n  overflow: auto;\n  position: relative;\n}\n:host .page-container {\n  padding-left: 1rem;\n}\n:host .page-container .footer {\n  padding-bottom: 15rem;\n}\n.uploaded-file-container {\n  display: flex;\n  padding: 0.5rem;\n}\n.uploaded-file-container .uploaded-file {\n  margin: 0.5rem;\n  display: flex;\n  flex-direction: column;\n}\n.uploaded-file-container .uploaded-file .file-name {\n  color: #F4F7EA;\n  background-color: #3F4038;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n.uploaded-file-container .uploaded-file .file-pic {\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGhvdG8tZ2FsbGVyeS9waG90by1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FkbWluL3Byb2plY3RzL2Rhd3UtaG9tZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2FkbWluL3Byb2plY3RzL2Rhd3UtaG9tZS9zcmMvYXBwL3Bob3RvLWdhbGxlcnkvcGhvdG8tZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Rkk7RUFDSTtJQUNJLHNCQUFBO0VDM0ZWO0VENEZVO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFFQSx1QkFBQTtFQzNGZDtFRDRGYztJQUNJLFdBQUE7RUMxRmxCO0VENEZjO0lBOEdkLHlCRWpNWTtJRmtNWixjRTVNZTtJRitGRyxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLGVBQUE7RUN6RmxCO0VENExBO0lBQ0UseUJFeE5TO0lGeU5ULGNFL01hO0VEcUJmO0VENExBO0lBQ0UseUJFM05VO0lGNE5WLGNFbk5hO0VEeUJmO0VENExBO0lBQ0Usb0JBQUE7SUFDQSxZQUFBO0VDMUxGO0VEOEVrQjtJQUNJLGVBQUE7RUM1RXRCO0VENkVzQjtJQUNJLHlCQUFBO0VDM0UxQjtBQUNGO0FEa0ZJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDaEZSO0FEa0ZRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDaEZaO0FEaUZZO0VBQ0ksYUFBQTtBQy9FaEI7QURrRlE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDaEZaO0FFaEVFO0VBQ0Usa0JBQUE7QUZrRUo7QUVqRUk7RUFDRSxxQkFBQTtBRm1FTjtBRS9EQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FGa0VGO0FFakVFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBRm1FSjtBRWxFSTtFQUNFLGNEUlE7RUNTUix5QkRFUTtFQ0RSLHVCQUFBO0VBQ0Esa0NBQUE7QUZvRU47QUVsRUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBRm9FTiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvLWdhbGxlcnkvcGhvdG8tZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBiYXNlLWNvcm9uYS1kYXNoYm9hcmQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIC5jaGFydC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuY2hhcnQtaGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbi1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbnMge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByYWRpby1idXR0b24tY29udGFpbmVyO1xuICAgICAgICAgICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYuY2hhcnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkd3Utc3RhdC12aWV3ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5vdmVydmlldy5jaGFydCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBkd3UtY2hhcnQtbGVnZW5kIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiByYWRpby1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICBAaW5jbHVkZSBsaWdodC1taW5pLWJ1dHRvbjtcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHNoYWRvdyB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogYm94LXNoYWRvdyAyNW1zLCB0cmFuc2Zvcm0sIDI1bXM7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAkbGlnaHRlci1ncmF5O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbn1cblxuQG1peGluIHJlc3BvbnNpdmUtcGFnZSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgZGl2LnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzLjI1cmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICAvLyBtaW4td2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwbXM7XG4gICAgICAgICAgICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZXhwYW5kZXIge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBkYXJrLXRoZW1lO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1vc3MtZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwIDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAuZXhwYW5kZXItaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmZsaXBwZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucGFnZS1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNy41JTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgICAgICAgICAuZXhwYW5kZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuQG1peGluIGxpZ2h0LW1pbmktYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBsaWdodC10aGVtZTtcbiAgICBAaW5jbHVkZSBidXR0b24teHM7XG59XG5cbkBtaXhpbiBsaWdodC1zbWFsbC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGxpZ2h0LXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi1zbTtcbn1cblxuQG1peGluIGRhcmstYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBkYXJrLXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi1tZDtcbn1cblxuQG1peGluIGJ1dHRvbi14cyB7XG4gICAgbWluLXdpZHRoOiAycmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGJ1dHRvbi1zbSB7XG4gICAgbWluLXdpZHRoOiAzcmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gYnV0dG9uLW1kIHtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBsaWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRlZ2dzaGVsbC1kYXJrO1xuICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxhdXJlbC1ncmVlbjtcbiAgfVxuICAmLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRvbGl2ZS1ncmVlbjtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICB9XG4gICZbZGlzYWJsZWRdIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cblxuQG1peGluIGRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2stb2xpdmU7XG4gIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXJteS1ncmVlbjtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICB9XG4gICYuYWN0aXZlOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9saXZlLWdyZWVuO1xuICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gIH1cbiAgJltkaXNhYmxlZF0ge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxufVxuXG5AbWl4aW4gdG9wLW5hdi1wYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgQGlmICRtZWRpYSA9PSBzbWFsbCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1zbWFsbCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFyZ2UgLSAxKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IHdpZGUge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlKSB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICA6aG9zdCBkaXYucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMy4yNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwbXM7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUuZXhwYW5kZWQge1xuICAgIGhlaWdodDogODUlO1xuICB9XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIC5leHBhbmRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDAzODtcbiAgICBjb2xvcjogI0ZDRkNGOTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2lkdGg6IDMuNXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhBOUE1QjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLmV4cGFuZGVyOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRCNTMyMDtcbiAgICBjb2xvcjogI0ZDRkNGOTtcbiAgfVxuICA6aG9zdCBkaXYucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSAuZXhwYW5kZXIuYWN0aXZlOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwODIzODtcbiAgICBjb2xvcjogI0ZDRkNGOTtcbiAgfVxuICA6aG9zdCBkaXYucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSAuZXhwYW5kZXJbZGlzYWJsZWRdIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLmV4cGFuZGVyIC5leHBhbmRlci1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLmV4cGFuZGVyIC5leHBhbmRlci1pY29uLmZsaXBwZWQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbn1cbjpob3N0IC5wYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMSAxIDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogMjcuNSU7XG4gIG1pbi13aWR0aDogMjByZW07XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSAuZXhwYW5kZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5yaWdodC1zaWRlIHtcbiAgZmxleDogMSAxIDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAucGFnZS1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmZvb3RlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXJlbTtcbn1cblxuLnVwbG9hZGVkLWZpbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuLnVwbG9hZGVkLWZpbGUtY29udGFpbmVyIC51cGxvYWRlZC1maWxlIHtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udXBsb2FkZWQtZmlsZS1jb250YWluZXIgLnVwbG9hZGVkLWZpbGUgLmZpbGUtbmFtZSB7XG4gIGNvbG9yOiAjRjRGN0VBO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0MDM4O1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwLjI1cmVtIDAgMDtcbn1cbi51cGxvYWRlZC1maWxlLWNvbnRhaW5lciAudXBsb2FkZWQtZmlsZSAuZmlsZS1waWMge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59IiwiXG4kZGFyay1ncmVlbjogIzI5MkUxMjtcbiRhcm15LWdyZWVuOiAjNEI1MzIwO1xuJG9saXZlLWdyZWVuOiAjNzA4MjM4O1xuJG1vc3MtZ3JlZW46ICM4QTlBNUI7XG4kbGF1cmVsLWdyZWVuOiAjQkFDMzlGO1xuXG4kc2F0dXJhdGVkLW9saXZlOiAjNzI5OTAwO1xuJHNhdHVyYXRlZC1ibHVlOiAjMTY0RUI3O1xuXG4vLyBuaWNlIGZvciB0ZXh0IGFnYWluc3QgZGFyayBiYWNrZ3JvdW5kXG4kbGlnaHQtZ3JlZW46ICNGNEY3RUE7XG4kbGlnaHRlc3QtZ3JlZW46ICNGQ0ZDRjk7XG5cbi8vIFVzZWQgZm9yIGZpbGUgc2VsZWN0b3JcbiRlZ2dzaGVsbC1kYXJrZXI6ICNEREQ5Q0Y7XG4kZWdnc2hlbGwtZGFyazogI0VBRTZEQTtcbiRlZ2dzaGVsbDogI0VGRUJERjtcbiRlZ2dzaGVsbC1saWdodDogI0YyRUVFMTtcblxuLy8gZ3JheXNcbiRiYXNpY2FsbHktYmxhY2s6ICMyMDIxMjQ7XG4kYmxhY2stb2xpdmU6ICMzRjQwMzg7XG4kZ3Jhbml0ZTogIzY1NjM1RjtcbiRsaWdodGVyLWdyYXk6ICM5RDlCOTk7XG4kd2hpdGU6ICNmZmY7XG5cbiRnb2xkOiAjRDZCOTAyO1xuJHN0YXItYmx1ZTogIzFENjJDNDtcblxuJGJyZWFrLXNtYWxsOiA1NTBweDtcbiRicmVhay1tZDogODAwcHg7XG4kYnJlYWstbGFyZ2U6IDEwMjRweDtcbiIsIkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0IHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1wYWdlO1xuICAucGFnZS1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAuZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXJlbTtcbiAgICB9XG4gIH1cbn1cbi51cGxvYWRlZC1maWxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgLnVwbG9hZGVkLWZpbGUge1xuICAgIG1hcmdpbjogMC41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAuZmlsZS1uYW1lIHtcbiAgICAgIGNvbG9yOiAkbGlnaHQtZ3JlZW47XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2stb2xpdmU7XG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMC4yNXJlbSAwIDA7XG4gICAgfVxuICAgIC5maWxlLXBpYyB7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/photo-gallery/photo-gallery.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.component.ts ***!
  \**********************************************************/
/*! exports provided: PhotoGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryComponent", function() { return PhotoGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/index */ "./src/app/services/index.ts");
/* harmony import */ var _app_photo_gallery_services_photo_gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/photo-gallery/services/photo-gallery.service */ "./src/app/photo-gallery/services/photo-gallery.service.ts");




var PhotoGalleryComponent = /** @class */ (function () {
    function PhotoGalleryComponent(firebaseAuthService, pgs) {
        this.firebaseAuthService = firebaseAuthService;
        this.pgs = pgs;
        this.uploadedFiles$ = this.pgs.getUploadedFiles$();
        this.uploadedFiles$.subscribe(console.log);
    }
    PhotoGalleryComponent.prototype.onFileChange = function (file, user) {
        this.pgs.uploadFile(file, user);
    };
    PhotoGalleryComponent.ctorParameters = function () { return [
        { type: _services_index__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"] },
        { type: _app_photo_gallery_services_photo_gallery_service__WEBPACK_IMPORTED_MODULE_3__["PhotoGalleryService"] }
    ]; };
    PhotoGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'photo-gallery',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo-gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/photo-gallery.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo-gallery.component.scss */ "./src/app/photo-gallery/photo-gallery.component.scss")).default]
        })
    ], PhotoGalleryComponent);
    return PhotoGalleryComponent;
}());



/***/ }),

/***/ "./src/app/photo-gallery/photo-gallery.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.module.ts ***!
  \*******************************************************/
/*! exports provided: PhotoGalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryModule", function() { return PhotoGalleryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/photo-gallery/photo-gallery.component */ "./src/app/photo-gallery/photo-gallery.component.ts");
/* harmony import */ var _app_photo_gallery_photo_gallery_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/photo-gallery/photo-gallery.routes */ "./src/app/photo-gallery/photo-gallery.routes.ts");
/* harmony import */ var _app_user_login_user_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/user-login/user-login.module */ "./src/app/user-login/user-login.module.ts");
/* harmony import */ var _app_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/file-uploader/file-uploader.module */ "./src/app/file-uploader/file-uploader.module.ts");
/* harmony import */ var _app_photo_gallery_services_photo_gallery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/photo-gallery/services/photo-gallery.service */ "./src/app/photo-gallery/services/photo-gallery.service.ts");








var PhotoGalleryModule = /** @class */ (function () {
    function PhotoGalleryModule() {
    }
    PhotoGalleryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _app_photo_gallery_photo_gallery_routes__WEBPACK_IMPORTED_MODULE_4__["PhotoGalleryRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_6__["FileUploaderModule"],
                _app_user_login_user_login_module__WEBPACK_IMPORTED_MODULE_5__["UserLoginModule"],
            ],
            declarations: [
                _app_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_3__["PhotoGalleryComponent"],
            ],
            exports: [
                _app_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_3__["PhotoGalleryComponent"],
            ],
            providers: [
                _app_photo_gallery_services_photo_gallery_service__WEBPACK_IMPORTED_MODULE_7__["PhotoGalleryService"],
            ],
        })
    ], PhotoGalleryModule);
    return PhotoGalleryModule;
}());



/***/ }),

/***/ "./src/app/photo-gallery/photo-gallery.routes.ts":
/*!*******************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.routes.ts ***!
  \*******************************************************/
/*! exports provided: PhotoGalleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryRoutingModule", function() { return PhotoGalleryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/photo-gallery/photo-gallery.component */ "./src/app/photo-gallery/photo-gallery.component.ts");




var routes = [
    {
        path: '',
        component: _src_app_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_3__["PhotoGalleryComponent"]
    }
];
var PhotoGalleryRoutingModule = /** @class */ (function () {
    function PhotoGalleryRoutingModule() {
    }
    PhotoGalleryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PhotoGalleryRoutingModule);
    return PhotoGalleryRoutingModule;
}());



/***/ }),

/***/ "./src/app/photo-gallery/services/photo-gallery.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/photo-gallery/services/photo-gallery.service.ts ***!
  \*****************************************************************/
/*! exports provided: PhotoGalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryService", function() { return PhotoGalleryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/index */ "./src/app/services/index.ts");





var PhotoGalleryService = /** @class */ (function () {
    function PhotoGalleryService(fas, ffs, fss) {
        this.fas = fas;
        this.ffs = ffs;
        this.fss = fss;
    }
    PhotoGalleryService.prototype.uploadFile = function (file, user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registrationResponse, registeredFileId, fileUploadResponse, downloadUrl, uploadMeta;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ffs.registerFileId(file, user)];
                    case 1:
                        registrationResponse = _a.sent();
                        registeredFileId = registrationResponse.id;
                        return [4 /*yield*/, this.fss.uploadFile(file, registeredFileId)];
                    case 2:
                        fileUploadResponse = _a.sent();
                        return [4 /*yield*/, fileUploadResponse.ref.getDownloadURL()];
                    case 3:
                        downloadUrl = _a.sent();
                        uploadMeta = {
                            downloadUrl: downloadUrl,
                        };
                        return [4 /*yield*/, this.ffs.registerFileUploaded(registeredFileId, uploadMeta, user)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhotoGalleryService.prototype.getUploadedFiles$ = function () {
        var _this = this;
        return this.fas.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            if (!user) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }
            else {
                return _this.ffs.getUploadedFiles$(user);
            }
        }));
    };
    PhotoGalleryService.ctorParameters = function () { return [
        { type: _services_index__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthService"] },
        { type: _services_index__WEBPACK_IMPORTED_MODULE_4__["FirebaseFirestoreService"] },
        { type: _services_index__WEBPACK_IMPORTED_MODULE_4__["FirebaseStorageService"] }
    ]; };
    PhotoGalleryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PhotoGalleryService);
    return PhotoGalleryService;
}());



/***/ })

}]);
//# sourceMappingURL=photo-gallery-photo-gallery-module.js.map