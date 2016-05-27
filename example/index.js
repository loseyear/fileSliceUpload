'use strict';
var lib = new library;
var enter = document.getElementById('enter');
var clear = document.getElementById('clear');

clear.onclick = function() {
    lib.clear();
}

enter.onclick = function() {
    lib.start({
        el: 'file',
        uri: './php/index.php',
        loading: function() {
            console.log('loading');
        },
        success: function() {
            console.log('success');
        },
        error: function() {
            console.log('error');
        }
    });
}
