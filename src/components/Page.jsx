import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Page = (props) => {
    const { index, value, children, ...others } = props;
    return (
        <div
            role="TabPanel"
            id={`tabpanel-${index}`}
            aria-labelledby={`sidebar-tab-${index}`}
            hidden={value !== index}
            {...others}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography variant="h3">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default Page;