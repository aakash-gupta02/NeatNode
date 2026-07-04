import { createDocOgImage, contentType, size } from '../../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode Resource Generation Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'Resource Generation',
    title: 'Generate a complete backend resource with one command',
    description:
      'NeatNode creates controllers, services, routes, validation, and models, then updates the route registry automatically.',
    command: 'neatnode g resource user',
    accent: '#10b981',
    notes: ['Overwrite protection', '--force support', 'Route registration updates']
  })
}