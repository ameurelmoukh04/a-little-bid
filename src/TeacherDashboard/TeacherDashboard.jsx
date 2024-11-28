import React from 'react'
import Navbar from '../navbar'
import './teacher.css'

const TeacherDashboard = () => {
    const groupes = ['DEV101','DEV102', 'DEV103']
    return(
        <div className='choice'>
            <Navbar />
            <div className='wlcome'>
                <h1>Hi, Teacher</h1>
            </div>
            <div className='form-container'>
                <form action="" className='form2'>
                 <div>
                   <label htmlFor="year">Annee :</label>
                   <select name="" id="" className='form-select'>year
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                   </select>
                 </div>
                 <div className='form-group'>
                    <label htmlFor="semestre">Semestre :</label>
                    <select name="semestre" id="semestre" className='form-select'>year
                    <option value="s1">S1</option>
                    <option value="s2">S2</option>
                    </select>
                 </div>
                 <div>
                    <label htmlFor="group">Group:</label>
                    <select name="group" id="group" className='form-select'>
                    {groupes.map((groupe, index) => (
                        <option key={index} value={groupe}>
                    {groupe}
                        </option>
                        ))}
                    </select>
                 </div>
                </form>

            </div>
            
        
        </div>
    )
}
export default TeacherDashboard