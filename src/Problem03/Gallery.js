import axios from 'axios'
import React, { useState } from 'react'
import Modal from './Modal'
import './Gallery.css'


const Gallery = () => {
    const [image, setImage] = useState([])
    const [preview, setPreview] = useState(null)

    axios.get("https://pixabay.com/api/?key=31169273-e0a03a9bd545a2344d46f8010&q=nature&image_type=photo").then((res) => setImage(res.data.hits)).catch((err) => ("Please check the API Provided"))

     const previewImage = (imgSrc) => {
         setPreview(imgSrc)
         
     }

    return (
        <div>
            <div className="container my-3 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-primary text-center'>Photo Gallery</h1>
                        <hr></hr>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        image.map((item) => (
                            <div className="col-md-4 mb-5">
                                <div className="card h-100 text-center p-3" style={{ width: "25rem" }}>
                                    <img src={item.largeImageURL} className="card-img-top" onClick={() => previewImage(item.largeImageURL)} alt={item.tags} height="280px" />
                                    <div className="card-body">
                                        <h5 className="card-title lead fw-bold mb-0">Image By : {item.user}</h5>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {preview && (<Modal preview={preview} setPreview={setPreview}></Modal>)}
        </div>
    )
}

export default Gallery