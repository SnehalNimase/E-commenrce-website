// adding hamberger menu and navbar clicking on hamberger menu like to see nav bar
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

// to check navbar is showing or not
if(bar){
    //after clicking event will be add,using arrow=>function
    bar.addEventListener('click',()=>{
        // show nav after click
        nav.classList.add('active')
    })
}

if(close){
    //after clicking event will be remove,using =>function
    close.addEventListener('click',()=>{
        //remove nav after click
        nav.classList.remove('active')
    })
}