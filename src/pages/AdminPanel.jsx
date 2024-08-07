import { useSelector , Link, Outlet , Slide ,Fade} from "../exporter";
export const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  return (
    <>
      <div className="min-h-[calc(100vh-155px)] scale-y-95 justify-center md:justify-normal flex gap-7">
        <Slide className="hidden left-0 md:flex absolute w-full min-h-full bg-white max-w-[calc(100%)] md:max-w-[calc(20%)] scale-x-95 md:static">
        <aside
          className=" flex min-w-[calc(100%)] md:static"
          style={{
            
            flexDirection: "column",
            gap: "2rem",
            padding: "20px",
            boxShadow: "2px 2px 15px rgba(0,0,0,0.1)",
            borderRadius: "5px",
            
          }}
          
        >
          <Link to = './'><div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            boxShadow: "2px 2px 15px rgba(0,0,0,0.1)",
            borderRadius: "5px",
          }}>
            <div className="text-4xl flex items-center rounded-full w-20 h-20 p-3 bg-black overflow-hidden">
              {user?<img src={user.pic} alt="" />:''}
            </div>
          </div>
          </Link>
          <Link  className=" p-3 duration-700 hover:bg-slate-300 hover:scale-105"to={'./Users'}
          style={{
            boxShadow: "2px 2px 15px rgba(0,0,0,0.1)",
            borderRadius: "5px",
          }}>Users</Link>
          <Link className=" p-3 duration-700 hover:bg-slate-300 hover:scale-105" to={'./Products'}
          style={{
            boxShadow: "2px 2px 15px rgba(0,0,0,0.1)",
            borderRadius: "5px",
          }}>Products</Link>
        </aside>
        </Slide>
        <main
          className="w-full min-h-full bg-white max-w-[calc(95%)]  md:max-w-[calc(79.5%-1.75rem)]  "
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
            boxShadow: "2px 2px 15px rgba(0,0,0,0.1)",
            borderRadius: "5px",
          }}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};
