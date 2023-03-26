import React from 'react';
import { Tooltip, Box, Image as ChakraImage, AspectRatio } from '@chakra-ui/react';

interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  prompt?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, prompt }) => {
  return (
    <Tooltip label={prompt} hasArrow placement="top">
    <Box borderRadius="md" overflow="hidden" boxShadow="base" mb={4}>
      <AspectRatio ratio={7 / 10}>
        <ChakraImage src={src} alt={alt} width={width} height={height} objectFit="cover" />
      </AspectRatio>
    </Box>
    </Tooltip>
  );
};

export default Image;