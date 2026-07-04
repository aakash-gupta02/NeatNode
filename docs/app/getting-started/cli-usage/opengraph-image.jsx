import { createDocOgImage, contentType, size } from '../../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode CLI Usage Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'CLI Usage',
    title: 'Create a project and generate your first resource',
    description:
      'See the interactive CLI prompts, then jump straight into resource generation when the scaffold is ready.',
    command: 'neatnode g resource user',
    accent: '#0ea5e9',
    notes: ['Interactive prompts', 'First resource workflow', '--force support']
  })
}