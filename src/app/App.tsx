import { Button } from '../5rDesignSystem/components/Button'
import '../5rDesignSystem/styles.css'

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--background)',
      padding: 'var(--2xl)px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'var(--surface/light)',
        padding: 'var(--xl)px',
        borderRadius: 'var(--rounded-none)'
      }}>
        <h1 style={{
          color: 'var(--color/neutral/000)',
          marginBottom: 'var(--xl)px',
          fontSize: '32px',
          fontWeight: 600
        }}>
          5R Design System - Button Component
        </h1>

        {/* Variants Section */}
        <section style={{ marginBottom: 'var(--3xl)px' }}>
          <h2 style={{
            color: 'var(--color/neutral/100)',
            marginBottom: 'var(--md)px',
            fontSize: '24px',
            fontWeight: 500
          }}>
            Variants
          </h2>
          <div style={{
            display: 'flex',
            gap: 'var(--md)px',
            flexWrap: 'wrap'
          }}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="tertiary">Tertiary Button</Button>
          </div>
        </section>

        {/* Sizes Section */}
        <section style={{ marginBottom: 'var(--3xl)px' }}>
          <h2 style={{
            color: 'var(--color/neutral/100)',
            marginBottom: 'var(--md)px',
            fontSize: '24px',
            fontWeight: 500
          }}>
            Sizes
          </h2>
          <div style={{
            display: 'flex',
            gap: 'var(--md)px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </section>

        {/* States Section */}
        <section style={{ marginBottom: 'var(--3xl)px' }}>
          <h2 style={{
            color: 'var(--color/neutral/100)',
            marginBottom: 'var(--md)px',
            fontSize: '24px',
            fontWeight: 500
          }}>
            States
          </h2>
          <div style={{
            display: 'flex',
            gap: 'var(--md)px',
            flexWrap: 'wrap'
          }}>
            <Button variant="primary">Normal</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </section>

        {/* Full Width Section */}
        <section style={{ marginBottom: 'var(--3xl)px' }}>
          <h2 style={{
            color: 'var(--color/neutral/100)',
            marginBottom: 'var(--md)px',
            fontSize: '24px',
            fontWeight: 500
          }}>
            Full Width
          </h2>
          <Button variant="primary" size="large" fullWidth>
            Full Width Button
          </Button>
        </section>

        {/* Interactive Example */}
        <section style={{ marginBottom: 'var(--3xl)px' }}>
          <h2 style={{
            color: 'var(--color/neutral/100)',
            marginBottom: 'var(--md)px',
            fontSize: '24px',
            fontWeight: 500
          }}>
            Interactive
          </h2>
          <Button
            variant="primary"
            onClick={() => alert('Button clicked! 🎉')}
          >
            Click Me
          </Button>
        </section>

        {/* Combined Example */}
        <section>
          <h2 style={{
            color: 'var(--color/neutral/100)',
            marginBottom: 'var(--md)px',
            fontSize: '24px',
            fontWeight: 500
          }}>
            Real-World Example
          </h2>
          <div style={{
            backgroundColor: 'var(--card-background)',
            padding: 'var(--xl)px',
            borderRadius: 'var(--rounded-none)',
            border: '1px solid var(--color/neutral/800)'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 500,
              marginBottom: 'var(--sm)px',
              color: 'var(--color/neutral/000)'
            }}>
              Subscribe to Newsletter
            </h3>
            <p style={{
              color: 'var(--color/neutral/600)',
              marginBottom: 'var(--lg)px'
            }}>
              Get the latest updates and design system news
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--md)px',
              flexWrap: 'wrap'
            }}>
              <Button variant="primary" size="large">
                Subscribe Now
              </Button>
              <Button variant="tertiary" size="large">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}