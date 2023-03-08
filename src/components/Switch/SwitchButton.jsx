import React from 'react';
import Switch from 'react-switch'
import { ImSun } from "react-icons/im"
import { IoIosMoon, IoIosPartlySunny } from "react-icons/io";
const SwitchButton = ({ toggleTheme, theme }) => {
    return (
        <div className='mt-1'>
            <Switch
                onChange={() => toggleTheme()}
                checked={theme}
                handleDiameter={28}
                offColor="#41821f"
                onColor="#1f1f2d"
                offHandleColor="#3bd33d"
                onHandleColor="#3bd33d"
                height={40}
                width={70}
                borderRadius={6}
                activeBoxShadow="0px 0px 1px 2px #fffc35"
                uncheckedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 15,
                            color: "white",
                            paddingRight: 2
                        }}
                    >
                        <IoIosMoon></IoIosMoon>
                    </div>
                }
                checkedIcon={
                    <IoIosPartlySunny></IoIosPartlySunny>

                }


                uncheckedHandleIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "white",
                            height: "100%",
                            fontSize: 15
                        }}
                    >
                        On
                    </div>
                }
                checkedHandleIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            color: "white",
                            fontSize: 15
                        }}
                    >
                        Off
                    </div>
                }
                className="react-switch"
                id="small-radius-switch"
            />
        </div>
    );
};

export default SwitchButton;