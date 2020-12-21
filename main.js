function Profile(name, email, profession) {
  this.name = name;
  this.email = email;
  this.profession = profession;


}
function UI() { }
UI.prototype.addProfileToList = function ({ name, email, profession }) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
   <tr>
      <th scope="row">${name}</th>
      <td >${email}</td>
      <td>${profession}</td>
      <td><i class="fa fa-trash"! id="delete"></i>Delate</td>
 </tr>
   `;
  document.querySelector('#profile-list')
    .appendChild(tr);

}
//chearing profile item
UI.prototype.clearField = function () {
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#profession').value = '';
}
//delete profile item
UI.prototype.deleteProfile = function (target) {
  if (target.id === "delete") {
    target.parentElement.parentElement.remove();
  }

}
document.querySelector('form')
  .addEventListener('submit', e => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const profession = document.querySelector('#profession').value;
    //instantiate profile object
    const profile = new Profile(name, email, profession);
    //instatiate ui object
    const ui = new UI();
    if (name === '' || email === '' || profession === '') {
      console.log("Please fill up the information")
    }
    else {

      ui.addProfileToList(profile);
      ui.clearField()
    }

    e.preventDefault();
  })
//event delegation proatical use
document.querySelector('#profile-list')
  .addEventListener('click', e => {
    const ui = new UI();
    ui.deleteProfile(e.target);
  });
