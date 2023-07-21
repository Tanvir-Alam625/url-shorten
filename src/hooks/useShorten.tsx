import { useState, useEffect } from 'react';

export interface ShortUrl {
  id: string;
  shortUrl: string;
  longUrl: string;
}
const getUrls = () => {
  const savedShortUrls = localStorage.getItem('shortUrls');
  return savedShortUrls ? JSON.parse(savedShortUrls) : [];
};

export function useShortUrls() {
  const [shortUrls, setShortUrls] = useState<ShortUrl[]>(getUrls);

  useEffect(() => {
    localStorage.setItem('shortUrls', JSON.stringify(shortUrls));
  }, [shortUrls]);

  const addShortUrl = (newShortUrl: ShortUrl) => {
    setShortUrls((prevShortUrls) => [...prevShortUrls, newShortUrl]);
  };

  const updateShortUrl = (id: string, updatedShortUrl: ShortUrl) => {
    setShortUrls((prevShortUrls) => prevShortUrls.map((url) => (url.id === id ? updatedShortUrl : url)));
  };

  const deleteShortUrl = (id: string) => {
    setShortUrls((prevShortUrls) => prevShortUrls.filter((url) => url.id !== id));
  };

  return { shortUrls, addShortUrl, updateShortUrl, deleteShortUrl };
}
