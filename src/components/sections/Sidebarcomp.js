import React, { useState } from "react";

function Sidebarcomp({ open }) {
  const sampledata = [
    {
      head: "PAGES",
      list: [
        { head: "News Feed", icon: "fa-solid fa-newspaper" },
        { head: "Profile", icon: "fa-solid fa-user" },
        { head: "Friends", icon: "fa-solid fa-user-group" },
        { head: "Notifcation", icon: "fa-solid fa-bell" },
        { head: "Videos", icon: "fa-solid fa-video" },
        { head: "Pictures", icon: "fa-solid fa-image" },
        { head: "Liked Posts", icon: "fa-solid fa-thumbs-up" },
        { head: "Chat", icon: "fa-solid fa-message" },
        { head: "Saved", icon: "fa-solid fa-bookmark" },
      ],
    },
  ];
  console.log(open);
  return (
    <div
      className={` p-0  d-md-none d-block pe-md-5 py-3  ${
        open ? "sidebar" : "sidebar2"
      }`}
    >
      <div
        className={` p-0 pt-0  bg-blacks  h-100 sidebardi${
          !open ? "sidebardi pb-2" : "sidebardiv2 pb-2"
        }`}
      >
        <ul class="  pt-lg-3 pt-3     fw-lighta p-0 ps-3 fd">
          {sampledata.map((i) => {
            return (
              <>
             
                {i.list.map((da) => {
                  return (
                    <li class="text-start muted py-2 px-md-2 px-2 fw-lighta hoveri">
                      <i
                        class={`${da.icon}  muted pe-5`}
                        aria-hidden="true"
                      ></i>
                      <span className="fw-lighta  muted ">{da.head}</span>
                    </li>
                  );
                })}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebarcomp;
