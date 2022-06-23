const app = document.getElementById("app");
const player = document.getElementById("player");

for(let i = 0; i < 200; i++){
    app.innerHTML += `<img src="img/ground.png" alt="">`;
}



document.addEventListener('keydown', (event) => {
    const key = event.key;

    if(key === "z"){
        console.log("up");
        player.style.backgroundColor = "red"
    }

    if(key === "s"){
        console.log("down");
    }

    if(key === "q"){
        console.log("left");
    }

    if(key === "d"){
        console.log("right");
    }

  });
  