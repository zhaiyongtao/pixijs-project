/**
 * routers - 路由问题
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/10/18 4:09 下午
 * @LastEditTime: 2021/10/18 4:09 下午
 */


import {Redirect} from "react-router-dom";
import UserInfo from "./pages/RouterConfigTest/UserInfo";
import Home from "./pages/RouterConfigTest/Home";
import {RouteConfig} from "react-router-config";

const routers: Array<RouteConfig> = [
    {
        path: "/",
        component: Home,
        routes: [
            // {
            //
            //     path: "/",
            //     exact: true,
            //     render: () => {
            //         return <Redirect to="/home"/>
            //     }
            // },
            {
                path: "/home",
                component: Home
            },
            {
                path: "/user-info",
                component: UserInfo
            }
        ]
    },

]

export default routers
