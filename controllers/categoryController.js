const db = require('../config/db');

const getPostsByCategory = async (req, res) => {
  const categoryName = req.params.categoryName;
  
  try {
    const query = `
      SELECT p.* FROM posts p
      JOIN post_categories pc ON p.id = pc.post_id
      JOIN categories c ON pc.category_id = c.id
      WHERE c.name = $1
      ORDER BY p.created_at DESC
    `;
    
    const result = await db.query(query, [categoryName]);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des articles par catégorie', error: error.message });
  }
};

module.exports = {
  getPostsByCategory,
};