import "./MainPage.scss";
import quote from "../../assets/quotes.jpg";
import { newsData } from "../../data/newsData";
import { coachesData } from "../../data/coachesData";

const MainPage = () => {
  return (
    <main className="main-page">
      <h2 className="section-title">ПОСЛЕДНЕЕ</h2>

      <div className="news-grid">
        {newsData.map((item, index) => (
          <div className={`news-card ${(index + 1) % 3 === 0 ? 'news-card--dark' : ''}`} key={item.id}>
            <div className="news-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="news-content">
              <span className="news-meta">
                {item.date} <span className="tag">{item.tag}</span>
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="coaches-section">
        {coachesData.map((coach) => (
          <div className="coach-card" key={coach.id}>
            <div className="quote-card">
      <div className="quote-card__header">
        
        <div className="quote-card__icon">
          <img 
            src={quote} 
            alt="Quote Icon" 
          />
        </div>
        
        <img 
          src={coach.img} 
          alt={coach.name} 
          className="quote-card__avatar" 
        />
      </div>

      <div className="quote-card__name">{coach.name}</div>
      <div className="quote-card__role">{coach.position}</div>

      <p className="quote-card__quote-text">{coach.quote}</p>
    </div>
          </div>
        ))}
      </div>

      <div className="news-grid">
        {newsData.slice(4,6).map((item, index) => (
          <div className={`news-card ${(index + 5) % 3 === 0 ? 'news-card--dark' : ''}`} key={item.id}>
            <div className="news-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="news-content">
              <span className="news-meta">
                {item.date} <span className="tag">{item.tag}</span>
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainPage;