import React from 'react'
import { useSubmitScore } from '../hooks/useSubmitScore';
import { useJudgeProjects } from '../hooks/useJudgeProjects';

const JudgeDashboard = () => {
  const {
    data = [],
  } =
    useJudgeProjects(
      "judge-1"
    );

  const submitScore =
    useSubmitScore();

  return (
    <div>
      <h1>
        Judge Dashboard
      </h1>

      {data.map(
        (project) => (
          <div
            key={project.id}
          >
            <h3>
              {project.title}
            </h3>

            <button
              onClick={() =>
                submitScore.mutate({
                  judge_id: "judge-1",
                  project_id: project.id,
                  innovation: 8,
                  impact: 8,
                  presentation: 8,
                  id: '',
                  comments: '',
                  review_status: 'pending',
                  scored_at: undefined
                })
              }
            >
              Score
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default JudgeDashboard