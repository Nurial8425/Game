  let Piedra=0;
  let Papel=1;
  let Tijera=2;
  let contador,valor;
  let tmr=null;
  
  //time counter of the game//
  function Jugar()
   {
   contador=0;
   tmr=setInterval("CalcularJugada()");
   }
  //gallery of images when the machine takes out/
  function CalcularJugada()
   {
	document.getElementById("resultado").innerHTML="";
	valor=Math.floor(Math.random()*3);
	var imagen=document.getElementById("imagen");
	switch(valor)
	  {
	  case Piedra:
	       imagen.src="./imagenes/piedra.jpg";
			break;
	  case Papel:
	       imagen.src="./imagenes/papel.jpg";
			break;
	  case Tijera:
	       imagen.src=".imagenes/tijera.jpg";
    	   break;
	  }
	contador++;
	if (contador==20)
		{
	     clearInterval(tmr);
		 VisResultados();
		}	 
 }
 //movements//
 function VisResultados()
 	{
 			radio=document.getElementsByTagName("input");
	        if( valor == Piedra && radio[Tijera].checked ||
		        valor == Papel && radio[Piedra].checked ||
  			    valor == Tijera && radio[Papel].checked)
            document.getElementById("resultado").innerHTML = "Gana la máquina";
        else if (valor == Piedra && radio[Papel].checked ||
			    valor == Papel && radio[Tijera].checked ||
			    valor == Tijera && radio[Piedra].checked)
            document.getElementById("resultado").innerHTML = "Gana el humano";
        else
            document.getElementById("resultado").innerHTML = "Empate";
	}
//rebooting game//
function Reiniciar()
		 {
		  document.getElementById("imagen").src="./imagenes/piedra.jpg";
		  document.getElementById("resultado").innerHTML="";
		  radio=document.getElementsByTagName("input");
		  radio[Piedra].checked=true;
		 }	
	
 