import React from 'react'
import { useAnnouncements } from '../hooks/useAnnouncements';
import { useGetProjects } from '../hooks/useProjects';

const TeamDashboard = () => {
const {
    data: projects,
  } = useGetProjects();

  const {
    data: announcements,
  } = useAnnouncements();

  return (
    <div>
      <h1>
        Team Dashboard
      </h1>

      <h2>
        Project Status
      </h2>

      {projects?.map(
        (project) => (
          <div key={project.id}>
            {project.title}
            {" - "}
            {project.status}
          </div>
        )
      )}

      <h2>
        Announcements
      </h2>

      {announcements?.map(
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

export default TeamDashboard