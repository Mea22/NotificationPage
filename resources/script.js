let num = document.querySelector(".num");
let notifCont = document.querySelectorAll(".cont");
let dots = document.querySelectorAll(".dot");
let allRead = document.querySelector(".mark-as-read");
let notiNum = 7


notifCont.forEach(cont =>{
    cont.addEventListener("click", function(){
            if(cont.classList == "cont one"){
                cont.classList.remove("one");
                notiNum--;
                num.textContent = notiNum
                removeDot(this)
            }

            
    })
})
function removeDot(parent){
    let child = parent.querySelector(".dot");
    child.style.display ="none"

}

allRead.addEventListener("click", function(){
    
    notifCont.forEach(remove =>{
        remove.classList.remove("one");
    })

    dots.forEach(dot =>{
        dot.classList.remove("dot")
    })
    num.textContent = 0;
})




           