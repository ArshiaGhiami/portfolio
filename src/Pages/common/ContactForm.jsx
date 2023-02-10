import { Typography, CardActions, CardContent, TextField, InputAdornment, Button, useTheme } from "@mui/material";
import { Face6Rounded, SubjectRounded, EmailRounded } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import { useFormik } from "formik";
import { contactValidateSchema } from "../../constans/contactValidateSchema";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const theme = useTheme();

    const contactInputNames = {
        fullname: "",
        email: "",
        subject: "",
        message: "",
        recaptcha: ""
    }

    const formik = useFormik({
        initialValues: contactInputNames,
        validationSchema: contactValidateSchema,
        onSubmit: (values) => {
            console.log("Form values: ", values);
        }
    })
    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <CardContent sx={{ backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[300] }}>
                <Grid container >
                    <Grid xs={12} sx={{ direction: "ltr" }}>
                        <Grid container spacing={2}>

                            <Grid xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="warning"
                                    variant="outlined"
                                    label="نام و نام خانوادگی"
                                    name="fullname"
                                    helperText={
                                        formik.touched.fullname ? formik.errors.fullname : null
                                    }
                                    error={Boolean(
                                        formik.touched.fullname && formik.errors.fullname
                                    )}
                                    value={formik.values?.fullname}
                                    onChange={formik.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <Face6Rounded />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>


                            <Grid xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="warning"
                                    variant="outlined"
                                    label="ایمیل"
                                    name="email"
                                    helperText={
                                        formik.touched.email ? formik.errors.email : null
                                    }
                                    error={Boolean(
                                        formik.touched.email && formik.errors.email
                                    )}
                                    value={formik.values?.email}
                                    onChange={formik.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <EmailRounded />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid xs={12}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="warning"
                                    variant="outlined"
                                    label="عنوان"
                                    name="subject"
                                    helperText={
                                        formik.touched.subject ? formik.errors.subject : null
                                    }
                                    error={Boolean(
                                        formik.touched.subject && formik.errors.subject
                                    )}
                                    value={formik.values?.subject}
                                    onChange={formik.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment postion="end">
                                                <SubjectRounded />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid xs={12}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={6}
                                    size="small"
                                    color="warning"
                                    variant="outlined"
                                    label="متن عنوان"
                                    name="message"
                                    helperText={
                                        formik.touched.message ? formik.errors.message : null
                                    }
                                    error={Boolean(
                                        formik.touched.message && formik.errors.message
                                    )}
                                    value={formik.values?.message}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{ backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[300], display: "flex", flexDirection: "column", alignItems: "end" }}>
                <ReCAPTCHA onChange={(value) => { formik.setFieldValue("recaptcha", value) }} theme={theme.palette.mode} sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} hl="fa" style={{ marginRight: 8, marginBottom: 3 }} />
                {
                    formik.errors.recaptcha && formik.touched.recaptcha && (
                        <Typography sx={{ ml: 2, mb: 1 }} variant="caption" color="error">{formik.errors.recaptcha}</Typography>
                    )
                }
                <Button type="submit" variant="contained" color="success" fullWidth sx={{ mx: 0, mb: 1 }}>ارسال</Button>
            </CardActions>
        </form>
    );
}

export default ContactForm;