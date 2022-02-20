var sP = 0;
sS();

function sS() {
    var s = document.getElementsByClassName("container");

    for (var i = 0; i < s.length; i++){
        s[i].style.display = "nome"; 
    }

    sP++;
    
    if (sP > s.length){
        sP = 1; 
    }

    s[sP-1].style.display = "block"; 
    sT(sS, 4000); 
}