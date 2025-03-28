import Login from "../Pages/Login/Login";
import Students from "../Pages/Students/Students";

const route = [
    {
        name : 'Login',
        path :'/Login',
        component: <Login/>
    },
    {
        name: 'Studens',
        path: '/Students',
        component:<Students/>
    }
]

export default route