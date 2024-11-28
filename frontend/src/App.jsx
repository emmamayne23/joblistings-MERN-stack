import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import JobPage from "./pages/JobPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import AddJobForm from "./pages/AddJobForm.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/** Auth Routes */}
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/** Auth Routes */}

          {/** Main Layout Route */}
          <Route element={<MainLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/job/:id" element={<JobPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/add-job" element={<AddJobForm />} />
          </Route>
          {/** Main Layout Route */}

          {/** 404 Route */}
          <Route path="*" element={<ErrorPage />} />
          {/** 404 Route */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
