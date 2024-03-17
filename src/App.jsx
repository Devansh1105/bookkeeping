

import { BrowserRouter, Routes, Route} from "react-router-dom"
import Page from "./Pages/Page"
import Home from "./Pages/Home"
import Detail from "./Pages/Detail"









export default function App(){
return (
    <div>
    <BrowserRouter>
       <Routes>
   <Route index element={<Home />} />
   <Route path="/Page" element={<Page />} />
   <Route path="/Detail" element={<Detail />} />
   <Route path="*" element={<h1>NO SUCH PAGE EXISTS</h1>}/>
       
       </Routes>
    </BrowserRouter>




    </div>








)



}