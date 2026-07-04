import { createDocOgImage, contentType, size } from '../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode Guides Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'Guides',
    title: 'Understand structure, customization, and resource generation',
    description:
      'Learn how the docs templates are organized, how generated files fit together, and how to extend them safely.',
    command: 'neatnode g resource user',
    accent: '#8b5cf6',
    notes: ['Folder structure', 'Generated files', 'Customization tips']
  })
}