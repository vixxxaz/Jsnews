/**
 * Gestion des articles en objet, gère le tri par date et le formatage des dates pour affichage
 */
class ArticleManager {
    constructor(listeArticle) {
        this.listeArticle = listeArticle

    }
    sort() {
        return this.listeArticle.sort((a, b) => {
            return (Date.parse(a.publicationDate) < Date.parse(b.publicationDate)) ? 1 : -1;
        });
    }
}