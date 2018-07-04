function launcher() {
    // ce sont des tableaux 
    let p = [];//place du code html, la ou ils apparaîterons.
    let numPlaces = [];//les places libres
    let tr = [];//id de chaque personne 
    let r;

    for(i = 0; i <= 17; i++){    //génere le tableau des places libre
        numPlaces[i] = (i + 1);
        console.log(numPlaces[i]); 
    }

    for(i = 0; i <= (numPlaces.length + 16); i++){  //choisit les place au hasard
        r = Math.floor(Math.random() * (numPlaces.length));
        tr[i] = numPlaces[r]; 
        numPlaces.splice(r, 1); // supprime la ligne du tableaux place prise par une personne
    }
    for(i = 0; i <= 17; i++){   
        console.log("tr"+i+" :" + tr[i]);
    }
    for(i = 0; i <= 17; i++){ //remplace le html avec les places prises au hasard
        p[i] = document.getElementById("p"+i).innerHTML = tr[i];
    }
}