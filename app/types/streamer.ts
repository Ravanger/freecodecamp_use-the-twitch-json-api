export type StreamerType = {
  name: string
  isLoading: boolean
  logoUrl: string
  stream?: { game: string; channel: { status: string } }
}
