import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

const Friends = () => {
  return (
    <div className="  h-80 w-1/4 pt-5 mt-5">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Friend List
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="image ml-5 mr-3 overflow-hidden rounded-full w-12 h-12 flex justify-center items-center ">
                  <Image
                    src="/image/avatar.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="cursor-pointer inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <RiDeleteBin6Line size={18} />
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="image ml-5 mr-3 rounded-full w-12 h-12 flex justify-center items-center ">
                  <Image
                    src="/image/avatar.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="cursor-pointer inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <RiDeleteBin6Line size={18} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Friends;
