import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Inventory from '../src/Components/Inventory/Inventory';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import { productsAndCartLoader } from './loaders/loaders';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: ()=>fetch('products.json'),
          element:<Shop></Shop>
        },
        {
          path:'/inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/orders',
          loader: productsAndCartLoader,
          element:<Orders></Orders>
        }
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
