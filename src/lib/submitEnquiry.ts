// TODO: replace with real API integration (POST /api/enquiries).
// Kept as a single isolated function so wiring a backend later touches one file.

export type EnquiryPayload = {
  type: 'quote' | 'callback' | 'contact'
  fields: Record<string, string>
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  // Simulate network latency so success/error states are exercised in dev.
  await new Promise((resolve) => setTimeout(resolve, 900))

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info('[enquiry:stub]', payload)
  }
  // No real transport yet — swap this for fetch() when the endpoint exists.
}
