function HomePage() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            Ben Ahmet Akyapı. Bilgisayar Mühendisliği Öğrencisiyim.
          </h1>

          <p>
            Web tabanlı uygulamalar gelişmekte ve çeşitli projeler
            oluşturmaktayım.
          </p>

          <p>
            Burada projelerimi paylaşıp, yaptığım veya yapacağım içerikler
            hakkında bilgileri paylaşacağım. Aşağıdaki linklerden bana
            ulaşabilirsiniz.
          </p>
        </div>
      </div>

      <div className="site-4xl-container mt-20">
        <img src="/i-am.jpeg" alt="" />
      </div>
    </>
  )
}

export default HomePage
