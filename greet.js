function greet(name) {
	if (name)
	{
		if (!Array.isArray(name) && name === name.toUpperCase()) {
			return "HELLO " + name.toUpperCase() + "!";
		}

		if (Array.isArray(name)) {
			let normalNames = '';
			let uppercaseNameList = [];
			let normalNameList = [];
			for (let i = 0; i < name.length; i++) {
				if (name[i] === name[i].toUpperCase()) {
					uppercaseNameList.push(name[i]);
					continue;
				}

				if (name[i].includes("\"")){
					normalNameList.push(name[i].normalize().replace(/\"/g, ''));
					continue;
				}

				if (name[i].split(", ").length > 1) {
					name[i].split(", ").forEach(n => {
						normalNameList.push(n);
					});
				} else { 
					normalNameList.push(name[i]);
				}
			}

			for(let j = 0; j < normalNameList.length; j++) {
				if (j === normalNameList.length - 1) {
					normalNames += (normalNameList.length > 2) ? "and " : " and ";
					normalNames += normalNameList[j];
				} else {
					normalNames += normalNameList[j];
					if (normalNameList.length > 2)
						normalNames += ', ';
				}
			}

			let uppercaseNames = (uppercaseNameList.length > 0) ? " AND HELLO " + uppercaseNameList.join("AND ") + "!" : '';

			return "Hello, " + normalNames + "." + uppercaseNames; 
		}

		return "Hello, " + name + ".";
	}
	return "Hello, my friend.";
}

module.exports = greet;
