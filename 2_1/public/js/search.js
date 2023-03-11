const searchInDatabase = async (value) => {
	try {
		const response = await fetch(
			`http://localhost:5012/api/product/search/${value}`,
			{
				method: "GET",
				"Content-Type": "application/json",
			}
		);
		const data = await response.text();
        window.document.write(`${data}`);
	} catch (error) {
		console.log("errrrr: ", error);
	}
};

document.getElementById("btnSearch").addEventListener("click", (e) => {
	e.preventDefault();
	const searchValue = document.getElementById("inputSearch").value;
	searchInDatabase(searchValue);
});
