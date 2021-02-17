$("#mobileCTA").on("click", function(){
    $("nav").fadeToggle(150);
});


$(document).ready(function(){
	$("#mobileCTA").click(function(){
		$(this).toggleClass("open");
	});
});


var travalert = document.querySelectorAll('#travalert span');
window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < travalert.length; i++) {
        travalert[i].style.top = y;
        travalert[i].style.left = x;
    }
};
