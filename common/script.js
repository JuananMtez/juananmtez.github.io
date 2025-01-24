let menuVisible = false;


function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("nodejs");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("kotlin");
        habilidades[6].classList.add("mysql");


        habilidades[7].classList.add("reactjs");
        habilidades[8].classList.add("angular");
        habilidades[9].classList.add("electrojs");
        habilidades[10].classList.add("fastapi");
        habilidades[11].classList.add("springboot");
        habilidades[12].classList.add("micronaut");

        habilidades[13].classList.add("comunication");
        habilidades[14].classList.add("workteam");
        habilidades[15].classList.add("dedicacion");
        habilidades[16].classList.add("adaptabilidad");
        habilidades[17].classList.add("time")
        habilidades[18].classList.add("solving")
        




    }

}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

function sendEmail() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    



    emailjs.send("service_wdu94ob", "template_c0e1ax9", {
        name,
        phone,
        email,
        message,
    }, "4xLglJ5VmPf4PajbD")
    .then(function(response) {
        console.log("Email sent successfully:", response);
        // Puedes agregar aquí código para mostrar un mensaje de confirmación al usuario
    })
    .catch(function(error) {
        console.error("Email could not be sent:", error);
        // Puedes agregar aquí código para manejar errores
    });
}

function cambiarIdioma() {
    const idiomaSeleccionado = document.getElementById('language-select').value;

    switch(idiomaSeleccionado) {
        case 'es':
            window.location.href = "/es"; // Redirigir a la versión en español
            break;
        case 'en':
            window.location.href = "/en"; // Redirigir a la versión en inglés
            break;
        default:
            break;
    }
}