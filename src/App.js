import React, { Component, useState, useEffect } from "react";
import "./App.css";
import wixService from "./service/wixService";

class App extends Component {
  state = {
    jobs: [],
    submissionUrl: "",
    job0id: "",
    job0data: [],
    job1id: "",
    job1data: [],
    job1Value: "",
    job1Number: "",
    job2id: "",
    job4Number: "",
    modJobs: "",
  };

  // const [jobs, setJobs] = useState('');

  componentDidMount() {
    wixService.getJobs().then((res) =>
      this.setState({
        submissionUrl: res.data.submissionUrl,
        job1Number: res.data.jobs[1].data[0][0].value.number,
        job1Value: res.data.jobs[1].data[0][0],
        jobs: res.data.jobs,
        job0id: res.data.jobs[0].id,
        job4Number: res.data.jobs[4].data[0][1].value.number,
      })
    );
  }

  postJobs = async () => {
    var myJobs = [
      { id: "job-0", data: [] },
      { id: "job-1", data: [[{ value: { number: 5 } }]] },
      {
        id: "job-2",
        data: [[{ value: { number: 5 } }, { value: { number: 5 } }]],
      },
      {
        id: "job-3",
        data: [
          [
            { value: { number: 6 } },
            { value: { number: 4 } },
            { value: { number: 10 } },
          ],
        ],
      },
      {
        id: "job-4",
        data: [
          [
            { value: { number: 6 } },
            { value: { number: 4 } },
            { value: { number: 7 } },
            { value: { number: 17 } },
          ],
        ],
      },
      {
        id: "job-5",
        data: [
          [
            { value: { number: 6 } },
            { value: { number: 4 } },
            { value: { number: 24 } },
          ],
        ],
      },
      {
        id: "job-6",
        data: [
          [
            { value: { number: 6 } },
            { value: { number: 4 } },
            { value: { number: -1 } },
            { value: { number: -24 } },
          ],
        ],
      },
      {
        id: "job-7",
        data: [
          [
            { value: { number: 6 } },
            { value: { number: 4 } },
            { value: { number: 1.5 } },
          ],
        ],
      },
      {
        id: "job-8",
        data: [
          [
            { value: { number: 1 } },
            { value: { number: 3 } },
            { value: { number: 0.3333333333333333 } },
          ],
        ],
      },
      {
        id: "job-9",
        data: [
          [
            { value: { number: 1 } },
            { value: { number: 3 } },
            { value: { boolean: false } },
          ],
        ],
      },
      {
        id: "job-10",
        data: [
          [
            { value: { number: 1.2 } },
            { value: { number: 1.2 } },
            { value: { boolean: true } },
          ],
        ],
      },
      {
        id: "job-11",
        data: [
          [{ value: { boolean: false } }, { value: { boolean: true } }],
          [{ value: { boolean: true } }, { value: { boolean: false } }],
        ],
      },
      {
        id: "job-12",
        data: [
          [
            { value: { boolean: true } },
            { value: { boolean: false } },
            { value: { boolean: false } },
          ],
          [
            { value: { boolean: true } },
            { value: { boolean: true } },
            { value: { boolean: true } },
          ],
          [
            { value: { boolean: true } },
            { value: { number: 1 } },
            { value: { error: "type does not match" } },
          ],
        ],
      },
      {
        id: "job-13",
        data: [
          [
            { value: { boolean: true } },
            { value: { boolean: true } },
            { value: { boolean: false } },
            { value: { boolean: false } },
          ],
        ],
      },
      {
        id: "job-14",
        data: [
          [
            { value: { boolean: true } },
            { value: { boolean: false } },
            { value: { boolean: true } },
          ],
          [
            { value: { boolean: false } },
            { value: { boolean: false } },
            { value: { boolean: false } },
          ],
          [
            { value: { boolean: true } },
            { value: { number: 1 } },
            { value: { error: "type does not match" } },
          ],
        ],
      },
      {
        id: "job-15",
        data: [
          [
            { value: { boolean: false } },
            { value: { boolean: false } },
            { value: { boolean: true } },
            { value: { boolean: true } },
          ],
        ],
      },
      {
        id: "job-16",
        data: [
          [
            { value: { number: 2 } },
            { value: { number: 1.5 } },
            { value: { boolean: true } },
          ],
        ],
      },
      {
        id: "job-17",
        data: [[{ value: { text: "Hello, World!" } }]],
      },
      {
        id: "job-18",
        data: [
          [
            { value: { text: "First" } },
            // { value: { text: "First" } },
            // { value: { text: "First" } },
            // { value: { text: "First" } },
            // { value: { text: "First" } },
            // { value: { text: "First" } },
            // { value: { text: "First" } },
            // { value: { text: "First" } },
            { value: { text: "Second" } },
            { value: { text: "Third" } },
            { value: { text: "Fourth" } },
            { value: { text: "Fifth" } },
            { value: { text: "Sixth" } },
            { value: { text: "Seventh" } },
            { value: { text: "Last" } },
          ],
        ],
      },
      {
        id: "job-19",
        data: [
          [{ value: { text: "First" } }],
          // [{ value: { text: "First" } }],
          // [{ value: { text: "First" } }],
          // [{ value: { text: "First" } }],
          // [{ value: { text: "First" } }],
          // [{ value: { text: "First" } }],
          // [{ value: { text: "First" } }],
          [{ value: { text: "Second" } }],
          [{ value: { text: "Third" } }],
          [{ value: { text: "Fourth" } }],
          [{ value: { text: "Fifth" } }],
          [{ value: { text: "Sixth" } }],
          [{ value: { text: "Last" } }],
        ],
      },
      {
        id: "job-20",
        data: [
          [
            { value: { text: "First" } },
            { value: { text: "Second" } },
            { value: { text: "Third" } },
            { value: { text: "Fourth" } },
            { value: { text: "Fifth" } },
            { value: { text: "Sixth" } },
            { value: { text: "Seventh" } },
            { value: { text: "Last" } },
            // { value: { text: "Last" } },
            // { value: { text: "Last" } },
            // { value: { text: "Last" } },
            // { value: { text: "Last" } },
            // { value: { text: "Last" } },
            // { value: { text: "Last" } },
            // { value: { text: "Last" } },
          ],
        ],
      },
    ];

    var jobsAndEmail = {
      email: "erlandaslisauskas@gmail.com",
      results: myJobs,
    };

    console.log(jobsAndEmail);

    // console.log(this.state.submissionUrl);

    await wixService
      .submitJobs({
        email: "erlandaslisauskas@gmail.com",
        results: myJobs,
      })
      .then((res) => console.log(res.data));
  };

