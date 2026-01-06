import React, { useEffect, useMemo, useState } from "react";
import "../Contactus/Style/Getintouch.css";
import { FaTimes, FaTrash, FaCheck } from "react-icons/fa";

function Getintouch() {
  /* ================= LOAD FROM LOCALSTORAGE ================= */
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("getInTouchRequests")) || [];

    const mapped = stored.map((item) => ({
      id: item.id,
      name: item.name,
      mail: item.email,
      phone: item.phone,
      CompanyName: item.company,
      selectrecrutment: item.requirement,
      msg: item.comments || item.message,
      status: item.status || "Pending", // ✅ IMPORTANT
      date: item.submittedAt,
    }));

    setEmployees(mapped);
  }, []);

  /* ================= STATES ================= */
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [page, setPage] = useState(1);
  const [viewEmployee, setViewEmployee] = useState(null);

  const recordsPerPage = 10;

  /* ================= SEARCH ================= */
  const filtered = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return employees.filter((emp) =>
      [emp.name, emp.mail, emp.phone, emp.msg, emp.CompanyName]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [employees, searchTerm]);

  /* ================= PAGINATION ================= */
  const paginated = filtered.slice(
    (page - 1) * recordsPerPage,
    page * recordsPerPage
  );

  const totalPages = Math.ceil(filtered.length / recordsPerPage) || 1;

  /* ================= SELECT ================= */
  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(paginated.map((emp) => emp.id));
    } else {
      setSelectedIds([]);
    }
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  /* ================= MARK AS RESOLVED ================= */
  const markResolved = (id) => {
    const updated = employees.map((emp) =>
      emp.id === id ? { ...emp, status: "Resolved" } : emp
    );

    setEmployees(updated);
    syncToLocalStorage(updated);
  };

  /* ================= DELETE ================= */
  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) {
      alert("Please select at least one contact to delete.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete selected contacts?"))
      return;

    const updated = employees.filter(
      (emp) => !selectedIds.includes(emp.id)
    );

    setEmployees(updated);
    setSelectedIds([]);
    syncToLocalStorage(updated);
  };

  /* ================= SYNC STORAGE ================= */
  const syncToLocalStorage = (data) => {
    localStorage.setItem(
      "getInTouchRequests",
      JSON.stringify(
        data.map((emp) => ({
          id: emp.id,
          name: emp.name,
          email: emp.mail,
          phone: emp.phone,
          company: emp.CompanyName,
          requirement: emp.selectrecrutment,
          comments: emp.msg,
          status: emp.status, // ✅ IMPORTANT
          submittedAt: emp.date,
        }))
      )
    );
  };

  /* ================= UI ================= */
  return (
    <>
      <div className="main-cont-quick">
        <div className="main-title-quick">
          <h2>Quick Contacts</h2>
        </div>

        <div className="quickcontactusrow">
          <input
            type="text"
            placeholder="Search contacts..."
            className="quick-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button className="quick-delete-btn" onClick={handleDeleteSelected}>
            <FaTrash /> Delete
          </button>
        </div>

        <div className="quick-table-container">
          <table className="quick-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={toggleSelectAll}
                    checked={
                      paginated.length > 0 &&
                      selectedIds.length === paginated.length
                    }
                  />
                </th>
                <th>Applicant Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginated.length > 0 ? (
                paginated.map((emp) => (
                  <tr key={emp.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(emp.id)}
                        onChange={() => toggleSelect(emp.id)}
                      />
                    </td>
                    <td>{emp.name}</td>
                    <td>{emp.mail}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.msg}</td>

                    <td>
                      <span
                        className={`status-badge ${
                          emp.status === "Resolved"
                            ? "green"
                            : "orange"
                        }`}
                      >
                        {emp.status}
                      </span>
                    </td>

                    <td className="action-btns">
                      {emp.status === "Pending" && (
                        <button
                          className="resolve-btn"
                          onClick={() => markResolved(emp.id)}
                        >
                          <FaCheck /> Resolve
                        </button>
                      )}

                      <button
                        className="quick-view-btn"
                        onClick={() => setViewEmployee(emp)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="quick-no-data">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="quick-pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>

        {viewEmployee && (
          <div className="quick-overlay">
            <div className="quick-content">
              <button
                className="quick-close-btn"
                onClick={() => setViewEmployee(null)}
              >
                <FaTimes />
              </button>

              <h3 className="quick-popup-header">Contact Details</h3>

              <div className="quick-popup-details">
                {Object.entries(viewEmployee).map(([key, value]) => (
                  <div key={key}>
                    <label>
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </label>
                    <input type="text" value={value} readOnly />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Getintouch;
