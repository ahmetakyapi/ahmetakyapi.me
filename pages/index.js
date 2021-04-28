function HomePage() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Ben Ahmet Akyapı</h1>
          <h1 className="text-2xl font-medium">
            Bilgisayar Mühendisliği Öğrencisiyim.
          </h1>
          <p className="font-medium">
            Web tabanlı uygulamalar gelişmekte ve çeşitli projeler
            oluşturmaktayım.
          </p>
          <p className="font-medium">
            Burada projelerimi paylaşıp, yaptığım veya yapacağım içerikler
            hakkında bilgilerimi paylaşacağım.
          </p>
          <h3 className="font-medium">
            Aşağıdaki linklerden bana ulaşabilirsiniz.
          </h3>

          <div className="flex items-center">
            <a href="https://twitter.com/ahmetakyapi">
              <img className="site-container" src="/twitter.png" alt="" />{' '}
            </a>
            <a href="https://www.instagram.com/ahmetakyapi">
              <img className="site-container" src="/instagram.png" alt="" />{' '}
            </a>
            <a href="https://github.com/ahmetakyapi">
              <img className="site-container" src="/github.png" alt="" />{' '}
            </a>
            <a href="https://tr.linkedin.com/in/ahmet-akyap%C4%B1-ba9911193">
              <img className="site-container" src="/linkedin.png" alt="" />{' '}
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlDTckLTCgBcQJfFScTNkNzRlWBTcrPvfQCkJpjkbkhLgqxZwWxwLGBNcdKGPscsZVtfsV">
              <img className="site-container" src="/gmail.png" alt="" />{' '}
            </a>
          </div>
        </div>
      </div>

      <div className="site-4xl-container mt-10">
        <img src="/i-am.jpeg" alt="" />
      </div>
    </>
  )
}

export default HomePage
