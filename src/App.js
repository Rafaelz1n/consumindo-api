import RoutesAPP from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <RoutesAPP/>
    </div>
  );
}

export default App;
