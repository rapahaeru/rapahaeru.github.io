class HelloView {

	checkSelectedChoice(elements, choice) {
		if (choice == "all") {
			elements.forEach(key => key.checked = true);
		} else if (choice == "none") {
			elements.forEach(key => key.checked = false);
		} else if (choice == "all-readed") {
			[].map.call(elements, key => {
				let item = key.parentElement.className;

				if (item.includes("readed")) {
					key.checked = true;
				} else {
					key.checked = false;
				}
			});
		}
	}
}
