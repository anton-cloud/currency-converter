# Конвертер валют
## Описание
## _1.	Header с курсом валют_
a.	В header-е необходимо отображать актуальный курс валют (USD, EUR) по отношению к гривне (UAH)
b.	Актуальный курс валют должен приходить с любого публичного API
2.	Компонент с конвертацией
a.	Для одной валюты должен быть свой input и select. 
b.	отдельный input + select для первой валюты, и отдельный input + select для второй валюты
c.	в input задается число, чтобы указать кол-во единиц для конвертирования
d.	в select должно быть не менее трех валют - UAH, USD, EUR.
e.	конвертация должна происходить в обоих направлениях 
i.	при изменении значения в первой валюте, должно пересчитываться значение во второй, и наоборот
ii.	при изменении валюты в каждом select-е, конвертация обеих валют должна пересчитываться корректно
Плюсом будет:
●	Хорошо продуманный интерфейс и внешний вид
●	Чистый код
Для реализации используйте
●	React JS либо Angular 2+
