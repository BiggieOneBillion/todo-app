export const filterData = ["all", "pending", "completed"];

export const borderColor = (condition) =>
  condition === "pending"
    ? "border-blue-300 text-blue-500"
    : condition === "completed"
    ? "border-green-300 text-green-500"
    : "border-red-300 text-red-500";

export const hasTimePassed = (timeString) => {
  // Parse the provided time into hours and minutes
  const [inputHours, inputMinutes] = timeString.split(":").map(Number);

  // Get the current date and time
  const now = new Date().toLocaleTimeString();

  // Create a Date object for today with the provided time
  const providedTime = new Date();
  providedTime.setHours(inputHours, inputMinutes, 0, 0);

  // Compare the times
  return now > providedTime.toLocaleTimeString();
};
