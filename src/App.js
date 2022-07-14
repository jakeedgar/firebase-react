import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePostPage from './pages/CreatePostPage';
import LoginPage from './pages/LoginPage';


const App = () => {
  return (
    <div>
      <Router>
          <nav>
            <ul>
              <li className="navbar-link"><Link to='/'>Home</Link></li>
              <li className="navbar-link"><Link to='/createpost'>New Post</Link></li>
              <li className="navbar-link"><Link to='/login'>Login</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/'
              element={<HomePage />}>
            </Route>
            <Route path='/createpost'
              element={<CreatePostPage />}>
            </Route>
            <Route path='/login'
              element={<LoginPage />}>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;