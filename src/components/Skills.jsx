import { useState } from "react";

const Skills = ({ skills }) => {
  const [list, setList] = useState(skills.slice(0, 3));

  const functionOne = () => {
    if (list.length <= 3) {
      setList(skills);
    } else if (list.length === 6) {
      setList(skills.slice(0, 3));
    }
  };

  return (
    <>
      {skills.length > 0 && (
        <>
          <ul>
            {list.map((skill) => {
              return (
                <li key={skill}>
                  <p>{skill}</p>
                </li>
              );
            })}
          </ul>
          {skills.length > 3 && (
            <button onClick={() => functionOne()}>
              {list.length <= 3 ? `show more (${skills.length})` : "show less"}
            </button>
          )}
        </>
      )}
    </>
  );
};
export default Skills;
