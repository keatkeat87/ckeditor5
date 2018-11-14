import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Document
// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/basic-api.html
// API
// https://ckeditor.com/docs/ckeditor5/latest/api/module_core_command-Command.html#function-destroy


let globalEditor: any = null;

ClassicEditor
    .create(document.querySelector('#editor'))
    .then((editor: any) => {
        globalEditor = editor;

        // https://stackoverflow.com/questions/45133183/listen-to-event-fired-when-the-content-has-changed-in-ckeditor-5
        editor.model.document.on('change:data', () => {
            // console.log('The data has changed!', editor.getData());
        });

        // https://stackoverflow.com/questions/49663625/how-to-listen-to-focus-event-in-ckeditor-5
        editor.editing.view.document.on('change:isFocused', (evt: any, name: any, value: any) => {
            // console.log('editable isFocused =', value); // if unfocus value will be false 
        });

    })
    .catch((error: any) => {
        console.error(error);
    });


document.getElementById('getDataButton').addEventListener('click', () => {
    console.log(globalEditor.getData());
});

document.getElementById('setDataButton').addEventListener('click', () => {
    globalEditor.setData(`<p>set data successful.</p>`);
});

// https://ckeditor.com/docs/ckeditor5/latest/api/module_core_command-Command.html#function-destroy
document.getElementById('destroy').addEventListener('click', () => {
    globalEditor.destroy();
});

// https://github.com/ckeditor/ckeditor5/issues/714
// note: focus 并不会让 scroll move 哦
document.getElementById('focus').addEventListener('click', () => {
    globalEditor.editing.view.focus();
});




