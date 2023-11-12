import { Metadata } from 'next';
import LoginForm from '@/app/ui/login-form';

export const metadata: Metadata = {
  title: 'Login | Acme Dashboard',
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[450px] flex-col p-4 md:-mt-32">
        <LoginForm />
      </div>
    </main>
  );
}
