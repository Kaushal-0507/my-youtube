export const GOOGLE_API_KEYS = [
  "AIzaSyBkXFg7v4Bc7MCn7Pj7KUc-DFpYk1a9JEs",
  "AIzaSyCgQf6EQo7gHH3qcTOK5I7iEGUX_zznSZk",
  "AIzaSyBgEpDy_F5KkvBwuHUOPJM2-n9XpQR9srU",
];

let currentKeyIndex = 0;

export const getCurrentApiKey = () => {
  return GOOGLE_API_KEYS[currentKeyIndex];
};

export const rotateApiKey = () => {
  currentKeyIndex = (currentKeyIndex + 1) % GOOGLE_API_KEYS.length;
  console.log(`Rotated to API key index ${currentKeyIndex}`);
  return getCurrentApiKey();
};

export const fetchWithKeyRotation = async (url) => {
  let attempts = 0;
  const maxAttempts = GOOGLE_API_KEYS.length;

  while (attempts < maxAttempts) {
    try {
      const response = await fetch(`${url}${getCurrentApiKey()}`);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Attempt ${attempts + 1} failed:`, error.message);
      rotateApiKey();
      attempts++;
    }
  }

  throw new Error("All API keys exhausted");
};

// export const GOOGLE_API_KEY = "AIzaSyCgQf6EQo7gHH3qcTOK5I7iEGUX_zznSZk";

// export const YOUTUBE_VIDEOS_API =
//   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
//   GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 30;

// AIzaSyBkXFg7v4Bc7MCn7Pj7KUc-DFpYk1a9JEs
// AIzaSyCgQf6EQo7gHH3qcTOK5I7iEGUX_zznSZk
//AIzaSyBgEpDy_F5KkvBwuHUOPJM2-n9XpQR9srU
