import { Router } from "express";
import AddCourse from "./controllers/post.js";
import getCourse from "./controllers/get.js";
import { AuthenticationAdmin, AuthenticationUsers } from "../../config/authentication.js";
import DeleteUser from "./controllers/delete.js";

const courseRoutes = Router();

courseRoutes.post('/', AuthenticationAdmin, AddCourse);
courseRoutes.get('/', AuthenticationUsers, getCourse);
courseRoutes.delete('/:id', AuthenticationAdmin, DeleteUser);

export default courseRoutes;