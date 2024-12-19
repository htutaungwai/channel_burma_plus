const getBackgroundClass = (vote_average) => {
  return vote_average > 7
    ? "bg-emerald-600"
    : vote_average > 3
    ? "bg-orange-600"
    : vote_average > 0.1
    ? "bg-red-600"
    : "bg-slate-900";
};

export default getBackgroundClass;
