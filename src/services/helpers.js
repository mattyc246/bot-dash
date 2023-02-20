// Combine Date & Time from 2 Date Objects
export const convertDateTime = (date, time) => {
  return new Date(
    `${new Date(date).toDateString()} ${new Date(time).toTimeString()}`
  );
};
