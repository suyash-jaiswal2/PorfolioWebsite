import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Suyash Jaiswal - Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#fdfcfb',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              backgroundColor: '#1b4fd8',
              color: 'white',
              fontSize: '32px',
              fontWeight: 800,
              fontFamily: 'monospace',
            }}
          >
            SJ.
          </div>
        </div>

        <h1
          style={{
            fontSize: '80px',
            fontWeight: 800,
            lineHeight: 1.1,
            color: '#1a1a1a',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Suyash</span>
          <span style={{ color: '#1b4fd8' }}>Jaiswal</span>
        </h1>

        <p
          style={{
            fontSize: '36px',
            color: '#666666',
            margin: 0,
            marginTop: '20px',
          }}
        >
          Computer Science Engineer
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
