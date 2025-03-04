document.querySelector(".sidebun").addEventListener("click",function(){
    const x=document.querySelector(".col-b-12");
    const y=getComputedStyle(x).display;
    
    if(y=="none"){
        x.style.display="inline";
    }
    else{
        x.style.display="none";
    }   
});