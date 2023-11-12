const ROOT: String = "https://cirkula-dev-test.azurewebsites.net/";

type GETProps = {
  url: String
}

const headers: any = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": ["application/json"]
}

export default {
  async get({ url }: GETProps) {
    console.log('GET => ', `${ROOT}${url}`)
    try {
      const result = await fetch(`${ROOT}${url}`, {
        headers,
        method: 'GET'
      });
      const data = await result.json()
      console.log("RESULT", data)
      return data
    } catch (error) {
      console.error("ERROR", error);
      return { error: true, message: 'ERROR SERVICE ' + error }
    }
  },
};
