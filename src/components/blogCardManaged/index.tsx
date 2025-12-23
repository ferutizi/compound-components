import { createContext, use } from "react";

export type BlogCardProps = {
  title: string;
  imageMain: string;
  altMain: string;
  info: {
    label: string;
    date: string;
  };
  content: {
    description: string;
    instructorImage: string;
    instructorAlt: string;
    instructorName: string;
  };
};

const BlogCardContext = createContext<BlogCardProps | null>(null);

export function Root({
  children,
  value,
}: {
  children: React.ReactNode;
  value: BlogCardProps;
}) {
  return (
    <BlogCardContext.Provider value={value}>
      {children}
    </BlogCardContext.Provider>
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  return <article className="blog-card">{children}</article>;
}
export function Image() {
  const { imageMain, altMain } = use(BlogCardContext)!;
  return <img className="img" src={imageMain} alt={altMain} />;
}
export function Info({ children }: { children: React.ReactNode }) {
  return <div className="info">{children}</div>;
}
export function Label() {
  const { info } = use(BlogCardContext)!;
  return <span className={`label`}>{info.label}</span>;
}
export function Date() {
  const { info } = use(BlogCardContext)!;
  return <p className="date">{info.date}</p>;
}
export function Title() {
  const { title } = use(BlogCardContext)!;
  return <h2 className="title">{title} - Managed</h2>;
}
export function Content({ children }: { children: React.ReactNode }) {
  return <div className="content">{children}</div>;
}
export function Description() {
  const { content } = use(BlogCardContext)!;
  return <p className="description">{content.description}</p>;
}
export function Instructor({ children }: { children: React.ReactNode }) {
  return <div className="instructor">{children}</div>;
}
export function InstructorImage() {
  const { content } = use(BlogCardContext)!;
  const { instructorAlt, instructorImage } = content;
  return (
    <img className="instructor-img" src={instructorImage} alt={instructorAlt} />
  );
}
export function InstructorName() {
  const { content } = use(BlogCardContext)!;
  return <h3 className="instructor-name">{content.instructorName}</h3>;
}

export default {
  Root,
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
