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