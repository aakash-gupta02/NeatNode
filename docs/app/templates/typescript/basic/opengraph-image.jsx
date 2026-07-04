import { createDocOgImage, contentType, size } from '../../../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode Basic TypeScript Template Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'Basic Template (TS)',
    title: 'Minimal Express starter with TypeScript',
    description:
      'A clean typed starter for learning, prototypes, and small services that need strict type safety.',
    command: 'npx neatnode',
    accent: '#8b5cf6',
    notes: ['Strict typing', 'Minimal structure', 'Easy to extend']
  })
}