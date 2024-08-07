import {
  App,
  Home,
  Login,
  createBrowserRouter,
  ForgetPassword,
  SignUp,
  AdminPanel,
  PanelHome,
  Users,
  PanelProducts
} from "../exporter";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "adminPanel",
        element: <AdminPanel />,
        children: [
          {
            path: "",
            element: <PanelHome />,
          },
          {
            path: "Users",
            element: <Users />,
          },
          {
            path: "Products",
            element: <PanelProducts />,
          }
        ]
      },
    ],
  },
  
]);

export default Router;
