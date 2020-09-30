import React from 'react';
import { useTopicData } from '../../hooks/useTopicData';

import './TopicCloud.scss';

function TopicCloud() {
  const topics = useTopicData();

  const specialties = Array.from(
    new Set(
      topics.reduce(
        (result, topic) => result.concat(...topic.specialties),
        [] as string[]
      )
    )
  );

  return (
    <div className="topic-cloud">
      <div>
        <h4>Browse Education Topics by Specialty</h4>
        {specialties.map((specialty) => (
          <span>{specialty}</span>
        ))}
      </div>
      <div>
        {topics.map((topic) => (
          <span>{topic.title}</span>
        ))}
      </div>
    </div>
  );
}

export default TopicCloud;
