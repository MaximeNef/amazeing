const body = document.querySelector("body");
body.className = "body" ;
body.style.width = "520px" ;
const multiline = 
`***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********`



/* body.style.width = "920px" ;
const multiline = 
`**********************
*..S.................*
********************.*
*....................*
*.********************
*...................T*` */








for(let i = 0 ; i < multiline.length ; i++){
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
    
 
   
}

const balle  = document.createElement('div')
balle.className = "perso"
document.querySelector("body > div:nth-child(16)").appendChild(balle)


let posX = 16;

document.body.addEventListener("keydown", function(e){
    if(e.code === "ArrowRight"){
        
       if(document.querySelector("body > div:nth-child("+(posX+1)+")").classList.contains('mur')) {console.log('hiit the wall')}
    else{
        posX++
        document.querySelector("body > div:nth-child("+posX+")").appendChild(balle)
        console.log(e.code)}
    }


    if(e.code === "ArrowLeft"){
        if(document.querySelector("body > div:nth-child("+(posX-1)+")").classList.contains('mur')) {console.log('hiit the wall')}
       else{ posX--
        document.querySelector("body > div:nth-child("+posX+")").appendChild(balle)
        console.log(e.code)}
    }


    if(e.code === "ArrowUp"){
        if(document.querySelector("body > div:nth-child("+(posX-13)+")").classList.contains('mur')) {console.log('hiit the wall')}
        else{
        posX-=13
        document.querySelector("body > div:nth-child("+posX+")").appendChild(balle)
        console.log(e.code)}
    }


    if(e.code === "ArrowDown"){
        if(document.querySelector("body > div:nth-child("+(posX+13)+")").classList.contains('mur')) {console.log('hiit the wall')}
        else{
        posX+=13
        document.querySelector("body > div:nth-child("+posX+")").appendChild(balle)
        console.log(e.code)}
    }
})
