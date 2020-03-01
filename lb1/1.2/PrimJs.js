// Файл primJs.js
a = "background-color:#00ffff; color:#ff00ff;"
a += "font-size:24pt; font-family:'Times New Roman'"
naim = 'Сеть магазинов "ВСЁ ДЛЯ ДОМА"'
var da = new Date()
d = da.getDate() + "." + da.getMonth() + "." + da.getYear();
document.write('<p align=center style= "' + a + '">' + naim + '</p><p>Сегодня ' + d + '</p>');
