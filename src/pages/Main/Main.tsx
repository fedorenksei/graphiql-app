import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/button';

export const Main = () => {
  return (
    <div>
      Main page
      <Link to="/">
        <Button>to Welcome</Button>
      </Link>
      <Button>TEST</Button>
    </div>
  );
};
