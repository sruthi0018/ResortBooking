import { format } from "date-fns";

export const fDate = (date) => {
  if (!date) return "";
  return format(new Date(date), "dd MMM yyyy"); 
};
