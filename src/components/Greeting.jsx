import Skills from "./Skills";

export default function Greeting({ profile }) {
  console.log(profile);
  return (
    <section className="greeting-card">
      <h1>Hello, I'm {profile.name} 👋</h1>
      <p className="greeting-card__role">{profile.role}</p>
      <Skills skills={profile.skills} />
      <p className="greeting-card__message">
        This is my first React application, built with Vite. Every app in this
        portfolio builds on the one before it.
      </p>
    </section>
  );
}
