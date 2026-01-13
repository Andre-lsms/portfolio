import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Projects from "./Pages/Projects";
import ProjectDetail from "./Pages/projectDetail";
import Contato from "./Pages/Contato";
// import Sobre from "./Pages/Sobre";
import NotFoundPage from "./Pages/notFound";
import ScrollReset from "./Pages/scrollReset";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollReset />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="projetos/:slug" element={<ProjectDetail />} />
            <Route path="/contato" element={<Contato />} />
            {/* <Route path="/sobre" element={<Sobre/>} /> */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
