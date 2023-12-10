import { useAuth } from '@/shared/useAuth/useAuth';
import { Link } from 'react-router-dom';

export const Welcome = () => {
  const { isAuth, email, logout } = useAuth();
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      Welcome page
      <Link
        className="text-blue-700"
        to="/main"
      >
        to main
      </Link>
      {!isAuth && (
        <>
          <Link
            className="text-blue-700"
            to="/signup"
          >
            sign up
          </Link>
          <Link
            className="text-blue-700"
            to="/signin"
          >
            sign in
          </Link>
        </>
      )}
      {isAuth && (
        <div className="flex flex-col border-2 border-green-700">
          <h3>You logged in as {email}</h3>
          <button
            className="bg-orange-600 rounded-md"
            type="button"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
