import { Router } from "express";
import getUsers from "./controllers/get.js";
import AddUsers from "./controllers/post.js";
import LoginUsers from "./controllers/login.js";
import deleteUser from "./controllers/deleteUser.js";
import updateUser from "./controllers/updateUser.js";
import FindUser from "./controllers/findUser.js";
import { AuthenticationUsers, VerifyUser } from "../../config/authentication.js";

const userRoutes = Router()

/**
 * @swagger
 * /api/users/auth/login:
 *   post:
 *     summary: User login
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Incorrect password
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
userRoutes.post('/login', LoginUsers)

userRoutes.post('/login', LoginUsers)
userRoutes.post('/', AddUsers)
userRoutes.get('/', AuthenticationUsers, getUsers)
userRoutes.get('/UserInfo', VerifyUser, FindUser)
userRoutes.delete('/:id', deleteUser)
userRoutes.put('/:id', updateUser)

export default userRoutes;