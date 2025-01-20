// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres=[]

function setNombre(){
    nombre=document.getElementById("amigo").value.trim();
    if(nombre!== ''){
        pushFriends(document.querySelector('#amigo').value)
        document.querySelector('#amigo').value = '';
    }
    else{
        alert("no valido")
    }
}

function pushFriends(nombre){
    nombres.push(nombre)
    document.getElementById('listaAmigos').innerHTML = '';
    for (let i = 0; i <= nombres.length; i++) {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombres[i];
        document.getElementById('listaAmigos').appendChild(nuevoElemento);
    }
}

function getNombre(){
    if(nombres.length!== 0){
        document.getElementById('resultado').innerHTML="";
        let aleatorio = Math.floor(Math.random()*(nombres.length-1))+1;
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = "Amigo sorteado: "+nombres[aleatorio];
        document.getElementById('resultado').appendChild(nuevoElemento);
    }
    else{
        alert("La lista esta vacia");
    }
}