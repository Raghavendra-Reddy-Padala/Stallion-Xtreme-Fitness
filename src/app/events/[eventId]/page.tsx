import EventDetailsPage from '@/components/events/EventDetailspage'

interface PageProps {
  params: Promise<{
    eventId: string
  }>
}

export default async function EventPage({ params }: PageProps) {
  const { eventId } = await params
  return <EventDetailsPage eventId={eventId} />
}

export async function generateStaticParams() {
  return [
    { eventId: 'yoga-event' },
    { eventId: 'deadlift-workshop' },
    { eventId: 'stallion-classic-2' }
  ]
}

export async function generateMetadata({ params }: PageProps) {
  const { eventId } = await params
  
  const eventTitles = {
    'yoga-event': 'Stallion Yoga Event',
    'deadlift-workshop': 'Deadlift Workshop',
    'stallion-classic-2': 'Stallion Classic 2',
    'international-yoga-day': 'International Yoga Day'
  }
  
  return {
    title: eventTitles[eventId as keyof typeof eventTitles] || 'Event Details',
    description: 'Join us for an amazing fitness event at Stallion Xtreme Fitness'
  }
}