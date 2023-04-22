let count = 0;
let addedItems = 
    [{id:1,name:"john",age:"18",profession:"developer"},
     {id:2, name:"jack",age:"20", profession:"developer"},
     {id:3, name:"karen", age:"19",profession:"admin"}];
        let user = document.getElementById("professionn");
        user.innerHTML = "";
        addedItems.forEach(element=>{
        let p = document.createElement("p");
        p.innerText = addedItems.indexOf(element)+1;
        let userName = document.createElement("b");
        userName.innerText = element.name;
        let userProfession = document.createElement("b");
        userProfession.innerText = element.profession;
        let userAge = document.createElement("p");
        userAge.innerText = element.age;
        let userDiv = document.createElement("div");
        userDiv.append(p,userName,userProfession,userAge);
        userDiv.className = "userContainer";
        user.append(userDiv);
        });
function addUser() {
    let divForm = document.querySelector(".div-form");
    let firstItem = divForm.children[0].children[2];
    let secondItem = divForm.children[1].children[2];
    let thirdItem = divForm.children[2].children[2];
    let name = firstItem.value.trim();
    let profession = secondItem.value.trim();
    let age = thirdItem.value.trim();
    if (name != "" && profession != "" && age != "") {
        addedItems.push({name:name,profession:profession,age:age,id:++count});
    }
        let user = document.getElementById("professionn");
        user.innerHTML = "";

        addedItems.forEach(element=>{
        let p = document.createElement("p");
        p.innerText = addedItems.indexOf(element)+1;

        let userName = document.createElement("b");
        userName.innerText = element.name;

        let userProfession = document.createElement("b");
        userProfession.innerText = element.profession;

        let userAge = document.createElement("p");
        userAge.innerText = element.age;

        let userDiv = document.createElement("div");
        userDiv.append(p,userName,userProfession,userAge);
        userDiv.className = "userContainer";
        user.append(userDiv);
        });
    firstItem.value = "";
    secondItem.value ="";
    thirdItem.value = "";
}

function filter(){
        console.log("entered");
        let user = document.getElementById("professionn");
        user.innerHTML = "";
        let filteredValue = document.getElementById("select").value;
        let filteredArray = addedItems.filter(user => user.profession == filteredValue);
        if(filteredValue==""){
            alert("select a profession");
        }
        else{
            filteredArray.forEach(element=>{
                let p = document.createElement("p");
                p.innerText = addedItems.indexOf(element)+1;
                let userName = document.createElement("b");
                userName.innerText = element.name;
                let userProfession = document.createElement("b");
                userProfession.innerText = element.profession;
                let userAge = document.createElement("p");
                userAge.innerText = element.age;
                let userDiv = document.createElement("div");
                userDiv.append(p,userName,userProfession,userAge);
                userDiv.className = "userContainer";
                user.append(userDiv);
                });
        }
}