import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ResumeBuilderForm } from "./pages/ResumeBuilderForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/form" element={<ResumeBuilderForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