  calculateJobs() {
    const jobs = this.state.jobs;
    for (var i = 0; i < 21; i++) {
      for (var j = 0; j < 4; j++) {
        if (this.state.jobs[i].data[0][j].formula !== null) {
          const { formula } = this.state.jobs[i].data[0][j].formula;
          console.log(formula);
        }
      }
    }
  }

  render() {
    // var obj = {
    //   value: { number: 5 },
    // };
    // console.log(obj);
    var myJobs = [
      { id: "job-0", data: [] },
      { id: "job-1", data: [[{ value: { number: 5 } }]] },
      {
        id: "job-2",
        data: [[{ value: { number: 5 } }, { value: { number: 5 } }]],
      },
      {
        id: "job-3",
        data: [[{ value: { number: 5 } }, { value: { number: 5 } }]],
      },
    ];

    var myObj = this.state.jobs[1];
    var jobTest = { id: "job-00", data: [[{ value: { number: 0 } }]] };
    console.log(this.state.jobs[1]);
    const jobs = this.state.jobs;

    // if (this.state.jobs != undefined) {
    //   for (var i = 0; i < 21; i++) {
    //     for (var j = 0; j < 4; j++) {
    //       if (this.state.jobs[i].data != undefined) {
    //         console.log("not undefined");
    //       }
    //       if (this.state.jobs[i].data[0][j].formula !== null) {
    //         const { formula } = this.state.jobs[i].data[0][j].formula;
    //         console.log(formula);
    //       }
    //     }
    //   }
    // }

    return (
      <div className="App">
        <h2>wix task</h2>
        <button onClick={this.calculateJobs}></button>
      </div>
    );
  }
}

export default App;
