import { useEffect, useState } from "react";
import Rewards from "./Rewards";
import Leaderboard from "./Leaderboard";
import Sidebar from "./sidebar";

export default function Dashboard() {
  const [intern, setIntern] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    fetch("http://localhost:5000/api/intern")
      .then((res) => res.json())
      .then((data) => setIntern(data));
  }, []);

  if (!intern) return <div>Loading...</div>;

  return (
    <div className="layout">
      <Sidebar active={activeTab} onNavigate={setActiveTab} />

      <div className="content">
        {activeTab === "dashboard" && (
          <>
            <h1 className="section-title">
              <span className="material-icons" style={{ fontSize: "28px", verticalAlign: "middle", marginRight: "8px" }}>
                dashboard
              </span>
              Intern Dashboard
            </h1>
            <div className="card-grid">
              <div className="card">
                <span className="material-icons">person</span>
                <div className="info">
                  <small>Name : </small>
                  <strong>{intern.name}</strong>
                </div>
              </div>

              <div className="card">
                <span className="material-icons">confirmation_number</span>
                <div className="info">
                  <small>Referral Code : </small>
                  <strong>{intern.referralCode}</strong>
                </div>
              </div>

              <div className="card">
                <span className="material-icons">attach_money</span>
                <div className="info">
                  <small>Donations : </small>
                  <strong>INR {intern.donations}</strong>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "rewards" && <Rewards rewards={intern.rewards} />}
        {activeTab === "leaderboard" && <Leaderboard data={intern.leaderboard} />}
      </div>
    </div>
  );
}
