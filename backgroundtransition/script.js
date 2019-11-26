var imgBg = document.createElement("img");
var containerBg = document.getElementsByClassName("container-bg");

imgBg.onload = function () {
	containerBg[0].style.backgroundImage = "url('http://thuthuatphanmem.vn/uploads/2018/08/21/hinh-nen-thien-nhien-phong-canh-dep-2_043140658.jpeg')";
	containerBg[0].style.opacity = "1";
};

imgBg.src = "http://thuthuatphanmem.vn/uploads/2018/08/21/hinh-nen-thien-nhien-phong-canh-dep-2_043140658.jpeg";