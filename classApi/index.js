const nameInput = document.getElementById('exampleInputName1');
const surnameInput = document.getElementById('exampleInputSurname1');
const ageInput = document.getElementById('exampleInputAge1');
const StudentsIDInput = document.getElementById('exampleInputStudentID1');
const submit = document.getElementById('myform');



submit.addEventListener('click',function(){
    fetch("https://655c30a1ab37729791aa03c7.mockapi.io/sdu/students",{
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    myname:nameInput.value,
                    surname:surnameInput.value,
                    studentsID:StudentsIDInput.value,
                    age:ageInput.value,
                   }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(
                        data);
                  });
        })
