import { createDocOgImage, contentType, size } from '../../../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode REST API TypeScript Template Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'REST API Template (TS)',
    title: 'Type-safe modular APIs with resource generation',
    description:
      'Build scalable APIs with Zod validation, typed middleware, and automatic resource scaffolding.',
    command: 'neatnode g resource user',
    accent: '#10b981',
    notes: ['Core + Shared + Modules', 'Zod validation', 'Automatic route updates']
  })
}