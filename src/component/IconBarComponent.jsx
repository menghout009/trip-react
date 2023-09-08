import React from "react";
export default function IconBar() {
  return (
    <div className="">
      <div>
        <ul className="space-y-6 space-x-[40px]">
          <br/>
          <li className="pt-5 content-center">
            <img
              src={require("../Images/category_icon.png")}
              alt=""
              className="h-6 w-6"
            />
          </li>

          <li className="pt-10 flex flex-col space-y-4">
            <img
              src={require("../Images/cube.png")}
              alt=""
              className="h-6 w-6 rounded"
            />
            <img
              src={require("../Images/comment.png")}
              alt=""
              className="h-6 w-6 "
            />
            <div className="relative h-33 w-32">
            <div className="absolute left-4 top-0 h-2 w-2 rounded-full bg-red-600 border  border-lime-50"></div>
            <img
              src={require("../Images/list.png")}
              alt=""
              className="h-6 w-6"
            />
            </div>
            <div className="relative h-33 w-32">
            <div className="absolute left-4 top-0 h-2 w-2 rounded-full bg-red-600 border  border-lime-50"></div>
            <img
              src={require("../Images/messenger.png")}
              alt=""
              className="h-6 w-6"
            />
            </div>
          </li>

          <li className="pt-10 flex flex-col space-y-4">
            <img
              src={require("../Images/notification.png")}
              alt=""
              className="h-6 w-6"
            />
            <img
              src={require("../Images/security.png")}
              alt=""
              className="h-6 w-6"
            />
            <img
              src={require("../Images/success.png")}
              alt=""
              className="h-6 w-6"
            />
            <img
              src={require("../Images/users.png")}
              alt=""
              className="h-6 w-6"
            />
          </li>

          <li className="pt-10 flex flex-col space-y-4">
          <img
            src={require("../Images/christina.jpg")}
            alt=""
            className="w-8 h-8 rounded-[50%]"
          />
          <img
            src={require("../Images/nonamesontheway.jpg")}
            alt=""
            className="w-8 h-8 rounded-[50%]"
          />
          <img
            src={require("../Images/raamin.jpg")}
            alt=""
            className="w-8 h-8 rounded-[50%]"
          />
          <img src={require("../Images/plus.png")} alt="" className="h-8 w-8" />
          </li>
        </ul>
      </div>
    </div>
  );
}
