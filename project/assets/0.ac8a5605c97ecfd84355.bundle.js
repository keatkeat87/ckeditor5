(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["0"],{

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);

// Document
// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/basic-api.html
// API
// https://ckeditor.com/docs/ckeditor5/latest/api/module_core_command-Command.html#function-destroy
var globalEditor = null;
_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__["create"](document.querySelector('#editor'))
    .then(function (editor) {
    globalEditor = editor;
    // https://stackoverflow.com/questions/45133183/listen-to-event-fired-when-the-content-has-changed-in-ckeditor-5
    editor.model.document.on('change:data', function () {
        console.log('The data has changed!', editor.getData());
    });
    // https://stackoverflow.com/questions/49663625/how-to-listen-to-focus-event-in-ckeditor-5
    editor.editing.view.document.on('change:isFocused', function (evt, name, value) {
        console.log('editable isFocused =', value); // if unfocus value will be false 
    });
})
    .catch(function (error) {
    console.error(error);
});
document.getElementById('getDataButton').addEventListener('click', function () {
    console.log(globalEditor.getData());
});
document.getElementById('setDataButton').addEventListener('click', function () {
    globalEditor.setData("<p>set data successful.</p>");
});
// https://ckeditor.com/docs/ckeditor5/latest/api/module_core_command-Command.html#function-destroy
document.getElementById('destroy').addEventListener('click', function () {
    globalEditor.destroy();
});
// https://github.com/ckeditor/ckeditor5/issues/714
// note: focus 并不会让 scroll move 哦
document.getElementById('focus').addEventListener('click', function () {
    globalEditor.editing.view.focus();
});


/***/ })

},[["./main.ts","runtime~0","vendors~0"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBbUU7QUFFbkUsV0FBVztBQUNYLHNGQUFzRjtBQUN0RixNQUFNO0FBQ04sbUdBQW1HO0FBR25HLElBQUksWUFBWSxHQUFRLElBQUksQ0FBQztBQUU3Qix3RUFDVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekMsSUFBSSxDQUFDLFVBQUMsTUFBVztJQUNkLFlBQVksR0FBRyxNQUFNLENBQUM7SUFFdEIsZ0hBQWdIO0lBQ2hILE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDLENBQUMsQ0FBQztJQUVILDBGQUEwRjtJQUMxRixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFVBQUMsR0FBUSxFQUFFLElBQVMsRUFBRSxLQUFVO1FBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQ0FBa0M7SUFDbEYsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsVUFBQyxLQUFVO0lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQztBQUdQLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUMvRCxZQUFZLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxtR0FBbUc7QUFDbkcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDekQsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRUgsbURBQW1EO0FBQ25ELGlDQUFpQztBQUNqQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUN2RCxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN0QyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIwLmFjOGE1NjA1Yzk3ZWNmZDg0MzU1LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcclxuXHJcbi8vIERvY3VtZW50XHJcbi8vIGh0dHBzOi8vY2tlZGl0b3IuY29tL2RvY3MvY2tlZGl0b3I1L2xhdGVzdC9idWlsZHMvZ3VpZGVzL2ludGVncmF0aW9uL2Jhc2ljLWFwaS5odG1sXHJcbi8vIEFQSVxyXG4vLyBodHRwczovL2NrZWRpdG9yLmNvbS9kb2NzL2NrZWRpdG9yNS9sYXRlc3QvYXBpL21vZHVsZV9jb3JlX2NvbW1hbmQtQ29tbWFuZC5odG1sI2Z1bmN0aW9uLWRlc3Ryb3lcclxuXHJcblxyXG5sZXQgZ2xvYmFsRWRpdG9yOiBhbnkgPSBudWxsO1xyXG5cclxuQ2xhc3NpY0VkaXRvclxyXG4gICAgLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdG9yJykpXHJcbiAgICAudGhlbigoZWRpdG9yOiBhbnkpID0+IHtcclxuICAgICAgICBnbG9iYWxFZGl0b3IgPSBlZGl0b3I7XHJcblxyXG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ1MTMzMTgzL2xpc3Rlbi10by1ldmVudC1maXJlZC13aGVuLXRoZS1jb250ZW50LWhhcy1jaGFuZ2VkLWluLWNrZWRpdG9yLTVcclxuICAgICAgICBlZGl0b3IubW9kZWwuZG9jdW1lbnQub24oJ2NoYW5nZTpkYXRhJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlIGRhdGEgaGFzIGNoYW5nZWQhJywgZWRpdG9yLmdldERhdGEoKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NjYzNjI1L2hvdy10by1saXN0ZW4tdG8tZm9jdXMtZXZlbnQtaW4tY2tlZGl0b3ItNVxyXG4gICAgICAgIGVkaXRvci5lZGl0aW5nLnZpZXcuZG9jdW1lbnQub24oJ2NoYW5nZTppc0ZvY3VzZWQnLCAoZXZ0OiBhbnksIG5hbWU6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWRpdGFibGUgaXNGb2N1c2VkID0nLCB2YWx1ZSk7IC8vIGlmIHVuZm9jdXMgdmFsdWUgd2lsbCBiZSBmYWxzZSBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9KTtcclxuXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0RGF0YUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZ2xvYmFsRWRpdG9yLmdldERhdGEoKSk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldERhdGFCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGdsb2JhbEVkaXRvci5zZXREYXRhKGA8cD5zZXQgZGF0YSBzdWNjZXNzZnVsLjwvcD5gKTtcclxufSk7XHJcblxyXG4vLyBodHRwczovL2NrZWRpdG9yLmNvbS9kb2NzL2NrZWRpdG9yNS9sYXRlc3QvYXBpL21vZHVsZV9jb3JlX2NvbW1hbmQtQ29tbWFuZC5odG1sI2Z1bmN0aW9uLWRlc3Ryb3lcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc3Ryb3knKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGdsb2JhbEVkaXRvci5kZXN0cm95KCk7XHJcbn0pO1xyXG5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS9pc3N1ZXMvNzE0XHJcbi8vIG5vdGU6IGZvY3VzIOW5tuS4jeS8muiuqSBzY3JvbGwgbW92ZSDlk6ZcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvY3VzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBnbG9iYWxFZGl0b3IuZWRpdGluZy52aWV3LmZvY3VzKCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==