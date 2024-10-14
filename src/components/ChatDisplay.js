import { Box, Typography, Card, CardContent } from "@mui/material";
import { useEffect, useRef } from "react";

const ChatDisplay = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box sx={{ 
      overflowY: "scroll", 
      height: "80vh", 
      padding: 2, 
      backgroundColor: "#f5f5f5", 
      borderRadius: 2, 
      boxShadow: 1 
    }}>
      {messages.map((message, index) => (
        <Card
          key={index}
          sx={{
            marginBottom: 2,
            backgroundColor: message.user === "Pintu Kumar" ? "#e3f2fd" : "#fff", 
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <CardContent>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#1976d2" }}>
              {message.user}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              {message.content}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {new Date(message.timestamp).toLocaleTimeString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default ChatDisplay;
