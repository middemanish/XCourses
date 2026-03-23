function CourseMaker(imgpath,name,author,price){
    this.imgpath = imgpath;
    this.name = name;
    this.author = author;
    this.price = price;
}

$(document).ready(function(){

    var courses = [];

    courses.push(new CourseMaker("images/course1.png","Machine Learning Specialization","Andrew Ng","₹569"));
    courses.push(new CourseMaker("images/course2.png","CS50: Introduction to Computer Science","David J. Malan","Free"));
    courses.push(new CourseMaker("images/course3.png","Algorithms Specialization","Tim Roughgarden","₹399"));
    courses.push(new CourseMaker("images/course4.png","Deep Learning Specialization","Andrew Ng","₹699"));
    courses.push(new CourseMaker("images/course5.png","Google Data Analytics Professional Certificate","Google","₹299"));
    courses.push(new CourseMaker("images/course6.png","Full-Stack Web Development with React","HKUST","₹349"));
    courses.push(new CourseMaker("images/course7.png","Python for Everybody","Charles Severance","₹199"));
    courses.push(new CourseMaker("images/course8.png","Introduction to AI","IBM","₹249"));
    courses.push(new CourseMaker("images/course9.png","Operating Systems and You","Google","₹199"));

    for(var i = 0; i < courses.length; i++){

        $(".courses").append(`
            <div class="col-md-4 mb-4">
                <div class="card shadow h-100">

                    <img src="${courses[i].imgpath}" 
                         class="card-img-top" 
                         style="height:220px; object-fit:cover;">

                    <div class="card-body d-flex flex-column">

                        <h5>${courses[i].name}</h5>
                        <p class="text-muted mb-1">${courses[i].author}</p>

                        <p class="fw-bold text-success mb-3">${courses[i].price}</p>

                        <a href="course${i+1}.html" 
                           class="btn btn-outline-primary mt-auto">
                           View Details
                        </a>

                    </div>

                </div>
            </div>
        `);
    }

});


