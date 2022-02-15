let button = document.createElement("button");
let btnText = document.createTextNode("Sing!");
button.appendChild(btnText);
document.body.appendChild(button);
let removeDiv = document.querySelector(".friend");
removeDiv.remove();



button.addEventListener("click", () => {
    let friends = ["John", "Lauren", "Taylor", "Michael", "Thomas"];
    for (let j = 0; j < friends.length; j++) {
        let friendDiv = document.createElement("div");
        let h3 = document.createElement("h3");
        friendDiv.className = "friend";
       let name1 = document.createTextNode(friends[j]);
       friendDiv.appendChild(h3).appendChild(name1); 
       document.body.appendChild(friendDiv)  ;

        for (let i = 100; i >= 1; i--) {
            if (i > 2) {
                let  p = document.createElement("p");
                 p.innerHTML =  i + " lines of code in the file, " + i + " lines of code; " +
                    friends[j] + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file.";
                  friendDiv.appendChild(p);
                    
            } else if (i === 2) {
                let p = document.createElement("p");
                 p.innerHTML = i + " lines of code in the file, " + i + " lines of code; " +
                    friends[j] + " strikes one out, clears it all out , " + (i - 1) + " line of code in the file.";
                  friendDiv.appendChild(p);
                         
            } else {
                let p = document.createElement("p");
                p.innerHTML = 1 + " line of code in the file, " + 1 + " line of code; " +
                    friends[j] + " strikes one out, clears it all out, no more lines of code in the file.";
                    friendDiv.appendChild(p);
                
                        
            }
        }
    }
});









