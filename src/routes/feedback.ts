import { Router } from "express";
import FeedBackMidll from "../midll/feedbackMidll";

const route = Router();

route.post("/feedback", FeedBackMidll);

export default route;
