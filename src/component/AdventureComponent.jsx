import React from "react";

export default function AdventurePageComponent() {
  return (
    <div className="pr-8">
      <div className=""></div>
      <div className="space-x-5 flex justify-end mt-10">
      <img src={require("../Images/comment.png")} alt=""className="w-10 h-10 "/>
        <img src={require("../Images/notification.png")} alt=""className="h-10 w-10 rounded-[50%]"/>
        <img src={require("../Images/raamin.jpg")} alt="" className="h-10 w-10 rounded-[50%]"/>
      </div>
      <div className="flex justify-end">
      <button className="space-x-5 btn  bg-yellow-400 mt-5">My amazing trips</button>
      </div>
      <div className="text-white text-[30px] text-start mt-5 pl-4 font-mono">I like laying down on the sand and looking at the moon </div>
      <div className="text-white text-start mt-10 pl-4 font-mono text-[20px] pb-4">20 peole going to this trip</div>
      <div className="space-x-4 flex justify-start mt-2 pl-3 ">
      <img src={require("../Images/lachlan.jpg")} alt=""className="w-10 h-10 rounded-[50%] border border-red-500"/>
        <img src={require("../Images/christina.jpg")} alt=""className="w-10 h-10 rounded-[50%] border border-red-500" />
        <img src={require("../Images/raamin.jpg")} alt="" className="w-10 h-10 rounded-[50%] border border-red-500"/>
        <img src={require("../Images/nonamesontheway.jpg")} alt="" className="w-10 h-10 rounded-[50%] border border-red-500"/>
        <div className="bg-red-300 rounded-[50%]  w-10 h-10 border border-dotted border-red-700 text-[20px]   text-justify-center" >17+</div>
      </div>
      </div>
  );
}
