import { twMerge } from 'tailwind-merge';

interface ErrorMessageProps {
  title: string;
  message: string;
  code?: string | number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const ErrorMessage = ({
  title,
  message,
  code,
  action,
}: ErrorMessageProps) => {
  return (
    <div
      className={twMerge(
        'min-h-screen bg-slate-900 text-white flex items-center justify-center'
      )}
    >
      <div className="text-center">
        {code && (
          <h1 className="text-6xl font-bold text-tiktokPink mb-4">{code}</h1>
        )}
        <h2 className="text-2xl mb-4">{title}</h2>
        <p className="mb-8 text-gray-400">{message}</p>
        {action && (
          <button
            onClick={action.onClick}
            className={twMerge(
              'px-6 py-3 bg-tiktokPink text-white rounded-lg',
              'hover:bg-tiktokAqua transition-colors duration-200'
            )}
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
};
