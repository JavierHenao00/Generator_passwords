const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const El_psw1 = document.getElementById("El-psw1");
const El_psw2 = document.getElementById("El-psw2");
const El_btn = document.getElementById("btn")




El_btn.addEventListener("click", function(){
    let psword = "";
    let psword2 = "";
    
    for(let i =0; i<15; i++){
        let password1 = Math.floor(Math.random()*characters.length);
         let password2 = Math.floor(Math.random()*characters.length);
        psword += characters[password1]
        psword2 += characters[password2]
        El_psw1.textContent = psword; 
        El_psw2.textContent = psword2;  
    }
   

})

