import { createDocOgImage, contentType, size } from '../../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode Generated Files Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'Generated Files',
    title: 'See exactly what NeatNode creates for a resource',
    description:
      'A visual tree and short explanation for each generated file so the architecture is easy to understand.',
    command: 'neatnode g resource user',
    accent: '#38bdf8',
    notes: ['Controllers and services', 'Routes and validation', 'Models and registry updates']
  })
}