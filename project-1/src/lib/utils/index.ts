export const timeAgo = (dateString: string) => {
  const now = new Date();
  const past = new Date(dateString);

  const diffInSeconds = Math.floor((Number(now) - Number(past)) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInMonths / 12);

  if (diffInYears > 0)
    return `${diffInYears} ${diffInYears > 1 ? "anos" : "ano"} atrás`;
  if (diffInMonths > 0)
    return `${diffInMonths} ${diffInMonths > 1 ? "meses" : "mês"} atrás`;
  if (diffInDays > 0)
    return `${diffInDays} ${diffInDays > 1 ? "dias" : "dia"} atrás`;

  return "Hoje";
};

export const formatTimeToHHMM = (time: string): string => {

  
  if (time) {
    const [hours, minutes] = time.split(":");
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  }
  return time;
};
