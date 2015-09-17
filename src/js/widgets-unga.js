if ( typeof exports === 'object' && typeof exports.nodeName !== 'string' && typeof define !== 'function' ) {
    var define = function( factory ) {
        factory( require, exports, module );
    };
}

define( function( require, exports, module ) {
    var widgets = [
        require( '../widget/horizontal-choices/horizontalchoices' ),
        require( '../widget/select-unga/select-unga' ),
        require( '../widget/select-unga-collapse/select-unga-collapse' ),
        require( '../widget/select-unga-placeholder/select-unga-placeholder' ),
        require( '../widget/unga-slider/unga-slider' ),
    ];

    module.exports = widgets;
} );
