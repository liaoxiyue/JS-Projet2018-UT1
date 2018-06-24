$(function() {
    $( '.ressource').click(function() {
		var sumid=0;
		$('.ressource').find('input:checked').each(function(){
			sumid+=Number($(this).attr("id"));
		}); 
   
		var sumvalue=0;
		$('.ressource').find('input:checked').each(function(){
			sumvalue+=Number($(this).attr("value"));
		});
      
		if(sumid>2000){
			alert("C'est déja hors limite. Essayez l'autre fois.");			$(".ressource").find("input:checked").prop("checked",false);
			$(".sumid").text(0);
			$(".pourcentage").animate({width:"0"});
			$(".sumvalue").text(0);
		}
		else{
			$(".sumid").text(2000-sumid);
			$(".pourcentage").animate({width:sumid/10},500);
			$(".sumvalue").text(sumvalue);
		}
    
	});
       
});
