class Hello {

	constructor() {
		this.HelloView = new HelloView();
	}

	action(event) {
		let inputs = document.querySelectorAll('li input'),
			selectedChoice = event.currentTarget.selectedOptions[0].value;

			this.HelloView.checkSelectedChoice(inputs, selectedChoice);
	}
}
