function ApplicationDetailsModal(props) {
  const modalClasses = `modal fade ${props.show ? "show" : ""}`

  return (
    <div className={modalClasses} tabIndex='-1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Application details</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={props.onClose}
            ></button>
          </div>
          <div className='modal-body'>
            {props.application && 
              <dl className='row'>
                <dt className='col-sm-3'>Applicant</dt>
                <dd className='col-sm-9'>{props.application.applicant.name}</dd>

                <dt className='col-sm-3'>Days</dt>
                <dd className='col-sm-9'>3</dd>

                <dt className='col-sm-3'>From date</dt>
                <dd className='col-sm-9'>{props.application.fromDate}</dd>

                <dt className='col-sm-3'>To date</dt>
                <dd className='col-sm-9'>{props.application.toDate}</dd>

                <dt className='col-sm-3'>Status</dt>
                <dd className='col-sm-9'>{props.application.status}</dd>
              </dl>
            }
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
              onClick={props.onClose}
            >
              Close
            </button>
            {props.showReviewOptions && <button type='button' className='btn btn-danger'>
              Reject
            </button>}
            {props.showReviewOptions && <button type='button' className='btn btn-primary'>
              Approve
            </button>}  
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationDetailsModal
