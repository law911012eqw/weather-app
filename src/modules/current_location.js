// This is used to get the user's current location name by getting the user's coordinates
export async function getAreaFromCoordinates({ lat, lon }) {
	const URL = `https://geocode.xyz/${lat},${lon}?json=1`;
	try {
		const response = await fetch(URL);
		const data = await response.json();
		console.log(`Here: ${data}`);
		return await data;
	} catch (e) {
		console.log(`Error: ${e}`);
	}
}
