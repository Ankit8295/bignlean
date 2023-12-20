"use client";
import { EditIcon } from "@/Icons";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { useUpdateProfile } from "@/queries/Profile";
import { useUploadPhoto } from "@/queries/Upload";
import { useEffect, useState } from "react";

export default function ProfileForm() {
  const [auth, setAuth] = useState<any>(null);
  useEffect(() => {
    setAuth(JSON.parse(localStorage.AUTH) || "null");
  }, []);

  const [formData, setFormData] = useState({
    name: auth?.user?.name || "",
    email: auth?.user?.email || "",
    phone: auth?.user?.phone || "",
    gender: auth?.user?.gender || "",
    date: auth?.user?.date || "",
  });
  const [profileImage, setProfileImage] = useState<File>();
  const { mutate: uploadPhoto } = useUploadPhoto();
  const { mutate: updateProfile, isSuccess, data } = useUpdateProfile();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (profileImage) {
      const data = new FormData();
      data.append("file", profileImage);
      uploadPhoto(data as any, {
        onSuccess: (res) => {
          updateProfile({
            formData: { ...formData, image: res?.data?.fileUrl },
            userId: auth?.user?.id,
          });
        },
      });
    } else {
      updateProfile({ formData, userId: auth?.user?.id });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.AUTH = JSON.stringify(data?.data);
    }
  }, [isSuccess]);

  return (
    <CustomPageWrapper heading="Profile" className="relative">
      <button className="absolute top-[6%] right-0 text-sm not-italic font-medium text-gradient">
        Delete Profile
      </button>
      <div className="flex justify-center  mb-6">
        <label className="rounded-full border-[4px] border-red-500 relative">
          <img
            src={auth?.user?.image || "assets/profile.png"}
            className="rounded-full w-[160px] h-[160px]"
            alt="profile"
          />
          <input
            type="file"
            className="hidden"
            onChange={(e) => setProfileImage(e.target.files![0])}
          />
          <div className="absolute bottom-1 right-1 cursor-pointer">
            <EditIcon />
          </div>
        </label>
      </div>
      {profileImage && <p>{profileImage?.name}</p>}
      <div className="text-center mb-[59px]">
        <h2 className="text-black text-center text-2xl not-italic font-semibold mb-2">
          {auth?.user?.name || "User Name"}
        </h2>
        <p className="text-black text-center text-base not-italic font-normal">
          {auth?.user?.email || "User Email"}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-6 mb-6 max-[600px]:flex-col">
          <InputField
            className="flex-1"
            type="text"
            placeholder="Name"
            shadow={false}
            value={formData?.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <InputField
            className="flex-1"
            type="mobile"
            placeholder="Mobile no"
            value={formData?.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            shadow={false}
          />
        </div>
        <div className="flex gap-6 mb-6 max-[600px]:flex-col">
          <InputField
            className="flex-1"
            type="email"
            placeholder="Email"
            value={formData?.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            shadow={false}
          />
          <InputField
            className="flex-1"
            type="text"
            placeholder="Gender"
            value={formData?.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            shadow={false}
          />
        </div>
        <div className="flex gap-6 max-[600px]:flex-col">
          <InputField
            className="flex-1"
            value={formData?.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            type="date"
            placeholder="D.O.B"
            shadow={false}
          />
          <div className="flex-1"></div>
        </div>
        <div className="w-[300px] mx-auto mt-12 max-[600px]:w-full max-[600px]:mt-5">
          <PrimaryButton label="Edit Profile" />
        </div>
      </form>
    </CustomPageWrapper>
  );
}
