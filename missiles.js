
function genereMissile(){
    var geometry = new THREE.BoxGeometry(10, 10, 0);
    var material = new THREE.MeshBasicMaterial({ map: texturePillule });
    ms = new THREE.Mesh(geometry, material);
    ms.position.y = ship.position.y+25;
    ms.position.x = ship.position.x;
    scene.add(ms);
    missiles.push(ms);
}



function animateMissile(){
    let distanceX=0, distanceY=0;

    for(let j=0; j<missiles.length; j++){
        missiles[j].position.y+=2;
        for(let i=0; i<ennemies.length; i++){
            distanceX = Math.abs(ennemies[i].position.x - missiles[j].position.x);
            distanceY = Math.abs(ennemies[i].position.y - missiles[j].position.y);

            if(distanceX <= 20 && distanceY <= 20){ //40 car distance max(du centre) ship 25 et 15 pour ennemies 
                //scene.remove(ennemies[i]);
                morts.push(ennemies[i]);
                ennemies.splice(i,1);
                document.querySelector("#points").innerHTML = ++points;
                scene.remove(missiles[j]);
                missiles.splice(j,1);
                break;
            }
        }
    };

    for(let i=0; i<missiles.length; i++){
        if(missiles[i].position.y > 400){
            missiles.splice(i,1);
        }
    }
}



function genereLaser(){
    let hauteur = 400;
    var geometry = new THREE.BoxGeometry(10, hauteur, 0);
    var material = new THREE.MeshBasicMaterial({ map: textureLaser });
    laser = new THREE.Mesh(geometry, material);
    laser.position.y = ship.position.y+25+hauteur/2;
    laser.position.x = ship.position.x;
    scene.add(laser);
    clockLaser.start();
}


function laserTouche(){
    let distanceX=0, distanceY=0;

    if(laser != null){
        for(let i=0; i<ennemies.length; i++){
            distanceX = Math.abs(ennemies[i].position.x - laser.position.x);
            distanceY = Math.abs(ennemies[i].position.y - laser.position.y);

            if(distanceX <= 20 && distanceY <= 215){
                //scene.remove(ennemies[i]);
                morts.push(ennemies[i]);
                ennemies.splice(i,1);
                document.querySelector("#points").innerHTML = ++points;    
            }
        }
    }
}



function supprLaser(){
    laser.material.opacity -= 0.05;
}


function animationMorts(){
    for(let i=0; i<morts.length; i++){
        morts[i].material.opacity-=0.05;
        if(morts[i].material.opacity <= 0){
            scene.remove(morts[i]);
        }
    }
}