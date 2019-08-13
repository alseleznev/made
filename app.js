import './src/scss/normalize.scss';
import './src/scss/app.scss';
require.context('./src/scss', false, /\.scss$/);

require.context('./src/js', false, /\.js$/);
