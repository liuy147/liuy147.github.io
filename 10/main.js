var myWords = {
    x: 0,
    y: 0,
    z: 0,
    m: 0,
    n: 0,
    
    askFiveWords: function(){
    myWords.x = prompt("Type a NOUN?");
    myWords.y = prompt("Type another NOUN?");
    myWords.z = prompt("Type a Place?");
    myWords.m = prompt("Type a VERB?");
    myWords.n = prompt("Type a ADJECTIVE?");
},
    addFiveWords: function() {
        return myWords.x+" is having a "+myWords.n+" mood today. He likes "+myWords.m+" with  "+myWords.y+" at "+myWords.z;      
    },

};


window.onload = function() {
    
    var link = document.getElementById("add");

    link.onclick = function() {  
        myWords.askFiveWords();
        var added = myWords.addFiveWords();
        document.getElementById("words").innerHTML = added;
    }
        
    }
