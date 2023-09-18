import { Message } from "@/types";
import React from "react";
import DateConversion from "@/app/lib/DateConversion";

export default function MessageCard({
  message: { date, fullname, email, message },
}: {
  message: Message;
}) {
  const { formattedDateString, formattedTime } = DateConversion(date);

  return (
    <div className="bg-gray-500 text-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">
        Date: {formattedDateString} at {formattedTime}
      </h3>
      <h3 className="text-lg font-semibold mb-2">
        Name: <span className="text-blue-500">{fullname}</span>
      </h3>
      <h3 className="text-lg font-semibold mb-2">Email: {email}</h3>
      <p className="text-gray-700">Message: {message}</p>
    </div>
  );
}
