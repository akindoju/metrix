import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Conversations } from "./pages/Conversations/Conversations";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useEffect } from "react";
import { setIsSidebarMinimized, setWidth } from "./redux/slices/generalSlice";

function App() {
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector(
    (state: { general: { isSidebarOpen: boolean } }) =>
      state.general.isSidebarOpen
  );

  const width = useSelector(
    (state: { general: { width: number } }) => state.general.width
  );

  useEffect(() => {
    const handleWindowResize = () => dispatch(setWidth(window.innerWidth));
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [dispatch]);

  useEffect(() => {
    if (isSidebarOpen && width < 850) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    if (width < 850) {
      dispatch(setIsSidebarMinimized(false));
    }
  }, [isSidebarOpen, width, dispatch]);

  return (
    <div className="app">
      {(isSidebarOpen || width >= 850) && <Sidebar />}

      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
