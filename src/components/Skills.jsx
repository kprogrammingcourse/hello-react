import { useState } from "react";

const VISIBLE_COUNT = 3;

export default function Skills({ skills = [] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (skills.length === 0) {
    return null;
  }

  const visibleSkills = isExpanded ? skills : skills.slice(0, VISIBLE_COUNT);
  const hasMoreSkills = skills.length > VISIBLE_COUNT;

  function toggleSkills() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div>
      <ul>
        {visibleSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      {hasMoreSkills && (
        <button type="button" onClick={toggleSkills} aria-expanded={isExpanded}>
          {isExpanded ? "Show less" : `Show all (${skills.length})`}
        </button>
      )}
    </div>
  );
}
