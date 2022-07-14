import Login from "../../components/Login/Login";

const LoginPage = () => {
  return (  
    <div>
      <Login setIsAuth={setIsAuth}/>
    </div>
  );
}

export default LoginPage;