import React from "react";
import Image from "next/image";
const Comment = ({ img, name, body }) => {
  return (
    <div className="bg-slate-800 h-25 pt-5">
      <div className="flex items-center ">
        <div className="image ml-5 mr-3 overflow-hidden rounded-full w-10 h-10 flex justify-center items-center ">
          <Image className="rounded-full" src={img} width={500} height={500} />
        </div>
        <h2>{name}</h2>
      </div>
      <p className="ml-5 mt-4">{body}</p>
    </div>
  );
};

export default Comment;
