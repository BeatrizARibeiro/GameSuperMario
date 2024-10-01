const character = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const opition = localStorage.info;

if(opition == 3){
    character.src = 'img/characters/luigi.gif'
    character.style.width ='70px'
}

else if(opition == 2){
    character.src = 'img/characters/yoshi.gif'
    character.style.width ='100px'
}

else{
    character.src = 'img/characters/mario.gif'
}

const jump = () => {
    character.classList.add('jump')

    setTimeout(() => {
        character.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const characterPosition = +window.getComputedStyle(character).bottom.replace('px','')

    if(pipePosition <= 110 && pipePosition > 0 && characterPosition < 100){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px` 

        character.style.animation = 'none'
        character.style.bottom = `${characterPosition}px` 

        if(opition == 3){
            character.src = 'img/characters/luigi-game-over.png'
            character.style.width ='75px'
            character.style.marginLeft ='40px'
        }
        
        else if(opition == 2){
            character.src = 'img/characters/yoshi-game-over.png'
            character.style.width ='75px'
            character.style.marginLeft ='30px'
        }
        
        else{
            character.src = 'img/characters/mario-game-over.png'
            character.style.width ='75px'
            character.style.marginLeft ='40px'
        }
        clearInterval(loop)
    }

},10)

document.addEventListener('keydown', jump)