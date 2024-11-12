import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token");
    const new_user = params.get("newUser");
    const verify = params.get("verify");
    localStorage.setItem("access_token", access_token as string);
    localStorage.setItem("refresh_token", refresh_token as string);
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <div>
      <button>Login</button>
    </div>
  );
};

export default Login;
