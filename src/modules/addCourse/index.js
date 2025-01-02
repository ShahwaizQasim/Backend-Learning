import { Router } from "express";
import AddCourse from "./controllers/post.js";
import getCourse from "./controllers/get.js";
import { AuthenticationAdmin } from "../../config/authentication.js";

const courseRoutes = Router();

courseRoutes.post('/', AuthenticationAdmin, AddCourse);
courseRoutes.get('/', getCourse);

export default courseRoutes;