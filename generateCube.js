function generateCube(){
    var geometry = new THREE.BoxGeometry(30, 30, 0);
    var material = new THREE.MeshBasicMaterial({ map: typeEnnemies[Math.floor(Math.random()* Math.floor(typeEnnemies.length))], transparent: true });
    cube = new THREE.Mesh(geometry, material);
    cube.position.y = 330;
    cube.position.x = Math.random() * (450 + 450) - 450;
    scene.add(cube);
    ennemies.push(cube);
}

function animateEnnemies(){
    ennemies.forEach(c => {
        c.position.y -= 1.5;
    });

    for(let i=0; i<ennemies.length; i++){
        if(ennemies[i].position.y < -400){
            ennemies.splice(i,1);
        }
    }
}

function collision(){
    let distanceX=0, distanceY=0;
    for(let i=0; i<ennemies.length;i++){
        distanceX = Math.abs(ennemies[i].position.x - ship.position.x);
        distanceY = Math.abs(ennemies[i].position.y - ship.position.y);
        if(distanceX <= 40 && distanceY <= 40){ //40 car distance max(du centre) ship 25 et 15 pour ennemies 
            morts.push(ennemies[i]);
            ennemies.splice(i,1);
            document.querySelector("#points").innerHTML = ++points;
            hp -= 25;
            document.querySelector("#vie").innerHTML = hp;
        }
    }
}