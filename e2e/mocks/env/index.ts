type Env = "URL" | "KEY";
export const getTestEnv = (env: Env): string => {
  const { API_URL, API_KEY } = process.env;

  if (!API_URL) throw new Error("API_URL is not defined");
  if (!API_KEY) throw new Error("API_KEY is not defined");

  if (env === "URL") return API_URL;

  return API_KEY;
};
