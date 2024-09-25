document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const empid = document.getElementById('empid').value;
    const profilePic = document.getElementById('profilePic').value;

    // Add to Employee List
    const employeeList = document.getElementById('employeeList');
    const li = document.createElement('li');
    li.innerHTML = `<a href="#">${name} (${email})</a>`;
    employeeList.appendChild(li);

    // Add to Employee Details Table
    const employeeTableBody = document.getElementById('employeeTableBody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${name}</td>
        <td>${empid}</td>
        <td>${department}</td>
        <td><img src="${profilePic}" alt="Profile Picture"></td>
    `;
    employeeTableBody.appendChild(tr);

    // Clear form after submission
    document.getElementById('employeeForm').reset();
});
