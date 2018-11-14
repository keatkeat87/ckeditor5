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
        // console.log('The data has changed!', editor.getData());
    });
    // https://stackoverflow.com/questions/49663625/how-to-listen-to-focus-event-in-ckeditor-5
    editor.editing.view.document.on('change:isFocused', function (evt, name, value) {
        // console.log('editable isFocused =', value); // if unfocus value will be false 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBbUU7QUFFbkUsV0FBVztBQUNYLHNGQUFzRjtBQUN0RixNQUFNO0FBQ04sbUdBQW1HO0FBR25HLElBQUksWUFBWSxHQUFRLElBQUksQ0FBQztBQUU3Qix3RUFDVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekMsSUFBSSxDQUFDLFVBQUMsTUFBVztJQUNkLFlBQVksR0FBRyxNQUFNLENBQUM7SUFFdEIsZ0hBQWdIO0lBQ2hILE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7UUFDcEMsMERBQTBEO0lBQzlELENBQUMsQ0FBQyxDQUFDO0lBRUgsMEZBQTBGO0lBQzFGLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxHQUFRLEVBQUUsSUFBUyxFQUFFLEtBQVU7UUFDaEYsaUZBQWlGO0lBQ3JGLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDO0tBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBVTtJQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUM7QUFHUCxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDL0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQyxDQUFDO0FBRUgsbUdBQW1HO0FBQ25HLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ3pELFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMzQixDQUFDLENBQUMsQ0FBQztBQUVILG1EQUFtRDtBQUNuRCxpQ0FBaUM7QUFDakMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDdkQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdEMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiMC5jYzViZGQ5NGYwZTFiZjlhZGY5Yy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XHJcblxyXG4vLyBEb2N1bWVudFxyXG4vLyBodHRwczovL2NrZWRpdG9yLmNvbS9kb2NzL2NrZWRpdG9yNS9sYXRlc3QvYnVpbGRzL2d1aWRlcy9pbnRlZ3JhdGlvbi9iYXNpYy1hcGkuaHRtbFxyXG4vLyBBUElcclxuLy8gaHR0cHM6Ly9ja2VkaXRvci5jb20vZG9jcy9ja2VkaXRvcjUvbGF0ZXN0L2FwaS9tb2R1bGVfY29yZV9jb21tYW5kLUNvbW1hbmQuaHRtbCNmdW5jdGlvbi1kZXN0cm95XHJcblxyXG5cclxubGV0IGdsb2JhbEVkaXRvcjogYW55ID0gbnVsbDtcclxuXHJcbkNsYXNzaWNFZGl0b3JcclxuICAgIC5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRvcicpKVxyXG4gICAgLnRoZW4oKGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgICAgZ2xvYmFsRWRpdG9yID0gZWRpdG9yO1xyXG5cclxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTEzMzE4My9saXN0ZW4tdG8tZXZlbnQtZmlyZWQtd2hlbi10aGUtY29udGVudC1oYXMtY2hhbmdlZC1pbi1ja2VkaXRvci01XHJcbiAgICAgICAgZWRpdG9yLm1vZGVsLmRvY3VtZW50Lm9uKCdjaGFuZ2U6ZGF0YScsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1RoZSBkYXRhIGhhcyBjaGFuZ2VkIScsIGVkaXRvci5nZXREYXRhKCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTY2MzYyNS9ob3ctdG8tbGlzdGVuLXRvLWZvY3VzLWV2ZW50LWluLWNrZWRpdG9yLTVcclxuICAgICAgICBlZGl0b3IuZWRpdGluZy52aWV3LmRvY3VtZW50Lm9uKCdjaGFuZ2U6aXNGb2N1c2VkJywgKGV2dDogYW55LCBuYW1lOiBhbnksIHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VkaXRhYmxlIGlzRm9jdXNlZCA9JywgdmFsdWUpOyAvLyBpZiB1bmZvY3VzIHZhbHVlIHdpbGwgYmUgZmFsc2UgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldERhdGFCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGdsb2JhbEVkaXRvci5nZXREYXRhKCkpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXREYXRhQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBnbG9iYWxFZGl0b3Iuc2V0RGF0YShgPHA+c2V0IGRhdGEgc3VjY2Vzc2Z1bC48L3A+YCk7XHJcbn0pO1xyXG5cclxuLy8gaHR0cHM6Ly9ja2VkaXRvci5jb20vZG9jcy9ja2VkaXRvcjUvbGF0ZXN0L2FwaS9tb2R1bGVfY29yZV9jb21tYW5kLUNvbW1hbmQuaHRtbCNmdW5jdGlvbi1kZXN0cm95XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXN0cm95JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBnbG9iYWxFZGl0b3IuZGVzdHJveSgpO1xyXG59KTtcclxuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUvaXNzdWVzLzcxNFxyXG4vLyBub3RlOiBmb2N1cyDlubbkuI3kvJrorqkgc2Nyb2xsIG1vdmUg5ZOmXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2N1cycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZ2xvYmFsRWRpdG9yLmVkaXRpbmcudmlldy5mb2N1cygpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=