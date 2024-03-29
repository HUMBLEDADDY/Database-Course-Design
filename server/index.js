const express = require("express");

const app = express();
app.set("secret", "ukq2egqayuawkd");
app.use(express.json());
app.use(require("cors")());
app.use("/", express.static(__dirname + "/web"));
app.use("/admin", express.static(__dirname + "/admin"));
// app.use("/", express.static(__dirname + "/blog"));
// app.use("/blogedit", express.static(__dirname + "/blogedit"));
// app.use("/main", express.static(__dirname + "/web"));
// app.use("/admin", express.static(__dirname + "/admin"));
app.use("/uploads", express.static(__dirname + "/uploads"));

require("./plugins/db")(app);
require("./routes/admin")(app);
require("./routes/web")(app);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
