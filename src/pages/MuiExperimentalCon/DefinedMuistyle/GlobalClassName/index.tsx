/**
 * index - 描述
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/10/19 3:18 下午
 * @LastEditTime: 2021/10/19 3:18 下午
 */
import { StyledEngineProvider } from "@mui/material";
import React from "react";
import GlobalClassNameItem from "./GlobalClassNameItem";
import './GlobalClass.scss'

const GlobalClassName :React.FC<any> = () => {
    return <>
    <StyledEngineProvider injectFirst>
        <GlobalClassNameItem />
    </StyledEngineProvider>
    </>
}

export default GlobalClassName