import {request, response, Router} from 'express';

const routes = Router();

routes.get('/query', (request, response) => {
    const {consulta} = request.query;

    return response.json({
        consultaRetorno: consulta
    });
});
routes.get('/hello', (request, response) => response.json({message:"Hello world..."}));
routes.get('/:teste', (request, response) => {
    const {teste} = request.params;

    return response.json({
        parametro: teste
    })
});

routes.post('/body', (request, response) => {
    const {name, email} = request.body;

    const user = {
        nome: name,
        email
    }

    return response.json(user);
})

export default routes;