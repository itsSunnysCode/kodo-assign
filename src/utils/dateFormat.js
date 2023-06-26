export const formattedDate = (dateString) => {
  if (!dateString) return;
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};
