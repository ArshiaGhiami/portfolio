import { Chip, Divider, LinearProgress, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { Box } from "@mui/system";

const Skill = ({ name, icon, value, color }) => {
    return (
        <Box sx={{mb: 1}}>
            <Divider textAlign="right" sx={{
                "&::before, &::after": { borderColor: color, mt: 4 }
            }}>
                <Chip icon={
                    <Box component="img" src={icon} sx={{height: 30}}/>
                } sx={{ backgroundColor: color , p: 2.5 }} label={
                    <Typography sx={{ color: "black" }} variant="body2">{name}</Typography>
                } />
            </Divider>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{width: 1}}>
                    <LinearProgress variant="determinate" value={value} sx={{ height: 10, borderRadius: 2, mx:1 }} />
                </Box>
                <Box sx={{minWidth: 35}}>
                    <Typography variant="body2"  color={orange[600] }>{Math.round(value)}%</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Skill;