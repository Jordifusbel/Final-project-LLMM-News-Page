$.getJSON( "news.json", function( jsonObject ) {
  //en aquest punt l'objecte jsonObject correspon al fitxer
  pintar( jsonObject );
});

function pintar(json){
 $.each( json, function( i, title ) {
  $("#out").append( "<li id='" + i + "'>" + empleado.firstName+ " " + empleado.lastName + "</li>" );
 }); 
}
$(document).ready(function(){
$.getJSON( "names.json", function( jsonObject ) {
  //en aquest punt l'objecte jsonObject correspon al fitxer
  pintar( jsonObject );
});

function pintar(json){
 $.each( json, function( i, empleado ) {
  $("#out").append( "<li id='" + i + "'>" + empleado.firstName+ " " + empleado.lastName + "</li>" );
 }); 
}
});
$(document).ready(function(){
    $("#expanderButton").click(function(){
        var n =$("h3"); //tots els elements p
        n.css("background-color", "yellow");
        $(".classb").fadeOut("slow");  //tots els elements class=classb
        $("#idc").fadeOut();        //element id = idc
    });
});