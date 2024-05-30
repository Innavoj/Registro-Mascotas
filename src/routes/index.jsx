
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';


import MainLayouts from '../layouts/MainLayouts';
import DashboardLayouts from "../layouts/DashboardLayouts";
import Dashboard from '../pages/dashboard';
import ContactPages from '../pages/contact';
import About from '../pages/about';
import Error404 from '../pages/404';
import HomePages from '../pages/home';
import ProductoPages from '../pages/productos';
import ConsultasPages from '../pages/consultas';
import EstadisticasPages from '../pages/estadisticas';
import SearchPages from '../pages/search';

 const router = createBrowserRouter([

        { 
            path: "/", 
            element: <MainLayouts/>,
            errorElement: <Error404 />,
            children: [
                { path: "/contactos", element: <ContactPages/>},
                { path: "/productos", element: <ProductoPages/>},
                { path: "/consultas", element: <ConsultasPages/>},
                { path: "/about", element: <About/>},
                { path: "/dashboard", element: <Dashboard/>},
                { path: "/estadisticas", element: <EstadisticasPages/>},
                { path: "/search", element: <SearchPages/>}
            ]
        },
       
        
  ])

  export default function MyRoutes() {
    return <RouterProvider router={router} />
  }