export function Card({ children }: { children: React.ReactNode }) {
  return <article className="blog-card">{children}</article>;
}
export function Image({ src, alt }: { src: string; alt: string }) {
  return <img className="img" src={src} alt={alt} />;
}
export function Info({ children }: { children: React.ReactNode }) {
  return <div className="info">{children}</div>;
}
export function Label({ label, color }: { label: string; color?: string }) {
  return <span className={`label ${color}`}>{label}</span>;
}
export function Date({ date }: { date: string }) {
  return <p className="date">{date}</p>;
}
export function Title({ title }: { title: string }) {
  return <h2 className="title">{title}</h2>;
}
export function Content({ children }: { children: React.ReactNode }) {
  return <div className="content">{children}</div>;
}
export function Description({ description }: { description: string }) {
  return <p className="description">{description}</p>;
}
export function Instructor({ children }: { children: React.ReactNode }) {
  return <div className="instructor">{children}</div>;
}
export function InstructorImage({ src, alt }: { src: string; alt: string }) {
  return <img className="instructor-img" src={src} alt={alt} />;
}
export function InstructorName({ name }: { name: string }) {
  return <h3 className="instructor-name">{name}</h3>;
}

export default {
  Card,
  Image,
  Info,
  Label,
  Date,
  Title,
  Content,
  Description,
  Instructor,
  InstructorImage,
  InstructorName,
};
