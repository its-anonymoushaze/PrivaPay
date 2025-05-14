import React from 'react'
import Modal from '../modal.component'

interface CreateOrganizationModalProps {
    open: boolean
    close: () => void
}

const CreateOrganizationModal = ({open, close}:CreateOrganizationModalProps) => {
  return (
    <Modal title="Create Organization" isOpen={open} onClose={close}>
      <div>CreateOrganizationModal</div>
    </Modal>
  )
}

export default CreateOrganizationModal