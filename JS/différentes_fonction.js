function afficheListe(button) 
{
	Liste=document.getElementById("button");
				
	if(getComputedStyle(Liste).display != "none")
	{
	Liste.style.display = "none";
	button.innerHTML = "Voir la musique"
	} 
	else 
	{
	Liste.style.display = "block";
	button.innerHTML = "Cacher la musique"
	}
}