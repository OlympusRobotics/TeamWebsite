// required because parcel cannot build inline js tags
import flamethrower from 'flamethrower-router';

const router = flamethrower({ prefetch: 'visible', log: false, pageTransitions: false });
