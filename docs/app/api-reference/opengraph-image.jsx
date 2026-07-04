import { createDocOgImage, contentType, size } from '../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode API Reference Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'API Reference',
    title: 'CLI commands, config, and options in one place',
    description:
      'Use this reference when you need exact command syntax, configuration details, or option behavior.',
    command: 'neatnode --help',
    accent: '#14b8a6',
    notes: ['Commands', 'Configuration', 'CLI options']
  })
}