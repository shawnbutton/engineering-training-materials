//Uses markdownpdf
//https://www.npmjs.com/package/markdown-pdf
//https://github.com/alanshaw/markdown-pdf

// You MIGHT need to run the following first to install phantomjs (especially on mac?):
// node node_modules/phantomjs-prebuilt/install.js
// if so we can include this in the package.json for the future.
// see:
//   https://www.bountysource.com/issues/40330704-typeerror-bad-argument
//   https://github.com/Medium/phantomjs/issues/533


var convert = require("./convert");

var inputFiles = [
    "./workbook/technical-debt.md",
    "./workbook/quality-payoff.md",
    "./workbook/xp-practices.md",
    "./workbook/agile-testing.md",
    "./workbook/testing-pyramid.md",

    "./katas/src/main/java/fizzbuzz/fizzbuzz_bonus.md",
    "./katas/src/main/java/romannumeralcalculator/roman_numeral_calculator.md",
    "./katas/src/main/java/bowling/bowling.md",
    "./katas/src/main/java/gildedrose/gilded_rose.md"
];

var outputName = "workbook.pdf";

convert(inputFiles, outputName);



