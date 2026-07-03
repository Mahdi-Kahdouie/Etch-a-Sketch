
const container = document.querySelector("#container");
const body = document.querySelector("#body");


for (let i = 0; i < 256; i++) {
    
    const square =document.createElement("div")
    square.className="squareShape";
    square.addEventListener('mouseenter',(event) => {
            square.style.backgroundColor="red";
        });
    container.appendChild(square);
    
}

const resize = document.querySelector("#resize");
const btnNum =document.createElement("button")
resize.appendChild(btnNum);
btnNum.textContent="Resize";
btnNum.className = "resize-btn";
btnNum.addEventListener('click',(event) => {
            let num = prompt("Please enter number of squares per side:");
            if (num>100 || num==null || num=="")
                alert("Please enter number between 1 to 100 ")
            else
            {
                container.innerHTML="";
                for (let i = 0; i < num*num; i++) {
    
                const square =document.createElement("div")
                square.className="squareShape";
                square.style.width=(100/num)+"%";
                square.style.height=(100/num)+"%";
                square.addEventListener('mouseenter',(event) => {
                        // square.style.backgroundColor="red";
                         square.style.backgroundColor="#"+(Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
                    });
                container.appendChild(square);
    
}
            }
    });


body.appendChild(container);
body.appendChild(resize);