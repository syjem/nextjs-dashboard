import Link from 'next/link';
import Image from 'next/image';
import Header from '@/app/ui/header';
import { lusitana } from '@/app/ui/fonts';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col max-w-[1440px] mx-auto">
      <Header />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} md:pt-16 text-xl text-slate-950 dark:text-slate-100 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a
              href="https://nextjs.org/learn/"
              target="_blank"
              className="text-blue-500 dark:text-blue-700">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Button
            asChild
            className="group gap-2 w-[60%] max-w-[200px] hover:scale-[1.01] font-semibold text-base">
            <Link href="/login">
              <span className={`${lusitana.className}`}>Get Started</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-[0.125rem]" />
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-20 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            priority
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            priority
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile versions"
          />
        </div>
      </div>
    </main>
  );
}
