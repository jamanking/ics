var imgUpload = function(){
	document.getElementById("uploadImage").submit();
};

var checkUpload = function(){
	if(document.getElementById("uploadImage").type == 'file'){
		return true;
	}
	else{
		alert("无效文件");
		return false;
	}
};