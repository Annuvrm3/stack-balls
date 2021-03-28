let addCircle2 = document.querySelector("#addCircle2");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let btnCircle = document.querySelector("#btnCircle");




btnCircle.addEventListener("click",function(){
    if(addCircle2.innerHTML === ""){
        makeCircle()
    }else{
        addCircle2.innerHTML = ""
        makeCircle()
    }
    
    
})

function makeCircle(){
    let numOfCircle = Number(input1.value);
    let numOfRows = Number(input2.value);
    for(i=0; i<numOfRows; i++){
        for(j=0;j<numOfCircle;j++){
            addCircle2.innerHTML += `<div class="circle">
            </div>`
        }
        addCircle2.innerHTML += `<br>`
    }
}

