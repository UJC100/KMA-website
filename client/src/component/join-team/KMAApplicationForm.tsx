import { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  LinearProgress,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  useTheme,
  useMediaQuery,
  FormHelperText,
  FormControl,
  FormLabel,
} from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { amber } from "@mui/material/colors";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

const steps = [
  "Personal Info",
  "Motivation",
  "Challenges",
  "Commitment",
  "Vision",
  "Agreement",
  "Schedule meeting",
];

export default function MentorshipForm() {
  const apiUrl = import.meta.env.VITE_BASE_API_URL
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<any>({
    fullName: "",
    age: "",
    email: "",
    phone: "",
    occupation: "",
    motivation1: "",
    motivation2: "",
    motivation3: "",
    challenges1: "",
    challenges2: "",
    challenges3: "",
    commitment1: "",
    commitment2: "",
    commitment3: "",
    vision: "",
    agreement: "",
    meetingDate: "",
    meetingTime: "",
  });
  const [errors, setErrors] = useState<any>({}); // <-- error state
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  // Fields required per step
  const requiredFields: Record<number, string[]> = {
    0: ["fullName", "age", "email", "phone", "occupation"],
    1: ["motivation1", "motivation2", "motivation3"],
    2: ["challenges1", "challenges2", "challenges3"],
    3: ["commitment1", "commitment2", "commitment3"],
    4: ["vision"],
    5: ["agreement"],
    6: ["meetingDate", "meetingTime"],
  };

  const validateStep = (step: number) => {
    const fields = requiredFields[step];
    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });
    setErrors((prev: any) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

 const handleSubmit = async () => {
  let allValid = true;

  for (let step = 0; step < steps.length; step++) {
    if (!validateStep(step)) {
      allValid = false;
    }
  }

  if (!allValid) return;

    const payload = {
    fullName: formData.fullName,
    age: formData.age,
    email: formData.email,
    phone: formData.phone,
    occupation: formData.occupation,
    motivations: [formData.motivation1, formData.motivation2, formData.motivation3].filter(Boolean),
    challenges: [formData.challenges1, formData.challenges2, formData.challenges3].filter(Boolean),
    commitments: [formData.commitment1, formData.commitment2, formData.commitment3].filter(Boolean),
    vision: formData.vision,
    agreement: formData.agreement === "yes" ? true : false,
    meetingDate: formData.meetingDate,
    meetingTime: formData.meetingTime,
  };

  try {
  
    const response = await axios.post(
      `${apiUrl}/meetings`, 
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Submission successful:", response.data);
    setSnackbar({
        open: true,
        message: "Form submitted successfully!",
        severity: "success",
      });
    
    // Optionally reset the form
    // setFormData(initialFormData);

  } catch (error: any) {
    console.error("❌ Submission failed:", error.response || error.message);
    setSnackbar({
        open: true,
        message: "Form submission failed. Please try again.",
        severity: "error",
      });
  }
};

  const progress = ((activeStep + 1) / steps.length) * 100;

  // Disable next button if required fields are empty
  const isStepComplete = requiredFields[activeStep].every(
    (field) => formData[field]?.trim() !== ""
  );
  // console.log(activeStep, steps.length);

  return (
    <Box className="max-w-3xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-2xl m-2">
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
      {/* Stepper */}
      <>
        {isSmallScreen ? (
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  slotProps={{
                    stepIcon: {
                      sx: {
                        color: amber[500],
                        "&.Mui-active": {
                          color: amber[700],
                        },
                        "&.Mui-completed": {
                          color: amber[800],
                        },
                      },
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        ) : (
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  slotProps={{
                    stepIcon: {
                      sx: {
                        color: amber[500],
                        "&.Mui-active": {
                          color: amber[700],
                        },
                        "&.Mui-completed": {
                          color: amber[800],
                        },
                      },
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        )}
      </>

      {/* Progress Bar */}
      <Box className="mt-4">
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            "& .MuiLinearProgress-bar": {
              backgroundColor: amber[500],
            },
            backgroundColor: amber[100],
            borderRadius: 8,
            height: 7,
          }}
        />
        <p className="text-center mt-2 text-sm text-gray-600">
          {Math.round(progress)}% completed
        </p>
      </Box>

      {/* Step Content */}
      <Box className="mt-6">
        {/* PERSONAL INFO */}
        {activeStep === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
            />
            <TextField
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              error={!!errors.age}
              helperText={errors.age}
            />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}

            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
            <TextField
              fullWidth
              label="Occupation / Profession"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              error={!!errors.occupation}
              helperText={errors.occupation}
            />
          </div>
        )}
        {/* MOTIVATION */}
        {activeStep === 1 && (
          <div className="gap-4 flex flex-col">
            <TextField
              fullWidth
              label="What inspired you to apply to the Kingdom Mentorship Academy?"
              name="motivation1"
              value={formData.motivation1}
              onChange={handleChange}
              multiline
              rows={3}
              error={!!errors.motivation1}
              helperText={errors.motivation1}
            />
            <TextField
              fullWidth
              label="What do you hope to gain from being mentored at KMA?"
              name="motivation2"
              value={formData.motivation2}
              onChange={handleChange}
              multiline
              rows={3}
              error={!!errors.motivation2}
              helperText={errors.motivation2}
            />
            <TextField
              fullWidth
              label="How would you describe your 'why' — the reason you believe you were created?"
              name="motivation3"
              value={formData.motivation3}
              onChange={handleChange}
              multiline
              rows={3}
              error={!!errors.motivation3}
              helperText={errors.motivation3}
            />
          </div>
        )}
        {/* CHALLENGES */}
        {activeStep === 2 && (
          <div className="gap-4 flex flex-col">
            {" "}
            <TextField
              fullWidth
              label="What challenges are you facing in discovering or fulfilling your purpose?"
              name="challenges1"
              value={formData.challenges1}
              onChange={handleChange}
              multiline
              rows={3}
              error={!!errors.challenges1}
              helperText={errors.challenges1}
            />{" "}
            <TextField
              fullWidth
              label="What skills, talents, or experiences would you like to grow or monetize?"
              name="challenges2"
              value={formData.challenges2}
              onChange={handleChange}
              multiline
              rows={3}
              error={!!errors.challenges2}
              helperText={errors.challenges2}
            />{" "}
            <TextField
              fullWidth
              label="Why do you believe KMA is the right academy for you at this season?"
              name="challenges3"
              value={formData.challenges3}
              onChange={handleChange}
              multiline
              rows={3}
              error={!!errors.challenges3}
              helperText={errors.challenges3}
            />{" "}
          </div>
        )}
        {/* COMMITMENT */}{" "}
        {activeStep === 3 && (
          <div className="gap-4 flex flex-col">
            {" "}
            <TextField
              fullWidth
              label="How much time and effort will you invest weekly for calls, assignments, and practice?"
              name="commitment1"
              value={formData.commitment1}
              onChange={handleChange}
              multiline
              rows={3}
              error={!!errors.commitment1}
              helperText={errors.commitment1}
            />{" "}
            <TextField
              fullWidth
              label="Tell us about a time you set a goal and followed through despite challenges."
              name="commitment2"
              value={formData.commitment2}
              onChange={handleChange}
              multiline
              rows={3}
              error={!!errors.commitment2}
              helperText={errors.commitment2}
            />{" "}
            <TextField
              fullWidth
              label="How do you usually respond when things don’t go as planned or when you fail?"
              name="commitment3"
              value={formData.commitment3}
              onChange={handleChange}
              multiline
              rows={3}
              error={!!errors.commitment3}
              helperText={errors.commitment3}
            />{" "}
          </div>
        )}
        {/* VISION */}{" "}
        {activeStep === 4 && (
          <TextField
            fullWidth
            label="After completing the program, how do you plan to apply what you’ve learned?"
            name="vision"
            value={formData.vision}
            onChange={handleChange}
            multiline
            rows={4}
            error={!!errors.vision}
            helperText={errors.vision}
          />
        )}
        {/* AGREEMENT */}{" "}
        {activeStep === 5 && (
          <FormControl
            component="fieldset"
            error={!formData.agreement && Boolean(errors.agreement)} // error state
          >
            <FormLabel component="legend">Do you agree?</FormLabel>

            <RadioGroup
              name="agreement"
              value={formData.agreement}
              onChange={handleChange}
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="✅ Yes, I commit fully."
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="❌ No, I can’t commit."
              />
            </RadioGroup>

            {/* Inline error message */}
            {errors.agreement && (
              <FormHelperText>{errors.agreement}</FormHelperText>
            )}
          </FormControl>
        )}
        {/* SCHEDULE MEETING */}
        {activeStep === 6 && (
          <div className="flex flex-col gap-4">
            {/* Date Picker */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Pick a Date
              </label>
              <Calendar
                onClickDay={(date: Date) =>
                  setFormData((prev: any) => ({
                    ...prev,
                    meetingDate: date.toLocaleDateString("en-CA"),
                  }))
                }
                value={
                  formData.meetingDate
                    ? new Date(formData.meetingDate)
                    : undefined
                }
                minDate={(() => {
                  const tomorrow = new Date();
                  tomorrow.setDate(tomorrow.getDate() + 1); 
                  return tomorrow;
                })()}
              />
              {!formData.meetingDate && (
                <p className="text-red-500 text-sm mt-1">Date is required</p>
              )}
            </div>

            {/* Time Selector */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Pick a Time
              </label>
              <select
                name="meetingTime"
                value={formData.meetingTime}
                onChange={(e) =>
                  setFormData((prev: any) => ({
                    ...prev,
                    meetingTime: e.target.value,
                  }))
                }
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-black/70"
              >
                <option value="">-- Select a time --</option>
                <option>9:00 AM</option>
                <option>11:00 AM</option>
                <option>2:00 PM</option>
                <option>4:00 PM</option>
              </select>
              {!formData.meetingTime && (
                <p className="text-red-500 text-sm mt-1">Time is required</p>
              )}
            </div>
          </div>
        )}
      </Box>

      {/* Navigation */}
      <Box className="flex justify-between mt-8">
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{
            color: amber[500],
            "&:hover": {
              color: amber[700],
            },
          }}
        >
          Back
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              backgroundColor: amber[500],
              "&:hover": {
                backgroundColor: amber[700],
              },
            }}
          >
            Submit
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!isStepComplete}
            sx={{
              backgroundColor: amber[500],
              "&:hover": {
                backgroundColor: amber[700],
              },
            }}
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
}
