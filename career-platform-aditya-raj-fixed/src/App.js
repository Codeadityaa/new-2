import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function App() {
  const [skills, setSkills] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = process.env.REACT_APP_APP_NAME || 'Career Platform';
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post(`${API}/recommend`, { skills });
      setJobs(res.data?.jobs || []);
    } catch (e) {
      setError(e?.response?.data?.message || e.message || 'Failed to fetch recommendations');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Career Platform — SineRaja (Aditya Raj)</h1>
      <p className="mono"><small className="muted">Backend: {API || '(set REACT_APP_API_URL)'}</small></p>
      <div className="card">
        <label>Enter your skills (comma separated):</label>
        <input
          className="input"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="e.g., React, Node, SQL"
        />
        <div style={{ marginTop: '1rem', display:'flex', gap: '0.5rem' }}>
          <button className="button" onClick={fetchJobs} disabled={loading || !API}>
            {loading ? 'Getting recommendations…' : 'Recommend Jobs'}
          </button>
          {!API && <small className="muted">Set <code className="mono">REACT_APP_API_URL</code> in env</small>}
        </div>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        {error && <p style={{ color: '#ff6b6b' }}>{error}</p>}
        {jobs.length > 0 && (
          <div className="card">
            <h2>Recommended Jobs</h2>
            <ul>
              {jobs.map((j, i) => (
                <li key={i}>{typeof j === 'string' ? j : JSON.stringify(j)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}