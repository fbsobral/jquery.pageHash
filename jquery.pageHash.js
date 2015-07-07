/*!
 * jQuery Page Hash
 * version: 1.1
 * Requires jQuery v1.5 or later and jQuery EventScroll
 * Copyright (c) 2015 F. Sobral
 * Examples and documentation at: http://fbsobral.github.io/jquery.pageHash/
 * Project repository: https://github.com/fbsobral/jquery.pageHash
 * Dual licensed under the MIT and GPL licenses.
 */

(function ($) {
 
    $.fn.pageHash = function(options) {

        var that = this;
 
        // defining default variables
        var settings = $.extend({
        }, options);
        
            that.eventScroll({
                mode: 'middle',
                callback: function(){
                    var id = that.attr('id');
                    if(history.pushState) {
                        var new_url = window.location.protocol + "//" + window.location.host + window.location.pathname + '#' + id;
                        window.history.pushState({ path: new_url },'', new_url);
                    }
                    else {
                        location.hash = id;
                    }
                }
            });

        // returning the element
        return this;
 
    };

    $('.pageHash').each(function(){
        $(this).pageHash();
    });
 
}(jQuery));