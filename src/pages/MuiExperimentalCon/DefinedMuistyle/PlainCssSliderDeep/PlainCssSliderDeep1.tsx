/**
 * PlainCssSliderDeep - 更深层的元素
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/10/19 5:05 下午
 * @LastEditTime: 2021/10/19 5:05 下午
 */
import { Slider, StyledEngineProvider } from "@mui/material";
import React from "react";

import './PlainCssSliderDeep1.scss'

const PlainCssSliderDeep1: React.FC<any> = () => {
    return (
        <StyledEngineProvider injectFirst>
            <div>
                <Slider defaultValue={30} />
                <Slider defaultValue={30} className="slider" />
            </div>
        </StyledEngineProvider>

    )
}

export default PlainCssSliderDeep1;