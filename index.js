// required because parcel cannot build inline js tags
import flamethrower from 'flamethrower-router';

const router = flamethrower({ prefetch: 'visible', log: false, pageTransitions: false });

// loading bar
window.addEventListener('flamethrower:router:fetch-progress', ({ detail }) => {
	const progressBar = document.getElementById('load');
	progressBar.style.width = detail.progress + '%';
});
