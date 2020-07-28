array1 = new Array ("img/javascript.png", "img/js3.png", "img/jsposter.jpg")
 
function regular() {
    var i = document.getElementById('imgId')

    if(i <= array1.length){
        i.src = array1[document.form.texto.value]
    } else {
        return document.write(<p>Indice não encontrado!</p>)
    }
    
}