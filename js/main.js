var qualifications = document.getElementById("qualifications");
var awards = document.getElementById("awards");
var experience = document.getElementById("experience");
var education = document.getElementById("education");




//******** Quals **********

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



//******** Education **********

var programName = document.createElement("p");
var dean = document.createElement("p");
var date = document.createElement("p");

programName.textContent = "Mobile Application Design & Development (Algonquin College)";
dean.textContent = "Dean's Honours List   September 2016 - April 2018";

programName.setAttribute("class", "content");
dean.setAttribute("class", "content");

education.appendChild(programName);
education.appendChild(dean);




//******** Experience **********

var project = document.createElement("p");
var dateProj = document.createElement("p");
var wireframe = document.createElement("a");

project.textContent = "Designed and developed the Smart City app with MGIS";
dateProj.textContent = "January 2018 - April 2018";
wireframe.textContent = "iOS Wireframe";

project.setAttribute("class", "content");
dateProj.setAttribute("class", "content");
wireframe.setAttribute("class", "content");
wireframe.setAttribute("target", "_blank");
wireframe.setAttribute("href", "https://xd.adobe.com/view/b8b4d1e7-65a4-4aa5-b180-0943b6b4a718/");

experience.appendChild(project);
experience.appendChild(dateProj);
experience.appendChild(wireframe);




//******** Awards **********

var duke = document.createElement("p");
var respect = document.createElement("p");
var awareness = document.createElement("p");

duke.textContent = "Bronze, Silver, Gold Duke of Edinburgh Award, 2013, 2014, 2018";
respect.textContent = "Respect in Sport training for Coaches and Activity leaders";
awareness.textContent = "Ontario Disability Awareness Training ";

duke.setAttribute("class", "content");
respect.setAttribute("class", "content");
awareness.setAttribute("class", "content");

awards.appendChild(duke);
awards.appendChild(respect);
awards.appendChild(awareness);



