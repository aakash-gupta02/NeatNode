import { createDocOgImage, contentType, size } from '../../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode JavaScript Templates Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'JavaScript Templates',
    title: 'Opinionated Express templates in plain JavaScript',
    description:
      'Start quickly with a minimal setup, then scale into REST or Socket.IO projects when the app grows.',
    command: 'npx neatnode',
    accent: '#f97316',
    notes: ['Basic JS', 'REST API JS', 'Socket.IO JS']
  })
}