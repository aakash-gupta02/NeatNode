import { createDocOgImage, contentType, size } from '../../../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode Basic JavaScript Template Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'Basic Template',
    title: 'Minimal Express starter for small services',
    description:
      'A lightweight foundation for prototypes, experiments, and learning the backend flow without extra layers.',
    command: 'npx neatnode',
    accent: '#22c55e',
    notes: ['Minimal setup', 'CRUD-ready', 'Easy to extend']
  })
}