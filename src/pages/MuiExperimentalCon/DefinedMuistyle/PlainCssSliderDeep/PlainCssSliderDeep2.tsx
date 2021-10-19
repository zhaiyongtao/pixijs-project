/**
 * PlainCssSliderDeep2 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/10/19 5:13 下午
 * @LastEditTime: 2021/10/19 5:13 下午
 */
import React from "react";
import {Slider, StyledEngineProvider} from "@mui/material";
import './PlainCssSliderDeep2.scss'

const PlainCssSliderDeep2 : React.FC<any> = () => {
    return <StyledEngineProvider injectFirst>
        <div>
            <Slider defaultValue={30}/>
            <Slider defaultValue={30} className="slider"  componentsProps={{ thumb: { className: 'childThumb' } }}/>
        </div>
    </StyledEngineProvider>
}
export default PlainCssSliderDeep2;