class Articles {
  constructor(article, tempSelector, articleSelector) {
    this._name = article.name;
    this._image = article.image;
    this._description = article.description;
    this._articleSelector = articleSelector;
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
      .classList.add(this._articleSelector);

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

class GridArticles extends Articles {
  // constructor(article, articleSelector) {
  //   super(articleSelector);
  //   this._articleSelector = articleSelector;
  //   this._name = article.name;
  //   this._image = article.image;
  // }
  // generateArticle() {
  //   this._newArticle = super._getTemplate();
  //   super._setEventListeners();
  //   document
  //     .querySelector(".articles__items")
  //     .classList.add(super._articleSelector);
  //   this._newArticle.querySelector(".item__title").textContent = this._name;
  //   this._newArticle.querySelector(".item__image").src = this._image;
  //   this._newArticle.querySelector(
  //     ".item__image"
  //   ).alt = `Imagen de ${this._name}`;
  //   return this._newArticle;
  // }
}

export { Articles, GridArticles };
