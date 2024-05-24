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
        case '/news':
        case '/anuncios':
            page = pageFinder("./view/anuncio.html");
            break;
        case '/estudantes_honra':
            page = pageFinder("./view/estudanteHonra.html");
            break;
        case '/novas_matriculas_confirmacoes':
            page = pageFinder("./view/matricula.html");
            break;
        case '/portal_estudante':
        case '/student_gate':
            page = pageFinder("./view/portal.html");
            break;
        case '/alums':
            page = pageFinder("./view/alums.html");
            break;
    }
    console.log(route);
    return page;
};

export default routes;