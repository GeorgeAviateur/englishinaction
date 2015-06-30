function remplaza(POSITION,NUMBER,CAD){
		var miTemp="";
		for(var i=0;i<CAD.length;i++){
			if(POSITION==i){
				miTemp+=""+NUMBER;
			}
			else
			miTemp+=CAD.charAt(i);
		}
		return CAD=miTemp;
	}