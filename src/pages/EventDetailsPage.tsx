import { Link, useParams } from 'react-router-dom';
import { useEvent } from '../hooks/useEvents';

type Props = {}

const EventDetailsPage = (props: Props) => {
  const { eventId } =
    useParams();

  const { data, isLoading } =
    useEvent(eventId!);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Not Found</p>;
  }

  return (
    <div>
      <h1>{data.title}</h1>

      <p>{data.description}</p>

      <Link
        to={`/register/${data.id}`}
      >
        Register
      </Link>
    </div>
  );
}

export default EventDetailsPage