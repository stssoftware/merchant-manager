import createHistory from 'history/createBrowserHistory';

export default createHistory({
  basename: process.env.REACT_APP_ROUTER_BASE
});
