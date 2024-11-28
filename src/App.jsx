import { useState } from 'react'
import Homepage from '../src/homepage/homepage'
import Loginpage from './login/loginpage'
import StudentDashboard from './StudentDashbord/StudentDashboard'
import TeacherDashboard from './TeacherDashboard/TeacherDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentDashboard />
      <TeacherDashboard />
    </>
  )
}

export default App
