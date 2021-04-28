import { useAuth0 } from '@auth0/auth0-react'

export default function Form({ onSubmit, text, textSet }) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  return (
    <form className="mt-10" onSubmit={onSubmit}>
      <textarea
        rows="2"
        className="border border-green-400 rounded w-full block px-2 py-1"
        onChange={(e) => textSet(e.target.value)}
        value={text}
      />

      <div className="mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-2">
            <button className="bg-green-400 text-white px-2 py-1 rounded">
              Gönder
            </button>
            <img src={user.picture} width={30} className="rounded-full" />
            <span className="text-2xl: bg-indigo-50 font-bold">
              {user.name}
            </span>
            <button
              typeof="button"
              onClick={() =>
                logout({ returnTo: process.env.NEXT_PUBLIC_URL + '/blog' })
              }
            >
              <p className="bg-blue-900 text-gray-200 px-2 py-1 rounded">
                Çıkış Yap
              </p>
            </button>
          </div>
        ) : (
          <button typeof="button" onClick={() => loginWithRedirect()}>
            <p className="bg-blue-900 text-gray-200 px-2 py-1 rounded">
              Giriş Yap
            </p>
          </button>
        )}
      </div>
    </form>
  )
}
