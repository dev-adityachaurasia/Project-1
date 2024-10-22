import express from "express";
import isAuthantication from "../middlewares/isAuthinticated.js";
import upload from "../middlewares/multer.js";
import {
  deleteEvent,
  deleteQuestionPaper,
  deleteResult,
  editEvent,
  editQuestionPaper,
  editResult,
  getEvents,
  getQuetionPaper,
  getResults,
  uploadEvents,
  uploadQuestionPaper,
  uploadResult,
} from "../controllers/admin.controller.js";

const router = express.Router();

router
  .route("/uploadresult")
  .post(isAuthantication, upload.single("post"), uploadResult);
router.route("/editresult/:id").post(isAuthantication, editResult);
router.route("/deleteresult/:id").post(isAuthantication, deleteResult);
router.route("/getresults").post(isAuthantication, getResults);
router.route("/getpapers").post(isAuthantication, getQuetionPaper);
router.route("/allevents").post(isAuthantication, getEvents);
router
  .route("/uploadpaper")
  .post(isAuthantication, upload.single("post"), uploadQuestionPaper);
router.route("/editpaper/:id").post(isAuthantication, editQuestionPaper);
router.route("/deletepaper/:id").post(isAuthantication, deleteQuestionPaper);
router
  .route("/uploadevent")
  .post(isAuthantication, upload.single("post"), uploadEvents);
router.route("/editevent/:id").post(isAuthantication, editEvent);
router.route("/deleteevent/:id").post(isAuthantication, deleteEvent);

export default router;
