const db = require('../config/db');

const getPostsByDate = async (req, res) => {
  const year = parseInt(req.params.year);
  
  const month = req.params.month ? parseInt(req.params.month) : null;
  
  try {
    let query;
    let params;
    
    if (month) {
      query = `
        SELECT * FROM posts 
        WHERE EXTRACT(YEAR FROM created_at) = $1 
        AND EXTRACT(MONTH FROM created_at) = $2
        ORDER BY created_at DESC
      `;
      params = [year, month];
    } else {
      query = `
        SELECT * FROM posts 
        WHERE EXTRACT(YEAR FROM created_at) = $1
        ORDER BY created_at DESC
      `;
      params = [year];
    }
    
    const result = await db.query(query, params);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des articles', error: error.message });
  }
};

module.exports = {
  getPostsByDate,
};