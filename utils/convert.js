const fs = require("fs");

function extractRootVariables(filePath = "global.css") {
  const cssFile = fs.readFileSync(filePath, "utf-8"); // Read the CSS file

  const rootVariables = new Map();

  // Regular expression to match CSS variables inside :root
  const regex = /:root\s*{([^}]*)}/g;
  const match = regex.exec(cssFile);

  if (match && match[1]) {
    // Extract CSS variables inside :root
    const variables = match[1].split(";").filter(Boolean);

    variables.forEach((variable) => {
      const [name, value] = variable.trim().split(":");
      if (name && value) {
        rootVariables.set(name.trim(), value.trim());
      }
    });
  }

  return rootVariables;
}

function getThemeReplacementsValues(filePath) {
  const rootVariablesMap = extractRootVariables(filePath);
  let tmpObj = {};
  for (const [k, v] of rootVariablesMap) {
    tmpObj = { ...tmpObj, [`var(${k})`]: v };
  }
  return tmpObj;
}

module.exports = {
  extractRootVariables,
  getThemeReplacementsValues,
};
