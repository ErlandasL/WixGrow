import axios from "axios";

const API_URL =
  "https://www.wix.com/_serverless/hiring-task-spreadsheet-evaluator/";

const SUBMIT_URL =
  "https://www.wix.com/_serverless/hiring-task-spreadsheet-evaluator/submit/eyJ0YWdzIjpbXX0";

class wixService {
  getJobs() {
    return axios.get(API_URL + "jobs");
  }

  submitJobs(body) {
    return axios.post(SUBMIT_URL, body);
  }
}

export default new wixService();
