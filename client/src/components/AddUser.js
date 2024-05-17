function AddUser() {
  return (
    <div>
      <h2>Add User</h2>
      <div className='col-md-6'>
      <form className="row g-3 mt-4">
        <div className="col-12">
          <label htmlFor="nameInput" className="form-label">Name</label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="col-12">
          <label htmlFor="designationInput" className="form-label">Designation</label>
          <input type="text" className="form-control" id="designationInput" />
        </div>
        <div className="col-12">
          <label htmlFor="joiningDateInput" className="form-label">Joining date</label>
          <input type="date" className="form-control" id="joiningDateInput" />
        </div>
        <div className="col-12">
          <label htmlFor="leaveSupervisor" className="form-label">Leave Supervisor</label>
          <input type='text' className="form-control" id="leaveSupervisor" />
        </div>
        
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default AddUser