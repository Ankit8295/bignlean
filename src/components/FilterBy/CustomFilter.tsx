"use client";
import { DownArrow } from "@/Icons";
import InputField from "../FormComponents/InputField";
import { useState } from "react";

type Props = {
  heading?: string;
  filterOptions: string[];
  search?: boolean;
};
export default function CustomFilter({
  heading,
  filterOptions,
  search,
}: Props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="border border-gray-300 rounded-lg p-4 flex flex-col gap-3">
      {heading && (
        <div className="flex items-center justify-between">
          <h2>{heading}</h2>
          {filterOptions?.length > 1 && (
            <button onClick={() => setToggle(!toggle)}>
              <DownArrow />
            </button>
          )}
        </div>
      )}
      {(toggle || filterOptions?.length === 1) && (
        <>
          {search && (
            <InputField
              type="text"
              shadow={false}
              placeholder={`Search ${heading}`}
              inputClassName="!p-3"
              className="mb-4"
            />
          )}
          <div className="flex flex-col gap-2">
            {filterOptions?.map((filter, index) => (
              <label
                key={index}
                className="flex items-center gap-4 ml-2 cursor-pointer"
              >
                <input type="checkbox" className="scale-[1.7]" />
                <span className="text-black text-base not-italic font-normal">
                  {filter}
                </span>
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
