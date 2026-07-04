import { createDocOgImage, contentType, size } from '../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode Getting Started Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'Getting Started',
    title: 'Install, scaffold, and launch your first app',
    description:
      'Follow the quick onboarding flow, create a project with NeatNode, and start the dev server in minutes.',
    command: 'npx neatnode',
    accent: '#14b8a6',
    notes: ['Interactive CLI flow', 'First project setup', 'Resource generation next']
  })
}