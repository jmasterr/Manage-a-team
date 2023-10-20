const baseUrl = "http://localhost:3000/";
const createEmployeeButton = document.getElementById("create-btn");

createEmployeeButton.addEventListener('click', async () => {
  // Retrieve the input values inside the event listener
  const imageInput = document.getElementById("image").value;
  const nameInput = document.getElementById("name").value;
  const statusInput = document.getElementById("status").value;
  const tenureInput = document.getElementById("tenure").value;
  const positionInput = document.getElementById("position").value;
  const salaryInput = document.getElementById('salary').value

  try {
    // Send a POST request to the /employee endpoint with the employee data.
    const response = await axios.post(`${baseUrl}employee`, {
      image: imageInput,
      nameOfEmployee: nameInput,
      status: statusInput,
      employerTenure: tenureInput,
      position: positionInput,
      salary: salaryInput
    });

    // Handle the response (e.g., show a success message).
    console.log('Employee created:', response.data);
  } catch (error) {
    // Handle any errors that occur during the POST request.
    console.error('Error creating Employee:', error);
  }
});
