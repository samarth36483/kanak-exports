import { useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    console.log("Form Data:", data);
    // Simulate sending form data to an email
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="First Name" {...register("firstName")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Last Name" {...register("lastName")} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email *"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message as string}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Subject *"
            {...register("subject", { required: "Subject is required" })}
            error={!!errors.subject}
            helperText={errors.subject?.message as string}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Your Message *"
            multiline
            rows={4}
            {...register("message", { required: "Message is required" })}
            error={!!errors.message}
            helperText={errors.message?.message as string}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Submit Form
          </Button>
        </Grid>
      </Grid>
      {submitted && (
        <Typography className="text-center mt-4" color="success">
          Form submitted successfully!
        </Typography>
      )}
    </form>
  );
};

export default ContactForm;
