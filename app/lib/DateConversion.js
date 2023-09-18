export default function DateConversion(date) {
  // Convert the ISO date string to a JavaScript Date object
  const formattedDate = new Date(date);

  // Get day, month, and year values
  const day = formattedDate.getDate();
  const month = formattedDate.toLocaleString("en-us", { month: "long" });
  const year = formattedDate.getFullYear();

  // Format the date string as "13 June 2019"
  const formattedDateString = `${day} ${month} ${year}`;

  // Get the time in AM/PM format
  const formattedTime = formattedDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return { formattedDateString, formattedTime };
}
