/**
 * test - 描述
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/10/28 3:52 下午
 * @LastEditTime: 2021/10/28 3:52 下午
 */


import React, {useEffect, useState} from "react";

function Child() {
    const [changes, setChanges] = useState(0);
    useEffect(() => {
        console.log( 'child parent')
    }, []);
    return <div onClick={() => setChanges((pre) => pre + 1)}>
        {changes}
    </div>
}

function Parent() {
    useEffect(() => {
       console.log( 'test parent')
    }, []);

    const [pc, setPc] = useState(0);
    return (<>
        <div style={{width: pc}}>
            <Child/>
        </div>
        <button onClick={() => setPc((pre) => pre + 1)}>{pc}</button>
    </>)
}

export default Parent