import { Router } from "express";
import addCourse from "./controllers/post.js";
import getCourse from "./controllers/get.js";
import { AuthenticationAdmin } from "../../config/authentication.js";

const courseRoutes = Router();

courseRoutes.post('/', AuthenticationAdmin, addCourse);
courseRoutes.get('/', getCourse);

export default courseRoutes;