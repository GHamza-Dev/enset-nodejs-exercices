const db = require('../config/db');

const getAllTasks = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM public.tasks ORDER BY created_at DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des tâches', error: error.message });
  }
};

const getTaskById = async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    const result = await db.query('SELECT * FROM public.tasks WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tâche non trouvée' });
    }
    
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la tâche', error: error.message });
  }
};

const createTask = async (req, res) => {
  const { title, description, status = 'à faire' } = req.body;
  
  if (!title) {
    return res.status(400).json({ message: 'Le titre de la tâche est requis' });
  }
  
  try {
    const result = await db.query(
      'INSERT INTO public.tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *',
      [title, description, status]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la tâche', error: error.message });
  }
};

const updateTask = async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description, status } = req.body;
  
  try {
    // Vérifier si la tâche existe
    const checkResult = await db.query('SELECT * FROM public.tasks WHERE id = $1', [id]);
    
    if (checkResult.rows.length === 0) {
      return res.status(404).json({ message: 'Tâche non trouvée' });
    }
    
    // Mettre à jour la tâche
    const result = await db.query(
      'UPDATE public.tasks SET title = COALESCE($1, title), description = COALESCE($2, description), status = COALESCE($3, status), updated_at = NOW() WHERE id = $4 RETURNING *',
      [title, description, status, id]
    );
    
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la tâche', error: error.message });
  }
};

const deleteTask = async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    // Vérifier si la tâche existe
    const checkResult = await db.query('SELECT * FROM tasks WHERE id = $1', [id]);
    
    if (checkResult.rows.length === 0) {
      return res.status(404).json({ message: 'Tâche non trouvée' });
    }
    
    // Supprimer la tâche
    await db.query('DELETE FROM tasks WHERE id = $1', [id]);
    
    res.status(200).json({ message: 'Tâche supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la tâche', error: error.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};