import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import CommentBox from "../shared/CommentBox";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
      </head>

      <body>
        <div id="root">${renderToString(<CommentBox />)}</div>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});
