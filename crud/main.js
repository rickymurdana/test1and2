var selectedRow = null

function onFormSubmit(event) {
	event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();    
}

function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    // formData["gender"] = document.querySelector('input[name="gender"]:checked').value;
    formData["gender"] = document.getElementById('gender').value;
    formData["address"] = document.getElementById("address").value;
    formData["qualification"] = document.getElementById("qualification").value;
    formData["myfile"] = document.getElementById("myfile").files[0];
    formData["lastName"] = document.getElementById("lastName").value;
    formData["dob"] = document.getElementById("dob").value;
    // formData["lang"] = document.querySelector('input[name="lang"]:checked').value;
    formData["lang"] = document.getElementById('lang').value;
    formData["specialization"] = document.getElementById("specialization").value;
    formData["contact"] = document.getElementById("contact").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.firstName + data.lastName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = 20;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.dob;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.gender;
    cell111 = newRow.insertCell(4);
		cell111.innerHTML = data.address;
    cell5 = newRow.insertCell(5);
		cell5.innerHTML = data.lang;
    cell6 = newRow.insertCell(6);
		cell6.innerHTML = data.qualification;
    cell7 = newRow.insertCell(7);
		cell7.innerHTML = data.specialization;
    cell8 = newRow.insertCell(8);
		cell8.innerHTML = data.contact;
    cell9 = newRow.insertCell(9);
		cell9.innerHTML = data.myfile;
    cell10 = newRow.insertCell(10);
        cell10.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
    document.getElementById("address").value = selectedRow.cells[4].innerHTML;
    document.getElementById("qualification").value = selectedRow.cells[6].innerHTML;
    document.getElementById("myfile").value = selectedRow.cells[9].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[2].innerHTML;
    document.getElementById("lang").value = selectedRow.cells[5].innerHTML;
    document.getElementById("specialization").value = selectedRow.cells[7].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[8].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = 20;
    selectedRow.cells[2].innerHTML = formData.dob;
    selectedRow.cells[3].innerHTML = formData.gender;
    selectedRow.cells[4].innerHTML = formData.address;
    selectedRow.cells[5].innerHTML = formData.lang;
    selectedRow.cells[6].innerHTML = formData.qualification;
    selectedRow.cells[7].innerHTML = formData.specialization;
    selectedRow.cells[8].innerHTML = formData.contact;
    selectedRow.cells[9].innerHTML = formData.myfile;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('table').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("firstName").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("address").value = '';
    document.getElementById("qualification").value = '';
    document.getElementById("myfile").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("dob").value = '';
    document.getElementById("lang").value = '';
    document.getElementById("specialization").value = '';
    document.getElementById("contact").value = '';
    selectedRow = null;
}

function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }