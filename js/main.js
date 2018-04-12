var qualifications = document.getElementById("qualifications");
var i = 0;


var quals = ["HTML and CSS", "MySQL", "Javascript & React", "iOS app dev w/ Swift",
    "Java app development", "UI / UX Design", "Cordova web apps", "Windows app development",
    "Design (Adobe PS, AI, XD)", "Creating servers with linux", "PHP and Databases", "C++" ];

var stars = ["★★★★★", "★★★★★", "★★★★★", "★★★★", "★★★★", "★★★★", "★★★★", "★★★", "★★★", "★", "★", "★"];

console.log(quals[0]);
quals.forEach(function (count) {



    var item = document.createElement("li");
    var star = document.createElement("span");

    item.textContent = count + " ";
    star.textContent = stars[i];

    item.setAttribute("class", "content");
    star.setAttribute("class", "star");

    item.appendChild(star);
    qualifications.appendChild(item);
    console.log(count);
    i++;
});