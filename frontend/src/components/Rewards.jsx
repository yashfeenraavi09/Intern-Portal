import { MdCardGiftcard } from "react-icons/md";

const rewardDetails = [
  {
    name: "Amazon Gift Card",
    description: "Get an INR 500 Amazon gift card.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Top Performer Badge",
    description: "Display on your intern profile.",
    image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Rewards() {
  return (
    <section className="rewards-section">
      <div className="rewards-header">
        <MdCardGiftcard className="text-pink-500 w-7 h-7" />
        <h2>Rewards & Unlockables</h2>
      </div>

      <div className="rewards-grid">
        {rewardDetails.map((reward, idx) => (
          <div key={idx} className="reward-card">
            <img src={reward.image} alt={reward.name} />
            <div className="reward-content">
              <h3 className="reward-title">{reward.name}</h3>
              <p className="reward-description">{reward.description}</p>
              <span className="reward-status">Unlocked</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
