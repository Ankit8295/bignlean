"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  blogData: {
    src: string;
    type: string;
    postedTime: string;
    timeToComplete: string;
    title: string;
  }[];
};
export default function BlogCarosoul({ blogData }: Props) {
  const router = useRouter();
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-[375px] rounded-[20px] "
      >
        {blogData.map((blog, index) => (
          <SwiperSlide
            key={index}
            onClick={() => router.push("/blogs/asfadasdasd")}
            className="relative cursor-pointer"
          >
            <img
              src={blog?.src}
              alt="blog image"
              className="w-full h-full bg-center"
            />
            <div className="absolute bottom-10 left-4 w-[395px] max-[395px]:w-full">
              <div className="flex items-center gap-5 mb-4">
                <p className="text-white text-base not-italic font-medium bg-black p-1 px-2 rounded-[30px]">
                  {blog?.type}
                </p>
                <p className="text-white text-base not-italic font-semibold">
                  {blog?.postedTime} days ago
                </p>
                <p className="text-white text-base not-italic font-normal">
                  {blog?.timeToComplete} min read
                </p>
              </div>
              <h2 className="text-white text-3xl not-italic font-bold">
                {blog?.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
