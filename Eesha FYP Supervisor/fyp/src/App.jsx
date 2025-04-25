import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProjectProposalCard from './view/home/ProjectProposalCard'
import SearchFilterComponent from './view/home/SearchFilterComponent'
import StudentSupervisorMatchingProgress from './view/home/Student-SupervisorMatchingProgress'
import SupervisorAvailabilityCalendar from './view/home/SupervisorAvailabilityCalendar'
import SupervisorCardComponent from './view/home/SupervisorCardComponent'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProjectProposalCard/>
     <SearchFilterComponent/>
     <StudentSupervisorMatchingProgress/>
     <SupervisorAvailabilityCalendar/>
     <SupervisorCardComponent/>
     
    </>
  )
}

export default App
