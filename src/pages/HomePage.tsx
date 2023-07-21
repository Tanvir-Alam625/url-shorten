import { Button, Card, Input } from '@/components/shared';
import { useRandomText } from '@/hooks/useRandomText';
import { ShortUrl, useShortUrls } from '@/hooks/useShorten';
import { useValidateUrl } from '@/hooks/useValidateUrl';
import { useState, useMemo } from 'react';

const HomePage = () => {
  const [urlValue, setUrlValue] = useState('');
  const { addShortUrl, shortUrls } = useShortUrls();
  const isValid = useMemo(() => useValidateUrl(urlValue), [urlValue]);

  const handleAddShortenUrl = () => {
    if (!urlValue || !isValid) return;

    let text = useRandomText(7);
    const isExist = shortUrls?.find((item: ShortUrl) => {
      if (item.id === text) {
        text = useRandomText(7);
      }
      if (item.longUrl === urlValue) {
        alert('This Url Already added');
        return true;
      }
      return false;
    });

    if (isExist) return;

    const urlData: ShortUrl = { id: text, longUrl: urlValue, shortUrl: `https://urlshorten/${text}` };
    addShortUrl(urlData);
    setUrlValue('');
  };

  return (
    <div className="mx-auto max-w-[1000px] space-y-5 px-2 py-4">
      <Card>
        <Card.Header>
          <Card.Title>Short Your Url</Card.Title>
        </Card.Header>
        <Card.Body>
          <Input
            isValid={isValid}
            type="text"
            inputSize="lg"
            value={urlValue}
            onChange={(e) => setUrlValue(e.target.value)}
            placeholder="Enter The Url Here"
          />
        </Card.Body>
        <Card.Footer className="flex justify-center">
          <Button onClick={handleAddShortenUrl} color="primary" variant="solid" size="lg" className="whitespace-nowrap">
            Shorten Url
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default HomePage;
