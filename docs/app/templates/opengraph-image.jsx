import { createDocOgImage, contentType, size } from '../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode Templates Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'Templates',
    title: 'Built-in project blueprints for Express backends',
    description:
      'Choose the right template for quick prototypes, real-time apps, or scalable APIs with resource generation.',
    command: 'npx neatnode',
    accent: '#f59e0b',
    notes: ['Basic template', 'REST API template', 'Socket.IO template']
  })
}