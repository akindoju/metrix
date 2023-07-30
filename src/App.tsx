import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Conversations } from "./pages/Conversations/Conversations";
import { useSelector } from "react-redux";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useEffect } from "react";

function App() {
  const isSidebarOpen = useSelector(
    (state: { general: { isSidebarOpen: boolean } }) =>
      state.general.isSidebarOpen
  );

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isSidebarOpen]);

  return (
    <div>
      <Header />
      {isSidebarOpen && <Sidebar />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/conversations" element={<Conversations />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
