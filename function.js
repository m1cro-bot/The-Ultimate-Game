let level = 9;

//let x = []; for(let i = 0; i<level; i++) x[i] = [];
//let y = []; for(let i = 0; i<level; i++) y[i] = [];

var box = `<input type="text" class="box" value="">`;



let map = [];
    for(let j = 0; j<level; j++) {
        map[j] = [];
        for(let k = 0; k<level; k++) {
                map[j].push('0');
        }
    }

console.log(map);

const start = () => {
    let boxData = '';
    
    for(let i = 0; i<level*level; i++) {
        boxData += box;
    }
    document.getElementById("wr-box").innerHTML=boxData;
    getBoxs();
}

const getBoxs = () => {
    const boxs = document.querySelectorAll(".box");
    //let i = 0;
    //let j = 0;
    let data = [];
    boxs.forEach((box, index) => {
        box.addEventListener("change", (event) => {
            let x = Math.floor(index/level);
            let z = level*x;
            let y = index-z;

            map[x][y] = event.target.value;
            for (let i = 0; i<level; i++){
                if (map[x][y] === map[x][i] && y != i){
                    console.log("eroorrr!!!");
                }
            }
        })
    })
    console.log(map);
}
