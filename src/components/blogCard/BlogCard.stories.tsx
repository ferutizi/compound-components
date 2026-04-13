import BlogCard from ".";
import "./blogCard.css";

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

export const Default = ({ props }: { props: BlogCardProps }) => {
  return (
    <>
      <BlogCard.Card>
        <BlogCard.Image src={props.imageMain} alt={props.altMain} />
        <BlogCard.Info>
          <BlogCard.Label label={props.info.label} />
          <BlogCard.Date date={props.info.date} />
        </BlogCard.Info>
        <BlogCard.Title title={props.title} />
        <BlogCard.Content>
          <BlogCard.Description description={props.content.description} />
          <BlogCard.Instructor>
            <BlogCard.InstructorImage
              src={props.content.instructorImage}
              alt={props.content.instructorAlt}
            />
            <BlogCard.InstructorName name={props.content.instructorName} />
          </BlogCard.Instructor>
        </BlogCard.Content>
      </BlogCard.Card>
    </>
  );
};

export const Info = ({ props }: { props: BlogCardProps }) => {
  return (
    <BlogCard.Card>
      <BlogCard.Image src={props.imageMain} alt={props.altMain} />
      <BlogCard.Info>
        <BlogCard.Date date={props.info.date} />
        <BlogCard.Label label={props.info.label} />
      </BlogCard.Info>
      <BlogCard.Title title={props.title} />
      <BlogCard.Content>
        <BlogCard.Description description={props.content.description} />
        <BlogCard.Instructor>
          <BlogCard.InstructorImage
            src={props.content.instructorImage}
            alt={props.content.instructorAlt}
          />
          <BlogCard.InstructorName name={props.content.instructorName} />
        </BlogCard.Instructor>
      </BlogCard.Content>
    </BlogCard.Card>
  );
};

export const WithoutInfo = ({ props }: { props: BlogCardProps }) => {
  return (
    <BlogCard.Card>
      <BlogCard.Image src={props.imageMain} alt={props.altMain} />
      <BlogCard.Title title={props.title} />
      <BlogCard.Content>
        <BlogCard.Description description={props.content.description} />
        <BlogCard.Instructor>
          <BlogCard.InstructorImage
            src={props.content.instructorImage}
            alt={props.content.instructorAlt}
          />
          <BlogCard.InstructorName name={props.content.instructorName} />
        </BlogCard.Instructor>
      </BlogCard.Content>
    </BlogCard.Card>
  );
};
