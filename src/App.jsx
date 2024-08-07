import "./App.css";
import "react-toastify/dist/ReactToastify.css"
import { Header, Footer, Outlet, ToastContainer , URLs , useDispatch ,useEffect , Context,setUserDetails} from "./exporter";
export const App = () => {
  const url = URLs().userDetails;
  const dispatch = useDispatch();
  const fetchUserDetails = async () =>{
    const response = await fetch(url,{method: 'GET',credentials:'include'});
    const data = await response.json();
    if(data.success){
      dispatch(setUserDetails(data.data));
    }
  }
  useEffect(()=>{
    fetchUserDetails();
  })

  return (
    <>
      <Context.Provider value={{
        fetchUserDetails
      }}>
      <ToastContainer />
      <Header />
      <main className="min-h-[calc(100vh-155px)]">
        <Outlet />
      </main>
      <Footer />
      </Context.Provider>
    </>
  );
};
