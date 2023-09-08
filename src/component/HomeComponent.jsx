import React from "react";
import AdventureComponent from "./AdventureComponent";
import BodyComponent from "./BodyComponent";
import IconBarComponent from "./IconBarComponent";
export default function HomeComponent({userInformation,setUserInformation}) {
  return (
    <div>
      <div className="grid grid-cols-12 w-screen h-screen">
        <div className="col-span-1 col bg-slate-300">
          <IconBarComponent/>
        </div>
        <div className=" col-span-8">
          <BodyComponent userInformation={userInformation} setUserInformation={setUserInformation}/>
        </div>
        <div className="col-span-3 bg-bg w-full h-full">
          <AdventureComponent/>
        </div>
      </div>
    </div>
  );
}
