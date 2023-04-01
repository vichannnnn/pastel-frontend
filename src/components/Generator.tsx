import React, { useState } from "react";
import {
  VStack,
  Button,
  Image,
  Text,
  Box,
  Textarea
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import CustomSlider from "./Slider";

const API_URL = import.meta.env['VITE_API_URL'] as string
const IMAGE_URL = import.meta.env['VITE_IMAGE_URL'] as string

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

const Generator: React.FC = () => {
  const defaultPrompt = "(mksks style), (masterpiece), (best quality), (ultra-detailed), (highres), illustration, portrait, 1girl";
  const defaultNegativePrompt = "lowres, ((bad anatomy)), ((bad hands)), text, missing finger, extra digits, fewer digits, blurry, ((mutated hands and fingers)), (poorly drawn face), ((mutation)), ((deformed face)), (ugly), ((bad proportions)), ((extra limbs)), extra face, (double head), (extra head), ((extra feet)), monster, logo, cropped, worst quality, low quality, normal quality, jpeg, humpbacked, long body, long neck, ((jpeg artifacts))";
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [resultText, setResultText] = useState("");
  const [promptInput, setPromptInput] = useState(defaultPrompt);
  const [negativePromptInput, setNegativePromptInput] = useState(defaultNegativePrompt);
  const [numSteps, setNumSteps] = useState(20);
  const [numGuidance, setNumGuidance] = useState(7);
  const [numHeight, setNumHeight] = useState(640);
  const [numWidth, setNumWidth] = useState(448);
  const [imageGenerated, setImageGenerated] = useState(false);

  const triggerGeneratePastelArt = async () => {
    setLoading(true);
    const response = await fetch(`${API_URL}/generate_pastel_art`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*"
      },
      body: JSON.stringify({
        prompt: promptInput,
        neg_prompt: negativePromptInput,
        width: numWidth,
        height: numHeight,
        steps: numSteps,
        guidance: numGuidance
      }),
    });
    const data = await response.json();
    setTaskId(data.task_id);
    checkTaskStatus(data.task_id);
  };

  const checkTaskStatus = async (task_id: string) => {
    const response = await fetch(
      `${API_URL}/generate_pastel_art/${task_id}`
    );
    const data = await response.json();
    if (data.status === "success") {
      const imageUrl = `${IMAGE_URL}/images/${data.result}`
      setImageUrl(imageUrl);
      setLoading(false);
      setImageGenerated(true);
    } else if (data.status === "pending") {
      setTimeout(() => checkTaskStatus(task_id), 1000);
    } else {
      console.error("Task failed:", data.error);
      setLoading(false);
    }
  };

  const downloadImage = (imageUrl: string) => {
    fetch(imageUrl)
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "generated-image.png");
          document.body.appendChild(link);
          link.click();
          link.parentNode?.removeChild(link);
        });
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };
  

  

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{backgroundColor: "#081730", paddingTop: "4rem"}}
    >
      <VStack spacing={8} alignItems="center">
        <Text fontSize="2xl" color="#ffffff">Pastel Art Generator</Text>
        <Box
          width="448px"
          height="640px"
          bg={imageUrl ? "transparent" : "gray.600"}
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
        <Button
          colorScheme="teal"
          onClick={() => downloadImage(imageUrl)}
          isDisabled={!imageGenerated}
        >
          Download Image
        </Button>
        <Textarea
          placeholder="Enter prompt input"
          defaultValue={defaultPrompt}
          onChange={(event) => setPromptInput(event.target.value)}
          color="white"
          size="lg"
          resize="none"
          height="100px"
          width="800px"
        />
        <Textarea
          placeholder="Enter negative prompt input"
          defaultValue={defaultNegativePrompt}
          onChange={(event) => setNegativePromptInput(event.target.value)}
          color="white"
          size="lg"
          resize="none"
          height="100px"
          width="800px"
        />
        {/* <Text color="white" fontWeight="bold" fontSize="md">
          Width: {numWidth}
        </Text>
        <CustomSlider
          ariaLabel="Width"
          defaultValue={numWidth}
          min={0}
          max={1024}
          step={1}
          onChange={setNumWidth}
          width="800px"
        />
        <Text color="white" fontWeight="bold" fontSize="md">
          Height: {numHeight}
        </Text>
        <CustomSlider
          ariaLabel="Height"
          defaultValue={numHeight}
          min={0}
          max={1024}
          step={1}
          onChange={setNumHeight}
          width="800px"
        /> */}
        <Text color="white" fontWeight="bold" fontSize="md">
          Steps: {numSteps}
        </Text>
        <CustomSlider
          ariaLabel="Steps"
          defaultValue={numSteps}
          min={0}
          max={100}
          step={1}
          onChange={setNumSteps}
          width="800px"
        />
        <Text color="white" fontWeight="bold" fontSize="md">
          Guidance: {numGuidance}
        </Text>
        <CustomSlider
          ariaLabel="Guidance"
          defaultValue={numGuidance}
          min={0}
          max={15}
          step={0.1}
          onChange={setNumGuidance}
          width="800px"
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

export default Generator;