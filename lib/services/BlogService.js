"use strict";
import examplePosts from '../../data/files/posts';

const getRequestHeaders = { "Content-Type": "application/json" };
class BlogService {
  static async get() {
    try {
      const response = await fetch("http://localhost:5001/blog");
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      return result?.data
    } catch (err) {
      console.log(err);
    }
    return examplePosts;
  }
}

export default BlogService;
