import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import Pagination from './components/Pagination';
import { fetchImages, ImageData } from './api/fetchImages';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';

type View = 'landingPage' | 'gallery';

const App: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [currentView, setCurrentView] = useState<View>('landingPage');

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      const { images: newImages, maxPage: newMaxPage } = await fetchImages(page);
      setImages(newImages);
      setMaxPage(newMaxPage);
      setIsLoading(false);
    };

    if (currentView === 'gallery') {
      loadImages();
    }
  }, [maxPage, page, currentView]);

  const handleGalleryClick = () => {
    setCurrentView('gallery');
  };

  const handleLandingPageClick = () => {
    setCurrentView('landingPage');
  };

  return (
    <ChakraProvider>
      <div>
        <NavBar onClicks={{ onGalleryClick: handleGalleryClick, onLandingPageClick: handleLandingPageClick }} />
        {currentView === 'landingPage' ? (
          <LandingPage />
        ) : (
          <>
            <Gallery images={images} isLoading={isLoading} />
            <Pagination totalPages={maxPage} currentPage={page} onPageChange={setPage} />
          </>
        )}
      </div>
      < Footer/>
    </ChakraProvider>
  );
};

export default App;
