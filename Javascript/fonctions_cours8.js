//définir deux tableaux: l'un pour préserver les valeurs, l'autre pour préserver les poids
var arrvalue = new Array,
	arrpoids =new Array;
//dans chaque tableau, il y a 5 groupes de chiffres et chaque groupe contient 7 chiffres
for(var i=0;i<5;i++){        
    arrvalue[i] = new Array();
	arrpoids[i] = new Array();
    for(var j=0;j<6;j++){  
        arrvalue[i][j] = 0;
		arrpoids[i][j] = 0;
    }
}
	arrvalue[0][0] = 9;
	arrvalue[0][1] = 4;
	arrvalue[0][2] = 110;
	arrvalue[0][3] = 25;
	arrvalue[0][4] = 10;
	arrvalue[0][5] = 79;
	arrvalue[0][6] = 715;
	
	arrvalue[1][0] = 15;
	arrvalue[1][1] = 3;
	arrvalue[1][2] = 57;
	arrvalue[1][3] = 6;
	arrvalue[1][4] = 15;
	arrvalue[1][5] = 83;
	arrvalue[1][6] = 599;
	
	arrvalue[2][0] = 23;
	arrvalue[2][1] = 13;
	arrvalue[2][2] = 178;
	arrvalue[2][3] = 33;
	arrvalue[2][4] = 22;
	arrvalue[2][5] = 35;
	arrvalue[2][6] = 589;
	
	arrvalue[3][0] = 13;
	arrvalue[3][1] = 5;
	arrvalue[3][2] = 367;
	arrvalue[3][3] = 25;
	arrvalue[3][4] = 40;
	arrvalue[3][5] = 178;
	arrvalue[3][6] = 430;
	
	arrvalue[4][0] = 23;
	arrvalue[4][1] = 4;
	arrvalue[4][2] = 75;
	arrvalue[4][3] = 21;
	arrvalue[4][4] = 28;
	arrvalue[4][5] = 30;
	arrvalue[4][6] = 550;
	
	arrpoids[0][0] = 18;
	arrpoids[0][1] = 300;
	arrpoids[0][2] = 350;
	arrpoids[0][3] = 75;
	arrpoids[0][4] = 485;
	arrpoids[0][5] = 690;
	arrpoids[0][6] = 700;
	
	arrpoids[1][0] = 40;
	arrpoids[1][1] = 175;
	arrpoids[1][2] = 270;
	arrpoids[1][3] = 72;
	arrpoids[1][4] = 500;
	arrpoids[1][5] = 730;
	arrpoids[1][6] = 710;
	
	arrpoids[2][0] = 60;
	arrpoids[2][1] = 550;
	arrpoids[2][2] = 360;
	arrpoids[2][3] = 130;
	arrpoids[2][4] = 320;
	arrpoids[2][5] = 360;
	arrpoids[2][6] = 730;
	
	arrpoids[3][0] = 45;
	arrpoids[3][1] = 400;
	arrpoids[3][2] = 470;
	arrpoids[3][3] = 110;
	arrpoids[3][4] = 370;
	arrpoids[3][5] = 900;
	arrpoids[3][6] = 599;
	
	arrpoids[4][0] = 34;
	arrpoids[4][1] = 470;
	arrpoids[4][2] = 270;
	arrpoids[4][3] = 85;
	arrpoids[4][4] = 320;
	arrpoids[4][5] = 560;
	arrpoids[4][6] = 790;
//préserver le meilleur solution en terme de valeurs
var arrres = new Array;
	arrres[0] = 938;
	arrres[1] = 763;
	arrres[2] = 880;
	arrres[3] = 880;
	arrres[4] = 701;
//pour trouver le groupe lequel va s'afficher
var nb = 0;
//préserver la somme des poids et la somme des valeurs
var sumid=0,
    sumvalue=0;
	
$(function() {

	valeur(nb);
	//obtenir les poids et les valeurs dans les checkbox qui sont choisis
    $( '.ressource').click(function() {
		sumid=0;
		$('.ressource').find('input:checked').each(function(){
			sumid+=Number($(this).attr("id"));
		}); 
		sumvalue=0;
		$('.ressource').find('input:checked').each(function(){
			sumvalue+=Number($(this).attr("value"));
		});
      
		if(sumid>2000){
			alert("C'est déja hors limite. Essayez une autre fois.");
			$('.ressource').find('input:checked').prop("checked",false);
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
	
	//btn pour voir le résultat
	$("#cours8_check").click(function(){
		if(sumvalue == arrres[nb]){
			
			var msg="Félicitation, vous avez le meilleur choix ！\n\n Vous voulez continuer à résoudre le problème avec les chiffres différents ?"
			
			if(confirm(msg) == true){
				//change un autre groupe de valeur et de poids
				$('.ressource').find('input:checked').prop("checked",false);
				$(".sumid").text(0);
				$(".pourcentage").animate({width:"0"});
				$(".sumvalue").text(0);
				sumid=0,
				sumvalue=0;
				if(nb === 4){
					nb = 0;
				}else{
					nb = nb + 1;
				}
				console.log(nb);
				valeur(nb);
			}else{
				return false;
			}
		}else{
			alert("Vous pouvez faire mieux !");
		}
	})
       
});

function valeur(nb){
	//affecter les valeurs et les poids aux chaque objets et les afficher 
	$(".objet1").attr("id",arrpoids[nb][0]);
	$(".objet1").val(arrvalue[nb][0]);
	$(".txtobjet1").text(arrpoids[nb][0] + "g" + " " + arrvalue[nb][0] + "$");
	
	$(".objet2").attr("id",arrpoids[nb][1]);
	$(".objet2").val(arrvalue[nb][1]);
	$(".txtobjet2").text(arrpoids[nb][1] + "g" +  " " + arrvalue[nb][1] + "$");
	
	$(".objet3").attr("id",arrpoids[nb][2]);
	$(".objet3").val(arrvalue[nb][2]);
	$(".txtobjet3").text(arrpoids[nb][2] + "g" +  " " + arrvalue[nb][2] + "$");
	
	$(".objet4").attr("id",arrpoids[nb][3]);
	$(".objet4").val(arrvalue[nb][3]);
	$(".txtobjet4").text(arrpoids[nb][3] + "g" +  " " + arrvalue[nb][3] + "$");
	
	$(".objet5").attr("id",arrpoids[nb][4]);
	$(".objet5").val(arrvalue[nb][4]);
	$(".txtobjet5").text(arrpoids[nb][4] + "g" +  " " + arrvalue[nb][4] + "$");
	
	$(".objet6").attr("id",arrpoids[nb][5]);
	$(".objet6").val(arrvalue[nb][5]);
	$(".txtobjet6").text(arrpoids[nb][5] + "g" +  " " + arrvalue[nb][5] + "$");
	
	$(".objet7").attr("id",arrpoids[nb][6]);
	$(".objet7").val(arrvalue[nb][6]);
	$(".txtobjet7").text(arrpoids[nb][6] + "g" +  " " + arrvalue[nb][6] + "$");
		
}