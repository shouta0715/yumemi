import "server-only";

const { API_KEY, API_URL } = process.env;

type Env = "KEY" | "URL";

export const getEnv = (target: Env) => {
  const env = target === "KEY" ? API_KEY : API_URL;

  if (!env) {
    throw new Error(`Not found env: ${target}`);
  }

  return env;
};
