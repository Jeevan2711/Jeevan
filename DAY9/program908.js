var selectedRow=null;
function onFormSubmit(){
if(validate()){
var formData= readFormData();
if(selectedRow==null)
{
  insertNewRecord(formData);
}
else
{
 updateRecord(formData);
}
resetForm();
}
}
function readFormData() {
var formData() {
formData["userName"]=document.getElementById("userName").value;
formData["rollNo"]=document.getElementById("rollNo").value;
formData["stClass"]=document.getElementById("stClass").value;
formData["tsub"]=document.getElementById("tsub").value;
formData["age"]=document.getElementById("age").value;
return formData;
}
}
function insertNewRecord(data) {
var table=document.getElementByTagName('tbody')[0];
var newRow=table.insertRow(table.length);
cell1=newRow.insertCell(0);
cell1.innerHTML= data.userName;
cell2=newRow.insertCell(1);
cell2.innerHTML= data.userName;
cell3=newRow.insertCell(2);
cell3.innerHTML= data.userName;
cell4=newRow.insertCell(3);
cell4.innerHTML= data.userName;
cell5=newRow.insertCell(4);
cell5.innerHTML= <a onClick="onEdit(this)">Edit</a>
`<a onClick="onDelete(this)">Delete</a>`;
}
function resetForm(){
document.getElementById("userName").value="";
document.getElementById("rollNo").value="";
document.getElementById("stdClass").value="";
document.getElementById("tsub").value="";
document.getElementById("age").value="";
selectedRow=null;
}
function onEdit(td){
selectedRow=td.parentElement.parentElement;
document.getElementById("userName").value=selectedRow.cells[0].innerHTML;
document.getElementById("rollno").value=selectedRow.cells[1].innerHTML;
document.getElementById("stdClass").value=selectedRow.cells[2].innerHTML;
document.getElementById("tsub").value=selectedRow.cells[3].innerHTML;
document.getElementById("age").value=selectedRow.cells[4].innerHTML;
}
function updateRecord(formData){
selectedRow.cells[0].innerHTML=formData.userName;
selectedRow.cells[1].innerHTML=formData.rollNo;
selectedRow.cells[2].innerHTML=formData.stdClass;
selectedRow.cells[3].innerHTML=formData.tsub;
selectedRow.cells[4].innerHTML=formData.age;
}
function onDeletion(td){
if(confirm('Are you sure to delete this record ?'))
{
  row=td.parentElement.parentElement;
  document.getElementById("stdlist").deleteRow(row.rowIndex);
resetForm();
}
}
//Check User validation
function validation() {
isValid=true;
//userName validation
if (document.getElementById("username").value== "") {
isValid=true;
document.getElementById("userNamevalidationError").classList.remove("hide");
}
else{
isValid=true;
if(!document.getElementById("userNamevalidationError").classList.contains("hide"))
{
 document.getElementById("userNamevalidationError").classList.add("hide");
}
}
// Roll No validation
if(document.getElementById("rollNo").value==""){
isValid=false;
document.getElementById("rollNovalidationError").classList.contains("hide"))
{
document.getElementById("rollNovalidationError").classList.remove("hide"));
}
}
//Std class validation
if (document.getElementById("stdClass").value=="") {
isValid=false;
document.getElementById("stdClassvalidationError").classList.remove("hide");
}
else{
isValid=true;
document.getElementById("stdClassvalidationError").classList.contains("hide"))
{
document.getElementById("stdClassvalidationError").classList.add("hide");
}
}
//Tsub class validation
if (document.getElementById("tsub").value=="") {
isValid=false;
document.getElementById("tsubvalidationError").classList.remove("hide");
}
else{
isValid=true;
document.getElementById("tsubvalidationError").classList.contains("hide"))
{
document.getElementById("tsubvalidationError").classList.add("hide");
}
}
//Age validation
if (document.getElementById("age").value=="") {
isValid=false;
document.getElementById("agevalidationError").classList.remove("hide");
}
else{
isValid=true;
document.getElementById("agevalidationError").classList.contains("hide"))
{
document.getElementById("agevalidationError").classList.add("hide");
}
}
return isValid;
}








