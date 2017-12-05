<!doctype html>
<html lang="en">
<head>

	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		body{
			background-color: #FFFAFA
		}
		ul{width: 1000px;margin:100px auto;}
		li{background-color: #FAEBD7;height:100px;list-style: none;border-bottom: 1px solid orange;line-height: 100px}
		a{text-decoration: none;margin-left: 15px;}
		span{margin-left: 15px;}
	</style>
</head>
<body>
	<ul id="type">

	</ul>
	<script>
		var telephoneDate = [{"title":"品牌","data":["华为","小米","苹果","三星","魅族","中兴"]},
							{"title":"价格","data":["1","2","3","4","5","6"]},
							{"title":"系统","data":["安卓","苹果","微软","其他","定制","功能"]},
							{"title":"屏幕尺寸","data":["1.0","2.0","3.0","3.5","5.5","6.0"]},]
	
		var Ul = document.querySelector("#type");
		var len = telephoneDate.length;
		var newLi = null;
		var newSpan = null;
		var newA = null;
		for (var i = 0; i < len; i++) {
			var newLi = document.createElement("li");
			var newSpan = document.createElement("span");
			newSpan.innerText = telephoneDate[i].title;
			newLi.appendChild(newSpan);
			for (var j = 0; j < telephoneDate[i].data.length; j++) {
				var newA = document.createElement("a");
				newA.innerText = telephoneDate[i].data[j];
				newLi.appendChild(newA);
			};


			Ul.appendChild(newLi);
		};
	
	</script>
</body>
</html>