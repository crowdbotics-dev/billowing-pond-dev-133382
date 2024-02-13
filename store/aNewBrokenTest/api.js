import axios from "axios"
const aNewBrokenTest = axios.create({
  baseURL: "https://hello.com/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
