const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $    = require('jquery');

function datosRandom(){
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    $("#txtNombre").html(data.results[0].name.first+" "+data.results[0].name.last)

    $("#txtGenero").html(data.results[0].gender)

    $("#txtDireccion").html(data.results[0].location.street+" "+data.results[0].location.postcode)

    $("#txtCiudad").html(data.results[0].location.city+" "+data.results[0].location.state)

    $("#txtEmail").html(data.results[0].email)

    $("#txtLogin").html(data.results[0].login.username+" "+data.results[0].login.password)

    $("#txtBDay").html(data.results[0].dob)

    $("#txtPhone").html(data.results[0].phone+" "+data.results[0].cell)

    $("#txtId").html(data.results[0].id.name+" "+data.results[0].id.value)

    $("#imgFoto").attr("src",data.results[0].picture.large)
  },
  error(a,b,c){
  	alert("Sin internet o sin servidor");
  }
});
}
$("#btnInfo").on("click",datosRandom);