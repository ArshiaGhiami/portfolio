import { Box, Chip, Tooltip, Typography } from "@mui/material";
import { devWorkInfo } from "../../constans/details";
import CountUp from "react-countup";

const DevWorkCount = () => {
    return (
        <>
            {devWorkInfo.map((item, index) => (
                <Box key={index} component="div" sx={{ width: 1, mr: 1 }}>
                    <Tooltip title={item.toolTipTitle} arrow placement="right">
                        <Chip icon={item.icon} sx={{ background: item.color, p: 2, width: 1 }} label={
                            <Typography>
                                <CountUp start={0} end={item.total} duration={2} />
                            </Typography>
                        } />
                    </Tooltip>
                </Box>
            ))}
        </>
    );
}

export default DevWorkCount;