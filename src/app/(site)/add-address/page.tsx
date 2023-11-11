import AddAddressForm from "@/components/Forms/AddAddressForm/AddAddressForm";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";

export default function page() {
  return (
    <CustomPageWrapper heading="Add Address">
      <div className="flex gap-[70px] w-[1000px] max-[1000px]:w-full mx-auto">
        <div className="flex-[0.5]">
          <img src={"assets/map/map.png"} alt="map" className="w-full" />
        </div>
        <div className="flex-[0.5]">
          <AddAddressForm />
        </div>
      </div>
    </CustomPageWrapper>
  );
}
