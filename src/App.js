import './App.css';
import { useState } from 'react';
import { studentList } from "./data"
import StudentList from './Student';

function App() {
  const [users, setUsers] = useState(studentList)
  return (
    <div >
      <StudentList students={users} />
    </div>
  );
}

export default App;
