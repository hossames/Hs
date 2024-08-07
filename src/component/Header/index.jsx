import {
  Logo,
  Link,
  GrSearch,
  FaShoppingCart,
  FaRegUserCircle,
  useSelector,
  URLs,
} from "../../exporter";
export const Header = () => {
  const url = URLs().logout;
  const user = useSelector((state) => state?.user?.user);
  const handleLogOut = async () => {
    await fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
  };
  return (
    <header className="h-24 shadow-md bg-white">
      <div className="h-full mx-3 font-medium flex justify-between items-center continer">
        <div>
          <Link to={"/"}>
            <Logo width={"100px"} height={"60px"} className={""} />
          </Link>
        </div>
        <div className="hidden md:flex max-w-sm w-full justify-between items-center border rounded-full focus-within:shadow-md pl-2 ">
          <input
            type="text"
            placeholder="search product here ..."
            className="field pl-2 w-full outline-none "
          />
          <div className="bg-orange-600 font-semibold px-3 py-1 rounded-r-2xl flex items-center">
            <GrSearch size={24} className="text-white" />
          </div>
        </div>
        <div className="flex items-center mr-3 justify-center gap-5">
          <div className="relative h-24 flex justify-center items-center">
            <div className="text-4xl flex items-center rounded-full w-10 h-10 overflow-hidden">
              {user ? 
               user.role === "admin"?  <Link to={'/adminPanel'}><img src={user.pic} alt="" /></Link> : <img src={user.pic} alt="" />
               : 
               <FaRegUserCircle />
               }
            </div>
          </div>
          <div className="text-4xl relative">
            <span>
              <FaShoppingCart />
            </span>
            <p className="bg-orange-600 px-2 rounded-full text-center absolute -top-2 -right-3 text-xl">
              0
            </p>
          </div>
          <div className="bg-orange-600 rounded-full px-4 py-1 text-white cursor-pointer duration-700 hover:scale-110">
            {user ? (
              <span onClick={handleLogOut}>logout</span>
            ) : (
              <Link to="/login">login</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
