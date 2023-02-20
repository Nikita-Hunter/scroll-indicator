//ищем все ссылки/индикаторы на нашем сайте
const dots =  document.querySelectorAll(".scroll-indicator .scroll-indicator__item .scroll-indicator__link");
//т.к. мы ищем ссылки с помощью querySelectorAll, то мы получаем не один элемент, а несколько элементов, которые помещаются в массив
//нам нужно перебрать массив с помощию цикла forEach
//метод, в котором будет удаляться класс active у неактивных ссылок
const removeActiveClass = () => {
    //перебор элементов с помощью forEach
    dots.forEach((dot) => {
        //удаляем у неактивного элемента класс active
        dot.classList.remove("active");
    });
};
//метод в котором мы ищем все ссылки
const addActiveClass = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            // проверяем на какой секции мы находимся
            // console.log(entry.target.id);
            //проверяем какой текст находится в атрибуте href
            let currentDot = document.querySelector(`.scroll-indicator .scroll-indicator__item a[href='#${entry.target.id}']`)
            //вызываем удаление класса у неактивных ссылок
            removeActiveClass();
            //активной ссылке добавляем класс active
            currentDot.classList.add("active");
        }
    });
};
//допустимое значение, при переходе на новую секцию, чтобы у нас был большой обхват
const options = {
    threshold: 0.8
};
//метод в котором используются выше созданные методы и функции
const observer = new IntersectionObserver(addActiveClass, options);
//ищем все элементы section
const sections = document.querySelectorAll("section")
//перебираем элементы
sections.forEach(section => {
    observer.observe(section)
});
