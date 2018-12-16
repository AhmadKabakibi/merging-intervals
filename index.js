const fs = require("fs");
const readline = require("readline");
const addInterval = require("./mergeIntervals.js");

const MERGE_INTERVAL = 7;
const ACTIONS = {
  ADDED: "added",
  REMOVED: "removed",
  DELETED: "deleted"
};

function intervals(intervals, mergeInterval) {
  let lines = 0;
  let output = [];

  const readStream = readline.createInterface({
    input: fs.createReadStream(intervals),
    output: process.stdout,
    terminal: false
  });

  readStream.on("line", line => {
    const parts = line.split(",");
    let arrivedInterval = [parseInt(parts[1], 10), parseInt(parts[2], 10)];

    let action = parts[3];
    //output.push(interval);
    //console.log(" action ", action);

    // add current interval that has added action to overall merged interval output
    if (action === ACTIONS.ADDED) {
      output = addInterval(output, arrivedInterval, mergeInterval);
      console.log("output => " + output);
    } else if (action === ACTIONS.REMOVED) {
      console.log("output => " + output);
    }

    lines++;
  });

  readStream.on("close", () => {
    console.log("lines => " + lines);
  });

  return output;
}

intervals("intervals.txt", MERGE_INTERVAL);

// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //
