var i=0;
var j=0;
const cargarfoto = (i)=>{
   $('#fotos').empty();
   const fotos = $('<img src="fotos/peru/'+encodeURI(peru[i].image)+'">');
   $('#fotos').append(fotos);
}

const cargarfotomexico = (j)=>{
   $('#fotos').empty();
   const fotosmexico = $('<img src="fotos/mexico/'+encodeURI(mexico[j].image)+'">');
   $('#fotos').append(fotosmexico);
}

$("#sedes").change(function(){
if($('select[id=sedes]').val()=='lima'){
  cargarfoto(0);
  $('.comprobar').click(function(){
    if ($('#inputNombre').val()==peru[i].name && i<peru.length){
      i = i+1;
      cargarfoto(i);
    }else{
      $('#inputNombre').val()== "Termino juego";
    }
    console.log(peru[i].name);
    // $('#inputNombre').empty();
  });
} else {
  cargarfotomexico(0);
  $('.comprobar').click(function(){
    if ($('#inputNombre').val()==mexico[j].name){
      j = j+1;
      cargarfotomexico(j);
    }
    console.log(mexico[j].name);
  });
}

});






if($('#sedes').val()=="lima"){
  cargarfoto(0);
  $('.comprobar').click(function(){
    if ($('#inputNombre').val()==peru[i].name){
      i = i+1;
      cargarfoto(i);
      console.log(peru[i].name);
    }
    $('#inputNombre').empty();
  });
}
console.log(fotos);
