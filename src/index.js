module.exports = function reverse (n) {
	let newN=Math.abs(n)
	return `${newN}`.split('').reverse().join('');
}
