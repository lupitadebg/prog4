function limpiarFormulario(){
	document.getElementById("form").reset();
}

var ConvertirC= function (cm){
 var cm= parseFloat(document.getElementById("cm").value);
 var pul= cm/2.54;
 return pul;
}
var ConvertirM= function (m){
 var m= parseFloat(document.getElementById("m").value);
 var yar= m*1.094;
 return yar;
}
var calcular= function (a, b, c){
var a = parseInt(document.getElementById("a").value);
var b = parseInt(document.getElementById("a").value);
var c = parseInt(document.getElementById("c").value);
 

if (a<b && a<c){
nmenor=a;
}
else{
if ( b<c){
nmenor=b;
}
else{
nmenor=c;
}
}
return nmenor;
}

