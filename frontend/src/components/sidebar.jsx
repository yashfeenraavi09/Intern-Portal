export default function Sidebar({ active, onNavigate }) {
  return (
    <div className="sidebar">
      <h2>Intern Portal</h2>
      <ul>
        <li
          className={active === "dashboard" ? "active" : ""}
          onClick={() => onNavigate("dashboard")}
        >
          <span className="material-icons">dashboard</span> Dashboard
        </li>
        <li
          className={active === "leaderboard" ? "active" : ""}
          onClick={() => onNavigate("leaderboard")}
        >
          <span className="material-icons">emoji_events</span> Leaderboard
        </li>
        <li
          className={active === "rewards" ? "active" : ""}
          onClick={() => onNavigate("rewards")}
        >
          <span className="material-icons">card_giftcard</span> Rewards
        </li>
      </ul>

      <div className="logout-btn" onClick={() => alert("Logging out...")}>
        <span className="material-icons">logout</span> Logout
      </div>
    </div>
  );
}
