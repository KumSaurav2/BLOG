import './App.css';
import Home from './pages/home/index';
import Blog from './pages/blogs/index';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Start from './pages/LoginSignUp/Start';

function App() {
 
    return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Start />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path='home/blog/:id' element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;
