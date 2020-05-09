var direction = {
    avancer: false,
    reculer: false,
    droite: false,
    gauche: false,
    click: false,
    click_droit: false
}



//détection appui touches
function addevent(){
    addEventListener("keydown", function(event) {
       // event.preventDefault()

        switch(event.keyCode){
            case 38:
                direction.avancer = true;
                break;
            case 37:
                direction.gauche = true;
                break;
            case 39:
                direction.droite = true;
                break;
            case 40:
                direction.reculer = true;
                break;
        }
    });
    addEventListener("keyup", function(event) {
       // event.preventDefault()

        switch(event.keyCode){
            case 38:
                direction.avancer = false;
                break;
            case 37:
                direction.gauche = false;
                break;
            case 39:
                direction.droite = false;
                break;
            case 40:
                direction.reculer = false;
                break;
        }
    });

    addEventListener("mousedown", function(event){
        event.preventDefault();
        //click droit
        if(event.button == 2 ){
            direction.click_droit = true;
            if(laser==null)
                genereLaser();
        }
        else{
            direction.click = true;
            genereMissile();
        }
    });

    addEventListener("mouseup", function(event){
        event.preventDefault();
        //click droit
        if(event.button == 2 ){
            direction.click_droit = false;
        }
        else{
            direction.click = false;
        }
    });

    //desactive le menu du click droit
    addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });
}



//mouvement cube en fonction des events
function moovePlayer(){
    if(direction.avancer){
        if(direction.gauche)
            avancerGauche();
        else if(direction.droite)
            avancerDroite();
        else
            avancer();
    }

    else if(direction.reculer){
        if(direction.gauche)
            reculerGauche();
        else if(direction.droite)
            reculerDroite();
         else
            reculer();
    }
    else if(direction.gauche){
        gauche();
    }
    else if(direction.droite){
        droite();
    }
}


function avancer(){
    let clone = ship.clone();
    clone.position.y += 3;
    if(bordure(clone))
        ship.position.y += 3;
}


function avancerGauche(){
    let clone = ship.clone();
    clone.position.y += 3;
    clone.position.x -= 3;
    if(bordure(clone)){
        ship.position.x -= 3;
        ship.position.y += 3;
    }
}


function avancerDroite(){
    let clone = ship.clone();
    clone.position.y += 3;
    clone.position.x += 3;
    if(bordure(clone)){
        ship.position.x += 3;
        ship.position.y += 3;
    }
}


function gauche(){
    let clone = ship.clone();
    clone.position.x -= 3;
    if(bordure(clone)){
        ship.position.x -= 3;
    }
}


function droite(){
    let clone = ship.clone();
    clone.position.x += 3;
    if(bordure(clone)){
        ship.position.x += 3;
    }
}


function reculer(){
    let clone = ship.clone();
    clone.position.y -= 3;
    if(bordure(clone))
        ship.position.y -= 3;
}


function reculerGauche(){
    let clone = ship.clone();
    clone.position.y -= 3;
    clone.position.x -= 3;
    if(bordure(clone)){
        ship.position.x -= 3;
        ship.position.y -= 3;
    }
}


function reculerDroite(){
    let clone = ship.clone();
    clone.position.y -= 3;
    clone.position.x += 3;
    if(bordure(clone)){
        ship.position.x += 3;
        ship.position.y -= 3;
    }
}

function bordure(obj){
    if(obj.position.x > -500 && obj.position.x < 500){
        if(obj.position.y > -(window.innerHeight - 50) / 2 - 4 && obj.position.y < 336){
            return true;
        }
    }
    return false;
}