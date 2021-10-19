/**
 * index - MUI的sx属性的实验
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/10/15 4:17 下午
 * @LastEditTime: 2021/10/15 4:17 下午
 */


import React, { FC } from 'react';
import Slider from '@mui/material/Slider';

const SxAttribute : FC = () => {

    return (
        <Slider
            defaultValue={30}
            sx={{
                width: 300,
                color: 'success.main',

            }}
        />
    )
}

export default SxAttribute