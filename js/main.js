// Main Variables

let input = document.querySelector("input");
let getButton = document.querySelector(".get-button");
let reposList = document.querySelector(".repos-list");

getButton.onclick = function () {
    getRepos()
};

function getRepos () {
    if (input.value == "") {
        reposList.textContent = "please Input Your Username";
    } else {
        fetch(`https://api.github.com/users/${input.value}/repos`)
        .then((result) => result.json())

        .then((repos) => {
            reposList.textContent = "";
            for (rep of repos) {
                let mainDiv = document.createElement("div");
                mainDiv.style.cssText= "font-size: 12px; margin-bottom: 5px; background-color: white; display: flex; justify-content: space-around; align-items: center;";

                let name = document.createElement("h3");
                name.textContent = `${rep.name}`;
                name.style.cssText = "width: 50%; overflow: auto; min-hieght: fit-content;"
                mainDiv.appendChild(name);

                let id = document.createElement("p");
                id.textContent = `ID: ${rep.id}`;
                mainDiv.appendChild(id);

                let stars = document.createElement("p");
                stars.textContent = `Stars: ${rep.stargazers_count}`;
                mainDiv.appendChild(stars);

                let watchers = document.createElement("p");
                watchers.textContent = `Watchers: ${rep.watchers_count}`;
                mainDiv.appendChild(watchers);

                let link = document.createElement("a");
                link.textContent = "Visit";
                link.href = `https://github.com/users/${input.value}/${rep.name}`;
                link.setAttribute("target", "_blank");
                link.style.cssText = "font-weight: bold; background-color: aqua; border-radius: 10px; padding: 5px; text-decoration: none;";
                mainDiv.appendChild(link);

                reposList.appendChild(mainDiv);
            }
        })

        .catch(() => reposList.textContent = "Not Found")
    }
};

//https://api.github.com/users/ElzeroWebSchool/repos




