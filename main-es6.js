class Profile {
    constructor(id,name, email, profession) {
        this.id=id;
        this.name = name;
        this.email = email;
        this.profession = profession;
    }
};

class Store{
    static addToStorage(profile){
        let profiles;
        if(localStorage.getItem('profiles')===null){
            profiles=[];

        }else{
            profiles=JSON.parse(localStorage.getItem('profiles '));
        }
        profiles.push(profile);
        localStorage.setItem('profiles',JSON.stringify(profiles));

    }

}
class UI {
    addProfileToList({id, name, email, profession }) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
   <tr>
      <th scope="row">${name}</th>
      <td >${email}</td>
      <td>${profession}</td>
      <input type="hidden" data-id="${id}">
      <td><i class="fa fa-trash"! id="delete"></i>Delate</td>
 </tr>
   `;
        document.querySelector('#profile-list')
            .appendChild(tr);
    }
    clearField() {
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#profession').value = '';

    }
    deletProfile(target) {
        if (target.id === "delete") {
            target.parentElement.parentElement.remove();
        }

    }
    showAlert(message, className) {
        const form = document.querySelector('form');
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        div.className = `alert alert-${className}`

        div.textContent = message;
        container.insertBefore(div, form)
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 2000)


    }

    getId(){
        return document.querySelectorAll('tr').length;
    }
}


document.querySelector('form')
  .addEventListener('submit', e => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const profession = document.querySelector('#profession').value;
    
    //instatiate ui object
    const ui = new UI();
    const id=ui.getId();
   
    //instantiate profile object
    const profile = new Profile(id,name, email, profession);
    if (name === '' || email === '' || profession === '') {
      ui.showAlert('Please provide necessary information', 'danger')
    }
    else {
      ui.showAlert('Profile is added', 'success')

      ui.addProfileToList(profile);
      //adding to local store
      Store.addToStorage(profile)

      ui.clearField()
    }

    e.preventDefault();
  })
//event delegation proatical use
document.querySelector('#profile-list')
  .addEventListener('click', e => {
    const ui = new UI();
    ui.deleteProfile(e.target);
    ui.showAlert('Profile is remove', 'success')
  });
