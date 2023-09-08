import React, { useState } from "react";
export default function BodyComponent({ userInformation, setUserInformation }) {
  const [showDetail, setDetail] = useState({});
  const [submited, setSubmited] = useState(false);
  const [user, setUser] = useState({});

  const InfoHandle = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log({ [e.target.name]: e.target.value });
  };
  const SubmitBtn = () => {
    setUserInformation([
      ...userInformation,
      { id: userInformation.length + 1, ...user },
    ]);
    setSubmited(false);
    console.log(userInformation);
  };
  const changEventBtn = (id) => {
    console.log(userInformation);
    userInformation.map((item) => {
      if (item.id == id) {
        if (item.status === "beach") {
          item.status = "forest";
        } else if (item.status === "forest") {
          item.status = "mountain";
        } else if (item.status === "mountain") {
          item.status = "beach";
        }
      }
    });
    setUserInformation([...userInformation]);
  };
  return (
    <div>
      <div className="flex justify-between font-mono mt-10 p-4 mb-10 text-[20px] font-semibold">
        <div className="text-[40px]">Good Evening Team!</div>
        <label
          htmlFor="addnew"
          className="btn "
          onClick={() => setSubmited(true)}
        >
          ADD NEW TRIP
        </label>
        {submited ? (
          <>
            <input type="checkbox" id="addnew" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="addnew"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  x
                </label>
                <div>
                  {/* Your Title input */}
                  <div>
                    <label className=" font-bold container mx-auto flex bg-center mt-[50px]">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      className=" text-black border-black container mx-auto w-full rounded-2xl "
                      placeholder="menghout"
                      onChange={InfoHandle}
                    />
                  </div>

                  {/* Your Description input */}
                  <div>
                    <label className=" font-bold container mx-auto flex bg-center mt-[50px]">
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      className=" text-black border-black container mx-auto w-full rounded-2xl "
                      placeholder="happy place...."
                      onChange={InfoHandle}
                    />
                  </div>

                  {/* Your people going input */}
                  <div>
                    <label className=" font-bold container mx-auto flex bg-center mt-[50px]">
                      People Going
                    </label>
                    <input
                      type="number"
                      name="peopleGoing"
                      className=" text-black border-black container mx-auto w-full rounded-2xl "
                      placeholder="32000"
                      onChange={InfoHandle}
                    />
                  </div>

                  {/* Your Type of adventure */}
                  <label className=" font-bold container mx-auto flex bg-center mt-[50px]">
                    Type of Adventure
                  </label>
                  <select
                    id="type"
                    name="status"
                    class="text-black border-black container mx-auto w-full rounded-2xl"
                    placeholder="CHOOSE YOUR OPTION"
                    onChange={InfoHandle}
                  >
                    <option value="">choose</option>
                    <option value="forest">FOREST</option>
                    <option value="mountain">MOUNTAIN</option>
                    <option value="beach">BEACH</option>
                  </select>
                  <button
                    onClick={SubmitBtn}
                    className="btn btn-active flex justify-start mt-5"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div>
        {/* card */}
        <div className="grid grid-cols-3 gap-3 pl-3 pr-3 ">
          {userInformation.map((info) => {
            return (
              <div
                key={info.id}
                className="card w-80 bg-gray-900 text-neutral-content"
              >
                <div className="card-body ">
                  <h2 className="card-title font-serif">{info.title}</h2>
                  <p className="line-clamp-3 text-start text-blue-400">
                    {info.description}
                  </p>

                  <div className="text-start font-mono">
                    <p className=" text-start">
                      Around {info.peopleGoing} people going there
                    </p>
                  </div>
                  <div className="card-actions ">
                    <button
                      onClick={() => changEventBtn(info.id)}
                      className={`btn ${
                        info.status === "forest"
                          ? "bg-green-700"
                          : info.status === "beach"
                          ? "bg-sky-400" :"bg-gray-300"
                      }`}
                    >
                      {info.status}
                    </button>
                    {/* The button to open modal */}
                    <div>
                      <label
                        onClick={() => setDetail(info)}
                        htmlFor="card3"
                        className="btn"
                      >
                        Details
                      </label>
                      <input
                        type="checkbox"
                        id="card3"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box relative">
                          <label
                            htmlFor="card3"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                          >
                            ✕
                          </label>
                          <p className=" text-start text-black text-3xl font-extrabold uppercase ​">
                            {showDetail.title}
                          </p>
                          <p className="text-start text-black mt-5">
                            {showDetail.description}
                          </p>
                          <p className="text-start text-black mt-5 font-semibold">
                            Around {showDetail.peopleGoing} people going there
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
