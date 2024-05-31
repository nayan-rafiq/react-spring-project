import { useState, useEffect } from "react"
import ApplicationsTable from './ApplicationsTable'
import { getData } from "../apiService"

function Home() {
  const [applications, setApplications] = useState([])
  
  useEffect(() => {
    getData("/leave-applications/mine", function(data) {
      setApplications(data)
    })
  }, [])

  return (
    <div className='Home'>
      <h2>Your leave applications</h2>
      <ApplicationsTable applications={applications} />
    </div>
  )
}

export default Home
