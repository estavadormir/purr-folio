import { twMerge } from 'tailwind-merge';

export default function Loading() {
  return (
    <div
      className={twMerge(
        'min-h-screen bg-slate-900 flex items-center justify-center'
      )}
    >
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-tiktokPink"></div>
    </div>
  );
}
