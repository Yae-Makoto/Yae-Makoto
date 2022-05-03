import { ReactComponent as LogoL } from "./svg/LogoL.svg"
import { ReactComponent as LogoH } from './svg/LogoH.svg';
import { ReactComponent as LogoC } from './svg/LogoC.svg';
import "./LHCReveal.css"
import { useWindowDimension, useWindowShortestSide } from "../Util/useWindowDimension";
import { useEffect, useState } from "react";
import { Fade, Flip, Rotate } from "react-reveal";

export default function LHCReveal() {
    const { size } = useWindowShortestSide(x => x / 3)
    const delay = 1000


    return (
        <>
            <div className="page">
                <Rotate top left duration={1000} delay={delay}>
                    <LogoL id="LogoL" className="LogoSvg" width={size} height={size} />
                </Rotate>
            </div>
            <div className="page">
                <Rotate top right duration={1000} delay={delay + 500}>
                    <LogoH id="LogoH" className="LogoSvg" width={size} height={size} />
                </Rotate>
            </div>
            <div className="page">
                <Fade top duration={1100} delay={delay + 1000}>
                    <LogoC id="LogoC" className="LogoSvg" width={size} height={size} />
                </Fade>
            </div>
            <div className="page"
                style={{
                    fontSize: size / 3.6
                }}>
                <Flip left opposite cascade duration={2000} delay={delay + 1500}>
                    L·H·C
                </Flip>
                {/* <Flip left opposite cascade duration={2000} delay={2000}>
                    LIN
                </Flip> */}
            </div>
        </>
    )
}

