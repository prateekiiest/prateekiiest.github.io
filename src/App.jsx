
import './App.css';
import prateekImg from './assets/prateek.jpg';

function App() {
  return (
    <div className="container two-col-layout">
      <div className="profile-col">
        <div className="profile-img-rect large">
          <img src={prateekImg} alt="Prateek Chanda" className="profile-img-rect-img large" />
        </div>
      </div>
      <div className="content-col">
        <header className="header">
          <h1>Prateek Chanda</h1>
          <p className="email">Email: pras1712 [at] stanford [dot] edu</p>
          <p className="bio">I'm a PhD student at IIT Bombay in the CSE AIML group. I'm fortunate to be advised by Ganesh Ramakrishnan. I work on data efficient machine learning and its applications in large scale models. I am graciously supported by the Microsoft India PhD Fellowship and Prime Minister Research Fellowship.</p>
        </header>
        <section className="research">
          <h2>Research</h2>
          <div className="pub-list no-bullets">
            <div className="pub-item">
              <a href="https://arxiv.org/abs/2504.20372" target="_blank" rel="noopener noreferrer">Approximately dominating sets in elections</a>
              <span className="authors">with Moses Charikar and Kangning Wang.</span>
              <span className="venue">preprint</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/2111.07483" target="_blank" rel="noopener noreferrer">Tradeoffs for small-depth Frege proofs</a>
              <span className="authors">with Toniann Pitassi and Li-Yang Tan.</span>
              <span className="venue">FOCS 2021</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/2111.03694" target="_blank" rel="noopener noreferrer">Metric distortion bounds for randomized social choice</a>
              <span className="authors">with Moses Charikar.</span>
              <span className="venue">SODA 2022</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/1802.00875" target="_blank" rel="noopener noreferrer">Bayesian Coreset Optimization for Personalized Federated Learning</a>
              <span className="authors">with Shrey Modi and Ganesh Ramakrishnan</span>
              <span className="venue">ICLR 2024</span>
            </div>
          </div>
        </section>
        <section className="expository">
          <h2>Expository</h2>
          <ul>
            <li><a href="https://theorydish.blog/2023/09/25/optimal-metric-distortion-for-voting-a-proof-from-the-book/" target="_blank" rel="noopener noreferrer">Optimal metric distortion for voting — a proof from the book</a> (blog post)</li>
            <li><a href="https://web.stanford.edu/~pras1712/files/ug-thesis.pdf" target="_blank" rel="noopener noreferrer">Independent sets in Hasse diagrams</a> (undergraduate thesis, advised by Jacob Fox, with Nitya Mani)</li>
          </ul>
        </section>
        <section className="activities">
          <h2>Professional Activities</h2>
          <ul>
            <li><a href="https://sites.google.com/view/distortion-focs24/" target="_blank" rel="noopener noreferrer">Distortion in Social Choice</a>, workshop at FOCS 2024, co-organized with Moses Charikar, Nisarg Shah, and Kangning Wang.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
