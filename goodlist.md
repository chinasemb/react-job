<!doctype html>
<html lang="en">
<head>

	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		ul{
			width: 1000px;margin:45px auto; 
		}
		li{height: 100px; background-color: #D1EEEE;list-style-type: none;margin:0 30px;line-height:100px;border-bottom: 1px solid pink;}
		span{margin-left:10px;}
		a{margin-left:10px;text-decoration: none ;}
		body{
			background-color: #8C8C8C;
		}
	</style>
</head>
<body>
	<ul id="type">

	</ul>
	<script>
	
		var Ul    = document.getElementById("type");
		var mobileDade = [{"title":"品牌","data":["华为","三星","小米","苹果","oppo",]},{"title":"价格","data":["0-499","500-999","1000","1699","2800-4449",]},{"title":"系统","data":["安卓","苹果","微软","基础功能","其他",]},{"title":"屏幕尺寸","data":["3.0以下","3.1-4.5","4.6-5.0","5.1-5.5","5.6以上",]},{"title":"热点","data":["以旧换新","功能机","儿童机","合约机","全面屏",]}]
		
		var len     = mobileDade.length;
		var newLi   = null; 
		var newSpan = null;
		var newA = null;
	
		for(var i = 0;i<len;i++){
			newLi   = document.createElement("li");
			newSpan = document.createElement("span");


			newSpan.innerText =  mobileDade[i].title;
			newLi.appendChild(newSpan);
			for(var j =0;j<mobileDade[i].data.length;j++){
				newA = document.createElement("a");
				newA.href = "javascript:;"
				newA.innerText = mobileDade[i].data[j];
	
				newLi.appendChild(newA);
	
			}



			Ul.appendChild(newLi);
		}


	</script>
</body>
</html>