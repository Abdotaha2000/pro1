let addProject = document.getElementById("addPro");
let deleteIcon = document.querySelector(".icon");
let addBtn = document.getElementById("addBtn");
let tableBody = document.getElementById("tableBody");



addProject.addEventListener("click" , function(){
    document.querySelector(".addForm").style.display="block";
    document.getElementById("tittle").value="";
    document.getElementById("discription").value="";
    document.getElementById("myDate").value="";
})
deleteIcon.addEventListener("click", function(){
    document.querySelector(".addForm").style.display="none"
})
addBtn.addEventListener("click" , function(){
    let row = tableBody.insertRow(-1); // We are adding at the end
    let index = 1;
    
    // Create table cells
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);

    // Add data to c1 and c2
    c1.innerText = index;
    c2.innerText = `${document.getElementById("tittle").value}`
    c3.innerText = `${document.getElementById("discription").value}`
    c4.innerText = `${document.getElementById("myDate").value}`;
    
})
