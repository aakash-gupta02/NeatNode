import { createDocOgImage, contentType, size } from '../../../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode REST API JavaScript Template Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'REST API Template',
    title: 'Resource generation for scalable Express APIs',
    description:
      'Generate controllers, services, routes, validation, and models while keeping the route registry in sync.',
    command: 'neatnode g resource user',
    accent: '#10b981',
    notes: ['MVC or modular layout', 'Overwrite protection', 'Automatic route imports']
  })
}