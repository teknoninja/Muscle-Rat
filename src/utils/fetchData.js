const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
const apiKey2 = import.meta.env.VITE_RAPIDAPI_KEY_youtube;
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key':apiKey ,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions  = {
    method: 'GET', 
    headers: {
      'x-rapidapi-key': apiKey2,
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };