//保存film的评分
var film = new Array();
//保存推荐电影的分数
var note = new Array();
for(i=0;i<5;i++){
	film[i]=0;
	note[i]=0; 
}


//计算推荐电影和已评分电影之间的相关性la matrice de similarité film/film
var sim = [[-0.42,0.22,-0.13,0.53],[-0.03,0.54,-0.52,0.59],[0.62,0.95,0.67,0.25],[0.20,0.92,0.06,0.38]];
var sommesim = new Array();
for(i=0;i<5;i++){
	sommesim[i]=0;
}

for (i=0; i <4; i++){
	for (j=0;j<4;j++){
		sommesim[i+1]=sommesim[i+1]+Math.abs(sim[i][j]);
	}
}
console.log(sim);
	console.log(sommesim);	
//星星评分
$(function () {
    var objs = $(".stars a");
        $(objs).mouseover(function () {
            var ix = $(this).index();
            sets(ix, this);
        });

        $(objs).mouseout(function () {
            var ix = $(this).parent().attr("rel");
            if (ix == undefined)
                ix = -1;
            sets(ix, this);
        });

        $(objs).click(function () {
            var ix = $(this).index();
            $(this).parent().attr("rel", ix);
			var id=$(this).parent().attr("id");
			var idn=Number(id.substr(1));
			film[idn]=ix +1;
            sets(ix, this);
			$(this).parent().next("p").html(film[idn] + '.0');
        });
    });
//星星点击事件
function sets(ix, obj) {
    $(obj).parent().children().each(function (ik) {
        if (ik <= ix) {
            $(this).css("backgroundPosition", '0 0');
        } else {
            $(this).css("backgroundPosition", '0 -20px');
        }
    });
}
//翻下一页并显示推荐的电影	
function nextpage(){
	var evaluer=true;
	//判断是否评价了所有电影
	for(i=1;i<5;i++){
		if(film[i] === 0){
			evaluer=false;
			alert("Veuillez évaluer tous les films, SVP！");
			return;
		}
		
	}
	//计算每个没有评价过的电影的相关性
	//Calculer le score de recommandation normalisé pour chacun des produits pas évalués
		console.log(film);	
	console.log(note);
	if(evaluer=true){
		for (i=0; i <4; i++){
			for (j=0;j<4;j++){
				note[i+1]=note[i+1]+film[j+1]*sim[i][j];
				console.log(note);
			}
			note[i+1]=note[i+1]/sommesim[i+1];
		}
		
	
	
		
		
	//对四部电影进行排序
		var order=[[1,2,3,4],[note[1],note[2],note[3],note[4]]];
		var min=note[1];
		var minindex=1;
		//比较第一个和其他三个
		for(i=1;i<4;i++){
			if(order[1][i]<min){
				min=order[1][i];
				minindex=order[0][i];
				order[1][i]=order[1][0];
				order[0][i]=order[0][0];
				order[1][0]=min;
				order[0][0]=minindex;
			}
			
		}
		//比较第二个和其他两个
		min=order[1][1];
		minindex=order[0][1];
		
		for(i=2;i<4;i++){
			if(order[1][i]<min){
				min=order[1][i];
				minindex=order[0][i];
				order[1][i]=order[1][1];
				order[0][i]=order[0][1];
				order[1][1]=min;
				order[0][1]=minindex;
			}
			
		}
		//比较第三个和第四个
		min=order[1][2];
		minindex=order[0][2];
		
		if(order[1][3]<min){
			min=order[1][3];
			minindex=order[0][3];
			order[1][3]=order[1][2];
			order[0][3]=order[0][2];
			order[1][2]=min;
			order[0][2]=minindex;
		}
		
		//换图片
		var obj = document.getElementById("recom1");
			
		for(i=0;i<4;i++){
			if(order[0][i]==1){
				obj.src="Images/cours5/coco.jpg";
				
			}else if(order[0][i]==2){
				obj.src="Images/cours5/miserables.jpg";
				
			}else if(order[0][i]==3){
				obj.src="Images/cours5/blackswan.jpg";
				
			}else{
				obj.src="Images/cours5/starwar.jpg";
			}
		}
		console.log(order);
		
		document.getElementById("premier").style.display="none";
		document.getElementById("deuxieme").style.display="block";
	}
	
		
}
	
//返回上一页
function lastpage(){
	document.getElementById("deuxieme").style.display="none";
	document.getElementById("premier").style.display="block";
	for(i=0;i<5;i++){
		note[i]=0; 
	}
}

//播放原理
var voir=true;
function voirtheorie(){
	if(voir==true){
		document.getElementById("troisieme").style.opacity="1";
		document.getElementById("troisieme").style.zIndex="2";
		voir=false;
	}else{
		document.getElementById("troisieme").style.opacity="0";
		document.getElementById("troisieme").style.zIndex="-1";
		voir=true;
	}
	//给表格添加数据
	var txt = new Array;
	txt[1] = document.getElementById("eva1");
	txt[2] = document.getElementById("eva2");
	txt[3] = document.getElementById("eva3");
	txt[4] = document.getElementById("eva4");
	
	var res = new Array;
	res[1] = document.getElementById("eva-sim1");
	res[2] = document.getElementById("eva-sim2");
	res[3] = document.getElementById("eva-sim3");
	res[4] = document.getElementById("eva-sim4");
	
	for(i=0;i<4;i++){
		txt[i+1].innerHTML=film[i+1];
		res[i+1].innerHTML=note[i+1].toFixed(2);
	}
	console.log(note);
	
}

