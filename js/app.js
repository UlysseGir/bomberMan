const app = document.getElementById("app");

for(let i = 0; i < 200; i++){
    app.innerHTML += `<img src="img/ground.png" alt="">`;
}


let right = 0;
let tb = 0;
let direction = "";
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const player = document.getElementById("player");

    switch(event.key){
        case "z":
            direction = "up"
            console.log(direction)
            break;
        case "d":
            direction = "right"
            break;
        case "q":
            direction = "left"
            break;
        case "s":
            direction = "down"
            break;
    }

  });
  
  document.addEventListener('keyup', (event) => {
    const key = event.key;
    if(key === "z" && direction === "up" 
        || key === "s" && direction === "down"
        || key === "q" && direction === "left"
        || key === "d" && direction === "right"
    ){
        direction = null;
    }
  })

const time = setInterval(()=>{
    switch(direction){
        case "up":
            tb -= 10;
            player.style.top = tb + "px";
            break;
        case "down":
            tb += 10;
            player.style.top = tb + "px";
            break;
        case "left":
            right += 10;
            player.style.right = right + "px";
            break;
        case "right":
            right -= 10;
            player.style.right = right + "px";
            break;         
    }
}, 25)