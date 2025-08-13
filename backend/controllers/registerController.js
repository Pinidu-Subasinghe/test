const connection = require("../db");

// Create registration
const createRegistration = (req, res) => {
  const data = req.body;

  const query = `
    INSERT INTO registrations 
    (first_name, last_name, email, company, job_title, phone, country, attendance_type, interests, special_requirements, newsletter)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.firstName,
    data.lastName,
    data.email,
    data.company,
    data.jobTitle,
    data.phone,
    data.country,
    data.attendanceType,
    JSON.stringify(data.interests),
    data.specialRequirements,
    data.newsletter ? 1 : 0,
  ];

  connection.query(query, values, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res
      .status(201)
      .json({ message: "Registration created", id: result.insertId });
  });
};

// Get all registrations
const getAllRegistrations = (req, res) => {
  const query = "SELECT * FROM registrations";
  connection.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get registration by ID
const getRegistrationById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM registrations WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(404).json({ message: "Not found" });
    res.json(results[0]);
  });
};

// Update registration
const updateRegistration = (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const query = `
    UPDATE registrations SET
    first_name = ?, last_name = ?, email = ?, company = ?, job_title = ?,
    phone = ?, country = ?, attendance_type = ?, interests = ?, special_requirements = ?, newsletter = ?
    WHERE id = ?
  `;

  const values = [
    data.firstName,
    data.lastName,
    data.email,
    data.company,
    data.jobTitle,
    data.phone,
    data.country,
    data.attendanceType,
    JSON.stringify(data.interests),
    data.specialRequirements,
    data.newsletter ? 1 : 0,
    id,
  ];

  connection.query(query, values, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Not found" });
    res.json({ message: "Registration updated" });
  });
};

// Delete registration
const deleteRegistration = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM registrations WHERE id = ?";
  connection.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Not found" });
    res.json({ message: "Registration deleted" });
  });
};

module.exports = {
  createRegistration,
  getAllRegistrations,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
};
