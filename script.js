function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toESTString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
