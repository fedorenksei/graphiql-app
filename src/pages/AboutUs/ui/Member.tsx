import clsx from 'clsx';
import { BsGithub } from 'react-icons/bs';
import { getTextStyles } from './styles';
import { MemberData } from '../data';

export const Member = ({
  name,
  surname,
  imageUrl,
  github,
  shortBio,
}: MemberData) => {
  return (
    <div className="border dark:border-second-text-color rounded-md p-3 flex flex-col gap-4 items-center">
      <img
        src={imageUrl}
        alt={`${name} ${surname}`}
        className="w-40 h-40 object-cover rounded-full"
      />

      <h3>
        {name} {surname}
      </h3>

      <a
        href={`https://github.com/${github}`}
        rel="noopener noreferrer"
        target="_blank"
        className={clsx(
          'flex gap-2 justify-center items-center',
          getTextStyles({ link: true }),
        )}
      >
        <BsGithub size="1em" /> {github}
      </a>

      <p>{shortBio}</p>
    </div>
  );
};
