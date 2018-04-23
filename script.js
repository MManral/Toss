function tosscoin(){
var head=document.getElementById("images1");
var coin= Math.floor(Math.random()*2)+1;
var img=document.getElementById("images");
img.src="images"+coin+".jpg" ;
document.getElementById("myimage" ).style.display='none';
document.getElementById("images").style.border="none";

}