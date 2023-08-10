import React ,{useState , useEffect} from "react"
import { Button,Container, Label , FormGroup,Input } from "reactstrap";
import { useNavigate,useParams } from "react-router-dom"; 
export default function ActionUser()
{
  const nav = useNavigate()
  const {id} = useParams() 
    console.log(id)
    
    const[formData,setformData] = useState({
        name:"",
        email:"",
        mobileNumber:""
    });
    useEffect(() =>{
      if(id)
      fetch('https://64befda55ee688b6250d1598.mockapi.io/movies/'+ id).then((data)=>data.json())
    .then((res)=>setformData(res));
    },[id]);


  const handleChange = (e)=>{
        console.log(e.target.name)
        setformData({...formData,[e.target.name] : e.target.value})
    };

    const handleSubmit = ()=>{
      if(id)
      {
        
        fetch('https://64befda55ee688b6250d1598.mockapi.io/movies/'+id,{
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
        })
        .then((data)=>data.json())
        .then((res)=>nav('/'));

      }else{
        fetch('https://64befda55ee688b6250d1598.mockapi.io/movies',{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
        })
        .then((data)=>data.json())
        .then((res)=>nav('/'));}
    }
    return(
        <Container className="mt-4">
          <h1 className = "text-center">{id ? "Update User" : "Create User"}</h1>
          <FormGroup>
            <Label>Name</Label>
            <Input onChange={handleChange}  placeholder = "Enter Name" name = "name" value = {formData.name}></Input>
          </FormGroup>
          <FormGroup>
            <Label>MobileNumber</Label>
            <Input  onChange={handleChange} placeholder = "Enter Mobile Number" name = "mobileNumber" value = {formData.mobileNumber} ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input  onChange={handleChange} placeholder = "Enter Email" name="email" value = {formData.email}></Input>
          </FormGroup>
          <Button color = "primary" block onClick= {handleSubmit}>Submit</Button>
          <Button color  = "danger" className="mt-4" onClick= {()=>(nav("/"))} block>Cancel</Button>
        </Container>
       
    );
}