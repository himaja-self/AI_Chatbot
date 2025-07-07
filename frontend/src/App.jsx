import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SignIn from "./components/SignIn";
import Register from "./components/Register";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default redirect to /signin */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Sign In Route */}
        <Route path="/signin" element={<SignIn />} />

        {/* Register Route */}
        <Route path="/register" element={<Register />} />

        {/* Chatbot Route */}
        <Route path = "/chatbot" element = {<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
