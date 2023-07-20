import {Overlay} from './Modal.styled'

export const Modal = ({ onClose, children }) => { 
    const handleKeyDown = e => { 
        if (e.code === 'Escape') {             
            onClose()
        }
        return
    }

    window.addEventListener('keydown', handleKeyDown)

    const handleBackdropClick = e => { 
        if (e.currentTarget === e.target) { 
            onClose()
        }
    }
    return (
        <Overlay onClick={handleBackdropClick}>
            <div >
                {children}
            </div>
        </Overlay>
    )
};