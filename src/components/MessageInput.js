import { useState } from "react";
import { useSelector } from "react-redux";

import { TextField, Button, Box } from "@mui/material";

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  useSelector((state) => state.chat.user);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: 2,
        backgroundColor: "#ffffff",
        borderRadius: 2,
        boxShadow: 2,
        alignItems: "center",
      }}
    >
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        label="Type a message"
        fullWidth
        variant="outlined"
        sx={{
          borderRadius: 20,
          backgroundColor: "#f0f0f0",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: 20,
            },
          },
          "&:hover .MuiOutlinedInput-root": {
            backgroundColor: "#e0e0e0",
            borderRadius: 20,
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        sx={{
          marginLeft: 2,
          borderRadius: 20,
          boxShadow: 2,
          "&:hover": {
            backgroundColor: "#1976d2",
            boxShadow: 3,
          },
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
