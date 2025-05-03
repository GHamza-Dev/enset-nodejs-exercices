class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Méthodes pour interagir avec une base de données
    static findAll() {
        // Simuler la récupération depuis une BD
        return Promise.resolve([
            { id: 1, name: 'Produit A', price: 19.99 },
            { id: 2, name: 'Produit B', price: 29.99 }
        ]);
    }

    static findById(id) {
        // Simuler la recherche par ID
        return Promise.resolve({ id: id, name: 'Produit ' + id, price: 19.99 * id });
    }
}

module.exports = Product;