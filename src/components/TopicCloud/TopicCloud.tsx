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
              {/* This was a (potential) attempt to work around animating font-weight to the heavier, bolder
              weight, which caused some really glitchy/rough animation artifacts. Some work
              would still be required to prevent the layout shifting when the "bolder" weight
              is active, due to it taking up more horizontal space in the dom. */}
               {matchingTopics.includes(topic.title) ? (
               <strong className="topic-cloud__topic-hover">{topic.title}</strong>
               ) : (
                 <span className="topic-cloud__topic-regular">{topic.title}</span>
               )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopicCloud;
