import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Pages/Layout/Layout";
import Projects from "./Pages/Projects/Projects";
import Contato from "./Pages/Contato/Contato";
import ScrollReset from "./Pages/ScrollReset";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ScrollReset /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/contato" element = {<Contato/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
