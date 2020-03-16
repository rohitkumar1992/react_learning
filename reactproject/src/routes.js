import React from 'react';
import Loadable from 'react-loadable';

const HOME = Loadable({
	loader: () => import('./component/home.js'),
	loading: Loading,
});

const routes = [
	{ path:'/home',exact:true,name: 'Home',  component: HOME },
]

export default routes;