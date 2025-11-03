/**
 * create a controlled form component consisting field for student object
 * like name, age, gpa, birth date and birth place
 */
import React, { useEffect, useState } from "react";

export const Form = ({ onSubmit }) => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    gpa: "",
    birthDate: "",
    birthPlace: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(student);
    console.log("Submitted student:", student);
    resetForm();
  };

  const resetForm = () => {
    setStudent({
      name: "",
      age: "",
      gpa: "",
      birthDate: "",
      birthPlace: "",
    });
  };

  // apply css classnames to the form elements
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label className="label">Name:</label>
        <input
          className="input"
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">Age:</label>
        <input
          className="input"
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">GPA:</label>
        <input
          className="input"
          type="number"
          step="0.01"
          name="gpa"
          value={student.gpa}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">Birth Date:</label>
        <input
          className="input"
          type="date"
          name="birthDate"
          value={student.birthDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">Birth Place:</label>
        <input
          className="input"
          type="text"
          name="birthPlace"
          value={student.birthPlace}
          onChange={handleChange}
        />
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};
