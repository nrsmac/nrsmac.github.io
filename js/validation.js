/* Form Validation Example */
/* Personal Web Site-Visitor Form Validation */
/* See comments with TODO for code you need to implement */
const stateAbbreviations = [
  'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
  'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
  'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
  'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
  'VT','VI','VA','WA','WV','WI','WY'
 ];

function initValidation(formName) {

  let $form = $(formName);

  $(':input').change(function(ev){
    validateForm();
    if(!this.checkValidity())
      $(this).addClass("was-validated")

    //NOTE: we use 'was-validated' class so that you show the error indications only for the single field rather
    //than the whole form at once
  });

  $("#myform").submit(function(event){
    $form = $("#myform");
    formEl=$form.get(0);

    event.preventDefault();  //prevent default browser submit
    event.stopPropagation(); //stop event bubbling

    validateForm();

    if (!formEl.checkValidity()){
      $(":input").addClass("was-validated")
    }
    else{
      $form.addClass("hidden");
      $(".successMsg").removeClass("hidden")
    }


  });
}

function validateForm() {

  validateGeneric("#first-name", "You must enter a first name");
  validateGeneric("#last-name", "You must enter a last name");
  validateGeneric("#address", "You must enter an address");
  validatePhoneNumber('#phone', "You must enter a valid phone number");

  validateState("#state", "You must enter a valid two character state code, e.g., UT");

  //note, to validate the group, just passing in id of one of them, we will use name to check status of group
  validateCheckboxGroup("#newspaper", "you must select at least one!");

}
function validateGeneric(id, msg){
  $el = $(id);
  let valid=false;
  //get value from $el, and convert to upper case
  //check whether the value is in the stateAbbreviations array
  if ($el.val()) {
    valid=true;
  }
  setElementValidity(id, valid, msg);
}

function validateState(id, msg){
  $el = $(id);
  let valid=false;
  //TODO
  //get value from $el, and convert to upper case
  //check whether the value is in the stateAbbreviations array
  if (stateAbbreviations.indexOf($el.val().toUpperCase()) != -1 ) {
    valid=true;
  }
  setElementValidity(id, valid, msg);
}

function validatePhoneNumber(id, msg) {
	let re = "/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im"
	let valid = re.exec(phoneInput.value);
	
	setElementValidity(id, valid, msg);
}

function validateCheckboxGroup(fieldName, message) {
  let valid=false;

  //TODO
  //Validate whether any of the checkboxes are checked. set 'valid' to true if checked
  var placesFound = $(".whereFound input:checkbox");
  for (var checkbox of placesFound) { validateCheckbox(checkbox) }

  function validateCheckbox(checkbox) {
    if (checkbox.checked == true){
      valid = true;
    }
  }

  setElementValidity(fieldName, valid, message);

  return valid;
}

function setElementValidity(fieldName, valid, message){
  let $field=$(fieldName);
  let el = $field.get(0);
  if (valid) {  //it has a value

    el.setCustomValidity('');  //sets to no error message and field is valid
  } else {

    el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat

  }

}
