var myInput = document.getElementById("myInput");
var addBtn = document.getElementById("addBtn");
var myTable = document.getElementById('myTable');
var taskList = [];

function addTask() {
  taskList.push(myInput.value);
  console.log(taskList);
  clearInput();
  showData(taskList);
}

function clearInput() {
  myInput.value = "";
}

function showData(arr) {
  var container = "";
  for (var i = 0; i < arr.length; i++) {
    container += `
        <tr class="d-flex justify-content-between bg-white align-items-center rounded-2 py-2 mt-2">
            <td class="ms-2">${arr[i]}</td>
            <td class="me-2"><button onclick="deleteTask(${i})" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i> Delete</button></td>
         </tr>        
        `;
  }
  myTable.innerHTML = container;
}

function deleteTask(index){
    taskList.splice(index,1);
    showData(taskList);
}