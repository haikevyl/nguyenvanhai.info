$(document).ready(function() {
   $(window).scroll(function(event) {
      var pos_body = $('html,body').scrollTop();
      if(pos_body>20){
         $('header').addClass('header-sticky');
      }
      else {
         $('header').removeClass('header-sticky');
      };
   });

   $("#main-menu-toggle").click(function(event) {
   		$("#main-menu").addClass('main-menu-active');
   });

   $("#close-mainMenu").click(function(event) {
   		$("#main-menu").removeClass('main-menu-active');
   });
});


var item = document.getElementsByClassName("item");
for(let i = 0; i < item.length; i++)
{
	item[i].addEventListener("click", function(){
		for(let a = 0; a < item.length; a++)
		{
			if (item[a].classList.contains("item-active")) {
				item[a].classList.remove("item-active");
			};
		}
		this.classList.add("item-active");
	});
}

