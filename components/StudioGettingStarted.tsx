export default function StudioGettingStarted() {
  return (
    <div
      style={{
        minHeight: '100%',
        backgroundColor: '#f7f7f7',
        padding: '48px 24px',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        {/* Header */}
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: '#191919',
            marginBottom: 12,
            marginTop: 0,
          }}
        >
          Welcome to your Apex Narrative CMS
        </h1>
        <p style={{ fontSize: 16, color: '#555', marginBottom: 40, lineHeight: 1.6 }}>
          This is where you manage the content that appears on the Apex Narrative
          website. You can add, edit, and remove portfolio projects — no developer
          needed.
        </p>

        {/* What you can do */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 24,
            marginBottom: 24,
            border: '1px solid #e5e5e5',
          }}
        >
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: '#191919',
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            What you can do here
          </h2>
          <ul style={{ paddingLeft: 20, margin: 0, color: '#333', lineHeight: 1.9, fontSize: 15 }}>
            <li>
              <strong>Add a new portfolio project</strong> — show off new work on the Work page.
            </li>
            <li>
              <strong>Edit existing projects</strong> — update titles, descriptions, thumbnails, or video links.
            </li>
            <li>
              <strong>Feature a project</strong> — tick the &quot;Featured&quot; box to show it on the homepage.
            </li>
            <li>
              <strong>Remove a project</strong> — if it&apos;s no longer relevant.
            </li>
          </ul>
        </div>

        {/* How to add a project */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 24,
            marginBottom: 24,
            border: '1px solid #e5e5e5',
          }}
        >
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: '#191919',
              marginTop: 0,
              marginBottom: 20,
            }}
          >
            How to add a new project
          </h2>

          {[
            { step: 1, text: 'Click Portfolio Items in the left sidebar.' },
            { step: 2, text: 'Click the + button at the top of the list to create a new project.' },
            {
              step: 3,
              text: 'Fill in the details: title, client, service type, media type, thumbnail, and description.',
            },
            {
              step: 4,
              text: 'Click the blue Publish button at the top right — or press Ctrl + Alt + P. Your project will appear on the website within a minute.',
            },
          ].map(({ step, text }) => (
            <div
              key={step}
              style={{ display: 'flex', gap: 16, marginBottom: 16, alignItems: 'flex-start' }}
            >
              <div
                style={{
                  minWidth: 28,
                  height: 28,
                  borderRadius: '50%',
                  backgroundColor: '#e8a519',
                  color: '#191919',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                {step}
              </div>
              <p style={{ margin: 0, color: '#333', fontSize: 15, lineHeight: 1.6 }}>{text}</p>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div
          style={{
            backgroundColor: '#fffbe6',
            borderRadius: 8,
            padding: 24,
            marginBottom: 32,
            border: '1px solid #f0d77a',
          }}
        >
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: '#191919',
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            A few tips
          </h2>
          <ul style={{ paddingLeft: 20, margin: 0, color: '#333', lineHeight: 1.9, fontSize: 15 }}>
            <li>
              💡 <strong>Always click Publish</strong> — otherwise your changes stay as a private draft and won&apos;t show on the site.
            </li>
            <li>
              💡 <strong>Thumbnails matter</strong> — use high-quality images (at least 1200px wide).
            </li>
            <li>
              💡 <strong>&quot;Featured&quot;</strong> — tick this only if you want the project to appear on the homepage.
            </li>
            <li>
              💡 <strong>Made a mistake?</strong> — you can edit or delete anything, anytime.
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: '#666', marginBottom: 12 }}>
            Ready to get started?
          </p>
          <a
            href="/studio/structure/portfolioItem"
            style={{
              display: 'inline-block',
              backgroundColor: '#e8a519',
              color: '#191919',
              fontWeight: 600,
              padding: '12px 24px',
              borderRadius: 6,
              textDecoration: 'none',
              fontSize: 15,
            }}
          >
            Open Portfolio Items →
          </a>
        </div>
      </div>
    </div>
  );
}