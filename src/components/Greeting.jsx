import Skills from "./Skills";

// const Greeting = ({ player }) => {
//   return (
//     <div className="greeting-card">
//       <h1>Hello, I'm {player.name} 👋</h1>
//       <h4>{player.role}</h4>
//       {player.skills.length >= 1 && (
//         <>
//           <p className="greeting-card__message">{player.bio}</p>
//           <Skills skills={player.skills} />
//         </>
//       )}
//     </div>
//   );
// };

// export default Greeting;

const Greeting = ({ player }) => {
  return (
    <section className="greeting-card">
      <h1>Hello, I'm {player.name} 👋</h1>
      <p className="greeting-card__role">{player.role}</p>
      <p className="greeting-card__message">{player.bio}</p>
      <Skills skills={player.skills} />
    </section>
  );
};

export default Greeting;
