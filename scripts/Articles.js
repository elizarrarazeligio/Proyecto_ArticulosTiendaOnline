class Articles {
  constructor(article, tempSelector) {
    this._name = article.name;
    this._image = article.image;
    this._description = article.description;
    this._tempSelector = tempSelector;
  }

  _getTemplate() {
    const articleTemplate = document
      .querySelector(this._tempSelector)
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
      .classList.add(`articles__items_template_${this._tempSelector.slice(6)}`);

    this._newArticle.querySelector(".item__title").textContent = this._name;
    this._newArticle.querySelector(".item__image").src = this._image;
    this._newArticle.querySelector(
      ".item__image"
    ).alt = `Imagen de ${this._name}`;

    return this._newArticle;
  }
}

class OtherArticles extends Articles {
  constructor(article, tempSelector) {
    super(article, tempSelector);
  }

  generateArticle() {
    const info = super.generateArticle();

    info.querySelector(".item__paragraph").textContent = this._description;
    return info;
  }
}

export { Articles, OtherArticles };
