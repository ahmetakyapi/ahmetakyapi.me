function HomePage() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Ben Ahmet Akyapı.</h1>
          <h1 className="text-xl font-bold"> Frontend Developer</h1>
          <p className="font-medium">
            {' '}
            İstanbul'da yaşıyorum. Front-end teknolojileriyle ilgileniyorum.
            Yeni teknolojileri deneyip, yeni şeyler üretmeyi seviyorum. Yaptığım
            projeleri Github üzerinden paylaşıyorum.{' '}
          </p>
          <p className="font-medium">
            Burada fikirlerimi paylaşıp, yaptığım veya yapacağım içerikler
            hakkında bilgilerimi paylaşacağım.
          </p>
        </div>

        <div className="site-4xl-container mt-7 pl-1">
          <img src="/i-am.jpeg" alt="ahmet, ahmetakyapi" />
        </div>
        <h3 className="font-medium mt-5 text-center ">
          Sorularınız olursa, aşağıdaki linklerden bana ulaşabilirsiniz.
        </h3>
        <div className="flex justify-center pt-2 mt-5">
          <a
            className="mx-4 w-11"
            href="https://github.com/ahmetakyapi"
            target="_blank"
          >
            <img src="/github.png" alt="github" />{' '}
          </a>
          <a
            className="mx-4 w-11"
            href="https://linkedin.com/in/ahmetakyapi"
            target="_blank"
          >
            <img src="/linkedin.png" alt="linkedin" />{' '}
          </a>
          <a
            className="mx-4 w-11"
            href="https://twitter.com/ahmetakyapi"
            target="_blank"
          >
            <img src="/twitter.png" alt="" />{' '}
          </a>
          <a
            className="mx-4 w-11 "
            href="mailto:ahmetakyapi@gmail.com"
            target="_blank"
          >
            <img src="/gmail.png" alt="gmail" />{' '}
          </a>
        </div>
      </div>
    </>
  )
}

export default HomePage
