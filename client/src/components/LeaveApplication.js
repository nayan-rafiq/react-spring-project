function LeaveApplication() {
  return (
    <div>
      <h2>Apply for leave</h2>
      <form className="row g-3 mt-4">
        <div className="col-md-6">
          <label htmlFor="fromDateInput" className="form-label">From date</label>
          <input type="date" className="form-control" id="fromDateInput" />
        </div>
        <div className="col-md-6">
          <label htmlFor="toDateInput" className="form-label">To date</label>
          <input type="date" className="form-control" id="toDateInput" />
        </div>
        <div className="col-12">
          <label htmlFor="purposeInput" className="form-label">Purpose</label>
          <textarea className="form-control" id="purposeInput" placeholder="Write the purpose here" />
        </div>
        
        <div className="col-md-12">
          <label htmlFor="attachmentInput" className="form-label">Attachment (Optional)</label>
          <input type="file" className="form-control" id="attachmentInput" />
        </div>
        
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LeaveApplication