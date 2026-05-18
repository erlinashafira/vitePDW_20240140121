function Katalog() {
  return (
    <div className="page">
      <h1>Katalog CORTIS</h1>

      <div className="card-container">

        <div className="card">
          <img src="/images/album.jpg" alt="Album" />
          <h2>Album</h2>
          <p>First Album</p>
        </div>

        <div className="card">
          <img src="/images/photocard.jpg" alt="Photocard" />
          <h2>Photocard</h2>
          <p>Exclusive member photocard</p>
        </div>

        <div className="card">
          <img src="/images/group2.jpg" alt="Group" />
          <h2>Group Package</h2>
          <p>Special CORTIS group content</p>
        </div>

      </div>
    </div>
  );
}

export default Katalog;