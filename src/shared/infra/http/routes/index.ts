import { Router } from 'express';
import userRouter from '@modules/users/infra/http/routes/users.routes';
import sessionRouter from '@modules/users/infra/http/routes/session.routes';
import contactsRouter from '@modules/contacts/infra/http/routes/contacts.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', sessionRouter);
routes.use('/contacts', contactsRouter);

export default routes;
