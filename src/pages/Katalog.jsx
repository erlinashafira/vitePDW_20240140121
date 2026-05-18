import album from '../assets/album.jpg'
import photocard from '../assets/photocard.jpg'
import group2 from '../assets/group2.jpg'

function Katalog() {
  return (
    <div className="page">
      <h1>Katalog CORTIS</h1>

      <div className="card-container">

        <div className="card">
          <img src={album} alt="Album" />
          <h2>Album</h2>
          <p>First Album</p>
        </div>

        <div className="card">
          <img src={photocard} alt="Photocard" />
          <h2>Photocard</h2>
          <p>Exclusive member photocard</p>
        </div>

        <div className="card">
          <img src={group2} alt="Group2" />
          <h2>Group Package</h2>
          <p>Special CORTIS group content</p>
        </div>

      </div>
    </div>
  );
}

export default Katalog;