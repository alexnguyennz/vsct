document.addEventListener('DOMContentLoaded', function () {

    const elms = document.getElementsByClassName('splide');
    for ( let i = 0, len = elms.length; i < len; i++ ) {

        new Splide( elms[i], {
            type: 'loop',
            perMove: 1,
            autoWidth: true,
            gap: '5em',
        } ).mount();
    }
		
} );
