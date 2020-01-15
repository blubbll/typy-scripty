("use strict");
// init project
const express = require("express"),
  app = express(),
  sass = require("node-sass"),
  fs = require("fs");

//static dir
app.use(express.static("dist"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

//SASS
{
  const c = {
    in: `${__dirname}/build/style.sass.css`,
    out: `${__dirname}/dist/style.css`
  };
  fs.writeFileSync(
    c.out,
    sass
      .renderSync({
        data: fs.readFileSync(c.in, "utf8")
      })
      .css.toString("utf8")
  );
}

//listen
app.listen(process.env.PORT, function() {
  console.log(`Live on port ${this.address().port}`);
});
