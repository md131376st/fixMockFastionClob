/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

const validate = (value, rules) => {
  return Object.entries(rules).every(([rule, ruleValue]) => {
    switch (rule) {
      case "minLength":
        return value.length >= ruleValue;
      case "maxLength":
        return value.length <= ruleValue;
      case "isRequired":
        return value?.trim() !== "";
      case "isEmail":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      default:
        return true;
    }
  });
};

export default validate;
