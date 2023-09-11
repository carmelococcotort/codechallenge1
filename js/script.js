/*document.addEventListener('DOMContentLoaded', function(){

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
})*/
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
    for(let one of data){
        contenedor.innerHTML += `<div class="dato" id="${one.id}"><p>Nombre:`+one.nombre+". Apellido: "+one.apellido+".</p><p>Grupo: "+one.grupo+".  Sala:"+one.sala+`.<button onclick="deleteItem(${one.id})">Delete</></p></p></div>`;
    }

}
function deleteItem(id){
    let item = document.getElementById(`${id}`);
    item.remove();
}