let courses = ["html", "css", "javascript", "bootstrap"];

function searchCourse(courseName) {
    if (courses.includes(courseName)) {
        console.log("Found");
    } else {
        courses.push(courseName);
        console.log("Not found, added" );
    }

    console.log("Current courses:", courses);
}

var s=prompt("enter course name")
searchCourse(s)
