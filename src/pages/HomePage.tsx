import ListItem from '@/components/partials/ListItem';
import { Button, Card, Input } from '@/components/shared';
import { useRandomText } from '@/hooks/useRandomText';
import { ShortUrl, useShortUrls } from '@/hooks/useShorten';
import { useValidateUrl } from '@/hooks/useValidateUrl';
import { useState, useMemo } from 'react';
import toast from 'react-hot-toast';

const HomePage = () => {
  const [urlValue, setUrlValue] = useState('');
  const { addShortUrl, shortUrls, deleteShortUrl } = useShortUrls();
  const isValid = useMemo(() => useValidateUrl(urlValue), [urlValue]);

  const handleAddShortenUrl = () => {
    if (!urlValue || !isValid) {
      toast.error('InValid Url');
      return;
    }

    let text = useRandomText(7);
    const isExist = shortUrls?.find((item: ShortUrl) => {
      if (item.id === text) {
        text = useRandomText(7);
      }
      if (item.longUrl === urlValue) {
        return true;
      }
      return false;
    });

    if (isExist) {
      toast.error('This Url Already Added');
      return;
    }

    const urlData: ShortUrl = { id: text, longUrl: urlValue, shortUrl: `https://urlshorten/${text}` };
    addShortUrl(urlData);
    setUrlValue('');
  };

  const handleDeleteUrl = (id: string) => deleteShortUrl(id);

  return (
    <div className="mx-auto max-w-[1000px] space-y-5 px-2 py-4">
      <Card>
        <Card.Header>
          <Card.Title>Short Your Url</Card.Title>
        </Card.Header>
        <Card.Body className="space-y-6">
          <div className="flex items-center gap-4">
            <Input
              isValid={isValid}
              type="text"
              inputSize="lg"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
              placeholder="Enter The Url Here"
            />
            <Button
              onClick={handleAddShortenUrl}
              color="primary"
              variant="solid"
              className="whitespace-nowrap"
              size="lg"
            >
              Shorten
            </Button>
          </div>
          <ul className="space-y-2">
            {shortUrls.length ? (
              shortUrls.map((url, index) => (
                <ListItem key={index} index={index + 1} {...url} handleDeleteUrl={handleDeleteUrl} />
              ))
            ) : (
              <li className="text-center">Not Found Url</li>
            )}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePage;
