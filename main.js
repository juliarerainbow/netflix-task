// let manager = new Manager(DBService.getAllShows());


let manager;

DBService.getAllShows().then(shows => {
    manager = new Manager(shows);
    render();
});

// console.log(manager);






function render() {
    const showsContainer = document.getElementById('main-container');
    showsContainer.innerHTML = '';



    for (let i = 0; i < manager.showsArray.length; i++) {
        const show = manager.showsArray[i];

        const div = document.createElement('div');
        div.classList.add('card');

        console.log(show.title);





        div.appendChild(createElementWithString('img', show.imageUrl));


        const showImage = document.createElement('img');


        showImage.id = "id-img-"+i;
        showImage.className = "show-img";
        showImage.src = show.imageUrl;
        div.appendChild(showImage);

        div.appendChild(createElementWithString('strong', show.title));
        div.appendChild(createElementWithString('span', show.creationDate));
        div.appendChild(createElementWithString('span', show.author));
        div.appendChild(createElementWithString('span', show.isFinished));
        const upVoteBtn=createElementWithString('button', show.upVotes)
        upVoteBtn.addEventListener("click", DBService.upvote(show));
        div.appendChild(upVoteBtn);
        const downVoteBtn = createElementWithString('button', show.downVotes);
        downVoteBtn.addEventListener("click", DBService.downvote(show));
        div.appendChild(downVoteBtn);



        showsContainer.appendChild(div);
    }

}


// function setUpVoteBtn(){
//     console.log('up');
//     show.upVotes++;
//     DBService.


// }

// function setDownVoteBtn(){
//     console.log('down');

// }




function createElementWithString(elementName, contentString) {
    const element = document.createElement(elementName);
    const node = document.createTextNode(contentString);
    element.appendChild(node);
    return element;
}