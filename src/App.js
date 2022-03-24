import './App.css'

const App = () => (
  <div className="container TaskApp-container">
    <div className="row no-gutters">
      <div className="col-12 col-md-6 box01  bg-primary d-flex flex-column justify-content-center text-center">
        <h1 className="heading d-none d-md-block ">WIDTH - HEIGHT</h1>
        <h1 className="heading d-block d-md-none">
          HEIGHT =
          <br />
          200-PX
        </h1>
      </div>
      <div className="col-12 col-md-6">
        <div className="container">
          <div className="row ">
            <div className=" col-12 col-md-6 box02 bg-warning d-flex flex-column justify-content-center text-center">
              <h1 className="heading  d-none d-md-block ">WIDTH - HEIGHT</h1>
              <h1 className="heading d-block d-md-none">
                HEIGHT =
                <br />
                200-PX
              </h1>
            </div>
            <div className=" col-12 col-md-6 bg-success box03 d-flex flex-column justify-content-center text-center">
              <h1 className="heading d-none d-md-block">WIDTH - HEIGHT</h1>
              <h1 className="heading d-block d-md-none">
                HEIGHT =
                <br />
                200-PX
              </h1>
            </div>
            <div className=" col-12 col-md-12 box04 bg-danger d-flex flex-column justify-content-center text-center">
              <h1 className="heading d-none d-md-block">WIDTH - HEIGHT/2</h1>
              <h1 className="heading d-block d-md-none">
                HEIGHT =
                <br />
                200-PX
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App
