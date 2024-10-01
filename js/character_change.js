const op = localStorage.info;

if(op == 2){
    img = document.querySelector('.c2')

    img.style.filter = "grayscale(100%)"
}

else if(op == 3){
    img = document.querySelector('.c3')

    img.style.filter = "grayscale(100%)"
}

else{
    img = document.querySelector('.c1')

    img.style.filter = "grayscale(100%)"
}

function change_op(val){
    localStorage.info = val

    //deixando todas as imagens coloridas
    img1 = document.querySelector('.c1')
    img2 = document.querySelector('.c2')
    img3 = document.querySelector('.c3')

    img1.style.filter = "grayscale(0%)"
    img2.style.filter = "grayscale(0%)"
    img3.style.filter = "grayscale(0%)"

    //deixando cinza a selecionada
    img = document.querySelector('.c'+val)

    img.style.filter = "grayscale(100%)"

    
}

