import { Router } from 'express'

import User from './app/models/User'

const routes = new Router();

routes.get('/', async (request, response) => {
    const user = await User.create({

    })

    return response.status(201).json(user)
});

export default routes;