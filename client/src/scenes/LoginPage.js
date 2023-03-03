import '../styles/LoginPage.css'

const LoginPage = () => {
  return (
    <div className="login-container">
    <h1 className="login-title">Login</h1>
      <form className="login-form">
        <input type='text' placeholder="username"></input>
        <input type='text' placeholder="password"></input>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage;