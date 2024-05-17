import ApplicationDetailsModal from './ApplicationDetailsModal'
import { useState } from 'react'


function ApplicationsTable(props) {
  const [showDetails, setShowDetails] = useState(false)
  const showModal = () => {
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
          <tr>
            <th scope='row'>1</th>
            <td>Md Monsur Ali</td>
            <td>10/10/2024</td>
            <td>12/10/2024</td>
            <td>3</td>
            <td>2/10/2024</td>
            <td>Pending</td>
            <td>
              <button type='button' className='btn btn-secondary btn-sm' onClick={showModal}>Details</button></td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Biplob Biswas</td>
            <td>10/10/2024</td>
            <td>12/10/2024</td>
            <td>3</td>
            <td>2/10/2024</td>
            <td>Pending</td>
            <td><button type='button' className='btn btn-secondary btn-sm'>Details</button></td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Sabrina Sultana</td>
            <td>10/10/2024</td>
            <td>12/10/2024</td>
            <td>3</td>
            <td>2/10/2024</td>
            <td>Pending</td>
            <td><button type='button' className='btn btn-secondary btn-sm'>Details</button></td>
          </tr>
        </tbody>
      </table>
      <ApplicationDetailsModal show={showDetails} onClose={hideModal} showReviewOptions={props.showReviewOptions}></ApplicationDetailsModal>
    </div>
  )
}

export default ApplicationsTable
