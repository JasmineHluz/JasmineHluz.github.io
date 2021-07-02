var factList = [
  "",/*0*/
  "85% of domestic violence victims are women.", /*1*/
  "Domestic violence is most likely to take place between 6 pm and 6 am.", /*2*/
  "Women between ages of 20 and 24 are at a higher risk of domestic abuse", /*3*/
  "Domestic abuse costs $37 million with law enforcement, medical treatment, etc.", /*4*/
  "1/4 of women worldwide will experience domestic/dating violence in their lifetime.", /*5*/
  "Each year, 324,000 women experience doemstic violence during pregnancy", /*6*/
  "Boys who witness domestic violence are 2 times as likely to abuse their own partners and children when they become adults.", /*7*/
  "Domestic violence is the leading cause of injury to women – more than car accidents, muggings, and rapes combined.", /*8*/
  "Every 9 seconds in the US a woman is assaulted or beaten.", /*9*/
  "In 60% to 80% of intimate partner homicides, no matter which partner was killed, the man physically abused the woman before the murder.", /*10*/
  "Most domestic violence incidents are never reported.", /*11*/
  "Every year, 1 in 3 women who is a victim of homicide is murdered by her current or former partner.", /*12*/
  "Every year, more than 3 million children witness domestic violence in their homes.", /*13*/
  "A 2005 Michigan study found that children exposed to domestic violence at home are more likely to have health problems. This includes becoming sick more often, having frequent headaches or stomachaches, and being more tired and lethargic.", /*14*/
  "According to the U.S. Department of Housing and Urban Development, domestic violence is the third leading cause of homelessness among families."]; /*15*/

var fact = document.getElementById("fact");
var factGene = document.getElementById("factGene");
var count = 0;

if (factGene){
  factGene.addEventListener("click", displayFact);
}

fact.innerHTML = factList[count];

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.lenght){
    count = 0;
  }
}
