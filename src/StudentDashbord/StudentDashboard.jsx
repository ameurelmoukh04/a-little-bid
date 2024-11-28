import React from 'react'
import Navbar from '../navbar'
import './style.css'

const StudentDashboard = () => {
  const modules = ['algorithmes','web Statique', 'POO','PIE','English','PHP','Javascript','Base Donnee']
  return (
    <div>
      <Navbar />
      <div>
        <h1>Hi, Wassim</h1>
      </div>
      <div className='div1'>
        <form action="" className='form'>
          <div>
            <label htmlFor="year">Annee :</label>
            <select name="" id="">year
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            </select>
          </div>

          <div>
            <label htmlFor="semestre">Semestre :</label>
            <select name="semestre" id="semestre">year
            <option value="s1">S1</option>
            <option value="s2">S2</option>
            </select>
          </div>
          <div>
            <label htmlFor="Module">Module :</label>
            <select name="Module" id="Module">year
            {modules.map((module, index) => (
             <option key={index} value={module}>
           {module}
           </option>
            ))}
            </select>
          </div>
          <div>
            <input className='button1' type="submit" value="valider" />
          </div>
        </form>
      </div>

    </div>
  )
}

export default StudentDashboard