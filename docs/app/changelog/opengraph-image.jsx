import { createDocOgImage, contentType, size } from '../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode Changelog Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'Changelog',
    title: 'Track releases, improvements, and migration notes',
    description:
      'Keep up with the latest docs and CLI updates, including resource generation and template changes.',
    command: 'v3.4.0',
    accent: '#f97316',
    notes: ['Release notes', 'Migration context', 'Feature history']
  })
}