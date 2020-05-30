//variable data
let heart = 5
let userLvl 
let username = ''
let level = 9
let boxSize
let bodySize
let error = false
let reloaded = false

let boxData = []
let cmap = []
let map = []
//setting body

//setting map
const maping = () => {


    for(let j = 0; j<userLvl; j++) {
        map[j] = []
        for(let k = 0; k<userLvl; k++) {
            map[j][k] = []
            for (let l = 0; l<level; l++) {
                map[j][k][l] = []
                for (let m = 0; m<level; m++) {
                    map[j][k][l].push("")
                }
            }
        }
    }
    console.log(map);
    wrBOX()
}
//setting wr-box
const wrBOX = () => {


for (let i = 0; i<userLvl*userLvl; i++){
    let box = `<div class="boxed" id="boxed${i}"><input class="box" id="box${i}" type="text" value=""></div>`
    boxData[i] = ''
    for(let j = 0; j<level*level; j++) {
        boxData[i] += box
    }
}
console.log(boxData);
stut()
}
//starting windows
const starting = () => {
    reloaded = true
    const heartVl = document.querySelector('.heart-vl')
    const userLvls = document.getElementById("level")
    const usernames = document.getElementById("username")
    heartVl.innerHTML = heart
    userLvl = userLvls.value
    username = usernames.value

    console.log(userLvl);
    boxSize = userLvl*300
    bodySize = boxSize+300
    if (userLvl && username){
        maping()
    }else if (!username){
        usernames.style.borderColor = "red"
    }else if (!userLvl){
        userLvls.style.borderColor = "red"
    }
}
const stut = () => {
    const userd = document.querySelector('.usernamed')
    const leveled = document.querySelector('.usr-lvl')
    userd.innerHTML = username
    leveled.innerHTML = `Level ${userLvl}`
    const tutors = document.getElementById("tutor")
    const cns = document.getElementById("container-cn")
    if (tutors.style.display === "block" && cns.style.display === "none"){
        tutors.style.display = "none"
        cns.style.display = "block"
        start()
    }
}
//starting game
const start = () => {
    for (let i = 0; i<userLvl*userLvl; i++){
        const leveling = document.querySelector("#level")
        const container = document.getElementById("container-cn")
        leveling.innerHTML = `Level ${userLvl}`
        container.style.width = `${boxSize}px`
        container.style.height = `${boxSize}px`
        container.innerHTML += `<div id="wr-box" class="wr-box"></div>`
    }
    const wrboxs = document.querySelectorAll(".wr-box")
    wrboxs.forEach((wrBox, index) => {
        wrBox.innerHTML = boxData[index]
    })
    writeBoxs();
}
//Check errorrroororor
const checkErr = (d, s, h, v, inzing, indiz) =>{
    console.log(d, s, h, v);
    //let inzing = d*userLvl
    //let indiz = h*level
    const errdef = document.querySelectorAll(`#box${inzing}`)

    for (let i = 0; i<level; i++) {
        if (map[d][s][h][v] === map[d][s][h][i] && v != i){
            console.log("eroorrrr!!!   horizontal")
            error=true
        }
    }
    for (let j = 0; j<level; j++) {
        if (map[d][s][h][v] === map[d][s][j][v] && h != j){
            console.log("erooorrrr!!!!   vertikal")
            error=true
        }
    }
    for (let k = 0; k<userLvl; k++) {
        if (map[d][s][h][v] === map[k][s][h][v] && d != k){
            console.log("erooorrroro!!!   vertikal maping")
            error=true
        }
    }
    for (let l = 0; l<userLvl; l++) {
        if (map[d][s][h][v] === map[d][l][h][v] && s != l){
            console.log("erooorrrr!!!!    horizontal mapping");
            error=true
        }
    }
    if (error){
        const dsheart = document.querySelector('.heart-vl')
        errdef[indiz].style.background = 'red'
        errdef[indiz].style.color = 'white'
        heart--
        dsheart.innerHTML = heart
        error=false
    }
    checkFinish();
}
//write box
const writeBoxs = () => {
//for (let s = 0; s<userLvl*userLvl; s++){
const wrBoxs = document.querySelectorAll(".wr-box")
wrBoxs.forEach((wrBox, indez) => {
    const boxs = document.querySelectorAll(`#box${indez}`)
    let a = Math.floor(indez/userLvl)
    let c = userLvl*a
    let b = indez-c
    for (let i = 0; i<level; i++){
        let m = Math.floor(Math.random()*boxs.length)//index
        //let n = Math.floor(Math.random()*level)+1//value
        let o = Math.floor(m/level)//x
        let p = level*o//z
        let q = m-p//y
        let color = 'black'
        
        boxs[m].value = i+1
        for (let i = 0; i<userLvl; i++) {
            if (boxs[m].value === map[i][b][o][q] && i != a) {
                boxs[m].value = ''
                color = 'white'
            }
            boxs[m].value = i+1
            boxs[m].type = "submit"
            map[a][b][o][q] = boxs[m].value
            boxs[m].style.background = color
            boxs[m].style.color = "white"
        }
        for (let j = 0; j<userLvl; j++) {
            if (boxs[m].value === map[a][j][o][q] && j != b) {
                boxs[m].value = ''
                color = 'white'
            }
            boxs[m].value = i+1
            boxs[m].type = "submit"
            map[a][b][o][q] = boxs[m].value
            boxs[m].style.background = color
            boxs[m].style.color = "white"
        }
    }
    boxs.forEach((box, index) => {
        box.addEventListener("change", (event) => {
            let x = Math.floor(index/level)
            let z = level*x
            let y = index-z
            map[a][b][x][y] = event.target.value
            console.log(indez)
            console.log(index)
            
            if (event.target.value){
                if (box.style.background === 'red'){
                    box.style.background = 'white'
                    box.style.color = 'black'
                }
                checkErr(a, b, x, y, indez, index)
            }else{
                if (box.style.background === 'red'){
                    box.style.background = 'white'
                    box.style.color = 'black'
                }
                checkFinish()
            }
        })
    })
})

}

//check finished
const betas = (beta) => {
    return beta != ''
}
const checkFinish = () => {
    const betaFinis = document.querySelectorAll(".box")
    betaFinis.forEach((betaFinised, index) => {
    cmap[index] = betaFinised.value
})
    console.log(cmap.every(betas))
    if (cmap.every(betas) && error === false){
        console.log("finised!")
        reloaded = false
        let endthis = 1
        ended(endthis)
    }
    if (heart === 0){
        console.log("GAGAL!!!!!!");
        let endthis = 0
        ended(endthis)
    }
}


window.onbeforeunload = function(){
    if (reloaded){
        return 'Errrrr'
    }
    else{
        return
    }
}

const ended = (data) => {
    const ends = document.getElementById("ended")
    const btnends = document.querySelector("#btnlanjut")
    const messages = document.querySelector(".message")
    if (data === 1){
        ends.style.display = "block"
        messages.innerHTML = "Selamat!!"
        btnends.style.display = "inline"
        reloaded = false
    }
    else if (data === 0){
        ends.style.display = "block"
        messages.innerHTML = "Gagal!!"
        btnends.style.display = "none"
        reloaded = false
    }
}
