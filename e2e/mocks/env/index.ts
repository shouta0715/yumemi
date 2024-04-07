type Env = "URL" | "KEY";
export const getTestEnv = (env: Env): string => {
  const { API_URL, API_KEY } = process.env;

  if (API_URL) console.log("Loaded API_URL from .env", API_URL);
  if (API_KEY) console.log("Loaded API_KEY from .env");

  if (!API_URL) {
    console.error("API_URL is not defined");

    throw new Error("API_URL is not defined");
  }
  if (!API_KEY) {
    console.error("API_KEY is not defined");

    throw new Error("API_KEY is not defined");
  }

  if (env === "URL") return API_URL;

  return API_KEY;
};
