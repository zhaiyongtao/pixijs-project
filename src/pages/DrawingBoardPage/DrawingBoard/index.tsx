/**
 * index - 画板组件
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/10/14 5:32 下午
 * @LastEditTime: 2021/10/14 5:32 下午
 */
import React, {FC, MutableRefObject, useEffect, useRef} from "react";
import * as PIXI from "pixi.js";

import styles from './index.module.less'

import {Application} from "pixi.js";

const pixiApp = new Application({

    backgroundColor: 0x5BBA6F,
});

const DrawingBoard: FC = () => {
    const ref: MutableRefObject<any> = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.appendChild(pixiApp.view);

        }
        pixiApp.start();
        pixiApp.renderer.view.style.position = "absolute";
        pixiApp.renderer.view.style.display = "block";
        pixiApp.renderer.resize((document.getElementById("drawingBoardDiv")?.clientWidth) as number, window.innerHeight);
        // app.renderer.view.style.height = '100%'
        console.log(document.getElementById("test")?.clientWidth)
        return () => {
            pixiApp.stop()
        }
    }, [])

    return (
        <div id="drawingBoardDiv" style={{position: 'relative'}}>
            <div className={styles.drawingBoard} ref={ref}></div>
        </div>
    )
}

export default DrawingBoard