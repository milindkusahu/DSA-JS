// Create an array with 5 students names, after that create a function which takes 2 parameters (allStudents & studentName) iterate over all students and find that specific user "studentName".

const allStudents = ["Milind", "Mukul", "Shashwat", "Ashish", "Vikas"];

function findSpecificStudent(allStudents, studentName) {
  let n = allStudents.length;
  for (let i = 0; i < n; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
}

findSpecificStudent(allStudents, "Milind");
