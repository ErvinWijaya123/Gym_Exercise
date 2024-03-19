export const exerciseOptions = {
  method: "GET",
  params: { muscle: "biceps" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const fetchDifficult = async (url, options) => {
  let difficulty = "";
  const response = await fetch(url, options);
  const data = await response.json();
  for (let i = 0; i < 2; i++) {
    difficulty += data[i].difficulty;
  }
  return difficulty;
};
