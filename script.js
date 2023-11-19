function daxilet() {
    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let age = document.querySelector("#age").value;
    
    let table = document.querySelector("#Table");
    let row = table.insertRow(-1);
    
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    
    cell1.innerHTML = name;
    cell2.innerHTML = surname;
    cell3.innerHTML = age;
  }