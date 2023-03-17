import React, { useState } from "react";
import {
  VStack,
  Button,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const theme = extendTheme({
  breakpoints,
});

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [resultText, setResultText] = useState("");

  const triggerGeneratePastelArt = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8000/generate_pastel_art", {
      method: "POST",
    });
    const data = await response.json();
    setTaskId(data.task_id);
    checkTaskStatus(data.task_id);
  };

  const checkTaskStatus = async (task_id: string) => {
    const response = await fetch(
      `http://localhost:8000/generate_pastel_art/${task_id}`
    );
    const data = await response.json();
    if (data.status === "success") {
      setImageUrl(data.result[1]);
      setResultText(data.result[0]);
      setLoading(false);
    } else if (data.status === "pending") {
      setTimeout(() => checkTaskStatus(task_id), 1000);
    } else {
      console.error("Task failed:", data.error);
      setLoading(false);
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={8} alignItems="center">
        <Text fontSize="2xl">Pastel Art Generator</Text>
        <Box
          width="512px"
          height="512px"
          bg={imageUrl ? "transparent" : "gray.100"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Generated pastel art"
              width="512px"
              height="512px"
              objectFit="cover"
            />
          )}
        </Box>
        <Button
          colorScheme="teal"
          onClick={triggerGeneratePastelArt}
          isLoading={loading}
        >
          Generate Art
        </Button>
        <Text>{resultText}</Text>
      </VStack>
    </Box>
  );
};

export default App;
