function HomePage() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Ben Ahmet Akyapı.</h1>
          <h1 className="text-xl font-bold"> Frontend Developer</h1>
          <p className="font-medium">
            {' '}
            İstanbul'da yaşıyorum. Front-end teknolojileriyle ilgileniyorum..
            Yeni teknolojileri deneyip, yeni şeyler üretmeye çalışıyorum.
            Yaptığım projeleri Github üzerinden paylaşıyorum.{' '}
          </p>
          <p className="font-medium">
            Burada fikirlerimi paylaşıp, yaptığım veya yapacağım içerikler
            hakkında bilgilerimi paylaşacağım.
          </p>
          <h3 className="font-medium mt-auto">
            Sorularınız olursa, aşağıdaki linklerden bana ulaşabilirsiniz.
          </h3>

          <div className="flex justify-center pt-2">
            <a className="mx-4 w-12" href="https://twitter.com/ahmetakyapi">
              <img src="/twitter.png" alt="" />{' '}
            </a>
            <a
              className="mx-4 w-12"
              href="https://www.instagram.com/ahmetakyapi"
            >
              <img src="/instagram.png" alt="" />{' '}
            </a>
            <a className="mx-4 w-12" href="https://github.com/ahmetakyapi">
              <img src="/github.png" alt="" />{' '}
            </a>
            <a
              className="mx-4 w-12"
              href="https://tr.linkedin.com/in/ahmet-akyap%C4%B1-ba9911193"
            >
              <img src="/linkedin.png" alt="" />{' '}
            </a>
            <a
              className="mx-4 w-12"
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlDTckLTCgBcQJfFScTNkNzRlWBTcrPvfQCkJpjkbkhLgqxZwWxwLGBNcdKGPscsZVtfsV"
            >
              <img src="/gmail.png" alt="" />{' '}
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
