{
  ("default");
  {
    ("require");
    ["./tests/steps/**/*.ts"], "format";
    [
      "progress", // Outputs progress in the terminal
      "node_modules/cucumber-pretty", // Pretty format for better readability (optional)
    ],
      "paths";
    ["./tests/features/**/*.feature"], "requireModule";
    ["ts-node/register"], "tags";
    "@smoke or @regression", "publishQuiet";
    true, "formatOptions";
    {
      snippetInterface: "async-await";
    }
  }
}

//"format"; ["progress", "json:./reports/report.json"],
