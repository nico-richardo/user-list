import {
    Route
} from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";

const pages = [
    {
        path: "/",
        component: <Home />
    },
    {
        path: "/create",
        component: <CreateUser/>
    }
]

export const routes = pages.map((page, index) => {
    console.log(page)
    return <Route
        key={'route' + index}
        path={page.path}
        element={page.component} />
});