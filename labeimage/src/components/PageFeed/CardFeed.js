import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { ContainerInfo, ContainerAlturaMinimo, ContainerCardImage, CabecalhoTitle, HeaderCardFeed } from "./StylePageFeed"

function CardFeed(props) {
    const history = useHistory()

    const [images, setImages] = useState([])

    useEffect(() => {
        setImages(props.images)
    }, [props.images])

    const goToProfileUser = (id) => {
        history.push("/profile/" + id)
    } 

    return (
        <ContainerAlturaMinimo>
            {images.map((image) => {
                return(
                    <ContainerInfo key={image.id}>
                        <ContainerCardImage onClick={() => goToProfileUser(image.author_id)}>
                            <HeaderCardFeed>
                                <h5>{image.name}</h5>
                                <p>{image.createdAt}</p>
                            </HeaderCardFeed>
                            <img src= {image.file}
                                width="200"
                                height="300"
                                alt=""
                            >
                            </img>
                            <CabecalhoTitle>{image.subtitle}</CabecalhoTitle>
                            <p>{image.tags}</p>
                        </ContainerCardImage>
                    </ContainerInfo>
                )
            })}
        </ContainerAlturaMinimo>
    )
}

export default CardFeed