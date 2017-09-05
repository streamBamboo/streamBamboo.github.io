



function ajax(obj){
	//method,url,date,any,dateType,success,fail
	
	var opaction = {
		//相当于三目运算一样，判断是否存在，true就输入obj.method，false则为默认值"get";
		
		//||后面的值为默认值
		method:obj.method||"get", 		//传送方式
		//必填
		url:obj.url,       		//文件地址
		date:obj.date||null,      		//传送数据
		acync:obj.acync||true,     		//是否异步
		dateType:obj.dateType||'',  		//数据类型
		success:obj.success||null,   		//成功函数
		error:obj.error||null,    			//失败函数
	}
	var ajax  =new XMLHttpRequest();
	
	if(opaction.method == 'get'){
		if(opaction.date){
			ajax.open('get',opaction.url+'?'+opaction.date,opaction.acync);
		}else{
			ajax.open('get',opaction.url,opaction.acync);
		}
		ajax.send();
	}
	
	if(opaction.method == 'post'){
		ajax.open('get',opaction.url,opaction.acync);
		ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
		send(opaction.date);
	}
	
	
	if(ajax.onload){
		ajax.onload = fm;
	}else{
		ajax.onreadystatechange = fm;
	}
	
	function fm(){
		if(ajax.readyState == 4){
			if(ajax.status >=200 && ajax.status <=207){
				var json = null;
				if(opaction.dateType == 'xml'){
					json = ajax.responseXML;
				}else if(opaction.dateType == 'json'){
					json = (new Function('','return'+ ajax.responseText))();
				}else{
					json = ajax.responseText;
				}
				
				if(typeof opaction.success == 'function'){
					opaction.success(json);
				}
				
			}else{//失败
				if(typeof opaction.error == 'function'){
					opaction.error(ajax.status);
				}
			}
		}
	}
	
}



var list = document.getElementById('list');


function success(date){
	console.log(date)
	list.innerHTML += '<li>'+date.msg +'</li>'
}


function fail(date){
	alert(date)
}




