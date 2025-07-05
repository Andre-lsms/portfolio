import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Projects from "./projects/Projects";
function App() {
  return (
    <>
      <BrowserRouter>
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
