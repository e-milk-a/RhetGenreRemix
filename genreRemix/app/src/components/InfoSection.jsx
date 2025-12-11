import "./InfoSection.css";

export default function InfoSection() {
  return (
    <div className="info-container" id="about">

      <h1 className="info-title">Why is the gap widening?</h1>

      <div className="info-grid">
        
        <a className = "no-change" href = "https://verdemagazine.com/the-steep-science-imbalance-ap-classes-have-unequal-gender-ratios">
        <div className="info-card">
          <h2>AP Pipeline</h2>
          <p><strong>54.7%</strong> of AP students are women</p>
          <p><strong>31%</strong> of AP CS students are women</p>
          <p className="card-text">
            The issue begins long before college, as girls are steered away from CS early.
          </p>
        </div>
        </a>

        <a className = "no-change" href = "https://research.ebsco.com/c/2w5hhj/viewer/pdf/jzggvj4cav?route=details">
        <div className="info-card">
          <h2>AI Bias</h2>
          <p>Resume-screening AI picks fewer women</p>
          <p>because the training data contains fewer women.</p>
          <p className="card-text">
            AI is reinforcing gender inequality due to lack in diversity.
          </p>
        </div>
        </a>

        <a className = "no-change" href = "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0293300">
        <div className="info-card">
          <h2>Motherhood Penalty</h2>
          <p>Women lose wages for becoming parents.</p>
          <p>Men gain a “fatherhood premium.”</p>
          <p className="card-text">
            Stereotypes about motherhood reduce women’s opportunities in tech.
          </p>
        </div>
        </a>

      </div>
      <div className="info-grid">
        <a className = "no-change" href = "https://doi.org/10.3390/socsci6030069">
        <div className="info-card">
          <h2>Societal Expectations</h2>
          <p>Girls are steered away from technical fields early</p>
          <p>STEM is perceived as being "masculine"</p>
          <p className="card-text">
            Societal factors of wanting to be perceived as feminine disuade women from tech feilds
          </p>
        </div>
        </a>

        <a className = "no-change" href = "https://doi.org/10.1371/journal.pone.0201150">
        <div className="info-card">
          <h2>Motherhood Myth</h2>
          <p>Women are assumed to be better at domestic and parental roles</p>
          <p>Mothers who are employed are seen as neglecting their children</p>
          <p className="card-text">
            Stereotypes about women's goals hinder their climb into higher paying positions
          </p>
        </div>
        </a>

      </div>
    </div>
  );
}
