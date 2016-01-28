angular
	.module('app')
	.controller('viCtrl', ['$scope', function($scope) {
    $("#button1").click(function () { 
		var iframe = $("#videoiframe");
		iframe.attr("src", "https://docs.google.com/file/d/0B9eXFyWAkPEXTUZNZ2dKdXB0bjA/preview"); 
		iframe.attr("width", $(".col-lg-8").width()); 
		iframe.attr("height", $(".col-lg-8").width()*426/704); 
	});
    $("#button2").click(function () { 
		var iframe = $("#videoiframe");
		iframe.attr("src", "https://docs.google.com/file/d/0B9eXFyWAkPEXM2M2Qy1TcDNUd2c/preview"); 
		iframe.attr("width", $(".col-lg-8").width()); 
		iframe.attr("height", $(".col-lg-8").width()*426/704); 
	});
    $("#button3").click(function () { 
		var iframe = $("#videoiframe");
		iframe.attr("src", "https://docs.google.com/file/d/0B9eXFyWAkPEXTkxrYnlPUFMyM1E/preview"); 
		iframe.attr("width", $(".col-lg-8").width()); 
		iframe.attr("height", $(".col-lg-8").width()*426/704); 
	});
    $("#button4").click(function () { 
		var iframe = $("#videoiframe");
		iframe.attr("src", "https://docs.google.com/file/d/0B9eXFyWAkPEXMTNkUGczRnBvLVk/preview"); 
		iframe.attr("width", $(".col-lg-8").width()); 
		iframe.attr("height", $(".col-lg-8").width()*426/704); 
	});
}]);