var i=0;
const cargarfoto = (i)=>{
  $('#fotos').empty();
  const fotos = $('<img src="fotos/peru/'+encodeURI(peru[i].image)+'">');
  $('#fotos').append(fotos);
}

if($('#sedes').val()=="lima"){
  cargarfoto(0);
  $('.comprobar').click(function(){
    if ($('#inputNombre').val()==peru[i].name){
      i = i+1;
      cargarfoto(i);
      console.log(peru[i].name);
    }
  });
}
console.log(fotos);
