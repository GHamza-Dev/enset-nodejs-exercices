class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Méthodes pour interagir avec une base de données
    static findAll() {
        // Simuler la récupération depuis une BD
        return Promise.resolve([
            { id: 1, name: 'Alice', email: 'alice@example.com' },
            { id: 2, name: 'Bob', email: 'bob@example.com' }
        ]);
    }

    static findById(id) {
        // Simuler la recherche par ID
        return Promise.resolve({ id: id, name: 'Utilisateur ' + id, email: `user${id}@example.com` });
    }
}

module.exports = User;