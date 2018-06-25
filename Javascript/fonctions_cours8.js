//定义两个数组，一个数组存放价值 另一个数组存放重量
//每个数组里都有五组数据
var arrvalue = new Array,
	arrpoids =new Array;
	
for(var i=0;i<5;i++){        //一维长度为5
    arrvalue[i] = new Array();
	arrpoids[i] = new Array();
    for(var j=0;j<6;j++){    //二维长度为7
        arrvalue[i][j] = 0;
		arrpoids[i][j] = 0;
    }
}

	arrvalue[0][0] = 10;
	arrvalue[0][1] = 2;
	arrvalue[0][2] = 275;
	arrvalue[0][3] = 30;
	arrvalue[0][4] = 35;
	arrvalue[0][5] = 48;
	
	arrvalue[1][0] = 10;
	arrvalue[1][1] = 2;
	arrvalue[1][2] = 275;
	arrvalue[1][3] = 30;
	arrvalue[1][4] = 35;
	arrvalue[1][5] = 48;
	
	arrpoids[0][0] = 75;
	arrpoids[0][1] = 500;
	arrpoids[0][2] = 135;
	arrpoids[0][3] = 70;
	arrpoids[0][4] = 480;
	arrpoids[0][5] = 780;
	
	arrpoids[1][0] = 10;
	arrpoids[1][1] = 2;
	arrpoids[1][2] = 275;
	arrpoids[1][3] = 30;
	arrpoids[1][4] = 35;
	arrpoids[1][5] = 48;
//存放最优化结果
var arrres = new Array;
	arrres[0] = 78;
	arrres[1] = 78;
//用于找数组
var nb = 0;
//用于存放价值和与重量和
var sumid=0,
    sumvalue=0;
	
$(function() {

	valeur(nb);
	//checkbox 点击事件
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
	
	//btn点击事件 查看结果
	$("#cours8_check").click(function(){
		if(sumvalue == arrres[nb]){
			
			var msg="Félicitation, vous avez le meilleur choix ！\n\n Vous voulez continuer à résoudre le problème avec les chiffres différents ?"
			
			if(confirm(msg) == true){
				$('.ressource').find('input:checked').prop("checked",false);
				$(".sumid").text(0);
				$(".pourcentage").animate({width:"0"});
				$(".sumvalue").text(0);
				sumid=0,
				sumvalue=0;
				if(nb > 0){
					nb = 0;
				}else{
					nb = nb + 1;
				}
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
		//用得到的随机数获取相对应的一组重量和价值 
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
		
}