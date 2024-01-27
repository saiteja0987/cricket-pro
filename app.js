let names = document.querySelectorAll("#name");
names.forEach((item)=>{
   let popup= item.nextElementSibling;
   item.addEventListener("click",()=>{
       if(popup.style.display==="block"){
           popup.style.display="none";
       }else{
       popup.style.display="block";
       }
})
})

 