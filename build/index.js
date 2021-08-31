"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
//create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//create an instance of matchReader and pass in something stisfying the 'dataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if ((match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin))
        manUnitedWins++;
}
console.log("" + manUnitedWins);
