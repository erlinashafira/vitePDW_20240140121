import banner from '../assets/banner.jpg'

function Home() {
  return (
    <div className="page">

      <img src={banner} className="banner" />

      <h1 className="title">
        Selamat datang di fansite Cortis!
      </h1>

      <p className="subtitle">
        5th Generation K-Pop Boy Group
      </p>

    </div>
  );
}

export default Home;