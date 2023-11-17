import { Metadata } from 'next';
import Header from '@/app/ui/header';
import ForgotPasswordForm from './form';

export const metadata: Metadata = {
  title: 'Forgot Password | Next Dashboard',
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col max-w-[1440px] mx-auto">
      <Header />
      <div className="mx-auto w-full max-w-[450px] p-4">
        <ForgotPasswordForm />
      </div>
    </main>
  );
}
