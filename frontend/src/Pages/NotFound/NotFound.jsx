// src/pages/NotFoundPage.jsx

import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-offwhite text-center px-4">
      <h1 className="text-8xl font-bold font-titulo text-primary">404</h1>
      <p className="text-2xl md:text-3xl font-sans text-secondary mt-4">
        Página Não Encontrada
      </p>
      <p className="mt-6 text-lg text-gray-600">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="mt-10 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-tertiary transition-colors"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}

export default NotFoundPage;