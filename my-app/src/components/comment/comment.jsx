import React from "react";
import Image from "next/image";
const Comment = ({ img, name, body }) => {
  return (
    <div className="bg-slate-800 h-40">
      <div className="flex items-center ">
        <div className="image ml-5 mr-3 rounded-full w-12 h-12 flex justify-center items-center ">
          <Image className="rounded-full" src={img} width={500} height={500} />
        </div>
        <h2>{name}</h2>
        <div className="flex grow justify-end mr-3">+</div>
      </div>
      <p className="ml-5 mt-4">{body}</p>
    </div>
  );
};

export default Comment;
