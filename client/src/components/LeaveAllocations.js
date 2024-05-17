function LeaveAllocations() {
  return (
    <div>
      <h2>Leave Allocations for Md. Monsur Ali</h2>
      <table className='table table-striped mt-4'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Year</th>
            <th scope='col'>Leave type</th>
            <th scope='col'>Number of leaves</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>2024</td>
            <td>CASUAL</td>
            <td>20</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>2024</td>
            <td>SICK</td>
            <td>20</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>2024</td>
            <td>ANNUAL</td>
            <td>15</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default LeaveAllocations