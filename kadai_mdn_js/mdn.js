const event = new Date();
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(event.toLocaleDateString(undefined, options));
// Expected output (varies according to local timezone and default locale): Thursday, December 20, 2012
