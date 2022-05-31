declare module '@env' {
  interface Env {
    API_URL: string;
  }

  const env: Env;
  export = env;
}
