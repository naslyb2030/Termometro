function convertir(){
    let grados=document.getElementById('gradosFarenheit').value;
    let conversion=(grados-32)/1.8;
    document.getElementById('celsius').innerHTML=conversion.toFixed(2);
    let alturaTermometro=document.getElementById('termometro')
    document.getElementById('temperatura').style.height=conversion+'%';
    document.getElementById('temperatura').style.backgroundColor='red'
  
    }

let boton=document.getElementById('boton')
boton.addEventListener('click',convertir)



