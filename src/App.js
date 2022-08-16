import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import InfiniteQueries from "./Pages/InfiniteQueries";
import TaskBoard from "./Pages/TaskBoard";

function App() {
  
  


  return (
    <>
    <Navbar/>
   <Routes>
        <Route path="/board" element={<TaskBoard/>}/>
        <Route path="/" element={<TaskBoard/>}/>
        <Route path="/infinite" element={<InfiniteQueries/>}/>
   </Routes>
   </>
  );
}

export default App;
