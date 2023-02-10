import { GitHub, Instagram, Telegram, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";

const SocialMedia = () => {
    return (
        <Box component="div" sx={{m: "0 auto", textAlign: "center"}}>
            <IconButton>
                <a href="https://github.com/arshia-ghiami" target="_blank" rel="noopener noreferrer">
                    <GitHub sx={{color: "gray"}}/>
                </a>
            </IconButton>
            <IconButton>
                <a href="https://github.com/arshia-ghiami" target="_blank" rel="noopener noreferrer">
                    <WhatsApp sx={{color: "gray"}}/>
                </a>
            </IconButton>
            <IconButton>
                <a href="https://github.com/arshia-ghiami" target="_blank" rel="noopener noreferrer">
                    <Telegram sx={{color: "gray"}}/>
                </a>
            </IconButton>
            <IconButton>
                <a href="https://www.instagram.com/iamarshia" target="_blank" rel="noopener noreferrer">
                    <Instagram sx={{color: "gray"}}/>
                </a>
            </IconButton>
        </Box>
    );
}
 
export default SocialMedia;