import express from "express";
import { LoginPatient, RegisterPatient, sendEmail, verifyOTP, showAllDoctors, getDoctorProfile, appointmentBook, showAllAppointments, showSingleAppointments, createCustomCheckup, checkEmail} from "../controller/PatientController.js";

const router = express.Router();

router.route("/RegisterPatient").post(RegisterPatient)
router.route("/LoginPatient").post(LoginPatient)
router.route("/SendEmailPatient").post(sendEmail)
router.route("/checkEmail").post(checkEmail)
router.route("/verifyOTPPatient").post(verifyOTP)
router.route("/ShowAllDoctors").get(showAllDoctors)
router.route("/getDoctorProfile/:id").post(getDoctorProfile)
router.route("/appointmentBook").post(appointmentBook)
router.route("/showAllAppointments/:id").post(showAllAppointments)
router.route("/showSingleAppointments/:id").post(showSingleAppointments)
router.route("/CustomCheckup").post(createCustomCheckup)



export default router;
