import React from "react";
import Image from "next/image";
import { IoIosPerson } from "react-icons/io";
import Link from "next/link";

const Profile = () => {
  return (
    <div className=" bg-gray-900 h-80  pt-5 mt-5">
      <Link href={"/profilePage"}>
        <div className="flex items-center ">
          <div className="image ml-5 mr-3 overflow-hidden rounded-full w-12 h-12 flex justify-center items-center ">
            <Image
              src="/image/avatar.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className="flex-row">
            <h2>M.Omran</h2>
            <p className="text-xs text-slate-400">23 friends</p>
          </div>
          <div className="flex grow justify-end mr-3">
            <IoIosPerson size={25} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Profile;
