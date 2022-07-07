import './App.css';
import { useState } from 'react';
import { studentList } from "./data"
import Student from './Student';

function App() {
  return (
    <>
    {studentList.map((user, idx) =>
      <Student key={idx} student={user} />
    )}
    </>


  );
}

export default App;
