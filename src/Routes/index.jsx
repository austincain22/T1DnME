import Home from '../Pages/HomePage';
import Register from '../Pages/RegisterPage';
import Login from '../Pages/LoginPage';
import Forums from '../Pages/ForumsPage';
import DMing from '../Pages/DmPage';
import DailyView from '../Pages/DailyView';

var indexRoutes = [
        {path: "/", name: "Home", component: Home },
        {path: "/register", name: "Register", component: Register },
        {path: "/login", name: "Login", component: Login },
        {path: "/forums", name: "Forums", component: Forums },
        {path: "/DM", name: "Direct Message", component: DMing },
        {path: "/daily", name: "Day Entry", component: DailyView}
];

export default indexRoutes;
      
    