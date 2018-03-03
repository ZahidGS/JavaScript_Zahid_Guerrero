

var calculadora = ( function(){


        var resultado = 0;
        var operando1 = 0;
        var operando2 = 0;
        var operacion = '';
		var aux = 0;
		var bol=false;


    var cero = document.getElementById('0')
        cero.addEventListener('mousedown', function(){
            cero.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cero.addEventListener('mouseup', function(){
            cero.setAttribute("style", "transform:scale(1,1)")
        })
        cero.addEventListener('click', function(){
        	var valida = maximo();
            if (valida==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 0;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 0;
            }
            };
        })


	

    var uno = document.getElementById('1')
        uno.addEventListener('mousedown', function(){
            uno.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        uno.addEventListener('mouseup', function(){
            uno.setAttribute("style", "transform:scale(1,1)")
        })
        uno.addEventListener('click', function(){
        	var valida = maximo();
            if (valida==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 1;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 1;
            }
            };
        })



    var dos = document.getElementById('2')
        dos.addEventListener('mousedown', function(){
            dos.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        dos.addEventListener('mouseup', function(){
            dos.setAttribute("style", "transform:scale(1,1)")
        })
        dos.addEventListener('click', function(){
        	var valida = maximo();
            if (valida==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 2;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 2;
            }
            };
        })




    var tres = document.getElementById('3')
        tres.addEventListener('mousedown', function(){
            tres.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        tres.addEventListener('mouseup', function(){
            tres.setAttribute("style", "transform:scale(1,1)")
        })
        tres.addEventListener('click', function(){
        	var valida = maximo();
            if (valida==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 3;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 3;
            }
            };
        })




    var cuatro = document.getElementById('4')
        cuatro.addEventListener('mousedown', function(){
            cuatro.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cuatro.addEventListener('mouseup', function(){
            cuatro.setAttribute("style", "transform:scale(1,1)")
        })
        cuatro.addEventListener('click', function(){
        	var valida = maximo();
            if (valida==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 4;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 4;
            }
            };
        })




    var cinco = document.getElementById('5')
        cinco.addEventListener('mousedown', function(){
            cinco.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        cinco.addEventListener('mouseup', function(){
            cinco.setAttribute("style", "transform:scale(1,1)")
        })
        cinco.addEventListener('click', function(){
        	var valida = maximo();
            if (valida==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 5;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 5;
            }
            };
        })




    var seis = document.getElementById('6')
        seis.addEventListener('mousedown', function(){
            seis.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        seis.addEventListener('mouseup', function(){
            seis.setAttribute("style", "transform:scale(1,1)")
        })
        seis.addEventListener('click', function(){
        	var valida = maximo();
            if (valida==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 6;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 6;
            }
            };
        })




    var siete = document.getElementById('7')
        siete.addEventListener('mousedown', function(){
            siete.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        siete.addEventListener('mouseup', function(){
            siete.setAttribute("style", "transform:scale(1,1)")
        })
        siete.addEventListener('click', function(){
        	var valida = maximo();
            if (valida==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 7;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 7;
            }
            };
        })



    var ocho = document.getElementById('8')
        ocho.addEventListener('mousedown', function(){
            ocho.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        ocho.addEventListener('mouseup', function(){
            ocho.setAttribute("style", "transform:scale(1,1)")
        })
        ocho.addEventListener('click', function(){
        	var valida = maximo();
            if (valida==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 8;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 8;
            }
            };
        })



    var nueve = document.getElementById('9')
        nueve.addEventListener('mousedown', function(){
            nueve.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        nueve.addEventListener('mouseup', function(){
            nueve.setAttribute("style", "transform:scale(1,1)")
        })
        nueve.addEventListener('click', function(){
        	var valida = maximo();
            if (valida==false) {
            var obtenerValor = document.getElementById('display').innerHTML;
            if (obtenerValor=='0') {
                document.getElementById('display').innerHTML = 9;
            } else{
                document.getElementById('display').innerHTML = obtenerValor + 9;
            }
            };
        })



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


    var raiz = document.getElementById('raiz')
        raiz.addEventListener('mousedown', function(){
            raiz.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        raiz.addEventListener('mouseup', function(){
            raiz.setAttribute("style", "transform:scale(1,1)")
        })
        raiz.addEventListener('click', function(){

        })


    var igual = document.getElementById('igual')
        igual.addEventListener('mousedown', function(){
            igual.setAttribute("style", "transform:scale(0.95,0.95)")
        })
        igual.addEventListener('mouseup', function(){
            igual.setAttribute("style", "transform:scale(1,1)")
        })
        igual.addEventListener('click', function(){
			if(!bol){
				bol=true;
				operando2 = document.getElementById('display').innerHTML;
				aux = operando2;
				resolver();
			}else{
				operando2 = aux;
				resolver();
			}           
			 var texto = document.getElementById('display').innerHTML.length;
			 if(texto>=8){
			    alert('excedio 8 digitos, son ' + texto);
			    var corta = document.getElementById('display').innerHTML;
			    var cortado = corta.substring(0,8);
			    document.getElementById('display').innerHTML=cortado;
			 };
        })

    
    function resetear(){
		bol = false;
		aux = 0
        resultado = 0;
        operando1 = 0;
        operando2 = 0;
        operacion = '';
    }	


    function resolver(){
        //var res = 0;
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
        document.getElementById('display').innerHTML = resultado.toString();
    }


		var maximo = (function(){
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