document.addEventListener("DOMContentLoaded", function () {
    const base_Url = 'http://localhost:3000/'
    const employeesContent = document.getElementById('employee')

    async function getAllEmployees() {
        try {
            const response = await axios.get(`${base_Url}employee`)

            if (response.data.length > 0) {
                employeesContent.innerHTML = '';
                response.data.forEach(employeeInfo => {

                    // Create a new div for each employee
                    const employeeDiv = document.createElement('div');
                    employeeDiv.classList.add('employee');

                    // Make the div and store the employee information
                    employeeDiv.innerHTML =
                        `
                        <img src="${employeeInfo.image}">
                        <h1>${employeeInfo.nameOfEmployee}</h1>
                        <p>Status: ${employeeInfo.status}</p>
                        <p>This employee has been with us for ${employeeInfo.employerTenure}.</p>
                        <p>Position: ${employeeInfo.position}</p>
                        <p>Salary: ${employeeInfo.salary}</p>
                        `

                    employeesContent.appendChild(employeeDiv);
                });
            } else {
                employeesContent.innerHTML = "No Employee's found";
            }
        } catch (error) {
            console.error("Error:", error);
            employeesContent.innerHTML = "Error: Item was not found in our database! Please re-enter a valid item.";
        }
    }

    getAllEmployees();
});