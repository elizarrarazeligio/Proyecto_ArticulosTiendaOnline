import { renderArticles, articlesSection } from "./script.js";

const gridTemplateButton = document.querySelector(".bar__button_type_grid");
const horizontalTemplateButton = document.querySelector(
  ".bar__button_type_horizontal"
);
const slideTemplateButton = document.querySelector(".bar__button_type_slide");

gridTemplateButton.addEventListener("click", () => {
  renderArticles("grid");
  articlesSection.classList.remove(`articles__items_template_horizontal`);
  articlesSection.classList.remove(`articles__items_template_slide`);
});

horizontalTemplateButton.addEventListener("click", () => {
  renderArticles("horizontal");
  articlesSection.classList.remove(`articles__items_template_grid`);
  articlesSection.classList.remove(`articles__items_template_slide`);
});

slideTemplateButton.addEventListener("click", () => {
  renderArticles("slide");
  articlesSection.classList.remove(`articles__items_template_gird`);
  articlesSection.classList.remove(`articles__items_template_horizontal`);
});
