document.addEventListener('DOMContentLoaded', function(){
    
    let sendBtn = document.getElementById('enviar');

    const URL = 'https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265';
    sendBtn.addEventListener('click', function(){
        let firstName = document.getElementById('nombre').value;
        let lastName = document.getElementById('apellido').value;
        let group = document.getElementById('grupo').value;
        let room = document.getElementById('sala').value;

        fetch(URL, {
            headers: {"Content-Type": "application/json; charset=utf-8"},
            method: 'POST',
            body: JSON.stringify({
                nombre: firstName,
                apellido: lastName,
                grupo: group,
                sala: room
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
    });
    playFetch();
})
//Endpoint https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265
let contador = 0;
let solicitar = document.getElementById('call');

function fetchData(){
    let URL = `https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265`;
    fetch(URL)
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
        contador+= 1;
        console.log(contador);
        showData(data);
    })
    .catch(error=>{
        console.log("Error al cargar los datos", error);
    })

}

function showData(data){
    let contenedor = document.getElementById('lista');
    contenedor.innerHTML = "";
    for(let one of data){
        contenedor.innerHTML += `<div class="dato" id="${one._id}"><p>Nombre:`+one.nombre+". Apellido: "+one.apellido+".</p><p>Grupo: "+one.grupo+".  Sala:"+one.sala+`.<button onclick="deleteItem('${one._id}')">Delete</></p></p></div>`;
    }
}

function deleteItem(num){
    let item = document.getElementById(num);
    fetch(`https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265/${num}`,{
        method: 'DELETE'
    })
    .then(response=> console.log(response));
    item.remove();//Acá hay que cambiar por un Fetch con metodo delete para eliminar tmbn del endpoint.
}

let interID;

function playFetch(){
    interID = setInterval(fetchData, 1500);//PARA PROBAR ESTO AGREGAR UN "0" AL 2DO PARAMETRO, ASI NO COMEMOS LA API.
}

