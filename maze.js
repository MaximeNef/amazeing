const body = document.querySelector("body");
body.className = "body";
let x ;
let y ;
let grosseline = [];
let level = 0

 let lvl1 =
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


  let lvl2 = 
`**********************
*..S.................*
********************.*
*....................*
*.********************
*...................T*`   

let lvl3 =`********
****S***
****.***
****.***
****.***
*......*
*.****.*
*..***.*
*..***.*
**.*****
*T.*****
********`  

let lvl4 = 
`******************
*....*..****.*..***
*.****.*.***.*.*.**
*...**.**.**.*.**.*
*.****.***.*.*.*.**
*....*.****..*..***
*******************`

const multiline=[
    lvl1, lvl2, lvl3, lvl4
]



//const lineArr = multiline.split("\n");
// lineArr = toutes les lignes horrizontale du labyrinthe


function generateMaze(){
    const lineArr = multiline[level].split("\n");
    
    for (let i = 0; i <= lineArr.length - 1; i++) {
        grosseline[i]=[]
        const lineDiv = document.createElement('div');
        lineDiv.classList.add('lineDiv');
        lineDiv.id = i
        const line = lineArr[i];
        for (let j = 0; j <= line.length - 1; j++) {
            const characterDiv = document.
            createElement('div');
            grosseline[i][j]=characterDiv
            console.log(grosseline)
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
                x=j;
                y=i;
                const balle = document.createElement('div')
                balle.className = "perso"
                characterDiv.appendChild(balle)
            } else if (characterDiv.innerHTML == "T") {
                characterDiv.classList.add('tresor');
                characterDiv.innerHTML = "";
            }
           
        }
        body.appendChild(lineDiv)
    }  
  
} 


 
//const lineArr = maze.split('\n')


//console.log(lineArr)
 


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


/* for (let i = 0; i <= lineArr.length - 1; i++) {
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
} */


generateMaze();







document.body.addEventListener("keydown", function (e) {
    const perso = document.querySelector(".perso");
  let dest;

  
    if (e.code === "ArrowRight") {
        
        x++;
        dest = grosseline[y][x];
        
        if (dest.classList.contains("mur")) {
          alert("that's a wall!");
          x--;
          dest = grosseline[y][x];
          
          

        }}
       /*  if (document.querySelector("body  > div:nth-child(" + y + ")> div:nth-child(" + (x + 1) + ")").classList.contains('mur')) {
            console.log('hiit the wall')
        } else {
            x++
            document.querySelector("body > div:nth-child(" + y + ")> div:nth-child(" + x + ")").appendChild(balle)
            console.log(e.code)
        }
 */
   


    if (e.code === "ArrowLeft") {
        x--;
        dest = grosseline[y][x];
        
        if (dest.classList.contains("mur")) {
          alert("that's a wall!");
          x++;
          dest = grosseline[y][x];
       /*  if (document.querySelector("body > div:nth-child(" + y + ")> div:nth-child(" + (x - 1) + ")").classList.contains('mur')) {
            console.log('hiit the wall')
        } else {
            x--
            document.querySelector("body > div:nth-child(" + y + ")> div:nth-child(" + x + ")").appendChild(balle)
            console.log(e.code) */
        }
    }


    if (e.code === "ArrowUp") {
        y--;
        dest = grosseline[y][x];
       
        if (dest.classList.contains("mur")) {
          alert("that's a wall!");
          y++;
          dest = grosseline[y][x];
       /*  if (document.querySelector("body > div:nth-child(" + (y - 1) + ")> div:nth-child(" + x + ")").classList.contains('mur')) {
            
            console.log('hiit the wall')
        
        } else {
            y--
            document.querySelector("body > div:nth-child(" + (y) + ")> div:nth-child(" + x + ")").appendChild(balle)
            console.log(e.code) */
        }
    }


    if (e.code === "ArrowDown") {

        y++;
        dest = grosseline[y][x];

        
        if (dest.classList.contains("mur")) {
          alert("that's a wall!");
          y--;
          dest = grosseline[y][x];
       /*  if (document.querySelector("body > div:nth-child(" + (y + 1) + ")> div:nth-child(" + x + ")").classList.contains('mur')) {
            console.log('hiit the wall')
            
        } else {
            y++
            document.querySelector("body > div:nth-child(" + (y) + ")> div:nth-child(" + x + ")").appendChild(balle)
            console.log(e.code) */
        }
    }
    dest.appendChild(perso) 
   
    if (dest.classList.contains("tresor")) { 
        window.setTimeout(
            function () {
                
        dest = grosseline[y][x];
        alert("YYEEAAAAHHHHH LET'S GOO !!!! ");
        x=0
        y=0
        
        body.innerHTML='';
        level++;
        seconds = 0
        minutes = 0
        generateMaze();
    }, 200)
        
      }

      
      
})

  

    

  











    
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
            para.textContent = seconds + ' s'
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

    