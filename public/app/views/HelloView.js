class HelloView {

	checkSelectedChoice(elements, choice) {
		if (choice == "all") {
			elements.forEach(keys => keys.checked = true);
		} else if (choice == "none") {
			elements.forEach(keys => keys.checked = false);
		}
	}
}
