(function($) {

    $.messageBox = function( options ) {

        // Establish our default settings
		
        var settings = $.extend({
			type		 : 'modal',   //possible values: [modal, banner]
			behavior	 : 'success',	//possible values: [success, warning, error]
            text         : null,
			title		 : null,
            color        : null,
            fontStyle    : 'Verdana',
			autoClose	 : false,
			duration	 : 0,
			location     : 'default', //possible values:[top,bottom,center,default] default:banner-top,modal-center
			showAfter	 : false,
			showAfterDuration	 : 0
        }, options);
		
		var jQMB = 'jQMB';
		jQuery('.' + jQMB).remove();
		
		var classNames = jQMB + ' ' + jQMB + settings['type'] + ' ' + jQMB + settings['behavior'] + ' ' + jQMB + settings['type'] + settings['behavior'];
        
		//outer div jQMB
		var div = document.createElement('div'); //jQMB
		
		jQuery(div).addClass(classNames).prependTo('body');
		
		//inner header jQMBheader
		if(settings['type']=="modal") {
		div =  '<div class="jQMBheader unselectable jQMBcbtnhldr" unselectable="on">'+ settings['title'] +'</div>';
		jQuery('.jQMB').append(div);
		
		}
		//inner window jQMBwindow
		div =  '<div class="jQMBwindow ';
		if(settings['type']=="banner") {
			div += 'jQMBcbtnhldr';
		}
		div += '">'+ settings['text'] +'</div>';
		jQuery('.jQMB').append(div);
		
		//close button
		div = '<span class="jQMBclosebtn" onclick="jQuery(\'.jQMB\').slideToggle(\'slow\');">x</span>';
		jQuery('.jQMBcbtnhldr').append(div);
		
		//css tweek for color
		if(settings['color'] != null) {
		jQuery('.jQMBheader, .jQMBwindow').css("color",settings['color']);
		}
		
		//css tweek for font style
		if(settings['fontStyle'] != null) {
		jQuery('.jQMBheader, .jQMBwindow').css("font-family",settings['fontStyle']);
		}
		
		//timing snippet for showafter and autoclose
		if(settings['showAfter']) {
		setTimeout(function(){
				jQuery('.jQMB').slideDown('slow',function(){ 
						jQuery('.jQMBwindow').fadeOut('slow').fadeIn('slow');})
						if(settings['autoClose']) {
				setTimeout(function(){ jQuery('.' + jQMB).slideUp('slow')
												}, settings['duration']);
			}
						}, settings['showAfterDuration']);
			
			
		
		}
		//normal msgbox display and autoclose
		else {
		jQuery('.jQMB').slideDown('slow',function(){ jQuery('.jQMBwindow').fadeOut('slow').fadeIn('slow');
		if(settings['autoClose']) {
				setTimeout(function(){ 	jQuery('.' + jQMB).slideUp('slow')
										}, settings['duration'] + 2000);
			}
		});
			
		}

    }

}(jQuery));