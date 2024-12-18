import { useState } from "react";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const user = isAuthenticated
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthenticated(false);
  };

  return (
    <div>
      <Navbar
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={handleLogout}
      />

      <div className="test">
        <div className="routes">
          <AppRoutes
            isAuthenticated={isAuthenticated}
            setAuthenticated={setAuthenticated}
            onLogout={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import LogIn from "./pages/LogIn";
// import SignUp from "./pages/SignUp";
// import Profile from "./pages/Profile";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/product" element={<Products />} />
//           <Route path="/login" element={<LogIn />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;
