import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';
//create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');

//create an instance of matchReader and pass in something stisfying the 'dataReader' interface
const matchReader = MatchReader.fromCsv('football.csv');

matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport()
//   // new ConsoleReport()
// );
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
