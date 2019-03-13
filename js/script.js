/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/***
  Declare global variables, including;
  html tags containing student data,
  pageSize, a dynamic variable for number of items per page,
  page, to be called once in showPage() when page loads
***/
let students = document.querySelectorAll('.student-item');
let totalItems = students.length;
const pageSize = 10;
let a = document.getElementsByTagName("a");
let page = parseInt(a.textContent);

/***
  Create showPage function, pass in student list and selected page,
  dynamically determine which items are shown by page selection and pageSize
  show selected items, hide unselected
***/
const showPage = (list, page) => {
  for (let i = 0; i < students.length; i++) {
    if (i >= ((page * pageSize) - pageSize) && (i < (page * pageSize))) {
      students[i].style.display = "block";
    } else {
      students[i].style.display = "none";
    }
  }
};
showPage(students, [1]);
/***
   Create appendPage function,
   create page links dynamically for number of totalPages and append to ul, append to page div
   add event listener to page links to call showPage function
***/
const appendPageLinks = (list) => {
  let totalPages = Math.floor(totalItems/pageSize);

  const pageDiv = document.createElement("div");
  pageDiv.className = 'pagination';
  document.getElementsByClassName("page")[0].appendChild(pageDiv);

  const pageUl = document.createElement("ul");
  pageUl.className = 'pagination';
  pageDiv.appendChild(pageUl);

  for (let i = 0; i<=totalPages; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    pageDiv.appendChild(li);
    pageUl.appendChild(li);
    li.appendChild(a);
    li.className = 'pagination li';
    a.className = 'pagination li a';
    a.innerHTML = [i+1];
    let page = parseInt(a.textContent);
    a.addEventListener('click', (e) => {
      a.classList.remove('active');
      showPage(students, e.target.textContent);
    });
  };
};

appendPageLinks();
