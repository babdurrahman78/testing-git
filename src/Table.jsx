export const Table = ({ students, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>GPA</th>
          <th>Birth Date</th>
          <th>Birth Place</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.gpa}</td>
            <td>{student.birthDate}</td>
            <td>{student.birthPlace}</td>
            <td>
              <button
                className="button delete-button"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
