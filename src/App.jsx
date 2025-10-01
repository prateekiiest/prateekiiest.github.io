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
          <p className="email">Email: prateekch [at] cse [dot] iitb.ac.in</p>
          <p className="bio">
            I'm a PhD student at IIT Bombay in the CSE AIML group. I'm fortunate to be advised by Ganesh Ramakrishnan. I work on data efficient machine learning and its applications in large scale models. I am graciously supported by the <b>Microsoft India PhD Fellowship</b> and <b>Prime Minister Research Fellowship</b>.
          </p>
          <p>
            My research interests include the theoretical and algorithmic foundations of optimization-driven subset selection—spanning submodularity, optimal transport, and bandit regret minimization for efficient training, personalization, and curriculum design in large-scale foundation models.
          </p>
        </header>
        <section className="research">
          <h2>Research</h2>
          <div className="pub-list no-bullets">
            <div className="pub-item">
              <a href="#" target="_blank" rel="noopener noreferrer">Langevin Monte Carlo for Transformers</a>
              <span className="authors">with Anirbit Mukherjee</span>
              <span className="venue">NeurIPS 2026</span>
            </div>
            <div className="pub-item">
              <a href="#" target="_blank" rel="noopener noreferrer">Sample-Efficient Personalized Reward Modeling</a>
              <span className="authors">with Nagarajan Natarajan (Microsoft)</span>
              <span className="venue">NeurIPS 2026</span>
            </div>
            <div className="pub-item">
              <a href="#" target="_blank" rel="noopener noreferrer">Optimal Coresets under Online Approximate K-Clustering</a>
              <span className="authors">with Sujoy Bhore, Devdan Dey, Arpit Agarwal</span>
              <span className="venue">NeurIPS 2026</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/2504.20372" target="_blank" rel="noopener noreferrer">Stochastic Noisy Submodular Maximization</a>
              <span className="authors">with Ganesh Ramakrishnan</span>
              <span className="venue">NeurIPS 2026</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/2504.20372" target="_blank" rel="noopener noreferrer">Differentiable Column Subset Selection</a>
              <span className="authors">with Ganesh Ramakrishnan</span>
              <span className="venue">NeurIPS 2026</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/2504.20372" target="_blank" rel="noopener noreferrer">Renyl Pseudocoresets</a>
              <span className="authors">with Ganesh Ramakrishnan</span>
              <span className="venue">NeurIPS 2026</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/2504.20372" target="_blank" rel="noopener noreferrer">Partitioned representation learning for long tail classification</a>
              <span className="authors">with Prayas Agrawal, Spandan Sachin, Ganesh Ramakrishnan</span>
              <span className="venue">ICML 2026</span>
            </div>
            <div className="pub-item">
              <a href="#" target="_blank" rel="noopener noreferrer">Continual Pretraining with Validation-Aware Gradient Influence Replay Buffers</a>
              <span className="authors">with Piyush Sawarkar, Pratik Jawanpuria, Ganesh Ramakrishnan</span>
              <span className="venue">ICML 2026</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/2504.20372" target="_blank" rel="noopener noreferrer">Joint Subset Selection</a>
              <span className="authors">with Pratik Jawanpuria, Bamdev Mishra, Karthik Gurumurthy, Ganesh Ramakrishnan</span>
              <span className="venue">ICML 2026</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/2504.20372" target="_blank" rel="noopener noreferrer">Slater's Free Regret Bounds for Linear and Submodular Bandits</a>
              <span className="authors">with Arun Suggala</span>
              <span className="venue">AISTATS 2026</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/2504.20372" target="_blank" rel="noopener noreferrer">Dynamic Reweighting via Model Uncertainty Measures</a>
              <span className="authors">with Prayas Agrawal, Ganesh Ramakrishnan</span>
              <span className="venue">ICLR 2026</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/2504.20372" target="_blank" rel="noopener noreferrer">Fair Partial Optimal Transport for Support Subset Selection</a>
              <span className="authors">with Pratik Jawanpuria, Prayas Agrawal, Bamdev Mishra, Karthik Gurumurthy, Ganesh Ramakrishnan</span>
              <span className="venue">ICLR 2026</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/2111.07483" target="_blank" rel="noopener noreferrer">Task Mixtures for Model Finetuning</a>
              <span className="authors">with Saral Sureka, Parth Chatterjee, Krishnateja Killiamsetty, Nikhil Nayak, Ganesh Ramakrishnan</span>
              <span className="venue">ICLR 2026</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/2111.03694" target="_blank" rel="noopener noreferrer">Bandit Guided Submodular Curriculum for Adaptive Subset Selection</a>
              <span className="authors">with Prayas Agrawal, Saral Surekha, PLS Lokesh, Ganesh Ramakrishnan</span>
              <span className="venue">NeurIPS 2025</span>
            </div>
            <div className="pub-item">
              <a href="https://arxiv.org/abs/1802.00875" target="_blank" rel="noopener noreferrer">Bayesian Coreset Optimization for Personalized Federated Learning</a>
              <span className="authors">with Shrey Modi and Ganesh Ramakrishnan</span>
              <span className="venue">ICLR 2024</span>
            </div>
          </div>
        </section>
        <section className="expository">
          <h2>Employment</h2>
          <ul>
            <li>
              <strong className="exp-lab">Google DeepMind India</strong> (Jun 2023 – May 2024)<br />
              <span className="exp-role">Student Researcher</span>
              with Pradeep Shenoy, Prateek Jain
            </li>
            <li>
              <strong className="exp-lab">Microsoft Research India</strong> (Oct 2025 - Dec 2025)<br />
              <span className="exp-role">Research Intern</span>
              with Nagarajan Natarajan
            </li>
            <li>
              <strong className="exp-lab">MIT IBM Watson Lab</strong> (May 2025 - July 2025)<br />
              <span className="exp-role">Research Intern</span>
              with Akash Srivastava
            </li>
          </ul>
        </section>
        <section className="activities">
          <h2>Professional Activities</h2>
          <ul>
            <li>
              <strong>Program Committee member:</strong>
              <span>
                AAAI 2026, ICLR 2025, NeurIPS 2024, TMLR, AISTATS 2025, ICML 2025, ICML-W MuGen 2025
              </span>
            </li>
          </ul>
        </section>
        <section className="awards">
          <h2>Awards</h2>
          <ul>
            <li>
              <strong className="award-title">Microsoft India PhD Fellowship</strong> (2025)
            </li>
            <li>
              <strong className="award-title">Prime Minister Research Fellowship</strong> (2022-2027)
            </li>
            <li>
              <strong className="award-title">Qualcomm Innovation Fellowship Finalist</strong> (2025)
            </li>
          </ul>
        </section>
        <div className="profile-links-bottom">
          <a href="/PrateekChanda_CV.pdf" target="_blank" rel="noopener noreferrer" className="profile-link">CV</a>
          <a href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID" target="_blank" rel="noopener noreferrer" className="profile-link">Google Scholar</a>
        </div>
        <div className="site-updated">
          Last updated: Sept 2026
        </div>
      </div>
    </div>
  );
}

export default App;
