import "./App.css";
import LandingPage from "./view/LandingPage";
import Register from "./view/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./view/Login";
import Dashboard from "./view/Dashboard";
import ListDataTable from "./view/ListDataTable";
import JobDetail from "./view/JodDetail";
import { GlobalProvider } from "./context/GlobalContext";
function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/job-vacancy/:idJob" element={<JobDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/list-job-vacancy"
            element={<ListDataTable />}
          />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
