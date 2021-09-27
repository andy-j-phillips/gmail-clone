export const slugify = (str: string) => {
  return str.replace(/_/g, "_").toLowerCase();
};

export const humanReadableDate = (date: Date) => {
  if (typeof date.getMonth !== "function") {
    return "-";
  }

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${date.getDay()} ${
    MONTHS[date.getMonth()]
  } ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
};

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
