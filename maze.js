const body = document.querySelector("body");
body.className = "body";

/* const nbrcases = "13"
const lrgcases = "40"
body.style.width = (nbrcases * lrgcases+"px") */


 const multiline =
    `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********` 


/*  const multiline2 = 
`**********************
*..S.................*
********************.*
*....................*
*.********************
*...................T*`   */



const lineArr = multiline.split("\n");
// lineArr = toutes les lignes horrizontale du labyrinthe



//const generateMaze = maze
//const lineArr = maze.split('\n')
console.log(lineArr)
 


// premiere maniere 
/* for(let i = 0 ; i < multiline.length ; i++){
    const ligne = document.createElement("div")
    ligne.className =  "coco"
    //ligne.innerHTML = multiline[i].split('')
    body.appendChild(ligne)

    if(multiline[i] === "*"){
        ligne.className = 'mur'
    }
    if(multiline[i]=== "."){
        ligne.className = "chemin"
    }
  if(multiline[i]=== "T"){
        ligne.className = "tresor"
    }  
} */

for (let i = 0; i <= lineArr.length - 1; i++) {
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('lineDiv');
    lineDiv.id = i
    const line = lineArr[i];
    for (let j = 0; j <= line.length - 1; j++) {
        const characterDiv = document.createElement('div');
        const character = line.split("")
        characterDiv.innerHTML = character[j];
        characterDiv.classList.add('tile');
        lineDiv.appendChild(characterDiv);
        if (characterDiv.innerHTML == "*") {
            characterDiv.classList.add("mur");
            characterDiv.innerHTML = "";
        } else if (characterDiv.innerHTML == ".") {
            characterDiv.classList.add('chemin');
            characterDiv.innerHTML = "";
        } else if (characterDiv.innerHTML == "S") {
            characterDiv.classList.add('start');
            characterDiv.innerHTML = "";
        } else if (characterDiv.innerHTML == "T") {
            characterDiv.classList.add('tresor');
            characterDiv.innerHTML = "";
        }
       
    }
    body.appendChild(lineDiv)
}




const balle = document.createElement('div')
balle.className = "perso"
document.querySelector("#\\31  > div.tile.start").appendChild(balle)

let posX = 2;
let posY = 3;



document.body.addEventListener("keydown", function (e) {
//const mazes = [multiline1, multiline2] 

    if (e.code === "ArrowRight") {

        if (document.querySelector("body  > div:nth-child(" + posY + ")> div:nth-child(" + (posX + 1) + ")").classList.contains('mur')) {
            console.log('hiit the wall')
        } else {
            posX++
            document.querySelector("body > div:nth-child(" + posY + ")> div:nth-child(" + posX + ")").appendChild(balle)
            console.log(e.code)
        }

    }


    if (e.code === "ArrowLeft") {
        if (document.querySelector("body > div:nth-child(" + posY + ")> div:nth-child(" + (posX - 1) + ")").classList.contains('mur')) {
            console.log('hiit the wall')
        } else {
            posX--
            document.querySelector("body > div:nth-child(" + posY + ")> div:nth-child(" + posX + ")").appendChild(balle)
            console.log(e.code)
        }
    }


    if (e.code === "ArrowUp") {
        if (document.querySelector("body > div:nth-child(" + (posY - 1) + ")> div:nth-child(" + posX + ")").classList.contains('mur')) {
            
            console.log('hiit the wall')
        
        } else {
            posY--
            document.querySelector("body > div:nth-child(" + (posY) + ")> div:nth-child(" + posX + ")").appendChild(balle)
            console.log(e.code)
        }
    }


    if (e.code === "ArrowDown") {
        if (document.querySelector("body > div:nth-child(" + (posY + 1) + ")> div:nth-child(" + posX + ")").classList.contains('mur')) {
            console.log('hiit the wall')
            
        } else {
            posY++
            document.querySelector("body > div:nth-child(" + (posY) + ")> div:nth-child(" + posX + ")").appendChild(balle)
            console.log(e.code)
        }
    }

    if (document.querySelector("body > div:nth-child(" + (posY) + ")> div:nth-child(" + posX + ")").classList.contains('tresor')) {
        console.log('end')
        setTimeout(youWon, 100)
      }
      //lvl++
     
})

    function youWon(){
        alert("si si la street")
    }

    //generateMaze(multiline1)





    let nblvl = 0
    let seconds = 0;
    let minutes = 0;
    const main = document.querySelector('main')
    const section = document.createElement('section')
    const time = document.createElement('div')
    const p = document.createElement('p');
    p.className = 'timer'
    time.appendChild(p)
    body.appendChild(section)
    body.appendChild(time)
    
    function timer() {
        const para = document.querySelector('p')
        if (seconds >= 0) {
            para.textContent = 'Timer: '+seconds + ' s'
            if (seconds > 60) {
                    para.textContent = minutes + ' mn ' + (seconds - (minutes * 60)) + ' s'
                    
            }
        }
        if (seconds % 60 === 0 && seconds !== 0) {
            para.textContent = (minutes + 1) + ' mn'
            minutes++
            
        }
        seconds++
    }
    const interval = setInterval(timer, 1000)