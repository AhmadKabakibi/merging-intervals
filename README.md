## :squirrel:

## Merging intervals problem

### Interval (definition)

An interval is an interval of time with a start and an end. All intervals start and end are included within the intervals, i.e. (4,9) means the interval includes 4,5,6,7,8,9 i.e. 4 and 9 are included here.<br>

### Merge interval (definition)

is an interval of time which when combined with two separate intervals allows them to be merged if they overlap across the merge interval. Examples

- Given two intervals (1,5) and (10,15) and a merge interval of 5, the two intervals overlap across this merge interval allowing them to be merged to a new interval of (1,15).<br>
- Similarly given two intervals (1,5) and (11,15) and a merge interval of 5, you cannot merge these two intervals since they do not overlap across the merge interval.<br>

### Problem

Given a list of intervals (start, end) you have to merge them based on a specified merge interval (specified in seconds as well). Your intervals are arriving in a particular order, as they arrive you should merge them according to the specified merge interval as each interval is received. Some of these intervals will be removed (in the arrival stream they will be marked as removed) – in that situation you should treat the original interval as if it never existed

### Getting Started

Require Node version > 8.X

`npm run start` Runs node index.js in the console with the output<br>

The test intervals loaded from `intervals.txt` in the root folder
