export default (state) => {
  let result = "";
  let order = "";
  let department = "";
  let range = "";

  for (let name in state) {
    // Order filter
    if (name === "order") {
      const temp = state[name]?.[0]?.toUpperCase() || "";
      order = temp === "ASCENDING" ? "order=price" : temp === "DESCENDING" ? "order=-price" : "";
    }

    // Department filter
    if (name === "department") {
      department = state[name]
          .filter((d) => ["Bottoms", "Tops","FullBody", "OverWears"].includes(d))
          .map((d) => `department=${d.charAt(0).toUpperCase()}${d.slice(1).toLowerCase()}`)
          .join("&");
    }

    // Price filter
    if (name === "price") {
      const priceRanges = state[name]
          .map((p) => {
            if (p.match(/less/i)) return "0-" + p.replace(/[\D]+/i, "");
            if (p.match(/greater/i)) return p.replace(/[\D]+/i, "") + "-999";
            return p;
          })
          .flatMap((p) => p.match(/\d+/g) || [])
          .sort((a, b) => a - b)
          .filter((v, i, arr) => arr.indexOf(v) === i);

      range = priceRanges
          .reduce((acc, curr, i, arr) => (i % 2 === 0 ? acc.concat([`${curr}-${arr[i + 1] || ""}`]) : acc), [])
          .map((r) => `range=${r}`)
          .join("&");
    }
  }

  result = [range, order, department].filter(Boolean).join("&");
  return result;
};
