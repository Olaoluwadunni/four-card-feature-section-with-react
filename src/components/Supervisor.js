import React from 'react'
import image from "./icon-supervisor.svg"
function Supervisor() {
    return (
        <div class="tool" id="supervisor">
            <span class="BoldBlack">Supervisor</span><br/>
                Monitors activity to identify project roadblocks<br/>
            <img src={image} alt=""/>
        </div>
    )
}

export default Supervisor
