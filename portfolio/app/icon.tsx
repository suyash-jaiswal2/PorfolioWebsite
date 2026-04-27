import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1b4fd8', // cobalt
          color: 'white',
          fontSize: '18px',
          fontWeight: 800,
          fontFamily: 'monospace',
        }}
      >
        SJ
      </div>
    ),
    {
      ...size,
    }
  )
}
