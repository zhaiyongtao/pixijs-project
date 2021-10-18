/**
 * index - 描述
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/10/14 11:45 上午
 * @LastEditTime: 2021/10/14 11:45 上午
 */

import React,{FC}from 'react';
import styles from './index.module.less'
import DrawingBoard from "./DrawingBoard";


const DrawingBoardPage: FC = () => (
    <div className={styles.drawingBoard}>
        <div>左边区域</div>
        <div><DrawingBoard /></div>
        <div>右边区域</div>
    </div>
);

export default DrawingBoardPage