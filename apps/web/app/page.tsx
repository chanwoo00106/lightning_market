import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';

export default function Home() {
  return (
    <div className='space-y-4'>
      <p className="text-4xl">Hello world</p>

      <Button className='block'>button test</Button>

      <Input defaultValue="Input test" />
    </div>
  );
}
