import Image from "next/image";
import Link from "next/link";

export default function List({ courses }) {
  return (
    <section className="grid grid-cols-2 gap-4 mb-5">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                className="h-48 w-full object-cover md:w-48"
                src={course?.coverImage}
                alt={course.title}
                width={200}
                height={160}
              />
            </div>
            <div className="p-5">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {course.type}
              </div>
              <Link
                href={`courses/${course.slug}`}
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                {course.title}
              </Link>
              <p className="mt-2 text-gray-500">{course.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
