let bombRow = Math.floor(4*Math.random()); //ligne aléatoire entre 0.1.2.3
let bombColumn = Math.floor(4*Math.random()); //colomne aléatoire entre 0.1.2.3

//console.log('the bomb is in the tile #'+bombRow+'-'+bombColumn);

let tries=0;//conteur de tentative
let trouver = false; // validation de si la bombe est trouver
let best=20; //le best score de l'utilisatuer
let whynot=0; //la veleur qui nous sert a comparer entre le best score et la tentative actuelle fini

function doClick(id){ //fonction principale du jeu

    console.log(id);// affice la case que l'utilisateur a cliqué

    let tile = document.querySelector('#'+id);//récupération de la case cliqué
    let bomb ="tile-"+bombRow+'-'+bombColumn; // mise en place du nom de la variable avec ces valeur pour que l'on puisse la comparer avec l'enplacement de la bombe
   

    if (trouver == true) { //partie pour empècher au jouer de conher des cases alors qu'il a trouvé la bombe

    }
    else{
     
        if (id == bomb){    // action a faire si l'utilisateur trouve la bombe
            trouver = true;
            tile.style.backgroundColor = 'red'; 
            result.innerHTML="Bravo vous avez trouvé la bombe!";
            tries++;
            whynot=tries;
            tri.innerHTML=tries+" essais";
        }  

        else{
            if( tile.style.backgroundColor == 'green'){ //vérification si l'utilisateur à déjà cliquer sur cette case

            }
            else{   //action si l'utilisateur n'a pas encore cliqué sur cette case et que ce n'est pas la bombe
            tile.style.backgroundColor = 'green';
            result.innerHTML="Dommage ce n'est pas la bombe.";
            tries++;
            tri.innerHTML=tries+" essais";
            }
        }

    }
}

function retry(){   //fonction pour recommencer

    bombRow = Math.floor(4*Math.random()); //recalcule de l'emplacement de la bombe
    bombColumn = Math.floor(4*Math.random());//de même
   // console.log('the bomb is in the tile #'+bombRow+'-'+bombColumn);
    tri.innerHTML="";   //on fait disparaître le texte qui quand l'on commence un partie n'a pas à être affiché
    result.innerHTML="";//on fait disparaître le texte qui quand l'on commence un partie n'a pas à être affiché
    if (best>whynot && trouver==true){ //partie pour garder le meilleur score du joueur
        best=whynot;
        record.innerHTML="Your best score is "+best;    //affichage du best score

    }
    else{
    }
    tries=0;
    for(v=0; v<4;v++){//partie pour changer toute les couleurs des tiles  pour les lignes
        for(i=0; i<4;i++){ //pour la colomne
            let color=document.querySelector("#tile-"+v+"-"+i);
            color.style.backgroundColor = 'rgb(90, 18, 184)';
        }
    }
    trouver=false;

}
