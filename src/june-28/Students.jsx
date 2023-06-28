import { useRef, useState } from "react";

function StudentDetails() {
  const formRef = useRef();
  const [studentList, setStudentList] = useState([]);

  return (
    <div>
      <form ref={formRef}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <br />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" />
        <br />
        <label htmlFor="year">Year</label>
        <input type="text" name="year" />
        <br />
      </form>

      <button
        onClick={() => {
          let students = [...studentList];
          students.push({
            name: formRef.current.name.value,
            age: formRef.current.age.value,
            year: formRef.current.year.value,
          });
          setStudentList(students);
        }}
      >
        Add Student
      </button>
      <br />
      {studentList.map((student, i) => {
        return (
          <div key={i}>
            <p>{student.name}</p>
            <p>{student.age}</p>
            <p>{student.year}</p>
            <button
              onClick={() => {
                let students = [...studentList];
                students.splice(i, 1);
                setStudentList(students);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default function Students() {
  return (
    <div>
      <StudentDetails></StudentDetails>
    </div>
  );
}
