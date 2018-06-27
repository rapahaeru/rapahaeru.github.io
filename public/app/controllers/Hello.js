class Hello {

	constructor() {
		this.HelloView = new HelloView();
	}

	action(event) {
		let inputs = document.querySelectorAll('li input'),
			selectedChoice = event.currentTarget.selectedOptions[0].value;

			this.filterChoices(inputs, selectedChoice);
	}

	filterChoices(elements, choice) {
		if (choice == "all") {
			this.HelloView.selectChoice(elements, true);
		} else if (choice == "none") {
			this.HelloView.selectChoice(elements, false);
		} else if (choice == "all-readed") {
			[].map.call(elements, key => {
				let item = key.parentElement.className;

				if (item.includes("readed")) {
					key.checked = true;
				} else {
					key.checked = false;
				}
			});
		} else if (choice == "last-seven") {
			this.HelloView.selectChoiceByLastDays(elements, 7);
		} else if (choice == "last-twenty") {
			this.HelloView.selectChoiceByLastDays(elements, 20);
		}
	}

	// filterChoices(elements, choice) {

	// 	[].map.call(elements, this.filterByReaded());
	// }

	// filterByReaded(elements) {
	// 	console.log(elements);
	// }
}
