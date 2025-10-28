const http = require("http");

http
  .get("http://localhost:3000", (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log("Server response:", data); // Displays: Hello from Node.js server!
    });
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
