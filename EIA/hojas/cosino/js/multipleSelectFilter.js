
var xx;
var y;
var z;
var a;
var iz,der,arr,ancho,alto;
var ingles =["amazing","anger","army","bargains","beginning","believe","between","beverage","boring","breathtaking","cartoon","check_in","childhood","chips","climb","crackers","designers","diseases","downtown","dune","earn","entertain","environment","fear","female","find","flight","guess","hard","have_fun","health","healthy","high-speeds","hiking","hobby","hope","humanoid","laugh","law","leisure_time","light","loud","male","meet","midtown","movie_listings","muscles","need","performance","pick_up","pickles","place","polluted","pub","relaxing","role","sandy","seabirds","seafood","sick","silly","spend","square","stay","strengthen","survey","take_care","teenagers","tired","town","treadmill","treat","trip","try","tune_in","uptown","volunteer","want","wear","weather","weight_lifting","while","whole","work_out"];
var espanol = ["asombroso","enfado","ejército","ofertas","comienzo","creer/creencia","entre","bebida","aburrido","impresionante/hermoso","dibujos_animados","registrarse","infancia","papas_fritas","escalar","galletas_de_soda","diseñadores","enfermedades","centro_de_la_ciudad","duna_de_arena","ganar","entretener","medio_ambiente","temor/miedo","femenino","encontrar","vuelo","adivinar","duro/fuerte","divertirse","salud","saludable","alta_velocidad","senderismo","pasa_tiempo","esperanza","humanoide","reirse","derecho","tiempo_libre","ligero","fuerte","masculine","reunirse","centro_de_la_ciudad","cartelera de cine","músculos","necesitar/necesidad","presentación","recoger","pepinillos","lugar","contaminado","bar","relajante","rol","arenosa","aves_marinas","comida_de_mar","enfermo(a)","tonto(a)","pasar(tiempo)","plaza","permanecer","fortalecer","encuesta","cuidar","adolescentes","cansado","pueblo","caminadora","trato","viaje","probar","sintonizar","parte_alta_de_la_ciudad","ofrecer/voluntario(a)","querer/desear","vestir/usar","clima","levantamiento_de_pesas","mientras","entero","hacer_ejercicio_con_pesas"];
var frases=["Eg: I like watching action movies because they have amazing effects.","Eg: the slow waiter caused great anger among the diners.","Eg: I went to the army to visit my friends.","Eg: In December many malls have special bargains.","Eg: At the beginning of the year, I will stop smoking.","Eg: I believe that in the future we will live longer.","Eg: There is a difference between boys and girls.","Eg: In Jamaica I drank a delicious typical beverage.","Eg: watching drama movies y boring.","Eg: San Andres Sea is breathtaking.","Eg: Example: My little brother likes to watch carton movies.","Eg: Example: When we arrived to the hotel, we checked in.","Eg: I had a wonderful childhood.","Eg: I like to eat chips.","Eg: I’m going to climb Quinini mountain.","Eg: I like to eat crackers with juice at night.","Eg: Example: In Paris there are many famous designers.","Eg: In the future scientist will find the cure for many diseases.","Eg:  In Miami I’m going shopping  downtown","Eg: Martina spent the afternoon playing aong the sand dunes.","Eg: I’m going to get another job to earn more money.","Eg: watching horror movies entertain me.","Eg: Example: We should take care of the environment.","Eg: She felt fear when she saw the horror movie.","Eg: Example: there is a female clothe store at the mall.","Eg: I need to find a new job!","Eg: Example: the flight from Bogota to Lima arrives at 6:00 p.m","Eg: Guess what happened to me yesterday!","Eg: I’m going to work hard next year to buy a new car.","Eg: I like to meet my friends on weekends and have fun!","Eg: I do cardiovascular exercises to take care of my health.","Eg: I exercise every day to stay healthy.","Eg: Example: I love high – speeds.","Eg: In Colombia there are many interesting places to go hiking.","Eg: Example.  My favorite hobby is playing soccer.","Eg: Example: I hope everything is ok in your life.","Eg: Example: humanoid will replace teacher in the future.","Eg: yesterday I laughed a lot while watching the movie.","Eg: I’m a Law student at Externado University.","Eg: In my leisure time I like going to the gym.","Eg: Example: I like to drink light coke.","Eg: That music is too loud! I can’t hear you!","Eg:: I like Kevin's voice. He has an attractive male voice.","Eg: I usually meet my friends on Saturday night.","Eg:  The hotel is located in midtown Manhattan","Eg: There is a new action movie on the movie listings this month.","Eg: I do weight lifting to strengthen my muscles.","Eg: I need to talk to you.","Eg: The group performance was excellent!","Eg: My boyfriend is going to pick me up at 9:00 p.m","Eg: I hate eating pickles.","Eg: when I went to Cartagena I visited many touristic places.","Eg: in Colombia, some rivers are polluted.","Eg: I like going to a pub with my friends.","Eg: listening to classical music is very relaxing.","Eg: teachers play an important role in society","Eg: San Andres has beautiful sandy beaches.","Eg: In Miami Beach you can see many seabirds.","Eg: I love eating seafood.","Eg: I feel sick. I have stomachache.","Eg: I don’t like horror movies because they are silly!","Eg: Example. I like to spend time with my friends.","Eg: In Italy we are going to visit San Pedro’s Square.","Eg: I like to eat fruits and vegetables to stay healthy.","Eg: I go to the gym to strengthen my muscles. ","Eg: we are going to take a survey about eating habits.","Eg: I like to eat fruits and vegetables to take care of my health.","Eg: Teenagers usually prefer watching comedy movies.","Eg: I feel really tired after going to the gym.","Eg: I live in a small town of Cundinamarca.","Eg: when I go to the gym I use the treadmill for 20 minutes.","Eg: On my birthday my parents are going to give me a special treat.","Eg: Next vacation I’m going on a 2 - week trip to Europe.","Eg: when I visit other places I like to try typical dishes.","Eg: I like to tune in Toca stereo. I like its music.","Eg: In new York we will go uptown to fifth Avenue.","Eg: next year I will volunteer my time to help people in need.","Eg: I go to the gym because I want to lose weight.","Eg: I like to wear dresses.","Eg: Fusagasuga’s weather is nice.","Eg: When I go to the gym I like to do weight lifting.","Eg: yesterday I laughed a lot while watching the movie.","Eg: I’ going to spend my whole vacation I Spain.","Eg: When I go to the gym I like to work out."];
function MaysPrimera(string){ 
return string.charAt(0).toUpperCase() + string.slice(1); 
}

