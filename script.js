fetch('https://www.boredapi.com/api/activity/')
    .then(data=>data.json())
    .then(ourData=> {
        const answer=ourData.activity;
        const type=ourData.type;
        const head1=document.getElementById('head1');
        const task=document.getElementById('task');

        head1.innerHTML= type;
        task.innerHTML = answer;
    })