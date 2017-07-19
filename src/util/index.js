export const isMobile = () => {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		console.log("IS MOBILE >>>>");
		return true;
	} else {
		return false
	}

}

export const highlightText = (words) => {
	let rebuiltString = [];

	const text = document.getElementsByClassName("card-body")[0].innerHTML;

	text.split(" ").map(i => {
		if(words.includes(i)) {
			rebuiltString.push(`<strong>${i}</strong>`)
		} else {
			rebuiltString.push(i)
		}
	})
	console.log(rebuiltString.join(" "))
	document.getElementsByClassName("card-body")[0].innerHTML = rebuiltString.join(" ")
}