$(document).ready(function(){

   initValidation("#myform");   //in validation.js, should set up submit event handler

   //initialize any of your button or other event handlers
   $("#formSubmit").click(submitForm);
   $("#formCancel").click(cancelEntry);
   $("#form-link").click(loadVisitors);
   $("#addButton").click(addVisitor);
   $("#close-btn").click(closeBtnClicked);
   $(".section-link").click(linkClicked);

});

function loadVisitors() {
   //called when 'visitors' menu item is clicked
   //calls view 'showVisitors'
   //calls view 'renderTable'
   //calls view 'showTable'
   showList();
   renderTable(table, visitors);
   showList();
}

function submitForm() {
    //called on form submit. Gets contents of form, creates visitor object,
    //calls model 'modelAddVisitor' function
    //calls view 'renderTable'
    //calls view 'showTable'
    let valid = validateForm();
       // constructor(id, firstName, lastName, address, city, state, zip, email, phone, methodFound) {

      let formContents = $("#myform");
      if (valid){
        modelAddVisitor(new Visitor(0,
          $("#first-name").val(),
          $("#last-name").val(),
          $("#address").val(),
          $("#city").val(),
          $("#state").val(),
          $("#zip").val(),
          $("#email").val(),
          $("#phone").val(),
          getWhereFound()))
        renderTable(table, visitors);
        showList();
      } else {
        validateForm();
      }
}

function getWhereFound() {
  let whereFoundString = ""
  $("input[name='find-page']").each(function(){
    if(this.checked){
      whereFoundString += (this.id + " ");
    }
  })
  return whereFoundString;
}

function addVisitor(visitor) {
  //called on 'click' of 'New Visitor' button
  //calls view 'clearForm' to clear form contents
  //calls view 'showForm'
  initValidation("#myform");
  clearForm();
  showForm();
}

function cancelEntry() {
  if(confirm("Are you sure you want to cancel entry?")){
    showList();
  }
}

function deleteVisitor(id) {
   //called on 'click' of 'delete' icon in visitor list
   //calls model.js modelDeleteVisitor
   //calls view 'renderTable'
   //calls view 'showTable'
   if(confirm("Are you sure you want to delete this user?")){
     console.log("Clicked!");
     modelDeleteVisitor(id);
     renderTable(table, visitors);
     addDeleteListeners();
     showList();
   }
}

function editVisitor(id) {
  let visitor = findVisitor(id);

  showForm();

  $("#first-name").val(visitor.firstName);
  $("#last-name").val(visitor.lastName);
  $("#address").val(visitor.address);
  $("#city").val(visitor.city);
  $("#state").val(visitor.state);
  $("#zip").val(visitor.zip);
  $("#email").val(visitor.email);
  $("#phone").val(visitor.phone);

  modelDeleteVisitor(id)

}
