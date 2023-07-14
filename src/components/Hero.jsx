const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1> YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button> Shop now</button>
          <button className="secondary-btn"> Category</button>
        </div>
        <div className="Shopping">
          <p>Also Available On Flikart,Amazon Ritesh </p>
        </div>
        <div className="brand-icons">
          <img src="/images/amazon.png" alt="amazon=logo" />
          <img src="/images/flipkart.png" alt="amazon=logo" />
          <img src="/images/download.png" alt="amazon=logo" />
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80" />
      </div>
    </main>
  );
};
export default HeroSection;
