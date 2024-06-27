import "./App.css";
import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo";

function App() {
  return <div className="flex flex-col  items-center p-2 bg-slate-800 h-screen gap-12 text-white">
    <Navbar/>
    <Todo/>
  </div>;
}

export default App;
