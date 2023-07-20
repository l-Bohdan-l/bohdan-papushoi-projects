import {ImageGalleryItemStyled, ImageGalleryItemImg } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ webformatURL, tags, getLargeImageURL, openModal }) => { 
    return (
        <ImageGalleryItemStyled onClick={openModal}>   
                <ImageGalleryItemImg src={webformatURL} alt={ tags} onClick={getLargeImageURL} />
        </ImageGalleryItemStyled>
    )
};