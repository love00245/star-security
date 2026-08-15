import { Modal } from './Modal'
import { useModal } from '../../context/ModalContext'
import { LeadForm } from '../forms/LeadForm'
import { CallbackForm } from '../forms/CallbackForm'

export function ModalRoot() {
  const { kind, payload, closeModal } = useModal()

  return (
    <>
      <Modal
        open={kind === 'quote'}
        onClose={closeModal}
        title={
          payload.serviceTitle
            ? `Get a Quote — ${payload.serviceTitle}`
            : 'Get a Quote'
        }
        description="Share a few details and our team will call you within one business day with a quote."
        size="lg"
      >
        <LeadForm
          onClose={closeModal}
          preselectedServiceSlug={payload.serviceSlug}
        />
      </Modal>

      <Modal
        open={kind === 'callback'}
        onClose={closeModal}
        title="Request a Callback"
        description="Leave your number and our team will call you back."
        size="md"
      >
        <CallbackForm onClose={closeModal} />
      </Modal>
    </>
  )
}
