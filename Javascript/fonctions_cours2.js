function draw(){
  
	var canvas = document.getElementById('canvas'),  //obtenir 'canvas'
		context = canvas.getContext('2d'),           //获取画图环境，指明为2d
		btn1 = document.getElementById('canvasbtn'),
		btnbegin = document.getElementById('canvasbtnbegin'),
		btnstop = document.getElementById('canvasbtnstop');
	
	var img=new Image();
		img.src = 'Images/cours2.png';
	
	var step = 0,
		step1 = 0,
		step2 = 0,
		step3 = 0,
		step4 = 0,
		step5 = 0,
		step6 = 0,
		step7 = 0,
		step8 = 0;
	
	var timer1='';
	var turn=true;
    timer1 = setInterval(beginframe,50); 
    
    function beginframe(){
			
		context.clearRect(0, 0, canvas.width, canvas.height);
				
		commence(context);
		connect(context,step);
	
		step += 0.02;
		if(step>2){
			step=0;
		}
			
	}
	//动画循环		
	btn1.onclick=function(){
		clearInterval(timer1);
		btn1.style.opacity=0;
		btn1.disabled=true;
		btnbegin.style.opacity=1;
		btnstop.style.opacity=1;
		btnstop.disabled=false;
		
		var animatebegin;

			function drawFrame(){
				animatebegin=requestAnimationFrame(drawFrame); 
				bgphoto(context,img);
				
					//找第一个邻居，显示distance
					
					line1(context,step1)
				
					if(step1>2 && step1<6){
						text1(context,step1);
					}
					if(step1>6){
						res1(context,step1);
					}
					if(step1>10){
						//找第二个邻居，显示distance
						line2(context,step2);
						
						if(step2>2 && step2<6){
							text2(context,step2);
						}
						if(step2>6){
							res2(context,step2);
							
						}
						if(step2>10){
							//找下一个邻居，显示distance
							visite(context);
							line3(context,step3);
						
							if(step3>2 && step3<6){
								text3(context,step3);
							}
							if(step3>6){
								res1(context,step3);
							}
							if(step3>10){
								//找下一个邻居，显示distance
								line4(context,step4);
						
								if(step4>2 && step4<6){
									text4(context,step4);
								}
								if(step4>6){
									res3(context,step4);
									
								}
								if(step4>10){
									//找下一个邻居，显示distance
									visite2(context);
									line5(context,step5);
							
									if(step5>2 && step5<6){
										text5(context,step5);
									}
									if(step5>6){
										res4(context,step5);
										
									}
									if(step5>10){
										//找下一个邻居，显示distance
										visite3(context);
										line6(context,step6);
								
										if(step6>2 && step6<6){
											text6(context,step6);
										}
										if(step6>6){
											res5(context,step6);
											
										}
										if(step6>10){
											//找下一个邻居，显示distance
											visite4(context);
											line7(context,step7);
									
											if(step7>2 && step7<6){
												text7(context,step7);
											}
											if(step7>6){
												res4(context,step7);
												
											}
											if(step7>10){
												//找下一个邻居，显示distance
												visite5(context);
												
												switch(true){
													case step8<6:
														line8(context,step8);
														text8(context,step8);
														step8 += 0.05;
														break;
													
													case step8<10:
														line8(context,step8);
														res6(context,step8);
														step8 += 0.05;
														break;
													case step8<13:
														terminer(context);
														visite6(context);
														chemin(context);
														chemin2(context);
														step8 += 0.01;
														break;
													default:
														step = 0;
														step1 = 0;
														step2 = 0;
														step3 = 0;
														step4 = 0;
														step5 = 0;
														step6 = 0;
														step7 = 0;
														step8 = 0;
														btn1.style.opacity=1;
														btn1.disabled=false;
														btnbegin.style.opacity=0;
														btnstop.style.opacity=0;
														btnstop.disabled=true;
														btnbegin.disabled=true;
														cancelAnimationFrame(animatebegin);
														timer1 = setInterval(beginframe,50);
														break;
												}
											
												
											}else{
												step7 += 0.05;
											}
				
										}else{
											step6 += 0.05;
										}
									
									}else{
										step5 += 0.05;
									}
								
								}else{
									step4 += 0.05;
								}
								
							}else{
								step3 += 0.05;
							}
					
						}else{
							step2 += 0.05;
						}
						
					}else{
						step1 += 0.05;
					}	
					
				
			}
		animatebegin=requestAnimationFrame(drawFrame);
		
		btnstop.onclick=function(){
			cancelAnimationFrame(animatebegin);
			btnstop.disabled=true;
			btnstop.style.backgroundColor="lightgrey";
			btnbegin.disabled=false;
			btnbegin.style.backgroundColor="#333";
		}
		
		btnbegin.onclick=function(){
			animatebegin=requestAnimationFrame(drawFrame);
			btnstop.disabled=false;
			btnstop.style.backgroundColor="#333";
			btnbegin.disabled=true;
			btnbegin.style.backgroundColor="lightgrey";
		}
		
	};
};

