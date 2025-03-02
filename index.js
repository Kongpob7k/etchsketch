const container = document.querySelector(".container");

for(let i=0;i<16;i++){
    const content = document.createElement("div");
    content.classList.add("content");

    for(let j=0;j<16;j++){
        const innercontent=document.createElement("div");
        innercontent.classList.add("inner-content");
        content.appendChild(innercontent)
    }
    container.appendChild(content);
}

const col=document.querySelectorAll(".inner-content");

for(let i=0;i<col.length;i++){
    col[i].addEventListener("mouseover",()=>{
        let ran1=Math.floor(Math.random()*255);
        let ran2=Math.floor(Math.random()*255);
        let ran3=Math.floor(Math.random()*255);
        col[i].style.backgroundColor="rgba("+ran1+","+ ran2+","+ ran3+", 1)";
    })
}

const btn=document.querySelector("button");

btn.addEventListener("click",()=>{
    const child=document.querySelectorAll(".content");
    let sz=child.length;
    for(let i=0;i<sz;i++){
        container.removeChild(child[i]);
    }
    let newgrid=prompt("enter your grid size:")
    for(let i=0;i<newgrid;i++){
        const content = document.createElement("div");
        content.classList.add("content");
    
        for(let j=0;j<newgrid;j++){
            const innercontent=document.createElement("div");
            innercontent.classList.add("inner-content");
            content.appendChild(innercontent)
        }
        container.appendChild(content);
    }
    const col=document.querySelectorAll(".inner-content");

    for(let i=0;i<col.length;i++){
        col[i].addEventListener("mouseover",()=>{
            let ran1=Math.floor(Math.random()*255);
            let ran2=Math.floor(Math.random()*255);
            let ran3=Math.floor(Math.random()*255);
            col[i].style.backgroundColor="rgba("+ran1+","+ ran2+","+ ran3+", 1)";
        })
    }
    
})
