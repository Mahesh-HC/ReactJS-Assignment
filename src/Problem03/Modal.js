import React from "react"

const Modal = ({ preview, setPreview }) => {
    const handleClick = (e) => {
        console.log(e)
        if (e.target.classList.contains('dismiss')) {
            setPreview(null)
        }
    }
    return (
        <div>
            <div className="overlay dismiss" >
                <img src={preview} alt="natureImage"></img>
                <span classNameName='dismiss' onClick={handleClick}> <button type="button" className="btn-close dismiss" data-bs-dismiss="modal" aria-label="Close"></button> </span>
            </div>
        </div>
    )
}

export default Modal