function bgphoto(context,img){
	context.clearRect(0, 0, canvas.width, canvas.height);			
	context.drawImage(img,0,0,598,440);
}

//开场图片
function commence(ctx){
	ctx.save();
	//写make friends 文字
	ctx.fillStyle='#003E6B';
	ctx.font="50px serif";
	ctx.fillText("Make Friends",165,170);
	//画笑脸
	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.strokeStyle='#F08080';
    ctx.arc(185,250,50,0,Math.PI*2,true); // 绘制 
    ctx.moveTo(185+35*Math.cos(Math.PI/4),250+35*Math.sin(Math.PI/4));
    ctx.arc(185,250,35,Math.PI/4,(Math.PI*3)/4,false);   // 口(顺时针)
    ctx.moveTo(175,240);
    ctx.arc(170,240,5,0,Math.PI*2,true);  // 左眼
    ctx.moveTo(205,240);
    ctx.arc(200,240,5,0,Math.PI*2,true);  // 右眼
    ctx.stroke();
	//画哭脸
	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.strokeStyle='#ADD8E6';
    ctx.arc(415,250,50,0,Math.PI*2,true); // 绘制 
    ctx.moveTo(415-35*Math.cos(Math.PI/4),310-35*Math.sin(Math.PI/4));
    ctx.arc(415,310,35,(Math.PI*5)/4,(Math.PI*7)/4,false);   // 口(顺时针)
    ctx.moveTo(405,240);
    ctx.arc(400,240,5,0,Math.PI*2,true);  // 左眼
    ctx.moveTo(435,240);
    ctx.arc(430,240,5,0,Math.PI*2,true);  // 右眼
    ctx.stroke();
	ctx.restore();
	
}

function connect(ctx,speed){
	//画圆并旋转
	ctx.save();
	ctx.translate(300,250);
	ctx.beginPath();
	ctx.lineWidth=2;
	
	//选择颜色
	var gradient = ctx.createLinearGradient(-45,-10,45,10);
	
	gradient.addColorStop(0,'#F08080');
	gradient.addColorStop(1,'#ADD8E6');
	
	ctx.strokeStyle = gradient;
	ctx.rotate(Math.PI*speed);
	ctx.arc(-35,0,(2.5*Math.sin(Math.PI*speed))+7.5,0,Math.PI*2,false); // 绘制 
	ctx.moveTo((2.5*Math.sin(Math.PI*speed))+7.5,0);
	ctx.arc(0,0,(2.5*Math.sin(Math.PI*speed))+7.5,0,Math.PI*2,false); // 绘制
	ctx.moveTo((2.5*Math.sin(Math.PI*speed))+42.5,0);
	ctx.arc(35,0,(2.5*Math.sin(Math.PI*speed))+7.5,0,Math.PI*2,false); // 绘制
	ctx.stroke();
	ctx.restore();
}

//得到点击的坐标  
function getEventPosition(ev){  
    var x, y;  
    x = ev.offsetX;  
    y = ev.offsetY;  
    return {x: x, y: y};  
}

