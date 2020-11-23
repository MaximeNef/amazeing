const body = document.querySelector("body");
body.className = "body" ;

const multiline = 
`***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********`


for(let i = 0 ; i < multiline.length ; i++){
    const ligne = document.createElement("div")
    ligne.className =  "coco"
    ligne.innerHTML = multiline[i].split('')
    body.appendChild(ligne)

    if(multiline[i] === "*"){
        ligne.className = 'mur'
    }
    if(multiline[i]=== "."){
        ligne.className = "chemin"
    }
    if(multiline[i]=== "S"){
        let perso = document.createElement("div")
        perso.className = "perso"
        ligne.appendChild(perso)
    }

}

