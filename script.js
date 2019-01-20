$( document ).ready(function() {	
		$("#bloc1").on({
	    			//quand la souris entre, cet element se voit retiré la classe vert et ajouté la bleu
	    			mouseenter:function(){
	    			$(this).removeClass("vert").addClass("bleu");
	    			//quand la souris sort, cet element se voit retiré la classe bleu et ajouté la vert
	    		},mouseleave:function(){
	    			$(this).removeClass("bleu").addClass("vert");}
	    		});
		
//exo2
$("#champ1").on("keyup",(function(){
	$("#para1").text($("#champ1").val());
}));
//exo3
	$(".bloc2").hover(function(){
	    
	if($.isNumeric($(this).text())){ //si la valeur est numerique alors 
		if($(this).text()%2 ==0){ //analyser le texte avec un modulo 
			$(this).addClass("vert");
}else{
	$(this).addClass("rouge");
}
}else{
	$(this).addClass("bleu");
}
},function(){
$(this).removeClass("vert bleu rouge");
})
		});




























