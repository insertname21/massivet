import React,{ useEffect, useRef,useState } from 'react'
import { Card,Table,Button,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Events() {
  const [name, setName] = useState(0);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('The name you entered was:')
  }

  const [URL, setURL] = useState(0);

    return (
       <div class="article">
         <Row>
           <div class="col-md-5">
       <Table striped bordered hover>

  <tbody >
    <tr onMouseEnter={() => setURL("https://www.google.com/maps/embed/v1/place?q=place_id:Eig5ODAgTiBQaG9lbml4IFJkLCBNZWRmb3JkLCBPUiA5NzUwNCwgVVNBIlESTwo0CjIJ8wMHMYBwz1QRDGNGywy9XrsaHgsQ7sHuoQEaFAoSCddAFDuCes9UEU9IHWh-Q08iDBDUByoUChIJUWWq65Bwz1QRXUZjaSr2mbI980 N Phoenix Rd, Medford, OR 97504, USA")}>
      <td>1</td>
      <td>    {name}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr onMouseEnter={() => setURL("https://www.google.com/maps/embed/v1/view?key=AIzaSyAWoHHG2dKowKhkB7XO_CyuVlc1ZfHux58&center=-33.8569,151.2152&zoom=18&maptype=satellite")}>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr onMouseEnter={() => setURL("https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAQAsOwl3z1QR6d58YlUXVKk&key=AIzaSyAWoHHG2dKowKhkB7XO_CyuVlc1ZfHux58")}>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>

<div class="col-md-4">
      <p>You clicked {URL}</p>
      <iframe width="150%" height="450"  loading="lazy" allowfullscreen src={URL}></iframe>
    </div>
    </Row>
</div>
    )
}

export default Events
