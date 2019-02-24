import Home from '../Pages/HomePage';
import Register from '../Pages/RegisterPage';
import Login from '../Pages/LoginPage';
import Forums from '../Pages/ForumsPage';

var indexRoutes = [
        {path: "/", name: "Home", component: Home },
        {path: "/register", name: "Register", component: Register },
        {path: "/login", name: "Login", component: Login },
        {path: "/forums", name: "Forums", component: Forums },
];

export default indexRoutes;
      
    