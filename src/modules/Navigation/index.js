/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

let history;

export const registerNav = (ref) => {
  if (ref && ref.history) {
    history = ref.history;
  } else {
    console.error("Invalid navigation reference passed.");
  }
};

export const go = (uri) => {
  if (history) {
    history.go(uri);
  } else {
    console.error("Navigation history is not registered.");
  }
};

const jumpTo = (uri) => {
  if (history) {
    history.push(uri);
  } else {
    console.error("Navigation history is not registered.");
  }
};

export default jumpTo;
