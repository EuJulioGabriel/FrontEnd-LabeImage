import React, { useState, useEffect } from 'react'
import { ContainerInfo, ContainerAlturaMinimo, ContainerCardImage, CabecalhoTitle } from "../PageAllImages/StylePageAllImages"

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
                        <ContainerCardImage>
                            <img src= {image.file}
                                width="100"
                                height="100"
                                alt=""
                            >
                            </img>
                            <CabecalhoTitle>{image.subtitle}</CabecalhoTitle>
                        </ContainerCardImage>
                    </ContainerInfo>
                )
            })}
        </ContainerAlturaMinimo>
    )
}

export default CardImage