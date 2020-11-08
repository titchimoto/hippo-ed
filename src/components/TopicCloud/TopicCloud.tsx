import React, { useState } from 'react';
import classnames from 'classnames';
import { useTopicData } from '../../hooks/useTopicData';

import './TopicCloud.scss';

function TopicCloud() {
  const topics = useTopicData();
  const [matchingTopics, setMatchingTopics] = useState([] as string[])

  const specialties = Array.from(
    new Set(
      topics.reduce(
        (result, topic) => result.concat(...topic.specialties),
        [] as string[]
      )
    )
  );

  const handleSelect = (spec: string) => {
    const matches = topics
      .filter((topic) => topic.specialties.includes(spec))
      .map(({ title }) => title);

    setMatchingTopics(matches);
  }

  return (
    <div className="topic-cloud">
      <div className="topic-cloud__container">
        <div className="topic-cloud__specialties-container">
          <h4 className="topic-cloud__header">Browse Education Topics by Specialty: {" "}</h4>
          {specialties.map((specialty) => (
            <div className="topic-cloud__specialty">
            <div
              className="topic-cloud__specialty-title"
              onMouseEnter={() => handleSelect(specialty)}
            >
              {specialty}
            </div>
            <div className="topic-cloud__specialty-underline" />
            </div>
          ))}
        </div>
        <div className="topic-cloud__topics-container">
          {topics.map((topic) => (
            <div
              className={`
                ${classnames({ 'topic-cloud__topic-selected': matchingTopics.includes(topic.title) })}
                topic-cloud__topic
              `}
            >
              {topic.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopicCloud;
