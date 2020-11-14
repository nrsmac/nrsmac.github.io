/*
Project:  Personal Website
Name: Noah Schill
Submitted: 13 Nov 2020

I declare that the following source code was written by me, or provided
by the instructor for this project. I understand that copying source
code from any other source, providing source code to another student,
or leaving my code on a public web site constitutes cheating.
I acknowledge that  If I am found in violation of this policy this may result
in a zero grade, a permanent record on file and possibly immediate failure of the class.
*/
var modal = document.getElementById('modal');
var modalBox = document.getElementById('modal-box');
var closeBtn = document.getElementById('close-btn')
var sectionName = document.getElementById("section-name");
var sectionContainer = document.getElementById("section-container")

var links = document.getElementsByClassName("section-link");

for (link of links) {
  link.addEventListener("click", linkClicked);
}

function linkClicked() {

  switch (this.id) {

  	case "video-link":
      modal.style.display = "inline";
      sectionName.innerHTML = "Video"
      sectionContainer.innerHTML = `<video height="500px" controls><source src="video/horse.mp4" type="video/mp4">Your browser does not support the video tag.</video>`
      break;

      case "about-link":
          modal.style.display = "inline";
          sectionName.innerHTML = "About";
          sectionContainer.innerHTML = "<p>Noah Schill -- a homo sapiens from planet earth.</p>"
          break;

  }
}

closeBtn.addEventListener("click", closeBtnClicked)

function closeBtnClicked() {
  modal.style.display = "none";
  sectionName.innerHTML = "";
  sectionContainer.innerHTML = ""
}
