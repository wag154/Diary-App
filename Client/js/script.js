const { json } = require("body-parser");

let login = false;
const form = document.querySelector("SubmitForm");

const CheckReturn = (data) =>{
  
  if (login == false){

    

  }

  else if (login == true){
    if (data.authenticated === true){
      localStorage.setItem("Token", data.token)
    }  
  }
  else {
    alert("User Information Incorrect!")
  }
}

const SendMethod = async(username, password,MethodString,ConType) =>{
  options = {
    method: MethodString,
    header:{
      "Content-Type" : JSON.stringify({ConType}) 
    },
    body: JSON.stringify({
      Username: username,
      Password: password
    })
  }
  return options;
}

const fetchFunc = async(options,choice)=>{
    try {
      resp = await fetch(`http://localhost:3000/users/${choice}`,options)
      data = resp.json()
      CheckReturn(data)
    }
    catch {(console.log("Cannot POST"))}
  }

  
const loginSwitch = () =>{

  if (login === true){

    login = false;
    document.querySelector("#header").textContent = "Sign Up";
    document.querySelector("#switchBtn").textContent = "Login";
  
  }
  else {
    login = true;
    document.querySelector("#header").textContent = "Login";
    document.querySelector("#switchBtn").textContent = "Sigh Up";
  }
}


const getUser = async(e) =>{
    let option;
    e.preventDefault();
    if (login = true){
      
      option = SendMethod(e.target.username.value,e.target.password.value, "POST", "Login");
    }
    else if (login = false){

      option = SendMethod(e.target.username.value, e.target.password.value,"GET","Sign Up")

    }
    else {
      option = {
        method: "GET",
        "Error" : "Unexpected error, neither post or get."
      }
      console.log("unexpected error")
    }
    fetchFunc(option)
    e.target.username.value = "";
    e.target.password.value = "";
}
form.addEventListener("submit",getUser)