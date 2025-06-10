import EventDetailsPage from '@/components/events/EventDetailspage'

interface PageProps {
  params: {
    eventId: string
  }
}

export default function EventPage({ params }: PageProps) {
  // No need to await params here - they're automatically passed as props
  return <EventDetailsPage eventId={params.eventId} />
}

export async function generateStaticParams() {
  return [
    { eventId: 'yoga-event' },
    { eventId: 'deadlift-workshop' },
    { eventId: 'stallion-classic-2' }
  ]
}

export async function generateMetadata({ params }: PageProps) {
  const eventTitles = {
    'yoga-event': 'Stallion Yoga Event',
    'deadlift-workshop': 'Deadlift Workshop',
    'stallion-classic-2': 'Stallion Classic 2',
    'international-yoga-day': 'International Yoga Day'
  }
  
  return {
    title: eventTitles[params.eventId as keyof typeof eventTitles] || 'Event Details',
    description: 'Join us for an amazing fitness event at Stallion Xtreme Fitness'
  }
}