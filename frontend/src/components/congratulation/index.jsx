import React from 'react'
import {MainContainerC, WrapDivC} from "../../styles/components/congratulationStyles";
import {Link} from 'react-router-dom'
const Congratulation = () => {

    return (
        <>
            <MainContainerC>
                <div>
                    <WrapDivC>
                        <h4>Check your email for the validation code</h4>
                    </WrapDivC>
                    <WrapDivC>
                    <button><Link to="/sign-up/verification">Verification</Link></button>
                    </WrapDivC>
                </div>
             </MainContainerC>
        </>
    )
}

export default Congratulation;
