// FADE IN EFFECT COMPONENT

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Fader.css'

const Fader = ({ text, setSuccess }) => {


    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    });


    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 5000);
        return () => { clearInterval(timeout); setSuccess(false) }
    }, [fadeProp])

    return (
        <>
            <h1 data-testid="fader" className={fadeProp.fade}>{text}</h1>
        </>
    )
}

Fader.defaultProps = {
    text: 'null'
}

Fader.propTypes = {
    text: PropTypes.string,
}

export default Fader