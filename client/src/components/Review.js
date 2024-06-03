import { useState, useEffect } from "react"
import { getData } from "../apiService"
import ApplicationsTable from './ApplicationsTable'

function Reviews() {
  const [applications, setApplications] = useState([])
  
  useEffect(() => {
    getData("/leave-applications/review", function(data) {
      setApplications(data)
    })
  }, [])

  return (
    <div>
      <h2>Review leave applications</h2>
      <ApplicationsTable showReviewOptions={true} applications={applications}></ApplicationsTable>
    </div>
  )
}

export default Reviews