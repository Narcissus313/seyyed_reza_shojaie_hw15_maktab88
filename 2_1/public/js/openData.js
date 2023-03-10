const openData = async (id) => {
	console.log("id: ", id);
	// window.open().document.write(`<h5>${JSON.stringify(data)}</h5>`);
	// console.log(id);
	try {
		const response = await fetch(
			`http://localhost:5012/api/product/${id}`,
			{
				method: "GET",
				headers: { "Content-Type": "application/json" },
			}
		);
		const data = await response.text();
		window.open().document.write(`${data}`);
	} catch (error) {
		console.log(error, " errxx");
	}
};
