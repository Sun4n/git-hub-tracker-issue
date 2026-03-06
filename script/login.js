const userName = document.getElementById("userName")
const password= document.getElementById("password")



document.getElementById("signIn").addEventListener("click", ()=>{
    if (userName.value=="admin" && password.value == "admin1234") {
        window.location.assign("home.html")
        
    }
    else{
        alert("wrong password")
    }
    
    
})