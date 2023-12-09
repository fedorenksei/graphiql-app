import { Link } from 'react-router-dom';

export const Welcome = () => {
  return (
    <div>
      Welcome page
      <Link to="/main">to Main</Link>
    </div>
  );
};
