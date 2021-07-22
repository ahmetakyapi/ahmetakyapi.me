function ProjectsPage({ projects }) {
  return (
    <div className="site-container">
      <div className="font-bold text-center my-8 text-xl text-blue-600">
        Projeler
      </div>
      <div className="flex flex-wrap content-evenly place-content-between">
        <div className="card mt-6 mb-10">
          <img
            src="projects/ahmetakyapi.me.png"
            alt="tesla-clone-ahmet akyapı"
          />
          <h3 className="text-center font-bold text-indigo-900">
            Ahmetakyapi.me
          </h3>
          <div className="focus-content">
            <p className="text-center">
              Next.js, Auth0, Redis ile oluşturduğum bu projenin kaynak
              kodlarına Github üzerinden ulaşabilirsiniz.
              <br />{' '}
              <div className="text-center mt-2 text-green-500">
                <a
                  className="mr-16"
                  href="https://github.com/ahmetakyapi/ahmetakyapi.me"
                  target="_blank"
                >
                  Github Repo
                </a>{' '}
                <a href="https://ahmetakyapi.me" target="_blank">
                  Live Demo
                </a>
              </div>
            </p>
          </div>
        </div>
        <div className="card mt-6 mb-10">
          <img src="projects/Tesla-Clone.png" alt="tesla-clone-ahmet akyapı" />
          <h3 className="text-center font-bold text-indigo-900">
            React Tesla Clone
          </h3>
          <div className="focus-content">
            <p className="text-center">
              React ile, Tesla sitesinin ana sayfa görüntüsünü oluşturduğum
              sitenin kaynak kodlarına aşağıdan ulaşabilirsiniz.
              <br />{' '}
              <div className="text-center mt-2 text-green-500">
                <a
                  className="mr-16"
                  href="https://github.com/ahmetakyapi/Tesla-Clone"
                  target="_blank"
                >
                  Github Repo
                </a>{' '}
                <a
                  href="https://tesla-clone-ahmetakyapi.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </p>
          </div>
        </div>
        <div className="card mt-6 mb-10">
          <img src="projects/Crypto-Tracker.png" alt="image" />
          <h3 className="text-center font-bold text-indigo-900">
            React Crypto Tracker
          </h3>
          <div className="focus-content">
            <p className="text-center">
              Crypto paraların, anlık olarak değişimini gösteren, API'den gelen
              verinin listelendiği projenin, kaynak kodlarına buradan
              ulaşabilirsiniz.
              <br />{' '}
              <div className="text-center mt-2 text-green-500">
                <a
                  className="mr-16"
                  href="https://github.com/ahmetakyapi/Crypto-Tracker"
                  target="_blank"
                >
                  Github Repo
                </a>{' '}
                <a
                  href="https://crypto-tracker-ahmetakyapi.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </p>
          </div>
        </div>
        <div className="card mt-6 mb-10">
          <img src="projects/Twitter-Clone.png" alt="image" />
          <h3 className="text-center font-bold text-indigo-900">
            React Twitter Clone
          </h3>
          <div className="focus-content">
            <p className="text-center">
              Firebase, TailwindCss kullanılarak, tweet atılıp, tweetlerin
              görünebildiği, Twitter-Clone uygulamasının kaynak kodlarına
              aşağıdan ulaşabilirsiniz.
              <br />{' '}
              <div className="text-center mt-2 text-green-500">
                <a
                  className="mr-16"
                  href="https://github.com/ahmetakyapi/Twitter-Clone"
                  target="_blank"
                >
                  Github Repo
                </a>{' '}
                <a
                  href="https://twitter-clone-ahmetakyapi.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </p>
          </div>
        </div>
        <div className="card mt-6 mb-10">
          <img src="projects/Chat-App.png" alt="image" />
          <h3 className="text-center font-bold text-indigo-900">
            React - Socket.io Chat App
          </h3>
          <div className="focus-content">
            <p className="text-center">
              Uygulamada aynı anda iki kişinin mesajlaşabildiği, mesajlarının
              anlık olarak iletilebildiği, projenin kaynak kodlarına aşağıdan
              ulaşabilirsiniz.
              <br />{' '}
              <div className="text-center mt-2 text-green-500">
                <a
                  className="mr-16 ml-16"
                  href="https://github.com/ahmetakyapi/React-Chat-App"
                  target="_blank"
                >
                  Github Repo
                </a>{' '}
              </div>
            </p>
          </div>
        </div>
        <div className="card mt-6 mb-10">
          <img src="projects/para-harcama.png" alt="image" />
          <h3 className="text-center font-bold text-indigo-900">
            React Para Harcama App
          </h3>
          <div className="focus-content">
            <p className="text-center">
              Sabit bir parayı, ana sayfadaki ürünleri sepete ekleyerek, kalan
              ve harcanan parayı görebildiğimiz sitenin kaynak kodlarına
              aşağıdan ulaşabilirsiniz.
              <br />{' '}
              <div className="text-center mt-2 text-green-500">
                <a
                  className="mr-16 mt-4"
                  href="https://github.com/ahmetakyapi/paraHarcama"
                  target="_blank"
                >
                  Github Repo
                </a>{' '}
                <a
                  href="https://para-harcama-ahmetakyapi.vercel.app/"
                  target="_blank"
                >
                  Demo
                </a>
              </div>
            </p>
          </div>
        </div>
        <div className="card mt-6 mb-10">
          <img src="projects/Tft-Helper.png" alt="image" />
          <h3 className="text-center font-bold text-indigo-900">TFT Helper</h3>
          <div className="focus-content">
            <p className="text-center">
              TFT oyunundaki karakterlerin, itemlerin ve popüler olan
              kompozisyonların bulunduğu, kullanan kişilerin bilgilere
              erişebileceği bir rehber sitesidir.{' '}
              <div className="text-center mt-2 text-green-500">
                <a
                  className="mr-16 mt-8"
                  href="https://github.com/ahmetakyapi/TFT-Helper"
                  target="_blank"
                >
                  Github Repo
                </a>{' '}
                <a
                  href="https://tft-helper-ahmetakyapi.vercel.app/"
                  target="_blank"
                >
                  Demo
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
