"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
//create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
//create an instance of matchReader and pass in something stisfying the 'dataReader' interface
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport()
//   // new ConsoleReport()
// );
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
