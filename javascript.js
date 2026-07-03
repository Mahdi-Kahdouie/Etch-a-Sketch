const container = document.querySelector("#container");

container.innerHTML = "";
for (let i = 0; i < 256; i++) {
    
    const square =document.createElement("div")
    square.className="squareShape";
    square.addEventListener('mouseenter',(event) => {
            square.style.backgroundColor="red";
        });
    container.appendChild(square);
    
}