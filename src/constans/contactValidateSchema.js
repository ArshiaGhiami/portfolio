import * as yup from "yup"

export const contactValidateSchema = yup.object().shape({
    fullname: yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    email: yup.string().email().required("ایمیل الزامی می باشد"),
    subject: yup.string().required("عنوان الزامی می باشد"),
    message: yup.string().required("متن عنوان الزامی می باشد"),
    recaptcha: yup.string().required("کپتچا الزامی می باشد")
});