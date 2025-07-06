import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Projects from "./Projects/Projects";
import ScrollReset from "./Components/ScrollReset/ScrollReset"
function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollReset/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="/Projetos" element={<Projects/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
