let windows = document.getElementsByClassName('windows')[0]
let startmenu = document.getElementsByClassName('startmenu')[0]

windows.addEventListener("click",()=>{
    if(startmenu.style.bottom == '30px'){
        startmenu.style.bottom = '-400px';
    }
    else{
        startmenu.style.bottom = '30px';
    }
    
})

