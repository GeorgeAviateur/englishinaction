
var cheverongo=0;
var cheverongo1=0;
var cheverongo2=0;
var cheverongo3=0;
var cheverongo4=0;
(function($) {
var dragging, placeholders = $();
$.fn.sortable = function(options) {
	var method = String(options);
	options = $.extend({
		connectWith: false
	}, options);
	return this.each(function() {
		if (/^enable|disable|destroy$/.test(method)) { 
			var items = $(this).children($(this).data('items')).attr('draggable', method == 'enable');
			if (method == 'destroy') {
				items.add(this).removeData('connectWith items')
					.off('dragstart.h5s dragend.h5s selectstart.h5s dragover.h5s dragenter.h5s drop.h5s');
			}
			return;
		}
		var isHandle, index, items = $(this).children(options.items);
		var placeholder = $('<' + (/^ul|ol$/i.test(this.tagName) ? 'li' : 'div') + ' class="sortable-placeholder">');
		items.find(options.handle).mousedown(function() {
			isHandle = true;
		}).mouseup(function() {
			isHandle = false;
		});
		$(this).data('items', options.items)
		placeholders = placeholders.add(placeholder);
		if (options.connectWith) {
			$(options.connectWith).add(this).data('connectWith', options.connectWith);
		}
		items.attr('draggable', 'true').on('dragstart.h5s', function(e) {/*alert("calolindaaaaaaaaaaaaaaaaaaaaaaaaaaa");*/ 
			if (options.handle && !isHandle) {
				return false;
			}
			isHandle = false;/*alert("calolindaaaaaaaaaaaaaaaaaaaaaaaaaaa");*/
			var dt = e.originalEvent.dataTransfer;/*alert("calolindaaaaaaaaaaaaaaaaaaaaaaaaaaa");*/
			dt.effectAllowed = 'move';
			dt.setData('Text', 'dummy');
			index = (dragging = $(this)).addClass('sortable-dragging').index();
			
		}).on('dragend.h5s', function() { /*alert("calolindaaaaaaaaaaaaaaaaaaaaaaaaaaa aqui es");*/
			dragging.removeClass('sortable-dragging').show(); /*$('.kit'+auxxx).css('display','none'); */ /*if(auxxx!=0){alert(auxxx);}*/

//*****************************************
el=document.getElementById('myul'); 
els=el.getElementsByTagName('li'); 
vec=[] ;
for(var i=0;i<els.length;i++){ 
if(els[i].parentNode==el) 
vec.push(els[i]);  
} 
if (vec.length==0) {
$('#ki').css('display','none');
}
if (vec.length!=0) {
$('#ki').css('display','inline');
}
if (vec.length==7) {
$('#ki').css('display','inline');	
$('#kit').css('display','none');
}
if (vec.length==8) {
$('#ki').css('display','none');	
}
//alert("contando: "+vec.length);
el1=document.getElementById('con'); 
els1=el1.getElementsByTagName('li'); 
vec1=[] ;
for(var i=0;i<els1.length;i++){ 
if(els1[i].parentNode==el1) 
vec1.push(els1[i]);  
} 
if (vec1.length==7) {
$('#ki').css('display','none');
$('#kit').css('display','inline');
cheverongo=1;

/*var x;
x=$("#ki");
x.remove();*/
}
if (vec.length>1) {
$('#kit').css('display','none');
}
	

//*****************************************
el2=document.getElementById('myul1'); 
els2=el2.getElementsByTagName('li'); 
vec2=[] ;
for(var i=0;i<els2.length;i++){ 
if(els2[i].parentNode==el2) 
vec2.push(els2[i]);  
} 
if (vec2.length==0) {
$('#ki1').css('display','none');
}
if (vec2.length!=0) {
$('#ki1').css('display','inline');
}
if (vec2.length==7) {
$('#ki1').css('display','inline');	
$('#kit1').css('display','none');
}
if (vec2.length==8) {
$('#ki1').css('display','none');	
}
//alert("contando: "+vec.length);
el3=document.getElementById('con1'); 
els3=el3.getElementsByTagName('li'); 
vec3=[] ;
for(var i=0;i<els3.length;i++){ 
if(els3[i].parentNode==el3) 
vec3.push(els3[i]);  
} 
if (vec3.length==7) {
$('#ki1').css('display','none');
$('#kit1').css('display','inline');
cheverongo1=1;

}
if (vec2.length>1) {
$('#kit1').css('display','none');
}

//*****************************************

el4=document.getElementById('myul2'); 
els4=el4.getElementsByTagName('li'); 
vec4=[] ;
for(var i=0;i<els4.length;i++){ 
if(els4[i].parentNode==el4) 
vec4.push(els4[i]);  
} 
if (vec4.length==0) {
$('#ki2').css('display','none');
}
if (vec4.length!=0) {
$('#ki2').css('display','inline');
}
if (vec4.length==11) {
$('#ki2').css('display','inline');	
$('#kit2').css('display','none');
}
if (vec4.length==11) {
$('#ki2').css('display','none');	
}
//alert("contando: "+vec.length);
el5=document.getElementById('con2'); 
els5=el5.getElementsByTagName('li'); 
vec5=[] ;
for(var i=0;i<els5.length;i++){ 
if(els5[i].parentNode==el5) 
vec5.push(els5[i]);  
} 
if (vec5.length==10) {
$('#ki2').css('display','none');
$('#kit2').css('display','inline');
cheverongo2=1;


}
if (vec4.length>1) {
$('#kit2').css('display','none');
}
	

//*****************************************

el6=document.getElementById('myul3'); 
els6=el6.getElementsByTagName('li'); 
vec6=[] ;
for(var i=0;i<els6.length;i++){ 
if(els6[i].parentNode==el6) 
vec6.push(els6[i]);  
} 
if (vec6.length==0) {
$('#ki3').css('display','none');
}
if (vec6.length!=0) {
$('#ki3').css('display','inline');
}
if (vec6.length==8) {
$('#ki3').css('display','inline');	
$('#kit3').css('display','none');
}
if (vec6.length==9) {
$('#ki3').css('display','none');	
}
//alert("contando: "+vec.length);
el7=document.getElementById('con3'); 
els7=el7.getElementsByTagName('li'); 
vec7=[] ;
for(var i=0;i<els7.length;i++){ 
if(els7[i].parentNode==el7) 
vec7.push(els7[i]);  
} 
if (vec7.length==8) {
$('#ki3').css('display','none');
$('#kit3').css('display','inline');
cheverongo3=1;

}
if (vec6.length>1) {
$('#kit3').css('display','none');
}
	

//*****************************************
el8=document.getElementById('myul4'); 
els8=el8.getElementsByTagName('li'); 
vec8=[] ;
for(var i=0;i<els8.length;i++){ 
if(els8[i].parentNode==el8) 
vec8.push(els8[i]);  
} 
if (vec8.length==0) {
$('#ki4').css('display','none');
}
if (vec8.length!=0) {
$('#ki4').css('display','inline');
}
if (vec8.length==9) {
$('#ki4').css('display','inline');	
$('#kit4').css('display','none');
}
if (vec8.length==10) {
$('#ki4').css('display','none');	
}
//alert("contando: "+vec.length);
el9=document.getElementById('con4'); 
els9=el9.getElementsByTagName('li'); 
vec9=[] ;
for(var i=0;i<els9.length;i++){ 
if(els9[i].parentNode==el9) 
vec9.push(els9[i]);  
} 
if (vec9.length==9) {
$('#ki4').css('display','none');
$('#kit4').css('display','inline');
cheverongo4=1;


}
if (vec8.length>1) {
$('#kit4').css('display','none');
}
	

//*****************************************















 

//**********************





			placeholders.detach();
			if (index != dragging.index()) { 
				items.parent().trigger('sortupdate', {item: dragging});
			}
	/**/		dragging = null;
		}).not('a[href], img').on('selectstart.h5s', function() {
			this.dragDrop && this.dragDrop();
			return false;
		}).end().add([this, placeholder]).on('dragover.h5s dragenter.h5s drop.h5s', function(e) {
			if (!items.is(dragging) && options.connectWith !== $(dragging).parent().data('connectWith')) {
				return true;
			}
			if (e.type == 'drop') {
				e.stopPropagation();
				placeholders.filter(':visible').after(dragging);
				return false;

			}
			e.preventDefault();
			e.originalEvent.dataTransfer.dropEffect = 'move';
			if (items.is(this)) {
				if (options.forcePlaceholderSize) {
					placeholder.height(dragging.outerHeight());
				}
				dragging.hide();
				$(this)[placeholder.index() < $(this).index() ? 'after' : 'before'](placeholder);
				placeholders.not(placeholder).detach();
			} else if (!placeholders.is(this) && !$(this).children(options.items).length) {
				placeholders.detach();
				$(this).append(placeholder);
			}
			return false;
		});
	});
};
})(jQuery);
