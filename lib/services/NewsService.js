"use strict";
import config from "../../config.json";
const getRequestHeaders = { "Content-Type": "application/json" };
class NewsService {
  static async get() {
    // const response = await fetch(`http://localhost:5001/example`, {
    //   method: "GET",
    // });
    // return await response.json();
    try {
      const response = await fetch("http://localhost:5001/example");
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      return result?.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default NewsService;
