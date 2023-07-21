import { useState, useEffect } from 'react';

export interface ShortUrl {
  id: string;
  shortUrl: string;
  longUrl: string;
}

export function useShortUrls() {
  const [shortUrls, setShortUrls] = useState<ShortUrl[]>(() => {
    const savedShortUrls = localStorage.getItem('shortUrls');
    return savedShortUrls ? JSON.parse(savedShortUrls) : [];
  });

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
    const updatedUrls = shortUrls.filter((url) => url.id !== id);
    setShortUrls(updatedUrls);
  };
  return { shortUrls, addShortUrl, updateShortUrl, deleteShortUrl };
}
