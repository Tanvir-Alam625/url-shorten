import ListItem from '@/components/partials/ListItem';
import { Card } from '@/components/shared';
import { useShortUrls } from '@/hooks/useShorten';
const ListPage = () => {
  const { shortUrls, deleteShortUrl } = useShortUrls();
  const handleDeleteUrl = (id: string) => deleteShortUrl(id);
  return (
    <div className="mx-auto max-w-[1000px] space-y-5 px-2 py-4">
      <Card>
        <Card.Header>
          <Card.Title>List Of Urls</Card.Title>
        </Card.Header>
        <Card.Body>
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

export default ListPage;
