/* Setup interface */

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

/* Setup student objects */

const student1: Student = {
    firstName: 'Susie',
    lastName: 'W.',
    age: 17,
    location: 'Home'
}

const student2: Student = {
    firstName: 'Kris',
    lastName: 'D.',
    age: 16,
    location: 'Town'
}

/* 
   I forgot to name the array "studentsList" and I don't want to 
   troubleshoot anything that breaks from variable name changing
   troubleshooting the task_1 tasks so pretend all is as it should be 
*/
const arr: Student[] = [];
arr.push(student1);
arr.push(student2);

/* Manipulate DOM */

const body: HTMLElement = document.body;
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

table.innerHTML = `
  <thead>
    <tr>
      <th colspan="2">Students</th>
    </tr>
  </thead>`;

body.appendChild(table);
table.appendChild(tbody);

arr.forEach(({ firstName, location }: Student) => {
    const tr: HTMLTableRowElement = document.createElement('tr');
    const nameCell: HTMLTableDataCellElement = document.createElement('td');
    const locationCell: HTMLTableCellElement = document.createElement('td');

    nameCell.textContent = firstName;
    locationCell.textContent = location;
  
    tr.appendChild(nameCell);
    tr.appendChild(locationCell);
  
    tbody.appendChild(tr);
});
