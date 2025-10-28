const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3000;

// Middleware to parse incoming request body
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(
  session({
    secret: "mysecretkey", 
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } 
  })
);

// Home route
app.get("/", (req, res) => {
  if (req.session.username) {
    res.send(`
      <h2>Welcome back, ${req.session.username}!</h2>
      <a href="/logout">Logout</a>
    `);
  } else {
    res.send(`
      <h2>You are not logged in.</h2>
      <form method="POST" action="/login">
        <input type="text" name="username" placeholder="Enter username" required />
        <button type="submit">Login</button>
      </form>
    `);
  }
});

// Login route
app.post("/login", (req, res) => {
  const { username } = req.body;
  req.session.username = username; 
  res.redirect("/");
});

// Logout route
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Error logging out");
    }
    res.clearCookie("connect.sid"); 
    res.redirect("/");
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
