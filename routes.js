import pageFinder from './module/pageFinder.js';

const routes = (route) => {
    let page = undefined;
    switch (route) {
        case '/assets/style.css':
        case '/assets/index.js':
        case '/favicon.ico':
            page='';
            break;
        case '/':
        case '/home':
            page = pageFinder("./view/index.html");
            break;
        case '/about':
        case '/acerca':
            page = pageFinder("./view/acerca.html");
            break;
    }
    console.log(route);
    return page;
};

export default routes;