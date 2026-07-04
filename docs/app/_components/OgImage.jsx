import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

export function createDocOgImage({
  eyebrow,
  title,
  description,
  command,
  accent = '#10b981',
  notes = []
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          color: '#f8fafc',
          background:
            'radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.22), transparent 34%), radial-gradient(circle at 80% 10%, rgba(34, 197, 94, 0.18), transparent 28%), linear-gradient(135deg, #020617 0%, #071827 48%, #0f172a 100%)',
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 40,
            borderRadius: 36,
            border: '1px solid rgba(148, 163, 184, 0.16)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -90,
            top: -90,
            width: 260,
            height: 260,
            borderRadius: '999px',
            background: 'rgba(16, 185, 129, 0.18)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: -120,
            bottom: -120,
            width: 340,
            height: 340,
            borderRadius: '999px',
            background: 'rgba(14, 165, 233, 0.16)'
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            width: '100%',
            height: '100%',
            padding: 64,
            gap: 44,
            alignItems: 'stretch'
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div
                style={{
                  display: 'flex',
                  alignSelf: 'flex-start',
                  padding: '10px 16px',
                  borderRadius: 999,
                  border: `1px solid ${accent}`,
                  background: 'rgba(15, 23, 42, 0.7)',
                  color: '#cbd5e1',
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: 0.8
                }}
              >
                {eyebrow}
              </div>

              <div
                style={{
                  fontSize: 68,
                  lineHeight: 1.02,
                  fontWeight: 800,
                  letterSpacing: -2,
                  maxWidth: 760,
                  textWrap: 'balance'
                }}
              >
                {title}
              </div>

              <div
                style={{
                  maxWidth: 730,
                  fontSize: 30,
                  lineHeight: 1.35,
                  color: '#cbd5e1'
                }}
              >
                {description}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  marginTop: 8,
                  alignSelf: 'flex-start'
                }}
              >
                <div
                  style={{
                    fontSize: 22,
                    color: '#94a3b8',
                    fontWeight: 700,
                    letterSpacing: 0.6,
                    textTransform: 'uppercase'
                  }}
                >
                  Try this command
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '18px 22px',
                    borderRadius: 22,
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(148, 163, 184, 0.22)',
                    boxShadow: '0 22px 50px rgba(2, 6, 23, 0.45)',
                    fontSize: 28,
                    fontWeight: 700,
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                    color: '#f8fafc'
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 999,
                      background: accent,
                      boxShadow: `0 0 0 6px rgba(16, 185, 129, 0.14)`
                    }}
                  />
                  {command}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#94a3b8', fontSize: 22 }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: accent
                }}
              />
              NeatNode Docs
            </div>
          </div>

          <div
            style={{
              width: 360,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 28,
              borderRadius: 28,
              background: 'rgba(15, 23, 42, 0.88)',
              border: '1px solid rgba(148, 163, 184, 0.18)',
              boxShadow: '0 24px 60px rgba(2, 6, 23, 0.38)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontSize: 20, color: '#94a3b8', fontWeight: 700, letterSpacing: 0.6 }}>
                What you get
              </div>

              {notes.map((note, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '14px 16px',
                    borderRadius: 18,
                    background: 'rgba(30, 41, 59, 0.85)',
                    border: '1px solid rgba(148, 163, 184, 0.12)',
                    fontSize: 22,
                    lineHeight: 1.25,
                    color: '#e2e8f0'
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: accent,
                      flexShrink: 0
                    }}
                  />
                  {note}
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                paddingTop: 20,
                marginTop: 12,
                borderTop: '1px solid rgba(148, 163, 184, 0.16)'
              }}
            >
              <div style={{ fontSize: 20, color: '#94a3b8', fontWeight: 700 }}>Route-aware image</div>
              <div style={{ fontSize: 24, lineHeight: 1.35, color: '#cbd5e1' }}>
                Every docs section gets its own Open Graph card through the Next.js file convention.
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  )
}