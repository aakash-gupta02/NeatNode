import { createDocOgImage, contentType, size } from '../../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode Quickstart Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'Quickstart',
    title: 'Go from npx to running backend in under a minute',
    description:
      'Create a project, install dependencies, and run the dev server before scaffolding your first resource.',
    command: 'npx neatnode',
    accent: '#22c55e',
    notes: ['Fast setup', 'Clean project structure', 'Resource generation follow-up']
  })
}