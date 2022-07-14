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
import TodoPage from './pages/TodoPage/TodoPage';


const App = () => {
  return (
    <div>
      <Router>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/createpost'>New Post</Link></li>
              <li><Link to='/todo'>Todo List</Link></li>
              <li><Link to='/login'>Login</Link></li>
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
              <Route path='/todo'
                element={<TodoPage />}>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;