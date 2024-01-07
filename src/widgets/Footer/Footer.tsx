import { BsGithub } from 'react-icons/bs';
import { RssLogo } from './ui/RssLogo';

export const Footer = () => {
  return (
    <div className="p-3 flex items-center flex-wrap justify-evenly text-blue-500 bg-slate-900">
      <div className="w-16">
        <RssLogo />
      </div>
      <a
        href="https://github.com/fedorenksei"
        rel="noopener noreferrer"
        target="_blank"
        className="flex gap-2 justify-center items-center"
      >
        <BsGithub size="1em" /> fedorenksei
      </a>
      <a
        href="https://github.com/color-zebra"
        rel="noopener noreferrer"
        target="_blank"
        className="flex gap-2 justify-center items-center"
      >
        <BsGithub size="1em" /> color-zebra
      </a>
      <a
        href="https://github.com/nickbis"
        rel="noopener noreferrer"
        target="_blank"
        className="flex gap-2 justify-center items-center"
      >
        <BsGithub size="1em" /> nickbis
      </a>
      <span>2024</span>
    </div>
  );
};
