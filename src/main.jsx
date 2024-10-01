import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//css
import "./index.css";

//context
import { GlobalContextProvider } from "./context/GlobalContext";

//toaster
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
    <ToastContainer position="bottom-right"/>
  </GlobalContextProvider>
);
