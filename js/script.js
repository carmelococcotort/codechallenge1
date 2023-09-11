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
})
//Endpoint https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265
let URL = `https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265`;

let solicitar = document.getElementById('call');
solicitar.addEventListener('click', function(){
    fetch(URL)
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
        showData(data);
    })
    .catch(error=>{
        console.log("Error al cargar los datos", error);
    })
})
function showData(data){
    let contenedor = document.getElementById('lista');
    contenedor.innerHTML = "";
    for(let one of data){
        contenedor.innerHTML += `<div class="dato" id="${one._id}"><p>Nombre:`+one.nombre+". Apellido: "+one.apellido+".</p><p>Grupo: "+one.grupo+".  Sala:"+one.sala+`.<button onclick="translateItem(${one._id.toString()})">Delete</></p></p></div>`;
    }

}
function translateItem(val){
    return deleteItem(val);

}

function deleteItem(num){
    let item = document.getElementById(num);
    fetch(`https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265/${num}`,{
        method: 'DELETE'
    })
    .then(response=> console.log(response));
    item.remove();//Acá hay que cambiar por un Fetch con metodo delete para eliminar tmbn del endpoint.
}