import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0f0d] text-white">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-8xl font-bold md:text-9xl">404</h1>
        <div className="max-w-md space-y-4">
          <p className="text-xl font-bold md:text-2xl">
            Страница не найдена
          </p>
          <p className="mb-8 text-gray-400">
            Вернитесь на главную страницу
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-gray-100 px-6 py-3 font-medium text-gray-900 transition-all hover:bg-white"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
