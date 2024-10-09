class Articles {
  constructor(article, cardSelector) {
    this._name = article.name;
    this._image = article.image;
    this._description = article.description;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const articleTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".item")
      .cloneNode(true);

    return articleTemplate;
  }

  _setEventListeners() {}

  generateArticle() {
    this._newArticle = this._getTemplate();
    this._setEventListeners();

    document
      .querySelector(".articles__items")
      .classList.add("articles__items_template_horizontal");

    this._newArticle.querySelector(".item__title").textContent = this._name;
    this._newArticle.querySelector(".item__image").src = this._image;
    this._newArticle.querySelector(
      ".item__image"
    ).alt = `Imagen de ${this._name}`;
    this._newArticle.querySelector(".item__paragraph").textContent =
      this._description;

    return this._newArticle;
  }
}

export { Articles };
