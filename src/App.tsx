import "./App.css";
import {
  Default,
  WithoutInfo,
  Info,
  type BlogCardProps,
} from "./components/blogCard/BlogCard.stories";

import { Title } from "./components/blogCard";

const props: BlogCardProps = {
  title: "JavaScript",
  imageMain: "/images/js.jpeg",
  altMain: "JavaScript",
  info: {
    label: "Web",
    date: "15/07/2025",
  },
  content: {
    description: "Lenguaje de programacion web",
    instructorImage: "/images/js.jpeg",
    instructorAlt: "JavaScript",
    instructorName: "Fernando",
  },
};

function App() {
  return (
    <>
      <Title title="Compound Pattern" />
      <section style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        <Default props={props} />
        <Info props={props} />
        <WithoutInfo props={props} />
      </section>
    </>
  );
}

export default App;
