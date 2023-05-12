"use client";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'


const CustomModal = (
    {
        isOpen,
        onClose,
        size,
        children
    }) => {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                motionPreset='slideInBottom'
                size={size}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        {children}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CustomModal