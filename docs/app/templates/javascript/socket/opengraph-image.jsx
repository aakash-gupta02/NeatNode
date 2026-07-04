import { createDocOgImage, contentType, size } from '../../../_components/OgImage.jsx'

export { contentType, size }

export const alt = 'NeatNode Socket.IO JavaScript Template Open Graph image'

export default function Image() {
  return createDocOgImage({
    eyebrow: 'Socket.IO Template',
    title: 'Real-time Express backends with Socket.IO',
    description:
      'Use the built-in event structure for chat, dashboards, and realtime workflows with a shared HTTP server.',
    command: 'npx neatnode',
    accent: '#0ea5e9',
    notes: ['Realtime events', 'Shared server', 'Event modules']
  })
}