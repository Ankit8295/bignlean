import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";

export default function page() {
  return (
    <CustomPageWrapper heading="Blogs">
      <div className="w-[900px] max-[900px]:w-full mx-auto relative rounded-[20px] overflow-hidden mb-[40px]">
        <img
          src={"/assets/blogs/img1.jpg"}
          alt="blog image"
          className="w-full bg-center"
        />
        <div className="absolute bottom-10 left-4 w-[521px] max-[521px]:w-full">
          <div className="flex items-center gap-5 mb-4">
            <p className="text-white text-base not-italic font-medium bg-black p-1 px-2 rounded-[30px]">
              Food
            </p>
            <p className="text-white text-base not-italic font-semibold">
              2 days ago
            </p>
            <p className="text-white text-base not-italic font-normal">
              6 min read
            </p>
          </div>
          <h2 className="text-white not-italic font-bold text-[40px]">
            Here’s what you need to know about diet plans
          </h2>
        </div>
      </div>
      <p className="text-gray-700 text-lg not-italic font-normal mb-6">
        Are you looking to improve your health and overall wellbeing, following
        a healthy diet plan is a great place to start. A balanced diet can
        provide your body with the nutrients it needs to function optimally,
        while reducing your risk of developing chronic diseases such as heart
        disease, diabetes, and cancer. Here are some tips for creating a healthy
        and sustainable diet plan:
      </p>
      <p className="text-gray-700 text-lg not-italic font-normal">
        Choose nutrient-dense foods: Nutrient-dense foods are those that provide
        a high amount of nutrients relative to their calorie content. Examples
        of nutrient-dense foods include fruits, vegetables, whole grains, lean
        proteins, and healthy fats. Limit processed foods: Processed foods are
        often high in sugar, salt, and unhealthy fats, and provide little
        nutritional value. Try to limit your intake of processed foods as much
        as possible and opt for whole, natural foods instead. Focus on balance:
        Aim to include a variety of different foods in your diet, including
        fruits, vegetables, whole grains, lean proteins, and healthy fats. Avoid
        extreme diets or cutting out entire food groups unless medically
        necessary. Pay attention to portion sizes: Even healthy foods can lead
        to weight gain if consumed in excess. Pay attention to portion sizes and
        aim to eat until you're satisfied, not stuffed. Stay hydrated: Drinking
        enough water is crucial for optimal health. Aim to drink at least 8
        glasses of water per day, and more if you're physically active or live
        in a hot climate. Be mindful of your eating habits: Eating mindfully can
        help you tune into your body's hunger and fullness cues, as well as help
        you make healthier food choices. Try to eat without distractions, chew
        your food thoroughly, and pay attention to how you feel while eating.
      </p>
    </CustomPageWrapper>
  );
}
