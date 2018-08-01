import shortener from './shortener/routes';
import stats from './stats/routes';
import errors from './errors/routes';

export default [...shortener, ...stats, ...errors];
