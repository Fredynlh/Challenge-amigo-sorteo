
let amigos = []

  function limpiarNombre(){
    document.querySelector(".input-name").value=''
    return;
    


  }







function agregarAmigo() { 
    let name = document.querySelector(".input-name").value;


    if(name === ""){alert("Porfavor Ingrese un Nombre")}



    
   
    else{
        amigos.push(name)
        document.querySelector(".section-title").innerHTML +=` <br>${name}`;

       console.log(name);
       console.log(amigos)
        limpiarNombre();
       
    
}}



function sortearAmigo(){
    if(amigos.length === 0){alert("Añada un amigo antes de realizar el sorteo")}
    else{

        let posicionAleatoria =   Math.floor(Math.random()*amigos.length)
       let amigoSorteado = amigos[posicionAleatoria]
       
        console.log(amigoSorteado)
 document.querySelector(".section-title").innerHTML +=`<br>EL  ganador es: <br>${amigoSorteado}`;
    }

}




