array1 = new Array ("img/javascript.png", "img/js3.png", "img/jsposter.jpg")
 
function regular() {
    var i = document.getElementById('imgId')
    i.src = array1[document.form.texto.value]
    /* if(i <= array1.length){
        i.src = array1[document.form.texto.value]
    } else {
        return document.write(<p>Indice não encontrado!</p>)
    } */
    
}
//Utilizando arrow function
array1.forEach(item => console.log(item))

array1.forEach((item, index) => {
    document.write('<div>', item, '</div>');
    document.write('<div>',index, '</div>');
    })