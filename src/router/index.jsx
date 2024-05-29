import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import {Login, Worker, Orders} from '../pages'
import Layout from "../layout";

function Router(){
    const root = createBrowserRouter(
        createRoutesFromElements([
            <Route path="/" element={<Login />} />,
            <Route path="/layout/*" element={<Layout />}>
                <Route index element={<Worker />} />,
                <Route path="orders" element={<Orders />} />,
            </Route>
        ])
    )

    return <RouterProvider router={root}/>
}

export default Router;