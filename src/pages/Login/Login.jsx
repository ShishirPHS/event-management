import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login successful",
        });

        // navigate after successful login
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Incorrect Email or Password",
        });
      });
  };

  return (
    <div className="container mx-auto mb-24">
      <h2 className="text-center font-bold text-3xl lg:text-5xl mb-6">
        Please Login!
      </h2>
      <div className="hero">
        <div className="hero-content flex-col w-[90%] lg:w-2/4">
          <div className="card w-full drop-shadow bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="loginBtn normal-case btn bg-[#4A4040] text-white">
                  Login
                </button>
              </div>
              <p className="font-medium mt-2">
                Do not have an account?{" "}
                <Link className="font-bold text-blue-700" to="/register">
                  Register
                </Link>
              </p>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
