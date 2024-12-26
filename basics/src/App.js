import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Greeting from "./Greeting";
function App() {
  return (
    <div>
    <h1> Hello From ReactJS</h1>

     {/* For Greeting */}

    <Greeting name = {'Satyam'} />
    <Greeting name = {'Samrat'} />

    {/* For Contact */}

    <Contact name = {'Mobile'} number = {9110916679} />

    {/* For Home */}

    <Home name = {'Satyam Samrat'} age = {24} />

    {/* For About */}

    <About intro = {'Welcome to git'} role = {'developer'} />
      </div>
  );
}

export default App;
