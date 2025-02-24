import "../style/login/login.scss"

export default function Login() {
  return (
      <div className="form">
          <div className="login_box">
              <h2>Login</h2>
              <form action="#">
                  <div className="input_box">
                      <input type="email" required />
                      <label>Email</label>
                  </div>
                  <div className="input_box">
                      <input type="password" required />
                      <label>password</label>
                  </div>
                  <div className="forgot_pass">
                    <a href="">Forgot your password?</a>
                  </div>
                  <button type="submit" className="btn">
                    Login
                  </button>
                  <div className="signup_link">
                      <a href="">Signup</a>
                  </div>
              </form>
          </div>
      </div>
  );
}
