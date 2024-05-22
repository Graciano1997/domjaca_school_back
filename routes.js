import { pageFinder } from './module/pageFinder.js';

const routes=(route)=>{
    let page=undefined;
    switch(route){
        case '/':
        case '/home':
            page=pageFinder("./view/index.html");
        break;
        case '/about':
        case '/acerca':
            page=pageFinder("./view/acerca.html");
        break;
    }
    return page;
};

export default routes;