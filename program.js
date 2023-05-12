function astroidCoord(t, r, R) {
  const k = R / r;
  const x = (R - r) * Math.cos(t) + r * Math.cos((k - 1) * t);
  const y = (R - r) * Math.sin(t) - r * Math.sin((k - 1) * t);
  return [x + width / 2, y + height / 2];
}

let width = 600;
let height = 400;
let rad = 10;
let svg = d3
  .select("body")
  .append("svg")
  .attr("height", height)
  .attr("width", width);

let r = 40;
let R = 160;
//let rec = svg.append("rect").attr("height", height).attr("width", width);
let dot;

//let intervals = [];
// функция рисующая астроиду с помощью d3.js
// function playAstroid() {
//   let x = 0;
//   let y = 0;
//   intervals.push(
//     setInterval(() => {
//       x += 1;
//       y += 1;
//       dot.attr("transform", `translate(${x}, ${y})`);
//     }, 100)
//   );
// }
drawAstroid();
function drawAstroid() {
  d3.selectAll("circle").remove();
  let t = 0;
  const input = document.querySelector("#count");
  let value = input.value;
  while (t < Math.PI * 2) {
    svg
      .append("circle")
      .attr("cx", astroidCoord(t, r, R)[0])
      .attr("cy", astroidCoord(t, r, R)[1])
      .attr("r", rad)
      .style("fill", "lightblue")
      .style("stroke", "blue")
      .style("stroke-width", "2");
    t += (Math.PI * 2) / value;
  }
}
