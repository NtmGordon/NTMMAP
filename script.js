let images = [];
2
let current = 0;
3
 
4
function openLocation(title,imgs,desc){
5
 
6
images = imgs;
7
current = 0;
8
 
9
document.getElementById("title").innerText = title;
10
document.getElementById("description").innerText = desc;
11
 
12
document.getElementById("slideImage").src =
13
images[current];
14
 
15
document.getElementById("popup").style.display =
16
"block";
17
}
18
 
19
function closePopup(){
20
 
21
document.getElementById("popup").style.display =
22
"none";
23
}
24
 
25
function nextImage(){
26
 
27
current++;
28
 
29
if(current >= images.length){
30
 
31
current = 0;
32
}
33
 
34
document.getElementById("slideImage").src =
35
images[current];
36
}
37
 
38
function prevImage(){
39
 
40
current--;
41
 
42
if(current < 0){
43
 
44
current = images.length - 1;
45
}
46
 
47
document.getElementById("slideImage").src =
48
images[current];
49
}
