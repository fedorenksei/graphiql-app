import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/button';

export const Welcome = () => {
  return (
    <div>
      Welcome page
      <Link to="/main">
        <Button>to Main</Button>
      </Link>
      <Button>TEST</Button>
    </div>
  );
};
