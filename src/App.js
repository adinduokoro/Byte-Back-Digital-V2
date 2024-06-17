import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HeaderLayout, Layout } from "./components";
import { Home, Contact, About, Services } from "./pages";
import { useSelector } from "react-redux";
import { selectIsDarkModeOn } from "./redux/slice/themeSlice";

function App() {
  const isDarkModeOn = useSelector(selectIsDarkModeOn);
  const theme = isDarkModeOn ? "dark" : "light";

  return (
    <div className="App" data-theme={theme}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<HeaderLayout />}>
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
