var g = document.getElementsByClassName("card-body");
var pname='', jtitle='', loc='', bio='', LIurl='', arr = new Array();
var strings ='Name'+'\t'+'JobTitle'+'\t'+'Location'+'\t'+'Bio'+'\t'+'ResumeURL'+'\t'+'Email'+'\t'+'LinkedIn'+'\t'+'link2'+'\t'+'link3'+'\r\n';
for (i = 0; i < g.length; i++) {
pname = g[i].getElementsByTagName("b")[0].textContent;
jtitle = g[i].getElementsByTagName("h4")[0].textContent;
loc = g[i].getElementsByTagName("h6")[0].textContent;
loc = loc.trim();
bio = g[i].querySelector(".card-text.text-muted").textContent;
arr[i] = pname+'\t'+LIurl+'\t'+jtitle+'\t'+loc+'\t'+bio+'\t';
  for (q = 0; q<g[i].getElementsByTagName('a').length; q++){
  arr[i] += g[i].getElementsByTagName('a')[q].href + '\t';
  }
strings += arr[i]+'\r\n';
console.log(strings);
}
