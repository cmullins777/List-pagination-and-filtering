/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
let list = document.querySelectorAll('.student-details');
console.log(list);
//const studentArray = [];
let totalItems = list.length;
//console.log(totalItems);
const pageSize = 10;
page = [];

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/
const showPage = (list, page) => {
  let i;
  for (i = 0; i <= totalItems.length; i++) {
    if (index[i] >= page[i][0] && index[i] <= page[i][9]) {
      list.style.display == block;
    }
    else {
     list.style.display == none;
    };
  };
};
/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
  let totalPages = Math.floor(totalItems/pageSize);

  const pageDiv = document.createElement("div");
  pageDiv.className = 'pagination';
  //pageDiv.innerHTML = "I'm pageDiv";
  document.getElementsByClassName("page")[0].appendChild(pageDiv);

  const pageUl = document.createElement("ul");
  pageUl.className = 'pagination';
  //pageUl.innerHTML = "I'm the Ul";
  pageDiv.appendChild(pageUl);

  for (i = 0; i<=totalPages; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    pageDiv.appendChild(li);
    pageUl.appendChild(li);
    li.appendChild(a);
    li.className = 'pagination li';
    a.className = 'pagination li a';
    a.innerHTML = [i+1];
    a.addEventListener("click", showPage);
    console.log(a);
  };

let buttons = document.getElementsByTagName("a").innerText;
page.push(buttons);
console.log(buttons);
  //  for (i = 0; i<=totalPages.length; i++) {
  //    a.remove('active');
  //  };
};

appendPageLinks();



// Remember to delete the comments that came with this file, and replace them with your own code comments.
