import {
  FaEye,
  useState,
  FaEyeSlash,
  Link,
  toBase64,
  URLs,
  toast,
  useNavigate
} from "../exporter";
export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const url = URLs().signUp;
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    pic: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setuser(() => {
      return { ...user, [name]: value };
    });
  };
  const passwordValid = (password) =>{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return password.match(regex);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password === user.confirmPassword) {
      if(passwordValid(user.password))
      {const api = await fetch(url, {
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
        navigate("/login");
      } else {
        toast.error(response.message);
      }
      }
      else{
        toast.error("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character");
      }
    } else {
      toast.error("password and confirm password are not equal");
    }
  };

  const handleUploadPicture = async (e) => {
    const image = await toBase64(e.target.files[0]);
    setuser((prevState) => ({ ...prevState, pic: image }));
  };

  return (
    <section id="login" className="flex items-center justify-center">
      <div className=" h-full w-full continer p-4">
        <div className="p-2 bg-white w-full max-w-screen-md mx-auto">
          <div className="w-20 relative overflow-hidden rounded-full mx-auto h-20">
            <img src={user.pic || "/assets/signin.gif"} alt="" />
            <form action="">
              <label className="cursor-pointer absolute backdrop-blur-sm text-black z-10 bottom-0 bg-opacity-30 bg-gray-600 px-3 py-2">
                upload
                <input
                  type="file"
                  name="profile photo"
                  onChange={handleUploadPicture}
                  id=""
                  hidden
                />
              </label>
            </form>
          </div>
          <form
            className=" flex justify-between flex-col pt-6"
            onSubmit={handleSubmit}
          >
            <div className="inputBox grid gap-y-1 m-1 font-medium">
              <label htmlFor="">Name : </label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleOnChange}
                placeholder="Enter your name"
                className="w-full h-full outline-none bg-slate-100 p-2"
                required
              />
            </div>
            <div className="inputBox grid gap-y-1 m-1 font-medium">
              <label htmlFor="">Email : </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleOnChange}
                placeholder="Enter your email"
                className="w-full h-full outline-none bg-slate-100 p-2"
                required
              />
            </div>
            <div className="inputBox grid gap-y-1 m-1 font-medium ">
              <label htmlFor="">Password :</label>
              <div className="flex items-center bg-slate-100">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={user.password}
                  onChange={handleOnChange}
                  placeholder="Enter your password"
                  className="w-full h-full outline-none bg-slate-100 p-2"
                  required
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
            </div>
            <div className="inputBox grid gap-y-1 m-1 font-medium ">
              <label htmlFor="">Password :</label>
              <div className="flex items-center bg-slate-100">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleOnChange}
                  placeholder="confirm your password"
                  className="w-full h-full outline-none bg-slate-100 p-2"
                  required
                />
                <div
                  onClick={() => {
                    setShowConfirm(!showConfirm);
                  }}
                  className="mx-1"
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="select-none bg-orange-600 rounded-full px-8 py-1 text-2xl my-5 text-white duration-700 hover:scale-110 block mx-auto"
            >
              Sign Up
            </button>
          </form>

          <p className="m-2 ">
            have account already ?{" "}
            <Link
              className="font-semibold text-orange-600 duration-100 hover:text-red-700 hover:underline"
              to={"/login"}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
