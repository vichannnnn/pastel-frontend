import React, { useState } from "react";
import {
  VStack,
  Button,
  Image,
  Text,
  Box,
  Input
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";


const API_URL = import.meta.env['VITE_API_URL'] as string

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
  const [promptInput, setPromptInput] = useState("");

  const triggerGeneratePastelArt = async () => {
    setLoading(true);
    const promptType = promptInput ? PromptType.Custom : PromptType.Default;
    const response = await fetch(`${API_URL}/generate_pastel_art`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            input: promptInput,
            type: promptType,
        }),
    });
    const data = await response.json();
    setTaskId(data.task_id);
    checkTaskStatus(data.task_id);
};

// Add the PromptType enum to your code:
const PromptType = {
    Random: "RANDOM",
    Default: "DEFAULT",
    Custom: "CUSTOM",
};

  const checkTaskStatus = async (task_id: string) => {
    const response = await fetch(
      `${API_URL}/generate_pastel_art/${task_id}`
    );
    const data = await response.json();
    if (data.status === "success") {
      setImageUrl(data.result);
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
          width="448px"
          height="640px"
          bg={imageUrl ? "transparent" : "gray.100"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Generated pastel art"
              width="448px"
              height="640px"
              objectFit="cover"
            />
          )}
        </Box>
        <Input
          placeholder="Enter prompt input"
          value={promptInput}
          onChange={(event) => setPromptInput(event.target.value)}
        />
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
