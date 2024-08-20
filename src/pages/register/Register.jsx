import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <div className="registerWrapper">
        <div className="registerLeft">
            <h3 className="registerLogo">ZoneIn</h3>
            <span className="registerDesc">Zest for connection and exploration with ZoneIn</span>
        </div>
        <div className="registerRight">
            <div className="registerBox">
                <input placeholder="Name" className="registerInput" />
                <input placeholder="Email" className="registerInput" />
                <input placeholder="Password" className="registerInput" />
                <input placeholder="Password Again" className="registerInput" />
                <button className="registerButton"> Sign Up </button>
                <button className="registerRegisterButton">Log into your Account</button>
            </div>        
        </div>
        </div>
    </div>
  );
}
