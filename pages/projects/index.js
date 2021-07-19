function ProjectsPage({ projects }) {
  return (
    <div className="site-container">
      <div className="font-bold text-center my-8 text-xl text-blue-600">
        Projelerim
      </div>
      <div className="flex flex-wrap content-evenly place-content-between">
        <div className="card mt-6 mb-10">
          <img src="https://picsum.photos/id/404/367/267" alt="image" />
          <h3 className="text-center">Lorem ipsum</h3>
          <div className="focus-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> <a href="#">Link to source</a>
            </p>
          </div>
        </div>
        <div className="card mt-6 mb-10">
          <img src="https://picsum.photos/id/404/367/267" alt="image" />
          <h3 className="text-center">Lorem ipsum</h3>
          <div className="focus-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> <a href="#">Link to source</a>
            </p>
          </div>
        </div>
        <div className="card mt-6 mb-10">
          <img src="https://picsum.photos/id/404/367/267" alt="image" />
          <h3 className="text-center">Lorem ipsum</h3>
          <div className="focus-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> <a href="#">Link to source</a>
            </p>
          </div>
        </div>
        <div className="card mt-6 mb-12">
          <img src="https://picsum.photos/id/404/367/267" alt="image" />
          <h3 className="text-center">Lorem ipsum</h3>
          <div className="focus-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> <a href="#">Link to source</a>
            </p>
          </div>
        </div>
        <div className="card mt-6 mb-12">
          <img src="https://picsum.photos/id/404/367/267" alt="image" />
          <h3 className="text-center">Lorem ipsum</h3>
          <div className="focus-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> <a href="#">Link to source</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
