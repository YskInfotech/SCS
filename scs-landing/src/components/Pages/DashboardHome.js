import React from "react";
import { FaUserTie, FaUserGraduate } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import onboardingimg from "../../assets/onboardingimgdash.png"
import "../../Styles/DashboardHome.css";

function HrDashboardHome() {
  const cards = [
    {
      icon: <BiMessageDetail />,
      title: "QUICK CONTACT US",
      status: [
        { count: 50, label: "Resolved", color: "green" },
        { count: 20, label: "Pending", color: "orange" },
      ],
    },
    {
      icon: <IoDocumentTextOutline />,
      title: "CSR ACTIVITIES",
      status: [{ count: 10, label: "Completed", color: "green" }],
    },
    {
      icon: <FaUserTie />,
      title: "ON-BOARDING",
      status: [{ count: 10, label: "Completed", color: "green" }],
    },
  ];

  return (
    <div className="scsd-dashboard-main">
      <div className="scsd-card-row">
        {cards.map((card, index) => (
          <div className="scsd-big-card" key={index}>
            <div className="scsd-big-icon">{card.icon}</div>
            <h3 className="scsd-card-title">{card.title}</h3>

            <div className="scsd-status-boxes">
              {card.status.map((s, i) => (
                <div className="scsd-status-wrapper" key={i}>
                  <div className={`scsd-status-item scsd-${s.color}`}>
                    <span className="count-num">{s.count}</span>
                  </div>
                  <p className="scsd-status-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HrDashboardHome;
