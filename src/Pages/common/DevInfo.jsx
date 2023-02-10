import { ArrowLeftRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";

const Info = ({ children }) => {
    return (
        <Typography variant="body1" sx={{ color: "black", textAlign: "left", mt: 1 }}>
            {children}
            <ArrowLeftRounded color="gray" sx={{ verticalAlign: "bottom" }} />
        </Typography>
    );
}

const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی: ارشیا قیامی</Info>
            <Info>سن: 18</Info>
            <Info>شهر: مشهد</Info>
            <Info>arshia.ghiami@yahoo.com : آدرس ایمیل</Info>
            <Info>شماره تماس: 093012332</Info>
        </>
    );
}

export default DevInfo;