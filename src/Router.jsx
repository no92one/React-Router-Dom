import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout.jsx";
import Page1 from "./pages/Page1.jsx";
import Page2 from "./pages/Page2.jsx";
import Page3 from "./pages/Page3.jsx";

export default function Router() {
  return <>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}