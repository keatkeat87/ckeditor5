// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/plugins.html
// https://ckeditor.com/docs/ckeditor5/latest/framework/guides/quick-start.html


import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

import Image from '@ckeditor/ckeditor5-image/src/image';

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';


class InsertImage extends Plugin {
    init() {
        console.log( 'InsertImage was initialized!!!' );
        const editor = this.editor;
        editor.ui.componentFactory.add( 'insertImage', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Insert image',
                icon: imageIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                const imageUrl = prompt( 'Image URL' );
                editor.model.change(writer => {
                    const imageElement = writer.createElement('image', {
                        src: imageUrl
                    });
                    // Insert the image in the current selection location.
                    editor.model.insertContent( imageElement, editor.model.document.selection );
                });
            });

            return view;
        } );
        console.log('done');
    }
}


ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Essentials, Paragraph, Bold, Italic, Image, InsertImage ],
        toolbar: [ 'bold', 'italic', 'insertImage' ]
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );