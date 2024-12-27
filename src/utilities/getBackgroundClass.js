const getBackgroundClass = (vote_average) => {
  return vote_average > 7
    ? "bg-gradient-to-r from-green-800 to-emerald-600"
    : vote_average > 3
    ? "bg-gradient-to-r from-orange-700 to-amber-500"
    : vote_average > 0.1
    ? "bg-red-600"
    : "bg-slate-900";
};

export default getBackgroundClass;
