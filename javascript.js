
const container = document.querySelector("#container");


for (let i = 0; i < 256; i++) {
    
    const square =document.createElement("div")
    square.className="squareShape";
    square.addEventListener('mouseenter',(event) => {
            square.style.backgroundColor="red";
        });
    container.appendChild(square);
    
}

const page = document.querySelector("#page");
const btnNum =document.createElement("button")
page.appendChild(btnNum);
btnNum.textContent="Reset";
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
                        square.style.backgroundColor="red";
                    });
                container.appendChild(square);
    
}
            }
    });


