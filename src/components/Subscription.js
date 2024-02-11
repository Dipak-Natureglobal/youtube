import React from 'react'
import './SubscriptionStyle.css';

export default function Subscription() {
  // Define an array of subscription names
  const subscriptions = [
    "Netflix",
    "Amazon Prime Video",
    "Hulu",
    "Disney+",
    "YouTube Premium",
    "Apple TV+",
    "HBO Max",
    "CBS All Access",
    "ESPN+",
    "Discovery+",
    "Paramount+",
    "Peacock",
    "Sling TV",
    "Vudu",
    "Crunchyroll",
    "Funimation",
    "Crave",
    "Twitch Prime",
    "DC Universe Infinite",
    "BritBox",
    "CuriosityStream",
    "Hoopla",
    "Criterion Channel",
    "Shudder",
    "FuboTV",
    "HBO Now",
    "SHOWTIME",
    "STARZ",
    "Acorn TV",
    "BET+",
    "Tubi",
    "ESPN",
    "MLB.TV",
    "NBA League Pass",
    "NHL.TV",
    "Plex",
    "Cinemax",
    "Epix Now",
    "PBS Masterpiece",
    "Urban Movie Channel",
    "Mubi",
  ];

  return (
    <div className="subscription-container">
      <h2 className="subscription-title">Subscriptions</h2>
      <ul className="subscription-list">
        {/* Map through the array of subscriptions and render each one as a list item */}
        {subscriptions.map((subscription, index) => (
          <li key={index} className="subscription-item">{subscription}</li>
        ))}
      </ul>
    </div>
  );
}