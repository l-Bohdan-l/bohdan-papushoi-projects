import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryList } from './ImageGallery.styled'
import { Modal } from "../../Modal/Modal"
import { useState } from "react"

export const ImageGallery = ({ images }) => {
    const [showModal, setShowModal] = useState(false);
    const [largeImageURL, setLargeImageURL] = useState('');
    const [tags, setTags] = useState('');

    const toggleModal = () => { 
        setShowModal(!showModal)
    };

    const getLargeImageURL = (largeImageURL, tags) => { 
        setLargeImageURL(largeImageURL)
        setTags(tags)
    }
    return (
        <ImageGalleryList>
            {showModal && <Modal onClose={toggleModal}>
                <img src={largeImageURL} alt={tags} />
            </Modal>}
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem openModal={ toggleModal } key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} getLargeImageURL={() => {getLargeImageURL(largeImageURL, tags)}} />
            ))}
        </ImageGalleryList>

    )

 }