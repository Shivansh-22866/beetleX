import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useEvents } from '../hooks/useEvents';

const EventListingPage = () => {
  const { data = [] } =
    useEvents();

  const [search, setSearch] =
    useState("");

  const filtered =
    data.filter((event) =>
      event.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div>
      <h1>Events</h1>

      <input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {filtered.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>

          <p>{event.status}</p>

          <Link
            to={`/events/${event.id}`}
          >
            Open
          </Link>
        </div>
      ))}
    </div>
  );
}

export default EventListingPage