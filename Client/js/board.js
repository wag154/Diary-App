const { create } = require("../../Server/Models/User");

const display = document.querySelector("#DiaryBoard");

const displayAll = async(data)=>{
  let name;
  let title;
  let content;
  try {
    data.forEach(e =>{
    name = e.user_id;
    title = e.title;
    content = e.content;  
    
    const createDiv = document.createElement("div");
    const createH1 = document.createElement("h1");
    const createH2 = document.createElement("h2")
    const createP1 = document.createElement("p1");

    createH1.textContent = name;
    createH2.textContent = title;
    createP1.textContent = content; 

    createDiv.appendChild(createH1);
    createDiv.appendChild(createH2);
    createDiv.appendChild(createP1);
    })

  }
  catch {console.log("Error, couldn't use information to Display all")}
}

const getAllU = async()=>{

}

const getAllD = async()=>{
  try{
    //not currently added, route designed to get all diaries and the user name associated with it
    const resp = fetch ("diary/displayAll");
    const data = await resp.json();
    displayAll(data)
  }
  catch{(console.log("Couldn't get information from database"))}
}

