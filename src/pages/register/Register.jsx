import './register.css'

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Fakebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Fakebook
          </span>
        </div>  
        <div className="loginRight">
          <div className="loginBox">
            <input type='email' placeholder='Email' className="loginInput" />
            <input type='password' placeholder='Password' className="loginInput" />
            <input type='password' placeholder='Confirm Password' className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Already have an account?</span>
            
          </div>
        </div>
      </div>  
    </div>
  )
}
