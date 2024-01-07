import { useContext } from 'react';
import { membersData } from './data';
import { Member } from './ui/Member';
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
          {membersData.map((member) => (
            <Member
              {...member}
              key={`${member.github}`}
            />
          ))}
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
