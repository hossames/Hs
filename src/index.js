import './index.css';
import {React,ReactDOM,Router,RouterProvider,Provider,Store} from './exporter'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <RouterProvider router={Router}/>
    </Provider>
  </React.StrictMode>
);
