"use strict";
import exampleNews from "../../data/files/news";

const getRequestHeaders = { "Content-Type": "application/json" };
class NewsService {
  static async get() {
    try {
      const response = await fetch("http://localhost:5001/news");
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      return result?.data;
    } catch (err) {
      console.log(err);
    }
    return exampleNews;
  }
}

export default NewsService;
