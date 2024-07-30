let resources = {
    p1: {
        title: 'Public and Private Investment',
        bodyText: 'Encouraging both public and private sectors to invest in clean energy projects can significantly lower costs. Creating environments that reduce the financial risks associated with clean energy investments can attract more funding and drive down the overall expense of renewable energy infrastructure ',
        url: 'images/investment-5299600_1920.jpg'
    },
    p2: {
        title: 'Technological Advancements and Global Access',
        bodyText: 'Making renewable energy technology a global public good can enhance accessibility and affordability. This includes improving access to essential components and raw materials needed for renewable energy systems, thus reducing production costs and making renewable energy solutions more affordable worldwide',
        url: 'images/startup-3267505_1920.jpg'
    },
    p3: {
        title: 'Policy and Regulation',
        bodyText: 'Implementing policies that support renewable energy development can level the playing field for clean energy. This includes subsidies, tax incentives, and regulations that promote the use of renewable resources over fossil fuels. Effective policy measures can make clean energy more competitive and affordable for consumers',
        url: 'images/pexels-pixabay-357514.jpg'
    }
 }

let buttons = document.querySelectorAll('#controls button');
let dc = document.getElementById('dynamic-content');

function selectpage(ev) {
    let currentButton = ev.target;
    

    dc.innerHTML = `<h1>${resources[currentButton.id].title}</h1>
                    <img src="${resources[currentButton.id].url}">
                    <p>${resources[currentButton.id].bodyText}<p>`;



    buttons.forEach (button => {
        button.addEventListener('click', () => {
          buttons.forEach(btn => btn.classList.remove('active'));
          
          button.classList.add('active');
        });
      });
                    
} 

for (let button of buttons) {
    button.addEventListener('click', selectpage);
}
