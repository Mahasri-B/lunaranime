import './LunarAnimeLanding.css';

const App = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <h1 className="title">Lunar Animes</h1>
        <p className="subtitle">Your Ultimate Anime Streaming Platform</p>
        <p className="description">Thousands of anime series and movies in English and German</p>
      </header>

      <section className="overview">
        <h2>Overview</h2>
        <p>Everything you need for your perfect anime experience</p>
      </section>

      <section className="features-section">
        <div className="feature-block">
          <h3>Popular</h3>
          <h4>Massive Library</h4>
          <p>Explore thousands of anime from every genre and era</p>
        </div>

        <div className="feature-block">
          <h4>International</h4>
          <h4>Global Content</h4>
          <p>Access anime from Japan, with English and German localization</p>
        </div>

        <div className="feature-block">
          <h4>Essential</h4>
          <h4>Favorites List</h4>
          <p>Create your personal watchlist of favorite anime series</p>
        </div>
      </section>

      <section className="features-overview">
        <h2>Our Features</h2>
        <p>Everything you need for the ultimate anime experience</p>

        <div className="feature-category">
          <h3>Social Features</h3>
          <ul>
            <li>Watch Together - Synchronized viewing with friends</li>
            <li>Live Time Chatbox - Chat while watching</li>
            <li>Comment Section - With GIF, timestamp, replies & mentions support</li>
            <li>Notifications - Stay updated on replies and mentions</li>
            <li>Community Events - Join watch parties and discussions</li>
          </ul>
        </div>

        <div className="feature-category">
          <h3>Personalization</h3>
          <ul>
            <li>Profile Customization - Picture, banner & name</li>
            <li>Avatar Decoration - Show off your style</li>
            <li>Leveling Up - Earn XP by watching and engaging</li>
            <li>Save Subtitle Preference - Remember your language settings</li>
            <li>Easily change between providers - Switch seamlessly</li>
          </ul>
        </div>

        <div className="feature-category">
          <h3>Technical Features</h3>
          <ul>
            <li>Torrent Streamer - Stream directly from torrents</li>
            <li>Clip Anime - Create and share your favorite moments</li>
            <li>Multi-language Support - Subtitles in various languages</li>
            <li>High Quality Streaming - Up to 4K resolution</li>
            <li>Quests - Earn exclusive avatar decoration by doing quests</li>
          </ul>
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose Lunar?</h2>
        <p>The best anime streaming platform available</p>
        <p>Join Thousands of Happy Users</p>
      </section>

      <footer className="start-watching">
        <h2>Ready to Start Watching?</h2>
        <p>Dive into the world of anime - free and ad-free</p>
      </footer>
    </div>
  );
};

export default App;
