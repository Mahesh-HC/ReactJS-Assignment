import React, { useState } from 'react'

const BMICalculator = () => {
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [result, setResult] = useState()
    const [minweight, setMinWeight] = useState()
    const [maxweight, setMaxWeight] = useState()
    const [healthstatus, setHealthStatus] = useState()
    const [isVisibility, setIsVisibility] = useState(false)

    const handleHeight = (e) => {
        setHeight(e.target.value)
    }
    const handleWeight = (e) => {
        setWeight(e.target.value)
    }
    const calculateBMI = (e) => {
        e.preventDefault()
        let h = height / 100
        let res = weight / (h * h)
        res = Math.round(res * 100) / 100
        setResult(res)

        let maxWeight = Math.round((2500 * h * h) / 100)
        setMaxWeight(maxWeight)

        let minWeight = Math.round((1850 * h * h) / 100)
        setMinWeight(minWeight)

        if (res > 18.5 && res < 25) {
            setHealthStatus("You are in a Healthy Weight range")
        }
        else {
            setHealthStatus("You are not in a Healthy Weight range")
        }
        setIsVisibility(true)
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className="col-md-12 text-center py-4">
                        <h1 className="text-light text-uppercase bg-primary fw-bold mb-4 py-2">BMI Calculator</h1>
                        <hr></hr>
                    </div>
                    <div className='col-md-3'>
                        <div className='row'>
                            <div className='col-md d-glex jutify-content-center py-2'>
                                <h3>Enter your Height in cm : </h3>
                                <input type="number" className='form-control' onChange={(e) => handleHeight(e)}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md d-glex jutify-content-center py-2'>
                                <h3>Enter your Weight in kg : </h3>
                                <input type="number" className='form-control' onChange={(e) => handleWeight(e)}></input>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md d-glex jutify-content-center py-2'>
                                <button className='btn btn-primary w-100 py-2 mb-3' style={{ fontSize: '25px' }} onClick={(e) => calculateBMI(e)}>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className='container' style={{ visibility: isVisibility ? 'visible' : 'hidden' }}>
                        <div className='row justify-content-center'>
                            <div className='col-md-6 d-glex jutify-content-center'>
                                <h5 className='text-center py-2'>Your BMI is : {result}</h5>
                                <h5 className='text-center py-2'>Your suggested Weight Range is between : {minweight} - {maxweight}</h5>
                                <h5 className='text-center py-2'>Health Status : {healthstatus}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BMICalculator