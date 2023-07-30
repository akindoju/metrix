import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Conversations } from "./pages/Conversations/Conversations";
import { useSelector } from "react-redux";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const isSidebarOpen = useSelector(
    (state: { general: { isSidebarOpen: boolean } }) =>
      state.general.isSidebarOpen
  );

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
