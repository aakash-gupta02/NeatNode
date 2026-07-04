import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

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
          background: 'linear-gradient(135deg, #09090b 0%, #111827 55%, #18181b 100%)',
          fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        }}
      >
        {/* Subtle Emerald Ambient Glow Overlays */}
        <div
          style={{
            position: 'absolute',
            top: -140,
            right: -100,
            width: 360,
            height: 360,
            borderRadius: 999,
            background: 'rgba(16, 185, 129, 0.12)',
            filter: 'blur(80px)',
            display: 'flex'
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -120,
            bottom: -120,
            width: 320,
            height: 320,
            borderRadius: 999,
            background: 'rgba(16, 185, 129, 0.08)',
            filter: 'blur(80px)',
            display: 'flex'
          }}
        />

        {/* Framing Premium Border */}
        <div
          style={{
            position: 'absolute',
            inset: 40,
            borderRadius: 36,
            border: '1px solid rgba(63, 63, 70, 0.4)',
            display: 'flex'
          }}
        />

        {/* Master Flex Container */}
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
          {/* Left Column: Documentation Metadata & Command */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Eyebrow Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  alignSelf: 'flex-start',
                  padding: '8px 16px',
                  borderRadius: 999,
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  background: 'rgba(9, 9, 11, 0.8)',
                  color: '#cbd5e1',
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: 0.8
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: 999, background: '#34d399', display: 'flex' }} />
                <span>{eyebrow}</span>
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: 62,
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -2,
                  maxWidth: 700,
                  color: '#f8fafc',
                  display: 'flex'
                }}
              >
                {title}
              </div>

              {/* Description */}
              <div
                style={{
                  maxWidth: 680,
                  fontSize: 26,
                  lineHeight: 1.4,
                  color: '#a1a1aa',
                  display: 'flex'
                }}
              >
                {description}
              </div>

              {/* Mini Terminal Execution Block */}
              {command && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    padding: 22,
                    borderRadius: 20,
                    background: '#09090b',
                    border: '1px solid rgba(63, 63, 70, 0.9)',
                    alignSelf: 'flex-start',
                    marginTop: 8,
                    minWidth: 460,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                  }}
                >
                  <div style={{ display: 'flex', gap: 8 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 999, background: '#ef4444', display: 'flex' }} />
                    <div style={{ width: 10, height: 10, borderRadius: 999, background: '#eab308', display: 'flex' }} />
                    <div style={{ width: 10, height: 10, borderRadius: 999, background: '#22c55e', display: 'flex' }} />
                  </div>
                  <div
                    style={{
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                      color: '#34d399',
                      fontSize: 26,
                      fontWeight: 700,
                      display: 'flex'
                    }}
                  >
                    $ {command}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Branding Area */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#e4e4e7', fontSize: 22, fontWeight: 600 }}>
              <img
                src={`${baseUrl}/icons/apple-touch-icon.png`}
                width={36}
                height={36}
                style={{ borderRadius: 8 }}
                alt="NeatNode"
              />
              <span>NeatNode Docs</span>
            </div>
          </div>

          {/* Right Column: Premium Visual Architecture Blocks instead of text tree */}
          <div
            style={{
              width: 360,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 28,
              borderRadius: 28,
              background: 'rgba(9, 9, 11, 0.85)',
              border: '1px solid rgba(63, 63, 70, 0.5)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontSize: 18, color: '#71717a', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', display: 'flex' }}>
                Generated Output
              </div>

              {/* Clean stacked architecture visual pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Routes Config', 'Controller Layer', 'Service Layer', 'Data Model'].map((layer, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 16px',
                      borderRadius: 12,
                      background: 'rgba(24, 24, 27, 0.7)',
                      border: '1px solid rgba(63, 63, 70, 0.4)'
                    }}
                  >
                    {/* Tiny green bullet indicating live module */}
                    <div style={{ width: 8, height: 8, borderRadius: 999, background: '#34d399', display: 'flex' }} />
                    <span style={{ fontSize: 18, color: '#e2e8f0', fontWeight: 500 }}>{layer}</span>
                  </div>
                ))}
              </div>

              {/* Status Message */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                <span style={{ color: '#34d399', fontSize: 18, fontWeight: 700 }}>✓</span>
                <span style={{ color: '#a1a1aa', fontSize: 18 }}>Architecture compiled</span>
              </div>
            </div>

            {/* Target Card Footer */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                paddingTop: 20,
                borderTop: '1px solid rgba(63, 63, 70, 0.4)'
              }}
            >
              <div style={{ fontSize: 18, color: '#34d399', fontWeight: 700, letterSpacing: 0.5, display: 'flex' }}>
                Production Engineered
              </div>
              <div style={{ fontSize: 20, lineHeight: 1.4, color: '#a1a1aa', display: 'flex' }}>
                Skip repetitive architecture setups and ship backend features instantly.
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