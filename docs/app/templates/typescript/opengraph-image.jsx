import { createDocOgImage, contentType, size } from '../../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode TypeScript Templates Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'TypeScript Templates',
    title: 'Typed Express templates for scalable backends',
    description:
      'Get strict typing, clear structure, and a production-friendly REST API template with modern conventions.',
    command: 'npx neatnode',
    accent: '#6366f1',
    notes: ['Basic TS', 'REST API TS', 'Strict typing']
  })
}