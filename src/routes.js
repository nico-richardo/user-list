import {
    Route
} from "react-router-dom";

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

const pages = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/create',
        component: About
    }
]

export const routes = pages.map((page, index) => {
    return <Route
        key={'route' + index}
        path={page.path}>
        {page.component}
    </Route>
});