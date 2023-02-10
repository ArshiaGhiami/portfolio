import { CopyrightRounded, FavoriteRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const SidebarFooter = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "center",
                // height: 100,
                margin: "20px 0"
            }}
        >
            <Typography variant="subtitle2" color="text.primary">
                طراحی شده با{" "}
                <FavoriteRounded
                    sx={{
                        verticalAlign: "middle",
                        color: "tomato",
                        height: 20,
                    }}
                />
            </Typography>

            <Typography
                variant="caption"
                color="text.primary"
                sx={{ mt: 2 }}
            >
                کپی رایت ۱۴۰۱{" "}
                <CopyrightRounded
                    sx={{ verticalAlign: "middle", height: 16 }}
                />
            </Typography>
        </Box>
    );
}

export default SidebarFooter;