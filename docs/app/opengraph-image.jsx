import { createDocOgImage, contentType, size } from './_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode Docs Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'NeatNode Docs',
    title: 'Production-ready Node.js documentation',
    description:
      'Scaffold backend projects, explore templates, and generate complete resources with a single command.',
    command: 'npx neatnode',
    accent: '#10b981',
    notes: ['Installation and quickstart', 'Templates and guides', 'Resource generation support']
  })
}