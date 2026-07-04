import { createDocOgImage, contentType, size } from '../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode FAQs Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'FAQs',
    title: 'Answers to the most common NeatNode questions',
    description:
      'Find practical guidance on setup, templates, folder structure, and how generated resources fit together.',
    command: 'npx neatnode',
    accent: '#06b6d4',
    notes: ['Getting started', 'Folder structure', 'Troubleshooting']
  })
}