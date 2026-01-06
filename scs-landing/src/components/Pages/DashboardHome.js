import React, { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "../../Styles/DashboardHome.css";

function HrDashboardHome() {
  const navigate = useNavigate();

  /* ================= COUNTS ================= */
  const [quickPending, setQuickPending] = useState(0);
  const [quickResolved, setQuickResolved] = useState(0);
  const [onboardingCount, setOnboardingCount] = useState(0);

  /* ================= LOAD COUNTS ================= */
  useEffect(() => {
    const updateCounts = () => {
      const contacts =
        JSON.parse(localStorage.getItem("getInTouchRequests")) || [];

      let pending = 0;
      let resolved = 0;

      contacts.forEach((c) => {
        const status = c.status || "Pending";
        if (status === "Pending") pending++;
        else if (status === "Resolved") resolved++;
      });

      setQuickPending(pending);
      setQuickResolved(resolved);
    };

    updateCounts();

    window.addEventListener("storage", updateCounts);
    return () => window.removeEventListener("storage", updateCounts);
  }, []);


  useEffect(() => {
    const onboardings =
      JSON.parse(localStorage.getItem("employeeOnboarding")) || [];

    // remove duplicates using id (important)
    const uniqueOnboardings = Array.from(
      new Map(onboardings.map((e) => [e.id, e])).values()
    );

    setOnboardingCount(uniqueOnboardings.length);
  }, []);


  const cards = [
    {
      icon: <BiMessageDetail />,
      title: "QUICK CONTACT US",
      path: "/dashboard/Getintouch",
      status: [
        { count: quickResolved, label: "Resolved", color: "green" },
        { count: quickPending, label: "Pending", color: "orange" },
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
      path: "/dashboard/AdminOnBoarding",
      status: [
        { count: onboardingCount, label: "Completed", color: "green" },
      ],
    }

  ];

  return (
    <div className="scsd-dashboard-main">
      <div className="scsd-card-row">
        {cards.map((card, index) => (
          <div
            className="scsd-big-card"
            key={index}
            onClick={() => card.path && navigate(card.path)}
          >
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
