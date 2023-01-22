let username = document.getElementById("username");
let password = document.getElementById("password");
let btn =document.getElementById("login-btn")
btn.addEventListener("click",()=>{
    let obj ={
        username:username.value,
        password:password.value
    }
    console.log(obj);
    if(obj.username==="admin" && obj.password==="admin"){
      alert("Successfully Loged In");
        location.replace("home.html")
    }else{
       alert("Wrong Credidentials");
    }
})
