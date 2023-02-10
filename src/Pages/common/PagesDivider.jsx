import { Chip, Divider, Typography } from "@mui/material";

const PagesDivider = ({borderColor, chipColor, label, icon}) => {
    return (
        <Divider textAlign="center" sx={{
            "&::before , &::after": {borderColor: borderColor}
        }}>
            <Chip icon={icon} color={chipColor} sx={{ p: 2.5 }} label={
                <Typography>{label}</Typography>
            } />
        </Divider>
    );
}
 
export default PagesDivider;