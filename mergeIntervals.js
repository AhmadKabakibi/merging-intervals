const addInterval = (intervals, arrivedInterval, mergeInterval) => {
  //first interval in the overall merged list
  if (intervals.length === 0) {
    return [arrivedInterval];
  }

  //get getMergeIntervalRange for the current incomming interval
  const mergeDuration = getMergeIntervalRange(
    arrivedInterval[1],
    mergeInterval
  );
  console.log(" arrivedInterval  ", arrivedInterval);
  console.log(" MergeInterval  ", mergeDuration);

  return merge(intervals, arrivedInterval, mergeDuration);
};

const merge = (intervals, arrivedInterval, mergeDuration) => {
  let newSet = [];
  let endSet = [];
  let i = 0;

  // check if any interval of the orignal intervals overlaps across mergeInterval
  // add intervals that come before the new merge interval
  while (i < intervals.length && intervals[i][1] < mergeDuration[0]) {
    newSet.push(intervals[i]);
    i++;
  }

  // add our arrivedInterval to this final list
  newSet.push(arrivedInterval);

  // check each interval that comes after the new merge interval to determine if we can merge
  // if no merges are required then populate a list of the remaining intervals
  while (i < intervals.length) {
    let last = newSet[newSet.length - 1];
    if (intervals[i][0] < last[1]) {
      let newInterval = [
        Math.min(last[0], intervals[i][0]),
        Math.max(last[1], intervals[i][1])
      ];
      newSet[newSet.length - 1] = newInterval;
    } else {
      endSet.push(intervals[i]);
    }
    i++;
  }
  return newSet.concat(endSet);
};

const getMergeIntervalRange = (startPoint, MergeInterval) => {
  return [startPoint, startPoint + MergeInterval - 1];
};

module.exports = addInterval;
