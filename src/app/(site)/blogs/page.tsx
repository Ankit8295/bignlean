import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import Image from "next/image";

const blogs: BlogsProps[] = [
  {
    src: `/assets/blogs/img1.png`,
    day: "2",
    heading: "Fitness",
    timeToRead: "2",
    title: "Benefits of working out daily for your health",
  },
  {
    src: `/assets/blogs/img2.png`,
    day: "2",
    heading: "Fitness",
    timeToRead: "2",
    title: "Benefits of yoga daily for your health",
  },
  {
    src: `/assets/blogs/img3.png`,
    day: "2",
    heading: "Fitness",
    timeToRead: "2",
    title: "Benefits of working out daily for your health",
  },
];

export default function page() {
  return (
    <CustomPageWrapper heading="Blogs">
      <div className="w-[900px] max-[900px]:w-full mx-auto">
        <h2 className="text-black text-2xl not-italic font-bold mb-[34px]">
          Latest Blogs
        </h2>
        <div className="flex flex-col gap-6">
          {blogs.map((item, index, arr) => (
            <BlogCard
              key={index}
              day={item.day}
              heading={item.heading}
              src={item.src}
              timeToRead={item.timeToRead}
              title={item.title}
              arr={arr}
              index={index}
            />
          ))}
        </div>
      </div>
    </CustomPageWrapper>
  );
}

type BlogsProps = {
  src: string;
  heading: string;
  title: string;
  day: string;
  timeToRead: string;
  arr?: unknown[];
  index?: number;
};
const BlogCard = ({
  src,
  day,
  heading,
  timeToRead,
  title,
  arr,
  index,
}: BlogsProps) => {
  return (
    <div
      className={`flex gap-[22px]  ${
        index === arr!.length - 1 || "border-b-2 border-gray-200"
      } pb-6`}
    >
      <div className="w-[120px] h-[120px] rounded-[18px]">
        <Image
          src={src}
          alt="Blog"
          width={100}
          height={100}
          className="w-full"
        />
      </div>
      <div>
        <h2 className="text-gray-700 text-lg not-italic font-medium mb-[15px]">
          {heading}
        </h2>
        <h3 className="text-black text-xl not-italic font-bold mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-[10px]">
          <p className="text-gray-500 text-base not-italic font-semibold">
            {day} days ago
          </p>
          <p className="w-1 h-1 rounded-full bg-gray-500"></p>
          <p className="text-gray-500 text-base not-italic font-normal">
            {timeToRead} min read
          </p>
        </div>
      </div>
    </div>
  );
};
