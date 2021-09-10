import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
let id = 0;
function createData(option, type) {
  id += 1;
  return { id, option, type };
}

let rows = [
  createData('Username', 'Rahul'),
  createData('Email', 'rahullabroo0@gmail.com'),
  createData('Login', '2021-09-09 10:30:30 pm'),
  createData('Logout', '2021-09-09 11:30:30 pm'),
  createData('Login1', '2021-09-09 10:30:30 pm'),
  createData('Logout1', '2021-09-09 11:30:30 pm'),
  createData('Login2', '2021-09-09 10:30:30 pm'),
  createData('Logout2', '2021-09-09 11:30:30 pm'),
  createData('Login3', '2021-09-09 10:30:30 pm'),
  createData('Logout3', '2021-09-09 11:30:30 pm'),
  createData('Total Hours', '2 hrs'),
  
];

export default class MyTable extends React.Component {


  render() {
    return(
      <>
      <h4 align="center">View Details </h4>
      <table align="center"   className="table" style={{margin:"15px", width:"90%" }}>
        
      {rows.map(row => (
        <tr key={row.id}>
          <td>{row.option}</td>
          <td>{row.type}</td>
        </tr>
      ))}
      </table>
      </>
    )
  }

}