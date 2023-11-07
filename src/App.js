import "./App.css";
import childMe from "./assets/youngMe.JPG";
import { BsLinkedin, BsGithub } from "react-icons/bs";
function App() {
  return (
    <div className='App'>
      <nav>
        <h3>Brandon.dev</h3>
        <ul>
          <li>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Projects</a>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
      <div className='hero-detail'>
        <div className='hero-left'>
          <h2>Front-End React Developer</h2>
          <p>
            Hi, I'm Brandon Gibson. A passionate Front-end React Developer base
            in Atlanta. 📍
          </p>
          <a href='#'>
            <BsLinkedin />
          </a>
          <a href='#'>
            <BsGithub />
          </a>
        </div>
        <div className='hero-right'>
          <img src={childMe} style={{ transform: "rotate(90deg" }} />
        </div>
      </div>
      <span>Tech Stack |</span>
    </div>
  );
}

export default App;
