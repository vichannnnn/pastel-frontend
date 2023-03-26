import React from 'react';
import Masonry from 'react-masonry-css';
import { Box, Skeleton } from '@chakra-ui/react';
import Image from './Image';
import './Gallery.css';
import { Container } from '@chakra-ui/react';
import { ImageData } from '../api/fetchImages';

interface GalleryProps {
  images: ImageData[];
  isLoading: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ images, isLoading }) => {
    const breakpointColumnsObj = {
        default: 5,
        1400: 4,
        1100: 3,
        700: 2,
        500: 1,
      };
      
      

  const renderImages = () => {
    return images.map((image) => (
        <Image key={image.id} src={image.src} alt={image.alt} width="400px" height="500px" prompt={image.prompt} />
      ));      
  };

  return (
    <Box style={{backgroundColor: "#081730"}}>
      <Container maxW="80%" py={4} style={{ paddingTop: "4rem" }}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
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