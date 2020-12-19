function Profile(name,email,profession) {
    this.name=name;
    this.email=email;
    this.profession=profession;


}
function UI(){}
UI.prototype.addProfileToList=function({name,email,profession}){
   const tr=document.createElement('tr');
   tr.innerHTML=`
   <tr>
      <th scope="row">${name}</th>
      <td >${email}</td>
      <td>${profession}</td>
      <td><i class="fa fa-trash"></i>Delate</td>
 </tr>
   `;
   document.querySelector('#product-list')
   .appendChild(tr);

}
document.querySelector('form')
.addEventListener('submit',e =>{
  const name = document.querySelector('#name').value;
  const email =document.querySelector('#email').value;
  const profession = document.querySelector('#profession').value;
  //instantiate profile object
  const profile = new Profile(name,email,profession);
  //instatiate ui object
  const ui=new UI();
  ui.addProfileToList(profile);
    e.preventDefault();
})