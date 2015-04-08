
window.onload = function() {
    
    var link = document.getElementById("add");
    link.onclick = function() {
    var noun = prompt("Type a NOUN?");
    document.getElementById("words").innerHTML = noun;
    var noun2 = prompt("Type another NOUN?");
    document.getElementById("words").innerHTML = noun2;
    var place = prompt("Type a Place?");
    document.getElementById("words").innerHTML = place;
    var verb = prompt("Type a VERB?");
    document.getElementById("words").innerHTML = verb;
    var adj = prompt("Type a ADJECTIVE?");
    document.getElementById("words").innerHTML = adj;    

    document.getElementById("words").innerHTML = noun + " is having a" + adj + "mood today. He likes" + verb "with" + noun2 + "at" + place ;   
}

}
    
    