import { useContext } from 'react';
import { BsGithub } from 'react-icons/bs';
import { RssLogo } from './ui/RssLogo';
import { LanguageContext } from '../../shared/languages/LanguageProvider';

export const AboutUs = () => {
  const { words } = useContext(LanguageContext);
  return (
    <div className="p-5 py-10 md:p-10 space-y-7 max-w-7xl mx-auto text-center bg-slate-800 text-white">
      <section className="space-y-3 mx-auto max-w-[600px]">
        <h2 className="text-[40px] leading-[57px] font-bold">
          {words.meetOurAgileTeam}
        </h2>
        <p>{words.aboutUs}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[40px] leading-[57px] font-bold">
          {words.ourTeam}
        </h2>
        <div className="grid grid-cols-[minmax(0,_400px)] justify-center lg:grid-cols-3 gap-4">
          <div className="border dark:border-second-text-color rounded-md p-3 flex flex-col gap-4 items-center">
            <img
              src="./images/AlekseiFedorenko.png"
              alt="AlekseiFedorenko"
              className="w-40 h-40 object-cover rounded-full"
            />

            <h3 className="text-2xl font-bold">{words.aleksei}</h3>

            <a
              href="https://github.com/fedorenksei"
              rel="noopener noreferrer"
              target="_blank"
              className="flex gap-2 justify-center items-center"
            >
              <BsGithub size="1em" /> fedorenksei
            </a>

            <p>{words.alekseiBio}</p>
          </div>
          <div className="border dark:border-second-text-color rounded-md p-3 flex flex-col gap-4 items-center">
            <img
              src="./images/DmitriyRomanenkov.jpg"
              alt="DmitriyRomanenkov"
              className="w-40 h-40 object-cover rounded-full"
            />

            <h3 className="text-2xl font-bold">{words.dmitriy}</h3>

            <a
              href="https://github.com/color-zebra"
              rel="noopener noreferrer"
              target="_blank"
              className="flex gap-2 justify-center items-center"
            >
              <BsGithub size="1em" /> color-zebra
            </a>

            <p>{words.dmitriyBio}</p>
          </div>
          <div className="border dark:border-second-text-color rounded-md p-3 flex flex-col gap-4 items-center">
            <img
              src="./images/MikalaiTserakhau.png"
              alt="MikalaiTserakhau"
              className="w-40 h-40 object-cover rounded-full"
            />

            <h3 className="text-2xl font-bold">{words.mikalai}</h3>

            <a
              href="https://github.com/nickbis"
              rel="noopener noreferrer"
              target="_blank"
              className="flex gap-2 justify-center items-center"
            >
              <BsGithub size="1em" /> nickbis
            </a>

            <p>{words.mikalaiBio}</p>
          </div>
        </div>
      </section>

      <section className="space-y-3 mx-auto max-w-[600px]">
        <h2 className="text-[40px] leading-[57px] font-bold">
          {words.ourGratitude}
        </h2>

        <p>
          {words.gratitudeOne},{' '}
          <a
            href="https://github.com/Margaryta-Maletz"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-600 hover:text-blue-700"
          >
            {words.margarita}
          </a>
          {words.gratitudeTwo}
        </p>

        <div className="max-w-[300px] mx-auto pt-4">
          <RssLogo />
        </div>
      </section>
    </div>
  );
};
