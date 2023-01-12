import React from "react";
import GradientBtn from "./GradientBtn";

const ContactForn = () => {
  return (
    <div className="p-4 text-left">
      <form method="POST" action="https://getform.io/f/9ec37fae-423b-4fb5-bf5c-af817fa861c1">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="capitalize text-sm py-2 font-light">name</label>
            <input
              type="text"
              name="name"
              className="border-2 text-gray-900 rounded-lg p-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="capitalize text-sm py-2 font-light">phone</label>
            <input
              type="text"
              name="phone"
              className="border-2 text-gray-900 rounded-lg p-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col col-span-2 ">
            <label className="capitalize text-sm py-2 font-light">email</label>
            <input
              type="email"
              name="email"
              className="border-2 text-gray-900 rounded-lg p-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col col-span-2 ">
            <label className="capitalize text-sm py-2 font-light">
              message
            </label>
            <textarea
              type="text"
              rows="10"
              className="border-2 text-gray-900 rounded-lg p-3 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <GradientBtn className="ml-4 mt-4 capitalize" title="send message" />
        </div>
      </form>
    </div>
  );
};

export default ContactForn;
