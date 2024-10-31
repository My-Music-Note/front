import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <AnimatedRoutes /> {/* Router 내부에서 AnimatedRoutes를 렌더링 */}
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
