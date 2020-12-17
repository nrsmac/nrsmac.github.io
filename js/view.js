var modal = document.getElementById('modal');
var modalBox = document.getElementById('modal-box');
var sectionName = document.getElementById("section-name");
var sectionContainer = document.getElementById("section-container")



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



function closeBtnClicked() {
  modal.style.display = "none";
  sectionName.innerHTML = "";
  sectionContainer.innerHTML = ""
}

function renderTable(containerId, visitors) { //renders table from global visitors object array
  $("tr:not(thead tr)").remove() //clears out the table
  visitors.forEach((item, i) => {
    if ($(`#item${item.id}`).length == 0) {
      let currentRow = containerId.append(`<tr id="item${item.id}""></tr>`);
      $(`#item${item.id}`).append(`
          <td>${item.firstName}" "${item.lastName}</td>
          <td>${item.address}<br>${item.city}, ${item.state} ${item.zip}</td>
          <td>${item.email}<br>${item.phone}</td>
          <td class=".actionsColumn">
            <a href="#visitor-section-container", onClick="deleteVisitor(${item.id})">Delete</a>
            <a href="#visitor-section-container", onClick="editVisitor(${item.id})">Edit</a>
          </td>`
        )
      }
      });
}

var table = $("#visitorTable");

function showList() { //shows visitor list and hides form
  renderTable(table,visitors);
  clearForm();
  $("#visitor-section-container").removeClass("hidden")
  $("#visitors").removeClass("hidden")
  $("#form-container").addClass("hidden");
}

function showForm() { //shows visitor form and hides list
  $("visitor-section-container").removeClass("hidden")
  $("#visitors").addClass("hidden")
  $("#form-container").removeClass("hidden")
  clearForm()
}

function clearForm() {
  $("input").val("");
}


$("#closeVisitors").click(function() {
  $("#visitor-section-container").addClass("hidden")
})
