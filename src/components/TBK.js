import React from 'react'
import image1 from "./icon-team-builder.svg"
import image2 from "./icon-karma.svg"
function TBK() {
    return (
        <div className="TBK">
            <div className="tool" id="Team-builder">
                <span className="BoldBlack">Team Builder</span><br/>
                Scans our talent network to create the optimal team for your project<br/>
                <img src={image1} alt=""/>
            </div>
            <div class="tool" id="Karma">
                <span className="BoldBlack">Karma</span><br/>
                Regularly evaluates our talent to ensure quality<br/>
                <img src={image2} alt=""/>
            </div>
        </div>
    )
}

export {TBK};
