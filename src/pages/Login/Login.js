import "./Login.css"

export default function Login() {
  return (
    <div className="login">
        <form action="" className="loginForm">
            <span className="loginTitle">Login</span>
            <label>Email</label>
            <input type="email" placeholder= "Enter Your Email..." name="" className="loginInput" />
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password..." name="" className="loginInput"  />
            <button className="loginbtn">Login</button>
        </form>
        <button className="signupbtn">Signup</button>
    </div>
  )
}
