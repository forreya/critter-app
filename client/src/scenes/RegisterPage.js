import '../styles/RegisterPage.css'

const RegisterPage = () => {
  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <form className="register-form">
        <input type='text' placeholder="username"></input>
        <input type='text' placeholder="password"></input>
        <button>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage;