import {BrowserRouter,Routes,Route} from "react-router-dom"
import ShowAllUsers from "./ShowAllUsers";
import ActionUser from "./ActionUser";
export default function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      
      <Route path = "/" element = {<ShowAllUsers/>}/>
      <Route path = "/create" element = {<ActionUser/>}/>
      <Route path = "/edit/:id" element = {<ActionUser/>}/>
    </Routes>
    </BrowserRouter>

      
   
  );
}

