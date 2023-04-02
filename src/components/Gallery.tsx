import React from 'react';
import Masonry from 'react-masonry-css';
import { Box, Container, useBreakpointValue } from '@chakra-ui/react';
import Image from './Image';
import './Gallery.css';
import { ImageData } from '../api/fetchImages';

interface GalleryProps {
  images: ImageData[];
  isLoading: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ images, isLoading }) => {
  const breakpointColumnsObj = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    '2xl': 5,
  });

  const imageWidth = useBreakpointValue({ base: '100%', sm: '400px' }) || '400px';
  const imageHeight = useBreakpointValue({ base: 'auto', sm: '500px' }) || '500px';

  const renderImages = () => {
    return images.map((image) => (
      <Image
        key={image.id}
        src={image.src}
        alt={image.alt}
        width={imageWidth}
        height={imageHeight}
        prompt={image.prompt}
      />
    ));     
  };

  return (
    <Box style={{backgroundColor: "#081730"}}>
      <Container maxW="80%" py={4} style={{ paddingTop: "4rem" }}>
      <Masonry
        breakpointCols={breakpointColumnsObj || 1}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {renderImages()}
      </Masonry>
      </Container>
    </Box>
  );
};

export default Gallery;