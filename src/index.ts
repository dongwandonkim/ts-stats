import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

//create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

//create an instance of matchReader and pass in something stisfying the 'dataReader' interface
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let manUnitedWins = 0;
for (let match of matchReader.matches) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  )
    manUnitedWins++;
}
console.log(`${manUnitedWins}`);
