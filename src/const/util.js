import React from 'react';

export function isEven(value) {
	return value % 2 === 0;
}

export function toProperCase(str) {
	let words = str.split(/ +/g);
	let newArray = [];
	for (let i = 0; i < words.length; i++) {
		newArray[i] = words[i][0].toUpperCase() + words[i].slice(1, words[i].length).toLowerCase();
	}
	let newString = newArray.join(' ');
	return newString;
}

export function isVisible(element) {
    const top = element.getBoundingClientRect().top;
    return top >= 0 && top <= window.innerHeight;
}

export function italicise(string) {
	if (!string.includes('*')) return string;
	return string.split('*').map((element, i) => {
		if (isEven(i)) return element;
		else return <span key={element + '.' + i} className='italic'>{element}</span> 
	});
}