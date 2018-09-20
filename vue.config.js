const isUWCS = process.env.UWCS === "true";
if (isUWCS) console.log('Detected environment "UWCS".');

module.exports = {
  baseUrl: isUWCS ? "/~ssxie/" : "/"
};
