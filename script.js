const table = document.getElementById('editable-table');
const tbody = table.querySelector('tbody');
const addButton = document.getElementById('add-row-btn');

addButton.addEventListener('click', () => {
  const newRow = document.createElement('tr');
  const rollNo = document.createElement('td');
  const name = document.createElement('td');
  const email = document.createElement('td');
  const phone = document.createElement('td');
  const process = document.createElement('td');
  const id = tbody.children.length + 1;
  
  newRow.textContent = id;
  name.innerHTML = `<input type="text" name="name[]">`;
  email.innerHTML = `<input type="text" name="email[]">`;
  phone.innerHTML = `<input type="text" name="phone[]">`;
  process.innerHTML = `<button class="delete-btn">Delete</button>`;
  
  newRow.appendChild(idCell);
  newRow.appendChild(nameCell);
  newRow.appendChild(emailCell);
  newRow.appendChild(phoneCell);
  newRow.appendChild(actionCell);
  
  tbody.appendChild(newRow);
});
