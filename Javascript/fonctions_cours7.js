var venteprix = new Array;
	venteprix[0]= 150;
	venteprix[1]= 265;
	venteprix[2]= 370;
	venteprix[3]= 410;

var achatprix = new Array;
	achatprix[0]= 400;
	achatprix[1]= 300;
	achatprix[2]= 200;
	
var inputprix = 0;
var nombre = 0;

	
$(function(){
	
	//控制滑块
	var prix = document.getElementsByClassName("move_prix")[0];
	var input = document.getElementsByTagName("input")[0];
    prix.style.left = 0;
	
    prix.onmousedown = function (evt) {
		
        var obj = this;
        var oldX = evt.clientX;
        var left = parseInt(obj.style.left);
		
        document.onmousemove = function(evt) {
			//滑块的x轴位置
            var x = evt.clientX - oldX;
				obj.style.left = left + x + "px";
				
			var res=parseInt(obj.style.left);
			
            if ( res < 0) {
                obj.style.left = 0;
            }
            if ( res > 400) {
                obj.style.left = 400 + "px";
            }
			//在input里面显示移动的位置
			input.value = Math.ceil(res / 400 * 500);
			inputprix = input.value;
			
        }
		
        document.onmouseup = function (evt) {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
	//价格确定
	$(".checkprix").click(function(){
		
		$("#showprix").show();
		$("#makeprix").hide();
		
		
		//在原理页中显示卖家价格
		$(".prix1").text(venteprix[0]);
		$(".prix2").text(venteprix[1]);
		$(".prix3").text(venteprix[2]);
		$(".prix4").text(venteprix[3]);
		//在原理页中按顺序显示买家价格
		if(inputprix<achatprix[2]){
			achatprix[3]=inputprix;
		}else if(inputprix<achatprix[1]){
			achatprix[3]=achatprix[2];
			achatprix[2]=inputprix;
		}else if(inputprix<achatprix[0]){
			achatprix[3]=achatprix[2];
			achatprix[2]=achatprix[1];
			achatprix[1]=inputprix;
		}else{
			achatprix[3]=achatprix[2];
			achatprix[2]=achatprix[1];
			achatprix[1]=achatprix[0];
			achatprix[0]=inputprix;
		}
		$(".prix5").text(achatprix[0]);
		$(".prix6").text(achatprix[1]);
		$(".prix7").text(achatprix[2]);
		$(".prix8").text(achatprix[3]);
		
		//找到k，买价比卖价大的个数
		for(i=0;i<4;i++){
			if(achatprix[i]>venteprix[i]){
				nombre=nombre+1;
			}
		}
		$(".k").text(nombre);
		
		//得到买家和卖家价格
		switch (true) {
				case achatprix[nombre]<venteprix[nombre-1] && achatprix[nombre-1]<venteprix[nombre]:
					$(".show_prixachat").text(venteprix[nombre-1]);
					$(".show_prixvente").text(achatprix[nombre-1]);
					//显示结果
					$(".prixmoyen").text(venteprix[nombre-1]);
					break;
				case  achatprix[nombre]<venteprix[nombre-1] && achatprix[nombre-1]>=venteprix[nombre]:
					$(".show_prixachat").text(venteprix[nombre-1]);
					$(".show_prixvente").text(venteprix[nombre]);
					//显示结果
					$(".prixmoyen").text(venteprix[nombre-1]);
					break;
				case achatprix[nombre]>=venteprix[nombre-1] && achatprix[nombre-1]<venteprix[nombre]:
					$(".show_prixachat").text(achatprix[nombre]);
					$(".show_prixvente").text(achatprix[nombre-1]);
					//显示结果
					$(".prixmoyen").text(achatprix[nombre]);
					break;
				default:
					$(".show_prixachat").text(venteprix[nombre]);
					$(".show_prixvente").text(achatprix[nombre]);
					//显示结果
					$(".prixmoyen").text(venteprix[nombre]);
					break;
			}
	})
		
	$(".changeprix").click(function(){
		$("#showprix").hide();
		$("#makeprix").show();
		
		achatprix[0]= 400;
		achatprix[1]= 300;
		achatprix[2]= 200;
		achatprix[3]= 0;
	
		nombre = 0;
		
		$(".prixmoyen").text(0);
	})
	
	$(".voirprix").click(function(){
		$("#showprix").hide();
		$("#voir_mecanisme").show();
		
	})
	
	$(".cours7_return").click(function(){
		$("#voir_mecanisme").hide();
		$("#showprix").show();
	})
	
	
});


