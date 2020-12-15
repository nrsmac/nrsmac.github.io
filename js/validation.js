/* Form Validation*/
/* Personal Web Site-Visitor Form Validation */

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

  $form.submit(function(event){

    let $form = $(this);
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
    submitForm();
    showList();

  });
}

function validateForm() {

  let isValid = false;

  isValid = isValid && validateGeneric("#first-name", "You must enter a first name");
  isValid = isValid && validateGeneric("#last-name", "You must enter a last name");
  isValid = isValid && validateGeneric("#address", "You must enter an address");
  isValid =isValid && validateGeneric("#city", "You must enter a city");
  isValid = validateGeneric("#zip", "You must enter a city");

  isValid = isValid &&  validateState("#state", "You must enter a valid two character state code, e.g., UT");
  isValid = isValid && validateEmail("#email", "You must enter a valid email.")
  isValid = isValid && validatePhoneNumber("#phone", "You must enter a valid phone number.")

  //note, to validate the group, just passing in id of one of them, we will use name to check status of group
  isValid = isValid && validateCheckboxGroup("#newspaper", "you must select at least one!");
  return isValid;

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

  return valid;
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

  return valid;
}

function validateEmail(id, msg) {
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  var $el = $(id);
  let valid=regex.exec($el.val());

  setElementValidity(id, valid, msg);

  return valid;
}


function validatePhoneNumber(id, msg) {
  var regex = /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/

  var $el = $(id);
  let valid = regex.test($el.val());

  $el.mask("000-000-0000")

  setElementValidity(id, valid, msg);

  return valid;
}

function validateCheckboxGroup(fieldName, message) {
  let valid=false;

  let $field = $(fieldName);
  let groupName = $field.attr("name");

  if($(`:input[name=${groupName}]`).is(":checked")){
    valid=true;
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
