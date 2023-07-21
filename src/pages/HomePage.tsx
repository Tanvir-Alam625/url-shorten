import { Button, Card, Input } from '@/components/shared';

const HomePage = () => {
  return (
    <div className="mx-auto max-w-[1000px] space-y-5 px-2 py-4">
      <Card>
        <Card.Header>
          <Card.Title>Short Your Url</Card.Title>
        </Card.Header>
        <Card.Body>
          <Input type="text" placeholder="Enter The Url Here" />
        </Card.Body>
        <Card.Footer className="flex justify-center">
          <Button color="primary" variant="solid" size="md" className="whitespace-nowrap">
            Shorten Url
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default HomePage;
