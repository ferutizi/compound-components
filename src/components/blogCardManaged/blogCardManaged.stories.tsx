import "./BlogCardManaged.css";
import type { BlogCardProps } from ".";
import BlogCardManaged from ".";

export const DefaultManaged = ({ props }: { props: BlogCardProps }) => {
  return (
    <>
      <BlogCardManaged.Root value={props}>
        <BlogCardManaged.Card>
          <BlogCardManaged.Image />
          <BlogCardManaged.Info>
            <BlogCardManaged.Label />
            <BlogCardManaged.Date />
          </BlogCardManaged.Info>
          <BlogCardManaged.Title />
          <BlogCardManaged.Content>
            <BlogCardManaged.Description />
            <BlogCardManaged.Instructor>
              <BlogCardManaged.InstructorImage />
              <BlogCardManaged.InstructorName />
            </BlogCardManaged.Instructor>
          </BlogCardManaged.Content>
        </BlogCardManaged.Card>
      </BlogCardManaged.Root>
    </>
  );
};

export const InfoManaged = ({ props }: { props: BlogCardProps }) => {
  return (
    <BlogCardManaged.Root value={props}>
      <BlogCardManaged.Card>
        <BlogCardManaged.Image />
        <BlogCardManaged.Info>
          <BlogCardManaged.Date />
          <BlogCardManaged.Label />
        </BlogCardManaged.Info>
        <BlogCardManaged.Title />
        <BlogCardManaged.Content>
          <BlogCardManaged.Description />
          <BlogCardManaged.Instructor>
            <BlogCardManaged.InstructorImage />
            <BlogCardManaged.InstructorName />
          </BlogCardManaged.Instructor>
        </BlogCardManaged.Content>
      </BlogCardManaged.Card>
    </BlogCardManaged.Root>
  );
};

export const WithoutInfoManaged = ({ props }: { props: BlogCardProps }) => {
  return (
    <BlogCardManaged.Root value={props}>
      <BlogCardManaged.Card>
        <BlogCardManaged.Image />
        <BlogCardManaged.Title />
        <BlogCardManaged.Content>
          <BlogCardManaged.Description />
          <BlogCardManaged.Instructor>
            <BlogCardManaged.InstructorImage />
            <BlogCardManaged.InstructorName />
          </BlogCardManaged.Instructor>
        </BlogCardManaged.Content>
      </BlogCardManaged.Card>
    </BlogCardManaged.Root>
  );
};
