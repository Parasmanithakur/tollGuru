import axios from "axios";
export const calculateToll = (source, destination) => {
  const url = "https://apis.tollguru.com/toll/v2/origin-destination-waypoints/";
  const formData = {
    from: {
      address: source,
    },
    to: {
      address: destination,
    },
  };
  const res = axios.post(url, formData, {
    headers: {
      "Content-Type": "text/plain",
      Accept: "/",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  });

  return res;
};
