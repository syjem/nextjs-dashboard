'use client';
import { useToast } from '@/components/ui/use-toast';

export const SuccessToast = () => {
  const { toast } = useToast();
  return toast({
    description: `Invoice successfully created.`,
  });
};
