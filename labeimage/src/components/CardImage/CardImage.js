import React, { useState, useEffect } from 'react'
import { ContainerInfo, ContainerAlturaMinimo } from "../PageAllImages/StylePageAllImages"

function CardImage(props) {
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages(props.images)
    }, [props.images])

    return (
        <ContainerAlturaMinimo>
            {images.map((image) => {
                return(
                    <ContainerInfo key={image.id} onClick={() => props.openModalImage(image.id)}>
                        <img src= {image.file}
                            width="100"
                            height="100">
                        </img>
                        <h2>{image.subtitle}</h2>
                    </ContainerInfo>
                )
            })}
        </ContainerAlturaMinimo>
    )
}

export default CardImage