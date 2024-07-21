import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className=" addPost mt-8 px-5 flex  items-center bg-gray-900 rounded-3xl py-2">
      <div className="image ml-5 mr-10 rounded-full w-12 h-12 flex justify-center items-center ">
        <Image src="/image/avatar.png" width={500} height={500} />
      </div>
      <h1>Add Post</h1>
      <Link
        href={"/addPostPage"}
        className=" ml-2 bg-blue-700 rounded-full w-8 h-8 flex justify-center items-center "
      >
        +
      </Link>
      <div className="flex grow justify-end mr-3">
        <Link
          href={"/"}
          className="duration-500 text-sm text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-2 py-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;
