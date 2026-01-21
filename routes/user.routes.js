import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({"title": "GET all users"}));
userRouter.get('/:id', (req, res) => res.send({"title": "GET one user"}));
userRouter.post('/:id', (req, res) => res.send({"title": "CREATE a new user"}));
userRouter.put('/:id', (req, res) => res.send({"title": "UPADATE user"}));
userRouter.delete('/:id', (req, res) => res.send({"title": "DELETE user"}));

export default userRouter; 