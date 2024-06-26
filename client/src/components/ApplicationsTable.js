import ApplicationDetailsModal from './ApplicationDetailsModal'
import { useState } from 'react'
import moment from "moment"


function ApplicationsTable(props) {
  const [showDetails, setShowDetails] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)
  
  const showModal = (application) => {
    setSelectedRow(application)
    setShowDetails(true)
  }

  const hideModal = () => {
    setShowDetails(false)
  }

  return (
    <div>
      <table className='table table-striped mt-4'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Applicant</th>
            <th scope='col'>From</th>
            <th scope='col'>To</th>
            <th scope='col'>Days</th>
            <th scope='col'>Applied on</th>
            <th scope='col'>Status</th>
            <th scope='col'>Details</th>
          </tr>
        </thead>
        <tbody>
        {props.applications.map((application, i) => {
          return(
          <tr>
            <th scope='row'>{i+1}</th>
            <td>{application.applicant.name}</td>
            <td>{moment(application.fromDate).format("MMMM Do YYYY")}</td>
            <td>{application.toDate}</td>
            <td>3</td>
            <td>{application.createdAt}</td>
            <td>{application.status}</td>
            <td>
              <button type='button' className='btn btn-secondary btn-sm' onClick={() => showModal(application)}>Details</button></td>
          </tr>
          )
        })}
        </tbody>
      </table>
      <ApplicationDetailsModal 
        show={showDetails} 
        onClose={hideModal} 
        showReviewOptions={props.showReviewOptions}
        application={selectedRow}>
      </ApplicationDetailsModal>
    </div>
  )
}

export default ApplicationsTable
