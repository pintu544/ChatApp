import { Box, Typography } from "@mui/material";

const Message = ({ message }) => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        {message.user}: {message.content}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {new Date(message.timestamp).toLocaleTimeString()}
      </Typography>
    </Box>
  );
};

export default Message;
