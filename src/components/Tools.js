import React from 'react'
import Supervisor from "./Supervisor.js"
import {TBK} from "./TBK.js"
function Tools() {
    return (
        <div className="tools">
            <Supervisor/>
            <TBK/>
            <div className="tool" id="calculator" >
                <span className="BoldBlack">Calculator</span><br/>
                Uses data from past projects to provide better delivery estimates<br/>
                <img src="icon-calculator.svg" alt=""/>
            </div>
        </div>
    )
}

export default Tools;
