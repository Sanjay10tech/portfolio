console.log("script running")
document.querySelector(".close").style.display='none';
document.querySelector(".hamburger").addEventListener("click",()=>{

    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        // console.log("s");
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.close').style.display='none';
    }
    else{
        setTimeout(()=>{
            document.querySelector('.close').style.display='inline';
        },250)
        document.querySelector('.ham').style.display='none';
    }
})