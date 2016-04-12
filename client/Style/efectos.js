$(document).ready(
    function () {
	$('label.tree-toggler').click(function () {
		$(this).parent().children('ul.tree').toggle(300);
	});
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});



$(function () {
   $('[id^=carousel-selector-]').click( function(){
       var id_imagen= $(this).attr("id");
       var ruta_imagen = document.getElementById(id_imagen).firstChild.src;
        document.getElementById('imagen-info').src=String(ruta_imagen);
});
});