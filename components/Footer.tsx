import { Linkedin, Mail } from "lucide-react";

interface ProfileData {
  name?: string;
  email?: string;
  linkedinUrl?: string;
}

export default function Footer({ profile }: { profile: ProfileData }) {
  const year = new Date().getFullYear();
  const name = profile?.name ?? "Adeel Sarwar";
  const email = profile?.email ?? "adeel@adeelsarwar.com";
  const linkedinUrl = profile?.linkedinUrl ?? "https://www.linkedin.com/in/adeel-sarwar-o-80336443/";

  return (
    <footer className="bg-white dark:bg-ink-950 border-t border-navy-900/10 dark:border-mist-700/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-ink-400 dark:text-mist-600">
          &copy; {year} {name}. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className="p-2 text-ink-400 dark:text-mist-600 hover:text-ember-500 dark:hover:text-ember-400 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 rounded"
          >
            <Mail size={16} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-ink-400 dark:text-mist-600 hover:text-ember-500 dark:hover:text-ember-400 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 rounded"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