var multipleSelectFilter = new Class({
	Implements: [Events, Options, Chain],
	options:{
		zIndex:10000,
		classes:{
			overlay  : 'modal-overlay',
			window   : 'modal-window',
			content  : 'modal-content',
			closer   : 'modal-closer',
			titlebar : 'modal-titlebar'
		},
		size:{x:500,y:250},
		txtInitial:'Type here to search...',
		txtBtClose:'Close',
		txtBtFilterReset:'Translate',
		imgClose:'../imagenes/close.png'
	},
	
	// Initializes the modal class
	initialize:function(options){
		this.setOptions(options);
		this.build();
		this.setInitialPosition();
	},
	
	// Builds the modal window components (window, content, title bar, close button, page overlay)
	build:function(){
		
		//title bar (title text inserted according to select filter)
		htmlTitle='<h3></h3>';
		this.titlebar = new Element('div',{
			'class':this.options.classes.titlebar,
			'html':'<h3></h3>'
		});
		
		//	close button
		this.closer = new Element('img',{
			'class':this.options.classes.closer,
			'src':this.options.imgClose,
			'title':this.options.txtBtClose,
			events:{
				'click':this.close.bindWithEvent(this)
			}
		}).inject(this.titlebar,'bottom').setStyle('cursor','pointer');
		
		//	contents holder - the filter is loaded into this element
		this.content = new Element('div',{
			'class':this.options.classes.content
		});
		
		//	the modal window
		this.modal = new Element('div',{
			'class':this.options.classes.window,
			styles:{'display':'none','z-index':this.options.zIndex+1}
		}).adopt(this.titlebar,this.content);
		
		//	overlay
		this.overlay = new Element('div',{
			'html':'&nbsp;',
			'class':this.options.classes.overlay,
			styles:{
				'display':'none',
				'z-index':this.options.zIndex,
				'background':'#000',
				'height':'100%'
			}
		});
		
		// inject the whole lot into the page
		$(document.body).adopt(this.overlay,this.modal);
		
		// Add an iframe below the content element to fix IE6 select element z-index bug
		if(Browser.Engine.trident4){
			var iframe1 = new Element('iframe',{
				styles:{'position':'absolute','width':'104%','height':'110%','top':'-5%','left':'-2%','z-index':'-1'},
				height:'100%',
				width:'100%',
				frameborder:0
			}).setOpacity(0).inject(this.modal,'top');
			var iframe2 = new Element('iframe',{
				styles:{'position':'absolute','width':'120%','height':'120%','top':'-10%','left':'-10%'},
				height:'100%',
				width:'100%',
				frameborder:0
			}).setOpacity(0).inject(this.overlay,'top');
		}
	},
	
	//	get all the "openers" and add event
	bindOpeners:function(els){
		this.openers = $splat(els);
		if(this.openers.length == 0) {
			return;
		}

        var _this=this;
		this.openers.addEvent('click',function(e){
			var ev = new Event(e);
			ev.preventDefault();
			_this.getContent(this);
		});
        document.getElementById(idxxx).click();
	},
	
	//	get filter contents and open modal window
	getContent:function(el){
		this.chain.apply(this,[
				this.filter(el.get('id')),
				this.toggleOverlay(),
				this.open()
			]
		);
	},
	
	//	set content
	setContent:function(modalContent,modalSize,modalTitle){
		// will use this to make the box size according to select list width ? - careful with the buttons!
		var size = $type(modalSize) != 'object' ? this.options.size : modalSize;
		this.modal.getElement('h3').set('text',modalTitle);
		this.content.empty().adopt(modalContent).set('opacity',1);
	},
	
	// toggleOverlay
	toggleOverlay:function(state){
		var opacity = state || this.overlay.retrieve('opacity');
		this.overlay.setStyle('display',opacity ? 'none' : 'block').set('opacity',opacity ? 0 : 0.6);
	},
	
	// Opens the modal window
	open:function(){
		this.setInitialPosition();
		this.modal.set('opacity',1);
		//this.content.set('html','loading...');
	},
	
	// Close the modal window and remove it's contents
	close:function(e){
        parent.closebuscador();
		//if(e){ e.preventDefault(); }
		//this.modal.set('opacity',0);
		//this.overlay.set('opacity',0);
		//this.content.empty();
		//if(this.request){ this.request.cancel();}
	},
	
	// getWindowDimentions
	getWindowDimentions:function(size){
        if(window.innerWidth>700){
            iz=28,der=10,arr=24,ancho="500px",alto="250px";
        }else{
            iz=1,der=1,arr=24,ancho="97%",alto="300px";
        }
		var docSize = document.getSize(), scroll = document.getScroll();
		var params = {
                        
            left: iz+'%',
			right: der+'%',
			top: arr+'%',
			height:alto,
			width: ancho
            
            
		};
		return params;
	},
	//set initial window position
	setInitialPosition:function(){
		this.modal.setStyles($merge({
			display:'block',
			opacity:0
		},this.getWindowDimentions(this.options.size)));
	},
	
	//	create the select list filter )get options, 
	filter:function(id){
		var selectList		= $(''+id.replace('filter_','')+'');
		var selectOptions	= selectList.getElements('option');
		var title			= selectList.get('title');
		var selectBoxHeight	= (this.options.size.y-80);
		var txtInitial		= this.options.txtInitial;
		
		//	create array select list elements
		var listItems="";
		var filterOptions=selectOptions.each(function(option,index){	
			optionValue=option.get('value').trim();
			if(optionValue!=""){
				var optionClasses='';
				var optionText	=option.get('text');
				
				//	check if option is selected - add class
				if(option.get('selected')) 	optionClasses+=' checked';
				//	check if option has special class (used if the basic select list has special classes - these classes must be added to the style sheet
				if(option.get('class')) 	optionClasses+=' '+option.get('class')+'';
				//	add option to unordered list
				listItems += '<li id="opt_'+index+'" rel="'+optionValue+'" class="'+optionClasses+'">'+optionText+'</li>';
			}
		});		
		
		//	CREATE FILTER - input, buttons and list
		//	use html string method to optimize for ie6
		var filterHTML='';
		filterHTML+='<input type="text" id="searchbox" class="search" value="">';
		filterHTML+='<input type="button" id="btListReset" class="btFilter" onclick="buscar1()" value="'+this.options.txtBtFilterReset+'">';
		
		filterHTML+='<ul id="lista" style="height:'+selectBoxHeight+'px; width:35%">'+listItems+'</ul>';
        filterHTML+='<div class="box" id="box">';

        filterHTML+='<h4><label class="pq" id="mostrando1"  type="text" value=" " ></label></h4>'
        filterHTML+='<h4><label class="pq" id="mostrando2"  type="text" value=" "></label></h4>'
        filterHTML+= '<h4><label class="pq" id="mostrando3"  type="text" value=" "></label></h4>'
        
        filterHTML+='</div>'


		var filterWrapper = new Element('div',{
			'class':'filterWrapper',
			'html':filterHTML
		});
		
		//	define elements
		var filterList		= filterWrapper.getElement('ul');
		var filterListItems = filterList.getElements('li').setStyle('cursor','pointer');
		var filterListItems = filterList.getElements('li').setStyle('display','none');
		//	store item index,value and text
		filterListItems.each(function(el){
			el.store('oTxtValue',el.get('html').toLowerCase()).store('oValue',el.get('rel')).store('oIndex',el.id.replace('opt_',''));
	    });
		
		var filterTextbox	= filterWrapper.getFirst('input').addEvents({
			'focus':function(el){
				if(this.value==''+txtInitial+''){ this.value="";}
			},
			'keyup':function(){
				checkListMatches(this.value);
				
document.getElementById('mostrando1').innerHTML='';
document.getElementById('mostrando2').innerHTML='';
document.getElementById('mostrando3').innerHTML='';
if (event.keyCode == 08){
var filterListItems = filterList.getElements('li').setStyle('display','none');
//alert("espacio");
}



		}
		});
		
//	botoncito -----------------------------------------------------------------------------
var btReset = filterWrapper.getElement('input[id=btListReset]').addEvent('click',function(){		
if (document.getElementById("searchbox").value == ('amazing')||('anger')||("army")||("bargains")||("beginning")||("believe")||("between")||("beverage")||("boring")||("breathtaking")||("cartoon")||("check_in")||("childhood")||("chips")||("climb")||("crackers")||("designers")||("diseases")||("downtown")||("dune")||("earn")||("entertain")||("environment")||("fear")||("female")||("find")||("flight")||("guess")||("hard")||("have_fun")||("health")||("healthy")||("high-speeds")||("hiking")||("hobby")||("hope")||("humanoid")||("laugh")||("law")||("leisure_time")||("light")||("loud")||("male")||("meet")||("midtown")||("movie_listings")||("muscles")||("need")||("performance")||("pick_up")||("pickles")||("place")||("polluted")||("pub")||("relaxing")||("role")||("sandy")||("seabirds")||("seafood")||("sick")||("silly")||("spend")||("square")||("stay")||("strengthen")||("survey")||("take_care")||("teenagers")||("tired")||("town")||("treadmill")||("treat")||("trip")||("try")||("tune_in")||("uptown")||("volunteer")||("want")||("wear")||("weather")||("weight_lifting")||("while")||("whole")||("work_out")){
var b=0;
xx= document.getElementById("searchbox").value;
xx=xx.toLowerCase();
xx=xx.replace(/\s/g,"_");		
for(var i=0;i<84;i++){
//if((x==ingles[i])||(x==español[i])){
if(xx==ingles[i]){
y=ingles[i];
z=espanol[i];
y = MaysPrimera(y.toLowerCase());
z = MaysPrimera(z.toLowerCase());
y=y.replace(/_/g," ");
z=z.replace(/_/g," ");
//alert(ingles[i]+"  "+espanol[i]+"  "+frases[i]);

document.getElementById('mostrando1').innerHTML=y;
document.getElementById('mostrando2').innerHTML=z;
document.getElementById('mostrando3').innerHTML=frases[i];

$('#box').css('display','inline');


b=1;
}
}//alert(x);
/*if(x==español[i]){
y=ingles[i];
z=español[i];
y = MaysPrimera(y.toLowerCase());
z = MaysPrimera(z.toLowerCase());
y=y.replace(/_/g," ");
z=z.replace(/_/g," ");
document.write(z+'<br>');
document.write(y+'<br>');
document.write(frases[i]+'<br>');
b=1;
}
}
}*/
if (b==0){
document.getElementById('mostrando1').innerHTML=' Sorry, the word is not found';
document.getElementById('mostrando2').innerHTML='';
document.getElementById('mostrando3').innerHTML='';
}
}
});
//----------------------------------------------------------------------------------------

		
		//	filter for matches
		var checkListMatches = function(str){
	        str=str.toLowerCase();
	        filterListItems.each(function(el){

	            (el.retrieve('oTxtValue').contains(str)) ? el.setStyle('display','block') :el.setStyle('display','none');


	        });
	    };
	    
	    //	reset filter list
	    var filterListReset = function(){
	    	 filterListItems.each(function(el){
	            el.setStyle('display','none');
	            filterTextbox.set('value','');
	        });
	    }
	 	
	 	//	clear selected items
	    var filterClearList=function(){
	    	filterListItems .removeClass('checked');	 
			selectList.getSelected().setProperty('selected', false);
	       	filterListReset();
	    }
	    
//	el input  --------------------------------------------------------------------
		filterList.addEvents({
			'click:relay(li)':function(){
				index=filterListItems.indexOf(this);
				optionID=filterListItems[index].retrieve('oIndex');
				//alert("bu")
				//var ingles = ['amazing','anger',"army","bargains","beginning","believe","between","beverage","boring","breathtaking","cartoon","check_in","childhood","chips","climb","crackers","designers","diseases","downtown","dune","earn","entertain","environment","fear","female","find","flight","guess","hard","have_fun","health","healthy","high-speeds","hiking","hobby","hope","humanoid","laugh","law","leisure_time","light","loud","male","meet","midtown","movie_listings","muscles","need","performance","pick_up","pickles","place","polluted","pub","relaxing","role","sandy","seabirds","seafood","sick","silly","spend","square","stay","strengthen","survey","take_care","teenagers","tired","town","treadmill","treat","trip","try","tune_in","uptown","volunteer","want","wear","weather","weight_lifting","while","whole","work_out"];
				
				//document.form1.searchbox.value=ingles[optionID];
				document.getElementById("searchbox").value=ingles[optionID];

				//***************

if (document.getElementById("searchbox").value == ('amazing')||('anger')||("army")||("bargains")||("beginning")||("believe")||("between")||("beverage")||("boring")||("breathtaking")||("cartoon")||("check_in")||("childhood")||("chips")||("climb")||("crackers")||("designers")||("diseases")||("downtown")||("dune")||("earn")||("entertain")||("environment")||("fear")||("female")||("find")||("flight")||("guess")||("hard")||("have_fun")||("health")||("healthy")||("high-speeds")||("hiking")||("hobby")||("hope")||("humanoid")||("laugh")||("law")||("leisure_time")||("light")||("loud")||("male")||("meet")||("midtown")||("movie_listings")||("muscles")||("need")||("performance")||("pick_up")||("pickles")||("place")||("polluted")||("pub")||("relaxing")||("role")||("sandy")||("seabirds")||("seafood")||("sick")||("silly")||("spend")||("square")||("stay")||("strengthen")||("survey")||("take_care")||("teenagers")||("tired")||("town")||("treadmill")||("treat")||("trip")||("try")||("tune_in")||("uptown")||("volunteer")||("want")||("wear")||("weather")||("weight_lifting")||("while")||("whole")||("work_out")){
var b=0;
xx= document.getElementById("searchbox").value;
xx=xx.toLowerCase();
xx=xx.replace(/\s/g,"_");		
for(var i=0;i<84;i++){
//if((x==ingles[i])||(x==español[i])){
if(xx==ingles[i]){
y=ingles[i];
z=espanol[i];
y = MaysPrimera(y.toLowerCase());
z = MaysPrimera(z.toLowerCase());
y=y.replace(/_/g," ");
z=z.replace(/_/g," ");
document.getElementById('mostrando1').innerHTML=y;
document.getElementById('mostrando2').innerHTML=z;
document.getElementById('mostrando3').innerHTML=frases[i];

b=1;
}
}
}	
else{
document.getElementById('mostrando1').innerHTML="Sorry, the word is not found";	
}		
//****************************
document.getElementById("searchbox").display='none'	;		
				if(filterListItems[index].hasClass('checked')){
				//filterListItems[index].removeClass('checked');	
				//selectOptions[optionID].setProperty('selected', false);

				}else{

					//filterListItems[index].addClass('checked');
					//selectOptions[optionID].setProperty('selected', true);

				//	filterListItems .removeClass('checked');

			//$('.filterWrapper li').css('display','none');



				}

			},
			'mouseover:relay(li)':function(event){

				if(event.shift){
					index=filterListItems.indexOf(this);
					optionID=filterListItems[index].retrieve('oIndex');
					if(filterListItems[index].hasClass('checked')){
			  			filterListItems[index].removeClass('checked');
			  			selectOptions[optionID].setProperty('selected', false);
			  		}else{
			   			filterListItems[index].addClass('checked');
			   			selectOptions[optionID].setProperty('selected', true);
			   		}
				}else{
					this.highlight('#FFCC00',this.getStyle('backgroundColor'));
			   	}
			}
			
		});
		
		//	add contents to modal window
		var size = this.options.size; //	I want to modify this to get the width of the widest text value (careful of the buttons)
		this.setContent(filterWrapper,size,selectList.get('title'));
		
		//	set focus to filter box to start typing
		filterTextbox.focus();
		
	}
});

var idxxx;
// Initiate modal window and Select List Filter
window.addEvent('domready',function() {
	
	//	add seach buttons dynamically
	var imgSearch='';
	$$('select[.searchables]').each(function(el,index){
		var idSelect=el.id;
        idxxx='filter_'+idSelect;
        
		var lnk=new Element('div',{'html':'<a href="#" rel="filter" id="filter_'+idSelect+'" title="Filter List: '+idSelect+'" class="btSelectFilter">'+imgSearch+'</a>'}).inject(el,'after');
	})
	//	initiate class
	var filter = new multipleSelectFilter();
	
	// bind the links to the modal instance
	filter.bindOpeners($$('a.btSelectFilter'));
  //      $('#wrapper').css('display','inline');
});




