/**
 * index - 使用sx修改类名
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/10/19 10:41 上午
 * @LastEditTime: 2021/10/19 10:41 上午
 * @description Material-UI 在应用全局类名时，使用了一致的约定：Mui[Component name]-[name of the slot].
 */

import React from "react";
import {Slider} from "@mui/material";

interface AttributeProps {

}

const SxAttributeWithMuiCLassName: React.FC<AttributeProps> = () => {
    return (
        <div>
            <Slider
                defaultValue={30}
                sx={{
                    width: 300,
                    color: 'success.main',
                    '& .MuiSlider-thumb': {
                        borderRadius: '30px',
                    },
                }}
            />
        </div>
    )
}

export default SxAttributeWithMuiCLassName