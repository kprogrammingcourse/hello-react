import { useState } from "react";

const Skills = ({ skills }) => {
  if (skills === undefined) {
    skills = [];
  }
  let wholeList = skills.slice(0, 3);
  const [list, setList] = useState(wholeList);

  const showList = () => {
    if (list.length <= 3) {
      setList(skills);
    } else if (list.length > 3) {
      setList(skills.slice(0, 3));
    }
  };

  return (
    <>
      {skills.length > 0 && (
        <>
          <ul>
            {list.map((skill) => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
          {skills.length > 3 && (
            <button type="button" onClick={showList}>
              {list.length <= 3 ? `Show all (${skills.length})` : "Show less"}
            </button>
          )}
        </>
      )}
    </>
  );
};
export default Skills;