//绘制直线1
function line1(context,speed){
	context.save();
	context.strokeStyle='#003E6B';
	context.lineCap='round';
	context.lineWidth=5;
	context.beginPath();
	context.moveTo(173,340);
	context.lineTo(173+8.6*speed,340-9.7*speed);
	context.stroke();
	context.restore();
	
}

//清除无穷打，写问号1
function text1(context,s){
	context.save();
	context.clearRect(288,128,40,25);
	context.fillStyle='#003E6B';
	context.font="30px serif";
	context.fillText("1< ∞",270,140+s);
	context.restore();
}

//显示结果1
function res1(context,s){
	context.save();
	context.clearRect(270,120,60,30);
	context.fillStyle='#F08080';
	context.font="30px serif";
	context.fillText("1",296,140+s);
	context.restore();
}

//绘制直线2
function line2(context,speed){
	context.save();
	context.strokeStyle='#003E6B';
	context.lineCap='round';
	context.lineWidth=5;
	context.beginPath();
	context.moveTo(190,386); 
	context.lineTo(190+18.4*speed,386);
	context.stroke();
	context.restore();
	
}

//清除无穷打，写问号2
function text2(context,s){
	context.save();
	context.clearRect(418,323,40,25);
	context.fillStyle='#003E6B';
	context.font="20px serif";
	context.fillText("1< ∞",410,326+s);
	context.restore();
}

//显示结果2
function res2(context,s){
	context.save();
	context.clearRect(400,313,60,30);
	context.fillStyle='#F08080';
	context.font="30px serif";
	context.fillText("1",426,326+s);
	context.restore();
}

//visage visite
function visite(context){
	context.save();
	context.clearRect(124,316,40,25);
	context.fillStyle='#CD5C5C';
	context.font="30px serif";
	context.fillText("Visité",100,327);
	context.restore();
}

//绘制直线3
function line3(context,speed){
	context.save();
	context.strokeStyle='#003E6B';
	context.lineCap='round';
	context.lineWidth=5;
	context.beginPath();
	context.moveTo(402,346); 
	context.lineTo(402-6.8*speed,346-10.4*speed);
	context.stroke();
	context.restore();
	
}

//清除无穷打，写问号3
function text3(context,s){
	context.save();
	context.clearRect(288,128,40,25);
	context.fillStyle='#003E6B';
	context.font="20px serif";
	context.fillText("1+1 > 1",270,140+s);
	context.restore();
}

//绘制直线4
function line4(context,speed){
	context.save();
	context.strokeStyle='#003E6B';
	context.lineCap='round';
	context.lineWidth=5;
	context.beginPath();
	context.moveTo(462,344); 
	context.lineTo(462+6.1*speed,344-8.8*speed);
	context.stroke();
	context.restore();
	
}

//清除无穷打，写问号4
function text4(context,s){
	context.save();
	context.clearRect(538,128,40,25);
	context.fillStyle='#003E6B';
	context.font="20px serif";
	context.fillText("1+1< ∞",525,140+s);
	context.restore();
}

//显示结果3
function res3(context,s){
	context.save();
	context.clearRect(520,127,60,30);
	context.fillStyle='#F08080';
	context.font="30px serif";
	context.fillText("2",547,135+s);
	context.restore();
}

//visage visite2
function visite2(context){
	context.save();
	context.fillStyle='#CD5C5C';
	context.font="30px serif";
	context.fillText("Visité",395,310);
	context.restore();
}

//绘制直线5
function line5(context,speed){
	context.save();
	context.strokeStyle='#003E6B';
	context.lineCap='round';
	context.lineWidth=5;
	context.beginPath();
	context.moveTo(263,163); 
	context.lineTo(263-5.8*speed,163-7.8*speed);
	context.stroke();
	context.restore();
	
}

//清除无穷打，写问号5
function text5(context,s){
	context.save();
	context.clearRect(166,88,30,30);
	context.fillStyle='#003E6B';
	context.font="20px serif";
	context.fillText("1+1< ∞",147,118-s);
	context.restore();
}

