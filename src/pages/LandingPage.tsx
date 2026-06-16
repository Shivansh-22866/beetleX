import { Link } from 'react-router-dom';
import { useEvents } from '../hooks/useEvents';


const LandingPage = () => {
const { data, isLoading } =
    useEvents();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const event = data?.[0];

  if (!event) {
    return <p>No Event Found</p>;
  }

  return (
    <div>
      <h1>{event.title}</h1>

      <p>{event.tagline}</p>

      <Link
        to={`/events`}
      >
        View Events
      </Link>
    </div>
  );
}

export default LandingPage