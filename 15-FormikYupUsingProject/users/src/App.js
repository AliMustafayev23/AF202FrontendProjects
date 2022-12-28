import "./App.css";
import Usertable from "./pages/table/table";
import { Route, Routes } from "react-router";
import Signup from "./pages/signup/signup";
import Signin from "./pages/signin/signin";
import HeaderPage from "./components/header";

function App() {
  // const [view, setView] = useState("Sign-up");
  return (
    <div className="App">
      <HeaderPage />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/sign-up-page" element={<Signup />} />
        <Route path="/users-page" element={<Usertable />} />
      </Routes>
    </div>
  );
}

export default App;
