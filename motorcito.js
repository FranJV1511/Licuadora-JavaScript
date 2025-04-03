var estadoLicuadora =0;
var licuadora=document.getElementById("blender");
var botonLicuadora=document.getElementById("blender-button-sound");
var sonLicuadora=document.getElementById("blender-sound");
function controlarLicuadora(){
    if (estadoLicuadora==0){
        estadoLicuadora=1;
        sonido();
        licuadora.classList.add("active");
        console.log("Licuadora encendida");

    } else{
        estadoLicuadora = 0;
        sonido();
        console.log("Licuadora apagada");
        licuadora.classList.remove("active");
    }
}

function sonido() {
    if(sonLicuadora.paused){
        botonLicuadora.play();
        sonLicuadora.play();
    }
    else{
        botonLicuadora.play();
        sonLicuadora.pause();
        sonLicuadora.currentTime =0;
    }
}