'use client';
import NavButtons from '@/app/components/navigationButtons';
import { BackgroundGradient } from '@/app/components/ui/background-gradient';

const content = new Map<string, string>();
content.set(
  'User Interface',
  'how users will consume and interact with your application',
);
content.set(
  'Routing',
  'how users navigate between different parts of your application',
);
content.set('Data Fetching', 'where your data lives and how to get it');
content.set('Rendering', 'when and where you render static or dynamic content');
content.set(
  'Integrations',
  'what third-party services you use (for CMS, auth, payments, etc.) and how you connect to them',
);
content.set(
  'Infrastructure',
  'where you deploy, store, and run your application code (serverless, CDN, edge, etc.)',
);
content.set('Performance', 'how to optimize your application for end-users');
content.set(
  'Scalability',
  'how your application adapts as your team, data, and traffic grow',
);
content.set(
  'Developer Experience',
  "your team's experience building and maintaining your application",
);

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <div className="m-10">
        <BackgroundGradient className="flex flex-col items-center justify-center rounded-[22px] bg-slate-800 p-4 dark:bg-zinc-900 sm:p-10">
          <div className="w-full text-start">
            <p className="my-5 text-2xl text-white">
              Building blocks of a web application
            </p>
            <div className="flex flex-col space-y-5 text-white">
              <p>
                There are a few things you need to consider when building modern
                applications. Such as:
              </p>
              {[...content.entries()].map((entry) => (
                <li key={entry[0]}>
                  <b>{entry[0]}</b> - {entry[1]}
                </li>
              ))}
              <i>
                For each part of your application, you will need to decide
                whether you will build a solution yourself or use other tools,
                such as packages, libraries, and frameworks.
              </i>
            </div>
          </div>
        </BackgroundGradient>
      </div>
      <NavButtons nextPath="react" />
    </div>
  );
}
