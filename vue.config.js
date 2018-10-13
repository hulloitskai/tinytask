let baseUrl = undefined;

if (process.env.UWCS === "true") {
  console.log("Detected environment: UWCS");
  baseUrl = "/~ssxie/";
} else if (process.env.GH_PAGES === "true") {
  console.log("Detected environment: GH_PAGES");
  baseUrl = "/tinytask/";
}

module.exports = { baseUrl };