//显示结果4
function res4(context,s){
	context.save();
	context.clearRect(140,87,60,30);
	context.fillStyle='#F08080';
	context.font="30px serif";
	context.fillText("2",170,118-s);
	context.restore();
}

//visage visite3
function visite3(context){
	context.save();
	context.fillStyle='#CD5C5C';
	context.font="30px serif";
	context.fillText("Visité",270,120);
	context.restore();
}

//绘制直线6
function line6(context,speed){
	context.save();
	context.strokeStyle='#003E6B';
	context.lineCap='round';
	context.lineWidth=5;
	context.beginPath();
	context.moveTo(518,160); 
	context.lineTo(518-5.6*speed,160-7.6*speed);
	context.stroke();
	context.restore();
	
}

//清除无穷打，写问号6
function text6(context,s){
	context.save();
	context.clearRect(422,87,30,30);
	context.fillStyle='#003E6B';
	context.font="20px serif";
	context.fillText("2+1< ∞",390+s,108);
	context.restore();
}

//显示结果5
function res5(context,s){
	context.save();
	context.clearRect(400,87,60,30);
	context.fillStyle='#F08080';
	context.font="30px serif";
	context.fillText("3",412+s,108);
	context.restore();
}

//visage visite4
function visite4(context){
	context.save();
	context.fillStyle='#CD5C5C';
	context.font="30px serif";
	context.fillText("Visité",519,115);
	context.restore();
}

//绘制直线7
function line7(context,speed){
	context.save();
	context.strokeStyle='#003E6B';
	context.lineCap='round';
	context.lineWidth=5;
	context.beginPath();
	context.moveTo(383,44); 
	context.lineTo(383-16.2*speed,44);
	context.stroke();
	context.restore();
	
}

function text7(context,s){
	context.save();
	context.clearRect(166,88,30,30);
	context.fillStyle='#003E6B';
	context.font="20px serif";
	context.fillText("3+1 > 2",147,118-s);
	context.restore();
}


//visage visite5
function visite5(context){
	context.save();
	context.fillStyle='#CD5C5C';
	context.font="30px serif";
	context.fillText("Visité",390,140);
	context.restore();
}

//绘制直线8
function line8(context,speed){
	context.save();
	context.strokeStyle='#003E6B';
	context.lineCap='round';
	context.lineWidth=5;
	context.beginPath();
	context.moveTo(139,81); 
	context.lineTo(139-5.7*speed,81+7.39*speed);
	context.stroke();
	context.restore();
	
}

//清除无穷打，写问号8
function text8(context,s){
	context.save();
	context.clearRect(37,135,30,20);
	context.fillStyle='#003E6B';
	context.font="20px serif";
	context.fillText("2+1< ∞",22,135+s);
	context.restore();
}

//显示结果6
function res6(context,s){
	context.save();
	context.clearRect(22,130,40,25);
	context.fillStyle='#F08080';
	context.font="30px serif";
	context.fillText("3",43,135+s);
	context.restore();
}

//visage visite6
function visite6(context){
	context.save();
	context.fillStyle='#CD5C5C';
	context.font="30px serif";
	context.fillText("Visité",145,135);
	context.restore();
}
//z最终状态
function terminer(context){
	context.save();
	context.clearRect(22,130,40,25);
	context.fillStyle='#F08080';
	context.font="30px serif";
	context.fillText("3",43,145);
	
	context.strokeStyle='#DB7093';
	context.lineCap='round';
	context.lineWidth=5;
	context.beginPath();
	context.moveTo(173,340);
	context.lineTo(259,243);
	context.stroke();
	
	context.restore();
}
//改变颜色
function chemin(context){
	context.strokeStyle='#DB7093';
	context.lineCap='round';
	context.lineWidth=5;
	context.beginPath();
	context.moveTo(263,163); 
	context.lineTo(205,85);
	context.stroke();
}

function chemin2(context){
	context.strokeStyle='#DB7093';
	context.lineCap='round';
	context.lineWidth=5;
	context.beginPath();
	context.moveTo(139,81); 
	context.lineTo(79,156);
	context.stroke();
}

