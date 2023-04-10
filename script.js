let converter = (num) => {
const rules = {
		"M": 1000,
		"CM": 900,
		"D": 500,
		"CD": 400,
		"C": 100,
		"XC": 90,
		"L": 50,
		"XL": 40,
		"XXX": 30,
		"XX": 20,
		"X": 10,
		"IX": 9,
		"V": 5,
		"IV": 4,
		"I": 1
	}
	let result = "";
for (let key in rules) {
   let arabic = rules[key];
   while (num >= arabic) {
       result += key;
       num -= arabic
   }
}
return result;
}
