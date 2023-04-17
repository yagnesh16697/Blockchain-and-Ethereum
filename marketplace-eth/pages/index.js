import { useWeb3 } from "@components/providers";
import { Hero } from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import BaseLayout from "@components/ui/layout/base";
import { getAllCourses } from "@content/courses/fetcher";
export default function Home({ courses }) {
  const { test } = useWeb3();
  return (
    <>
      <Hero />
      <CourseList courses={courses} />
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: { courses: data },
  };
}

Home.Layout = BaseLayout;
