import React from 'react'
import { useAnnouncements, useCreateAnnouncement } from '../hooks/useAnnouncements';

type Props = {}

const OrganizerDashboard = (props: Props) => {
  const {
    data = [],
  } =
    useAnnouncements();

  const createAnnouncement =
    useCreateAnnouncement();

  return (
    <div>
      <h1>
        Organizer Dashboard
      </h1>

      <button
        onClick={() =>
          createAnnouncement.mutate(
            {
              title: "Test Announcement",
              body: "Hello",
              target_type: "broadcast",
              id: '',
              event_id: '',
              created_by: '',
              target_id: '',
              created_at: ''
            }
          )
        }
      >
        Broadcast
      </button>

      {data.map(
        (announcement) => (
          <div
            key={
              announcement.id
            }
          >
            {
              announcement.title
            }
          </div>
        )
      )}
    </div>
  );
}

export default OrganizerDashboard