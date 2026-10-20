import { useState } from "react";

const Skills = ({ skills }) => {
  const [list, setList] = useState(skills.slice(0, 3));
  const [word, setWord] = useState(true);
  const [fullListWord, setFullListWord] = useState(
    list.length <= 2 ? false : true,
  );

  const fullList = () => {
    setList(skills);
    console.log(list);
    setFullListWord(false);
  };

  const handleToggle = () => {
    setWord(!word);
  };

  return (
    <>
      {word ? (
        <ul>
          {list.map((skill) => {
            return (
              <li key={skill}>
                <p>{skill}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
      <button onClick={() => handleToggle()}>Toggle</button>
      {fullListWord && (
        <button onClick={() => fullList()}>show all skills</button>
      )}
    </>
  );
};
export default Skills;
