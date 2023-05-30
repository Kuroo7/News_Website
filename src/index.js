import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import Error from "./component/Error";
import Contact from "./component/Contact";
import NewsDetails from "./component/NewsDetail";
import ShiverUi from "./component/ShiverUi";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./component/Cart";

const InstaMart = lazy(() => import("./component/InstaMart"));

const AppLayout = () => {
    return (
        <>
            <Provider store={store} >
                <Header />
                <Outlet />
                <Footer />
            </Provider>
        </>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/instamart",
                element:
                    <Suspense fallback={<ShiverUi />}>
                        <InstaMart />
                    </Suspense >
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/news/:id",
                element: <NewsDetails />,
            },
        ]
    },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<About />)
// root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter} />)