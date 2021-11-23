/**
 * index - 下拉框
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/11/15 4:20 下午
 * @LastEditTime: 2021/11/15 4:20 下午
 */
import React, {useEffect, useState, useRef, ReactNode} from "react";
import {SvgIcon} from "@mui/material";

import {ReactComponent as ExpandIcon} from './images/expand.svg';
import {ReactComponent as ShrinkIcon} from './images/shrink.svg';


const LglSelect: React.FC<any> = () => {
    const handleExpand = (e: any) => {
        console.log('e', e)
        setIsExpand((prevState => !prevState))
    }

    const [name, setName] = useState('');

    const [isExpand, setIsExpand] = useState(false);
    const [showNumber, setShowNumber] = useState(4);
    const ref = useRef(null);

    const selectRef = useRef(null);

    useEffect(() => {
        // const parentDom = document.getElementById('select-content')
        if (ref && ref.current && selectRef && selectRef.current) {
            (selectRef.current as EventTarget)?.addEventListener('click', handleExpand, true);

            (ref.current as EventTarget)?.addEventListener('scroll', handleSelectContentScroll);

            document.addEventListener('click', onClickOther, true);
        }
        console.log(ref.current)

        return () => {
            if (ref && ref.current) {
                (ref.current as EventTarget).removeEventListener('scroll', handleSelectContentScroll)

            }
        }
    }, [isExpand, ref])

    const checkInfo = (childList: Array<any>, target: any): any => {
        console.log('target', target)

        console.log('childList', childList)

        if (childList.includes(target)) {
            return true
        }
        childList.forEach((item) => {
            console.log('item', item)
            if (item.childNodes.length > 0) {
                return checkInfo(Array.from(item.childNodes), target)
            }
        })
    }


    const onClickOther = (e: any) => {
        console.log(e.target)
        console.log((selectRef.current as any)?.childNodes)
        console.log('1', Array.from((selectRef.current as any)?.childNodes).includes(e.target))
        // console.log(Array.from((ref.current as any)?.childNodes).includes(e.target))
    }

    const handleSelectContentScroll = () => {
        if (ref.current) {
            const _scrollTop = (ref.current as Element)?.scrollTop || 0
            console.log('_scrollTop', _scrollTop)
            console.log(_scrollTop / 40)
            const _tetst = (_scrollTop / 40).toFixed()
            console.log('_test', _tetst)
            const scrollHeight = (ref.current as Element)?.scrollHeight || 0
            console.log('_scrollHeight', scrollHeight)
            setShowNumber((prevState => prevState + Number(_tetst)))
        }

    }

    const list = [
        {
            "id": 1,
            "name": "DroidSansFallback",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/Droid Sans Fallback/DroidSansFallback.svg"
        },
        {
            "id": 2,
            "name": "DroidSansFallbackFull",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/Droid Sans Fallback/DroidSansFallbackFull.svg"
        },
        {
            "id": 3,
            "name": "mplus-1c-black",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/Mplus/mplus-1c-black.svg"
        },
        {
            "id": 4,
            "name": "mplus-1c-bold",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/Mplus/mplus-1c-bold.svg"
        },
        {
            "id": 5,
            "name": "mplus-1c-heavy",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/Mplus/mplus-1c-heavy.svg"
        },
        {
            "id": 6,
            "name": "mplus-1c-light",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/Mplus/mplus-1c-light.svg"
        },
        {
            "id": 7,
            "name": "mplus-1c-medium",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/Mplus/mplus-1c-medium.svg"
        },
        {
            "id": 8,
            "name": "mplus-1c-regular",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/Mplus/mplus-1c-regular.svg"
        },
        {
            "id": 9,
            "name": "mplus-1c-thin",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/Mplus/mplus-1c-thin.svg"
        },
        {
            "id": 10,
            "name": "WD-XL滑油字",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/WD-XL滑油字/WD-XL_Lubrifont-SC.svg"
        },
        {
            "id": 11,
            "name": "WD-XL_Lubrifont-TC",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/WD-XL滑油字/WD-XL_Lubrifont-TC.svg"
        },
        {
            "id": 12,
            "name": "cjkFonts_allseto_v1.11",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/cjkfonts/cjkFonts_allseto_v1.11.svg"
        },
        {
            "id": 13,
            "name": "jf-openhuninn-1.1",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/jf open 粉圓/jf-openhuninn-1.1.svg"
        },
        {
            "id": 14,
            "name": "I.Ming-6.12",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/一点明体/I.Ming-6.12.svg"
        },
        {
            "id": 15,
            "name": "I.MingVar-6.12",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/一点明体/I.MingVar-6.12.svg"
        },
        {
            "id": 16,
            "name": "仓耳与墨W01",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳与墨/仓耳与墨W01.svg"
        },
        {
            "id": 17,
            "name": "仓耳与墨W02",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳与墨/仓耳与墨W02.svg"
        },
        {
            "id": 18,
            "name": "仓耳与墨W03",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳与墨/仓耳与墨W03.svg"
        },
        {
            "id": 19,
            "name": "仓耳与墨W04",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳与墨/仓耳与墨W04.svg"
        },
        {
            "id": 20,
            "name": "仓耳与墨W05",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳与墨/仓耳与墨W05.svg"
        },
        {
            "id": 21,
            "name": "仓耳周珂正大榜书",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳周珂正大榜书/仓耳周珂正大榜书.svg"
        },
        {
            "id": 22,
            "name": "仓耳小丸子",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳小丸子/仓耳小丸子.svg"
        },
        {
            "id": 23,
            "name": "仓耳渔阳体W01",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳渔阳体/仓耳渔阳体W01.svg"
        },
        {
            "id": 24,
            "name": "仓耳渔阳体W02",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳渔阳体/仓耳渔阳体W02.svg"
        },
        {
            "id": 25,
            "name": "仓耳渔阳体W03",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳渔阳体/仓耳渔阳体W03.svg"
        },
        {
            "id": 26,
            "name": "仓耳渔阳体-Regular",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳渔阳体/仓耳渔阳体W04.svg"
        },
        {
            "id": 27,
            "name": "仓耳渔阳体-Medium",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳渔阳体/仓耳渔阳体W05.svg"
        },
        {
            "id": 28,
            "name": "仓耳舒圆体W01",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳舒圆体/仓耳舒圆体W01.svg"
        },
        {
            "id": 29,
            "name": "仓耳舒圆体W02",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳舒圆体/仓耳舒圆体W02.svg"
        },
        {
            "id": 30,
            "name": "仓耳舒圆体W03",
            "preview_path": "http://static.nolibox.com/preview/font/ChineseFonts/仓耳舒圆体/仓耳舒圆体W03.svg"
        },
    ]
    return (
        <>
            <div onClick={(e) => handleExpand(e)} ref={selectRef} style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                border: '1px solid red',
                position: 'relative',
                height: '40px',
            }}>
                <div style={{
                    flex: '1 1',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>{name}
                </div>
                <div style={{
                    width: '20px',
                    height: '100%',
                }}>
                    <SvgIcon component={isExpand ? ExpandIcon : ShrinkIcon}/>
                </div>
                {
                    isExpand && <div ref={ref} style={{
                        width: '100%',
                        position: 'absolute',
                        top: '40px',
                        left: '0',
                        border: '1px solid black',
                        height: '160px',
                        overflowY: "scroll"
                    }}>
                        {/*{*/}
                        {/*    list.map((item, index) => {*/}
                        {/*        if (index < showNumber + 5 ) {*/}
                        {/*            return  <div key={`font-select-${item.id}`} style={{*/}
                        {/*                height: '40px',*/}
                        {/*                width: '100%',*/}
                        {/*                backgroundImage: `url(${encodeURI(item.preview_path)})`,*/}
                        {/*                border: '1px solid',*/}
                        {/*                backgroundRepeat: 'no-repeat',*/}
                        {/*                backgroundPosition: '9px',*/}
                        {/*                backgroundSize: 'auto 30px'*/}
                        {/*            }}/>*/}
                        {/*        } else {*/}
                        {/*            return  <div key={`font-select-${item.id}`} style={{*/}
                        {/*                height: '40px',*/}
                        {/*                width: '100%',*/}
                        {/*                border: '1px solid',*/}
                        {/*                backgroundRepeat: 'no-repeat',*/}
                        {/*                backgroundPosition: '9px',*/}
                        {/*                backgroundSize: 'auto 30px'*/}
                        {/*            }}/>*/}
                        {/*        }*/}
                        {/*    })*/}
                        {/*}*/}

                        {
                            list.filter((_, index) => {
                                return index < showNumber + 5
                            }).map((item) => {
                                return <div key={`font-select-${item.id}`} onClick={() => setName(item.name)} style={{
                                    height: '40px',
                                    width: '100%',
                                    backgroundImage: `url(${encodeURI(item.preview_path)})`,
                                    border: '1px solid',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '9px',
                                    backgroundSize: 'auto 30px'
                                }}/>
                            })
                        }
                    </div>
                }

            </div>
        </>
    )

}

export default LglSelect