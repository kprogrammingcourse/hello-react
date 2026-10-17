export default function Greeting({ name, role }) {
  return (
    <section className="greeting-card">
      <h1>Hello, I'm {name} 👋</h1>
      <p className="greeting-card__role">{role}</p>
      <p className="greeting-card__message">
        This is my first React application, built with Vite. Every app in this
        portfolio builds on the one before it.
      </p>
    </section>
  );
}
