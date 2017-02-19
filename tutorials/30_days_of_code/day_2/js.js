'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[\n ]+'));
	main(+(_input[0]), +(_input[1]), +(_input[2]));    
});

function main(mealCost, tipPercent, taxPercent) {
    const cost = parseFloat(mealCost);
    const tip = convertToPercent(parseInt(tipPercent));
    const tax = convertToPercent(parseInt(taxPercent));

    console.log('The total meal cost is', calculatTotalCost({cost, tip, tax}), 'dollars.');
}

const convertToPercent = value => value / 100;

const calculatTotalCost = data => Math.round( data.cost  + (data.cost * data.tax) + (data.cost * data.tip))