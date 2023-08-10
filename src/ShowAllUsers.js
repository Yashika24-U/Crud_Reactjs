 import {useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import {Button, Container,Table} from "reactstrap"

export default function ShowAllUsers()
{
    const[data,setData] = useState([])
    const[isDelete,setIsDelete] = useState(false)
    const nav = useNavigate()
    
    // const getData = ()=>{fetch('https://64befda55ee688b6250d1598.mockapi.io/movies').then((data)=>data.json())
    // .then((res)=>setData(res))};

    useEffect(() =>{
      fetch('https://64befda55ee688b6250d1598.mockapi.io/movies').then((data)=>data.json())
    .then((res)=>setData(res));
    },[isDelete]);

    const handleDelete = (id)=>{
    fetch('https://64befda55ee688b6250d1598.mockapi.io/movies/' + id,{
    method : "DELETE"
    }).then(data=>data.json()) 
    .then((res)=>setIsDelete(!isDelete));
    };

return(
<Container>
    <Button color = "primary" onClick = {()=>{nav('/create')}}>Create User</Button>
    <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>MobileNumber</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {data.map((value,index)=>{
        return (<tr key = {index}>
          <td>{index+1}</td>
          <td>{value.name}</td> 
          <td>{value.email}</td>
          <td>{value.mobileNumber}</td> 
          <td><Button color = 'warning' onClick = {()=>nav("/edit/" + value.id)}>Edit</Button> 
          <Button color = 'danger' onClick = {()=>{handleDelete(value.id)}}>Delete</Button>
          </td>
        </tr>
     ) })
    }

     </tbody>
</Table>
</Container>
    );
}