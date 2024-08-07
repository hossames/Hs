import {
  FaEye,
  useState,
  FaEyeSlash,
  Link,
  URLs,
  toast,
  useNavigate,
  Context,
  useContext
} from "../exporter";
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const url = URLs().singIn;

  const navigate = useNavigate();

  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const {fetchUserDetails} = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setuser(() => {
      return { ...user, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = await fetch(url, {
      method: "POST",
      credentials:'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const response = await api.json();
    if (response.success) {
      toast.success(response.message);
      navigate("/");
      fetchUserDetails();
    } else {
      toast.error(response.message);
    }
  };

  return (
    <section id="login" className="flex items-center justify-center">
      <div className=" h-full w-full continer p-4">
        <div className="p-2 bg-white w-full max-w-screen-md mx-auto">
          <img src="/assets/signin.gif" className="w-20 mx-auto h-20" alt="" />

          <form
            className=" flex justify-between flex-col pt-6"
            onSubmit={handleSubmit}
          >
            <div className="inputBox grid gap-y-1 m-1 font-medium">
              <label htmlFor="">Email : </label>
              <input
                type="email"
                name="email"
                required
                value={user.email}
                onChange={handleOnChange}
                placeholder="Enter your email"
                className="w-full h-full outline-none bg-slate-100 p-2"
              />
            </div>
            <div className="inputBox grid gap-y-1 m-1 font-medium ">
              <label htmlFor="">Password :</label>
              <div className="flex items-center bg-slate-100">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={user.password}
                  required
                  onChange={handleOnChange}
                  placeholder="Enter your password"
                  className="w-full h-full outline-none bg-slate-100 p-2"
                />
                <div
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="mx-1"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <Link
                to={"/forget-password"}
                className="w-fit ml-auto  duration-100 hover:text-purple-600 hover:underline"
              >
                forget password
              </Link>
            </div>
            <button
              type="submit"
              className="select-none bg-orange-600 rounded-full px-8 py-1 text-2xl my-5 text-white duration-700 hover:scale-110 block mx-auto"
            >
              Login
            </button>
          </form>

          <p className="m-2 ">
            Don't have account ?{" "}
            <Link
              className="font-semibold text-orange-600 duration-100 hover:text-red-700 hover:underline"
              to={"/sign-up"}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
