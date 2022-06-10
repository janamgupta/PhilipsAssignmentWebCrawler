window.addEventListener('DOMContentLoaded', (event) => {
  var orgName = "philips-software"
  getrepositories(orgName)
});

function getrepositories(orgName){
  fetch(`https://api.github.com/orgs/${orgName}/repos?type=public&per_page=100`, {
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': 'token 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'
  }
})
  .then(response => response.json())
  .then(data => {
      listRepositories(data, orgName)
  })
  .catch(error => console.error(error));
}

function listRepositories(data, orgName){
    const repoHead = document.querySelector("#repoHeader")
    const repoList = document.querySelector("#repoList")
    repoHead.innerText = `${orgName} repositories`
    var ul = document.createElement("ul");
    repoList.appendChild(ul);

    data.forEach((element) => {
      var li = document.createElement("li");

      li.innerText = element.name;
      ul.appendChild(li);
    });    
}