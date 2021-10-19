/**
 * index - 描述
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/10/19 2:15 下午
 * @LastEditTime: 2021/10/19 2:15 下午
 */
import { Slider, StyledEngineProvider } from "@mui/material";
import React from "react";
import './index.scss';

const ClassNamesChangeStyle : React.FC<any> = () => {
    return <div>
        <div>
            <StyledEngineProvider injectFirst>
                <Slider defaultValue={30} />
                <Slider defaultValue={30}  className="slider" />
            </StyledEngineProvider>
        </div>
    </div>
}
export default ClassNamesChangeStyle