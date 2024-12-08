import { cn } from '@/lib/utils';

export function IconEnter({ className }: { className: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={cn('size-6', className)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499'
      />
    </svg>
  );
}
