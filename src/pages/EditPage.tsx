import { Button, Card, Input } from '@/components/shared';
import { ShortUrl, useShortUrls } from '@/hooks/useShorten';
import { useValidateUrl } from '@/hooks/useValidateUrl';
import { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
const EditPage = () => {
  const { id } = useParams();
  const [urlValue, setUrlValue] = useState('');
  const { updateShortUrl, shortUrls } = useShortUrls();
  const [oldUrlData, setOldUrlData] = useState<ShortUrl | undefined | null>(null);
  const isValid = useMemo(() => useValidateUrl(urlValue), [urlValue]);
  useEffect(() => {
    const oldUrl = shortUrls.find((url) => url.id === id);
    setUrlValue(oldUrl?.longUrl || '');
    setOldUrlData(oldUrl);
  }, [id]);

  const handleAddShortenUrl = () => {
    if (!urlValue || !isValid || !oldUrlData || !id) {
      toast.error('Invalid Url');
      return;
    }
    const isExist = shortUrls?.find((item: ShortUrl) => {
      if (item.longUrl === urlValue) {
        return true;
      }
      return false;
    });

    if (isExist) {
      toast.error('This Url Already Added');
      return;
    }

    const urlData: ShortUrl = {
      id: oldUrlData?.id,
      longUrl: urlValue,
      shortUrl: `https://urlshorten/${oldUrlData?.id}`,
    };
    updateShortUrl(id, urlData);
    toast.success('Updated Successfully');
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

export default EditPage;
