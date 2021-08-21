const qualAdd = document.getElementById("qualAdd");
const achAdd = document.getElementById("achAdd");
const projAdd = document.getElementById("projAdd");
const generate = document.getElementById("generate");
const print = document.getElementById("print");

qualAdd.addEventListener("click", (e) => {
  let qual = document.getElementById("qual");
  const str1 = `<div class="form-group col-md-3">
<label for="compYear">Year</label>
<input
  type="text"
  class="form-control compYear"
  placeholder="Year"
/>
</div>
<div class="form-group col-md-4">
<label for="degree">Degree/Certificate</label>
<input
  type="text"
  class="form-control degree"
  placeholder="Enter here"
/>
</div>
<div class="form-group col-md-3">
<label for="cpi">CPI/%</label>
<input
  type="text"
  class="form-control cpi"
  placeholder="CPI/%"
/>
</div>
<div class="form-group col-md-10">
<label for="insti">Institute</label>
<input
  type="text"
  class="form-control insti"
  placeholder="Institute"
/>
</div>`;
  qual.innerHTML += str1;

  e.preventDefault();
});

achAdd.addEventListener("click", (e) => {
  let ach = document.getElementById("sAch");
  const str2 = ` <label for="ach"  class="mt-2">Scholastic Achievements</label>
<input
  type="text"
  class="form-control ach"
  placeholder="Enter here"
/>`;
  ach.innerHTML += str2;

  e.preventDefault();
});

projAdd.addEventListener("click", (e) => {
  let proj = document.getElementById("project");
  const str3 = `<div class="form-group">
<label for="title">Project Title</label>
<input
  type="text"
  class="form-control title"
  placeholder="Enter here"
/>
</div>
<div class="form-group">
<label for="desc">Projects Description</label>
<textarea class="form-control project" rows="3"></textarea>
</div>`;
  proj.innerHTML += str3;

  e.preventDefault();
});

//generating cv

generate.addEventListener("click", (e) => {
  // personal info
  let name = document.getElementById("name").value;
  let year = document.getElementById("year").value;
  let dept = document.getElementById("dept").value;
  let college = document.getElementById("college").value;

  let personal = document.getElementById("personal");
  personal.innerHTML = ` <h1 class="p-color">${name}</h1>
  <p>${year}</p>
  <p>${dept}</p>
  <p>${college}</p>`;

  // contact info
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let github = document.getElementById("github").value;

  let contact = document.getElementById("contact");
  contact.innerHTML = `<p><i class="fas fa-envelope"></i>  ${email}</p>
<p><i class="fas fa-phone"></i>  ${phone}</p>
<a href="${github}" target="_blank"><i class="fab fa-github"></i>   GitHub</a>`;

  //technical skills
  let lang = document.getElementById("lang").value;
  let tools = document.getElementById("tools").value;
  let lib = document.getElementById("lib").value;

  let tech = document.getElementById("tech");

  tech.innerHTML = `<div>
<h4>Programming Languages</h4>
${lang}
</div>
<div>
<h4>Tools and Utilities</h4>
${tools}
</div>
<div>
<h4>Libraries</h4>
${lib}
</div>`;

  //Scholastic Achievements

  let ach = document.getElementsByClassName("ach");
  let str = "";

  for (let e of ach) {
    str += `<li>${e.value}</li>`;
  }

  let achieve = document.getElementById("achieve");
  achieve.innerHTML = str;

  // Academic qualifications

  let compYear = document.getElementsByClassName("compYear");
  let degree = document.getElementsByClassName("degree");
  let cpi = document.getElementsByClassName("cpi");
  let institute = document.getElementsByClassName("insti");

  let len = compYear.length;

  let str1 = `<tr>
<th>Year</th>
<th>Degree/Certificate</th>
<th>Institute</th>
<th>CPI/%</th>
</tr>`;
  for (let i = 0; i < len; i++) {
    str1 += `<tr>
  <td>${compYear[i].value}</td>
  <td>${degree[i].value}</td>
  <td>${institute[i].value}</td>
  <td>${cpi[i].value}</td>
</tr>`;
  }

  let acQual = document.getElementById("acQual");
  acQual.innerHTML = str1;

  //Projects
  let title = document.getElementsByClassName("title");
  let desc = document.getElementsByTagName("textarea");

  let len1 = desc.length;

  let str2 = "";
  console.log(desc);
  for (let i = 0; i < len1; i++) {
    str2 += `<div>
  <h4>${title[i].value}</h4> 
  <ul><li>${desc[i].value}</li></ul>
</div>`;

    let projs = document.getElementById("projs");
    projs.innerHTML = str2;

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

    e.preventDefault();
  }
});

print.addEventListener("click", () => {
  window.print();
});
