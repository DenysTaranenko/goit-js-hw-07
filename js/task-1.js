const categoriesList = document.getElementById("categories");
const items = categoriesList.querySelectorAll(".item");

// Вивести кількість категорій
console.log(`Number of categories: ${items.length}`);

// Для кожної категорії вивести заголовок та кількість елементів
items.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryItemsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
