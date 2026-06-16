import { useState } from 'react'
import { useSubmitProject } from '../hooks/useProjects';

const SubmissionPage = () => {
  const submitProject =
    useSubmitProject();

  const [projectId] =
    useState("project-1");

  return (
    <div>
      <h1>
        Submit Project
      </h1>

      <button
        onClick={() =>
          submitProject.mutate(
            projectId
          )
        }
      >
        Submit
      </button>
    </div>
  );
}

export default SubmissionPage