const wrap = document.querySelector('.wrap');
const text = wrap.querySelector('h1');
const walk = 500;

function shadow(e) {
	const { offsetWidth: width, offsetHeight: height } = wrap;
	let { offsetX: x, offsetY: y } = e;
	
	if (this !== e.target) {
		x += e.target.offsetLeft;
		y += e.target.offsetTop;
	}
	
	const xWalk = Math.round((x / width * walk) - (walk / 2));
	const yWalk = Math.round((y / height * walk) - (walk / 2));
	
	//console.log(`x = ${x}; width = ${width}; walk = ${walk}; y = ${y}; height = ${height}... ${xWalk}, ${yWalk}`);
	
	text.style.textShadow = `
		${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, .7),
		${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, .7),
		${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, .7),
		${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, .7)
	`;
}

wrap.addEventListener('mousemove', shadow);