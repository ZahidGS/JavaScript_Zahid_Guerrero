

/* *************************************************************************************
		 _____         _               _             _                     
		/  __ \       | |             | |           | |                    
		| /  \/  __ _ | |  ___  _   _ | |  __ _   __| |  ___   _ __   __ _ 
		| |     / _` || | / __|| | | || | / _` | / _` | / _ \ | '__| / _` |
		| \__/\| (_| || || (__ | |_| || || (_| || (_| || (_) || |   | (_| |
		 \____/ \__,_||_| \___| \__,_||_| \__,_| \__,_| \___/ |_|    \__,_|



	Autor: Lic. Zahid Guerrero Sandoval		                                                                   
		                                                                   
************************************************************************************* */


// PATRON MODULO AUTOEJECUTABLE
var calculadora = ( function(){

	//INICIAR VARIABLES
    var resultado = 0;
    var operando1 = 0;
    var operando2 = 0;
    var operacion = '';


    //*****************************************************************************
    //FUNCIONES PARA LA CAPTURA DE NUMEROS EN EL PANEL
    // 	DESDE NUMERO 0 HASTA EL 9 INCLUYENDO EL "."
    //EFECTO DE PRESIONAR Y SOLTAR BOTON, CAPTURA NUMERO Y VALIDA EL CERO
    //LLAMA A FUNCION QUE LIMITA LOS DIGITOS EN EL RESULTADO

        //NUMERO CERO
    var cero = document.getElementById('0')
        cero.addEventListener('mousedown', function(){
            cero.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cero.addEventListener('mouseup', function(){
            cero.setAttribute("style", "transform:scale(1,1)")
        })
        cero.addEventListener('click', function(){
        	var validaDigitos = maximoDigitos();
            if (validaDigitos==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 0;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 0;
            }
            };
        })


        //NUMERO UNO
    var uno = document.getElementById('1')
        uno.addEventListener('mousedown', function(){
            uno.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        uno.addEventListener('mouseup', function(){
            uno.setAttribute("style", "transform:scale(1,1)")
        })
        uno.addEventListener('click', function(){
        	var validaDigitos = maximoDigitos();
            if (validaDigitos==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 1;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 1;
            }
            };
        })


        //NUMERO DOS
    var dos = document.getElementById('2')
        dos.addEventListener('mousedown', function(){
            dos.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        dos.addEventListener('mouseup', function(){
            dos.setAttribute("style", "transform:scale(1,1)")
        })
        dos.addEventListener('click', function(){
        	var validaDigitos = maximoDigitos();
            if (validaDigitos==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 2;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 2;
            }
            };
        })



        //NUMERO TRES
    var tres = document.getElementById('3')
        tres.addEventListener('mousedown', function(){
            tres.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        tres.addEventListener('mouseup', function(){
            tres.setAttribute("style", "transform:scale(1,1)")
        })
        tres.addEventListener('click', function(){
        	var validaDigitos = maximoDigitos();
            if (validaDigitos==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 3;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 3;
            }
            };
        })



        //NUMERO CUATRO
    var cuatro = document.getElementById('4')
        cuatro.addEventListener('mousedown', function(){
            cuatro.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cuatro.addEventListener('mouseup', function(){
            cuatro.setAttribute("style", "transform:scale(1,1)")
        })
        cuatro.addEventListener('click', function(){
        	var validaDigitos = maximoDigitos();
            if (validaDigitos==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 4;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 4;
            }
            };
        })



        //NUMERO CINCO
    var cinco = document.getElementById('5')
        cinco.addEventListener('mousedown', function(){
            cinco.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cinco.addEventListener('mouseup', function(){
            cinco.setAttribute("style", "transform:scale(1,1)")
        })
        cinco.addEventListener('click', function(){
        	var validaDigitos = maximoDigitos();
            if (validaDigitos==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 5;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 5;
            }
            };
        })



        //NUMERO SEIS
    var seis = document.getElementById('6')
        seis.addEventListener('mousedown', function(){
            seis.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        seis.addEventListener('mouseup', function(){
            seis.setAttribute("style", "transform:scale(1,1)")
        })
        seis.addEventListener('click', function(){
        	var validaDigitos = maximoDigitos();
            if (validaDigitos==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 6;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 6;
            }
            };
        })



        //NUMERO SIETE
    var siete = document.getElementById('7')
        siete.addEventListener('mousedown', function(){
            siete.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        siete.addEventListener('mouseup', function(){
            siete.setAttribute("style", "transform:scale(1,1)")
        })
        siete.addEventListener('click', function(){
        	var validaDigitos = maximoDigitos();
            if (validaDigitos==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 7;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 7;
            }
            };
        })


        //NUMERO OCHO
    var ocho = document.getElementById('8')
        ocho.addEventListener('mousedown', function(){
            ocho.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        ocho.addEventListener('mouseup', function(){
            ocho.setAttribute("style", "transform:scale(1,1)")
        })
        ocho.addEventListener('click', function(){
        	var validaDigitos = maximoDigitos();
            if (validaDigitos==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 8;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 8;
            }
            };
        })


        //NUMERO NUEVE
    var nueve = document.getElementById('9')
        nueve.addEventListener('mousedown', function(){
            nueve.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        nueve.addEventListener('mouseup', function(){
            nueve.setAttribute("style", "transform:scale(1,1)")
        })
        nueve.addEventListener('click', function(){
        	var validaDigitos = maximoDigitos();
            if (validaDigitos==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 9;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 9;
            }
            };
        })


        //PUNTO, CAPTURA EL PUNTO Y VALIDA QUE NO SE REPITA 
    var punto = document.getElementById('punto')
        punto.addEventListener('mousedown', function(){
            punto.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        punto.addEventListener('mouseup', function(){
            punto.setAttribute("style", "transform:scale(1,1)")
        })
        punto.addEventListener('click', function(){
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor.indexOf('.')==-1) {
            document.getElementById('display').innerHTML = obtenerValor + '.';
            }
        })



	//******************************************************************************
	// OPERATIVIDAD

	// FUNCIONES ARITMETICAS


    var dividir = document.getElementById('dividido')
        dividir.addEventListener('mousedown', function(){
            dividir.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        dividir.addEventListener('mouseup', function(){
            dividir.setAttribute("style", "transform:scale(1,1)")
        })
        dividir.addEventListener('click', function(){
            operando1 = document.getElementById('display').innerHTML;
            operacion = '/';
            document.getElementById('display').innerHTML = '0';
        })



    var multiplicar = document.getElementById('por')
        multiplicar.addEventListener('mousedown', function(){
            multiplicar.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        multiplicar.addEventListener('mouseup', function(){
            multiplicar.setAttribute("style", "transform:scale(1,1)")
        })
        multiplicar.addEventListener('click', function(){
            operando1 = document.getElementById('display').innerHTML;
            operacion = '*';
            document.getElementById('display').innerHTML = '0';
        })



    var restar = document.getElementById('menos')
        restar.addEventListener('mousedown', function(){
            restar.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        restar.addEventListener('mouseup', function(){
            restar.setAttribute("style", "transform:scale(1,1)")
        })
        restar.addEventListener('click', function(){
            operando1 = document.getElementById('display').innerHTML;
            operacion = '-';
            document.getElementById('display').innerHTML = '0';
        })





    var raiz = document.getElementById('raiz')
        raiz.addEventListener('mousedown', function(){
            raiz.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        raiz.addEventListener('mouseup', function(){
            raiz.setAttribute("style", "transform:scale(1,1)")
        })
        raiz.addEventListener('click', function(){

        })


    var sumar = document.getElementById('mas');
        sumar.addEventListener('mousedown', function(){
            sumar.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        sumar.addEventListener('mouseup', function(){
            sumar.setAttribute("style", "transform:scale(1,1)")
        })
        sumar.addEventListener('click', function(){
            operando1 = document.getElementById('display').innerHTML;
            operacion = '+';
            document.getElementById('display').innerHTML = '0';
        })


        //TECLA IGUAL, COMPLETA LA OPERACION Y REPITE LA ULTIMA OPERACION
        //CON EL ULTIMO NUMERO
        //LIMITA LA CANTIDAD DE DIGITOS A 8
    var igual = document.getElementById('igual')
        igual.addEventListener('mousedown', function(){
            igual.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        igual.addEventListener('mouseup', function(){
            igual.setAttribute("style", "transform:scale(1,1)")
        })
        igual.addEventListener('click', function(){
        	if (resultado==0) {
            	operando2 = document.getElementById('display').innerHTML;
        	}
            resolver();
			 var texto = document.getElementById('display').innerHTML.length;
			 if(texto>=8){
			    alert('excedio 8 digitos, son ' + texto);
			    var corta = document.getElementById('display').innerHTML;
			    var cortado = corta.substring(0,8);
			    document.getElementById('display').innerHTML=cortado;
			 };
        })
    

	// TECLA DE REINICIO DE OPERACIONES / EFECTO DE PRESIONAR Y SOLTAR TECLA
    var on = document.getElementById('on')
        on.addEventListener('mousedown', function(){
            on.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        on.addEventListener('mouseup', function(){
            on.setAttribute("style", "transform:scale(1,1)")
        })
        on.addEventListener('click', function(){
            resetear();
            document.getElementById('display').innerHTML = '0';
        })


        // TECLA PARA CAMBIAR DE SIGNO A - Y +  
        // EFECTO DE PRESIONAR Y SOLTAR TECLA
    var signo = document.getElementById('sign')
        signo.addEventListener('mousedown', function(){
            signo.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        signo.addEventListener('mouseup', function(){
            signo.setAttribute("style", "transform:scale(1,1)")
        })
        signo.addEventListener('click', function(){
            var obtenerValor = document.getElementById('display').innerHTML;
            obtenerValor = parseFloat(obtenerValor)*-1;
            document.getElementById('display').innerHTML = obtenerValor.toString();
        })


        //******************************************************************************

        //METODOS


        //REALIZA LA OPERACION ARITMETICA SI EL ULTIMO NUMERO ES "0" O DIFERENTE
        //PARA CONTINUAR CON LA SECUENCIA DE OPERACIONES
        //IMPRIME EL RESULTADO EN EL ELEMENTO 
    function resolver(){
        if (resultado==0) {
	        switch(operacion){
	            case "+":
	              resultado = parseFloat(operando1) + parseFloat(operando2);
	              break;
	            case "-":
	                resultado = parseFloat(operando1) - parseFloat(operando2);
	                break;
	            case "*":
	              resultado = parseFloat(operando1) * parseFloat(operando2);
	              break;
	            case "/":
	              resultado = parseFloat(operando1) / parseFloat(operando2);
	              break;
	        }
	    } else {
	        switch(operacion){
	            case "+":
	              resultado = parseFloat(resultado) + parseFloat(operando2);
	              break;
	            case "-":
	                resultado = parseFloat(resultado) - parseFloat(operando2);
	                break;
	            case "*":
	              resultado = parseFloat(resultado) * parseFloat(operando2);
	              break;
	            case "/":
	              resultado = parseFloat(resultado) / parseFloat(operando2);
	              break;
	        }
	    }
        document.getElementById('display').innerHTML = resultado.toString();
    }
    

    //REINICIA VALORES
    function resetear(){

        resultado = 0;
        operando1 = 0;
        operando2 = 0;
        operacion = '';
    }	


    //VALIDA QUE NO EXCEDA DE OCHO DIGITOS EN EL ELEMENTO SPAN
	var maximoDigitos = (function(){
	 var texto = document.getElementById('display').innerHTML.length;
	 if(texto>=8){
	    alert('excedio 8 digitos, son ' + texto);
	    var corta = document.getElementById('display').innerHTML;
	    var cortado = corta.substring(0,8);
	    document.getElementById('display').innerHTML=cortado;
	    return true;
	 };
	 return false;
	})

})();


