import "./App.css";
import LandingPage from "./view/LandingPage";
import Register from "./view/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./view/Login";
import Dashboard from "./view/Dashboard";
import ListDataTable from "./view/ListDataTable";
import JobDetail from "./view/JodDetail";
import DataForm from "./view/DataForm";
import Profile from "./view/Profile";
import ChangePassword from "./view/ChangePassword";
import NotFound from "./view/NotFound";
import AuthRoute from "./customRoute/AuthRoute";
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
          <Route
            path="/dashboard"
            element={
              <AuthRoute>
                <Dashboard />
              </AuthRoute>
            }
          />
          <Route
            path="/dashboard/list-job-vacancy"
            element={
              <AuthRoute>
                <ListDataTable />
              </AuthRoute>
            }
          />
          <Route
            path="/dashboard/list-job-vacancy/create"
            element={
              <AuthRoute>
                <DataForm />
              </AuthRoute>
            }
          />
          <Route
            path="/dashboard/list-job-vacancy/edit/:idJob"
            element={
              <AuthRoute>
                <DataForm />
              </AuthRoute>
            }
          />
          <Route
            path="/dashboard/profile"
            element={
              <AuthRoute>
                <Profile />
              </AuthRoute>
            }
          />
          <Route
            path="/dashboard/change-password"
            element={
              <AuthRoute>
                <ChangePassword />
              </AuthRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
