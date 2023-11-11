"use client";
import { EmptyStartIcon, StarIcon } from "@/Icons";
import { OutlinedButton } from "..";
import { useDispatchContext } from "@/provider/ContextProvider/ContextProvider";

export default function CustomerReviewCard() {
  const dispatch = useDispatchContext();
  return (
    <div className="rounded-lg bg-gray-200 p-5">
      <h2 className="text-black text-2xl not-italic font-bold mb-4">
        Customer Reviews
      </h2>
      <RatingCard />
      <p className="text-blue-900 text-sm not-italic font-normal leading-7 my-2 mb-3">
        3180 Ratings, 2142 Reviews
      </p>
      <StartCard />
      <div className="w-full h-[2px] bg-gray-300 my-3"></div>
      <RatingPoints />
      <OutlinedButton
        label="Write a Review"
        className="mt-5"
        onClick={() => dispatch({ type: "REVIEW_MODAL_TOGGLE_ON" })}
      />
    </div>
  );
}

const RatingPoints = () => {
  return (
    <div className="flex flex-col gap-3">
      <SingleCardRatingPoint label="Taste" />
      <SingleCardRatingPoint label="Mixability" />
      <SingleCardRatingPoint label="Efficacy" />
      <SingleCardRatingPoint label="Value for money" />
    </div>
  );
};

const SingleCardRatingPoint = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-black text-xs not-italic font-medium">{label}</p>
      <div className="flex gap-2 items-center">
        <div className="flex">
          <div className="scale-75">
            <StarIcon />
          </div>
          <div className="scale-75">
            <StarIcon />
          </div>
          <div className="scale-75">
            <StarIcon />
          </div>
          <div className="scale-75">
            <StarIcon />
          </div>
          <div className="scale-75">
            <StarIcon />
          </div>
        </div>
        <p className="text-black text-xs not-italic font-medium">4.4</p>
      </div>
    </div>
  );
};

const StartCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <RatingPercent rating={5} ratingPercentage={49.5} />
      <RatingPercent rating={4} ratingPercentage={75} />
      <RatingPercent rating={3} ratingPercentage={35} />
      <RatingPercent rating={2} ratingPercentage={20} />
      <RatingPercent rating={1} ratingPercentage={5} />
    </div>
  );
};

const RatingPercent = ({
  rating,
  ratingPercentage,
}: {
  rating: number;
  ratingPercentage: number;
}) => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-2">
        <p className="text-black text-right text-base not-italic font-normal">
          {rating}
        </p>
        <StarIcon />
      </div>
      <div className="flex-1 h-2 bg-red-200  rounded-lg">
        <div
          className={`linear-gradient-1 h-2 opacity-100 rounded-lg`}
          style={{ width: `${ratingPercentage}%` }}
        ></div>
      </div>
      <p className="text-black  text-base not-italic font-normal w-[36px] text-left">
        {ratingPercentage}%
      </p>
    </div>
  );
};

const RatingCard = () => {
  return (
    <div className="flex items-center gap-4">
      <p className="text-6xl not-italic font-bold text-gradient">3.3</p>
      <div>
        <p className="text-gray-500 text-sm not-italic font-semibold leading-7">
          Overall rating
        </p>
        <div className="flex gap-2">
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
    </div>
  );
};
