import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type ModalKind = 'quote' | 'callback' | null

export type ModalPayload = {
  serviceSlug?: string
  serviceTitle?: string
  source?: string
}

type ModalContextValue = {
  kind: ModalKind
  payload: ModalPayload
  openModal: (kind: Exclude<ModalKind, null>, payload?: ModalPayload) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [kind, setKind] = useState<ModalKind>(null)
  const [payload, setPayload] = useState<ModalPayload>({})

  const openModal = useCallback<ModalContextValue['openModal']>(
    (k, p = {}) => {
      setPayload(p)
      setKind(k)
    },
    [],
  )

  const closeModal = useCallback(() => {
    setKind(null)
    setPayload({})
  }, [])

  const value = useMemo(
    () => ({ kind, payload, openModal, closeModal }),
    [kind, payload, openModal, closeModal],
  )

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used inside <ModalProvider>')
  return ctx
}
