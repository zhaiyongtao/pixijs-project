/**
 * index - 描述
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/10/18 4:14 下午
 * @LastEditTime: 2021/10/18 4:14 下午
 */
import React from "react";
import { renderRoutes } from "react-router-config";
import {RouteComponentProps} from "react-router-dom";

interface  IProps extends RouteComponentProps {

}

const Home: React.FC<any> = (props) => {

    const goToUserInfo = ():void => {
        const {history} = props
        console.log(props.route)
        console.log(history)
        history.push('/user-info')
    }
    return <>
        <div onClick={() => goToUserInfo()}>home</div>
        {renderRoutes(props.route.routes)}
    </>

}

export  default Home
