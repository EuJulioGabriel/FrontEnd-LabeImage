import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import GetFeed from './GetFeed'
import { ContainerPageAllImage } from '../PageAllImages/StylePageAllImages'
import { DescriptionPage } from '../PageCreateImage/StylePageCreateImage'

function PageFeed() {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        
        if (token === null) {
            history.push("/")
        }
        
    }, [history])

    return (
        <ContainerPageAllImage>
            <DescriptionPage>Feed</DescriptionPage>
            <GetFeed />
        </ContainerPageAllImage>
    )
}

export default PageFeed