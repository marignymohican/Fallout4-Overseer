export const settlements = ["Abernathy farm","Boston Airport","Bunker Hill","The Castle","Coastal cottage","County Crossing","Covenant","Croup Manor","Egret Tours Marina","Finch Farm","Graygarden","Greentop Nursery","Hangman's Alley","Home Plate","Jamaica Plain","Kingsport Lighthouse","Murkwater construction","Nordhagen Beach","Oberland Station","Outpost Zimonja","Red Rocket Truck Stop","Sanctuary Hills","The Slog","Somerville Place","Spectacle Island","Starlight Drive-In","Sunshine Tidings Co-op","Taffington Boathouse","Tenpines Bluff","Warwick Homestead","The Mechanist's lair","Longfellow's cabin","Dalton farm","National Park Visitor's Center","Echo Lake Lumber","Vault 88","Nuka-World Red Rocket"];
export const jobTypes = ['food','defense','scavenger','provisioner','shopkeeper'];

export const resourceList = {
    food: {
        carrot: 0.5,
        corn: 0.5,
        gourd: 0.5,
        melon: 0.5,
        mutfruit: 1,        
        razorgrain: 0.5,
        tato: 0.5
    },
    water: {
        'water pump': 3,
        'water pump - powered': [10,4],
        'medium purifier': [10,2],
        'medium purifier - industrial': [40,5]
    },
    electricity: {
        'small generator': 3,
        'medium generator': 5,
        'large generator': 10,
        'wind generator': 10,
        'fusion generator': 100
    },
    defense: {
        'artillery': 6,
        'guard post': 2,
        'turret': 5,
        'heavy turret': 8,
        'laser turret': [8,2],
        'shotgun turret': [8,2],
        'spotlight': [2,2],
        'heavy laser turret': [15,2],
        'missile turret': [12,2],
        'tesla arc': [2,1],
        'radiation emitter': [2,1],
        'flamethrower trap': [3,1],
        'powered spring trap': [1,1],
        'spring trap': 1,
        'sawblade trap': [2,1]
    }
};
export const resourceTypes = ['population','food','water','electricity','defense','beds'];
export const resourceSVG = {
    'population': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="128pt" height="179pt" viewBox="0 0 128 179" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 101.457031 15.441406 C 102.945312 16.925781 103.359375 18.910156 102.699219 21.386719 L 101.210938 24.605469 L 102.449219 27.824219 C 104.269531 32.613281 104.597656 37.484375 103.441406 42.4375 C 102.449219 47.394531 100.132812 51.4375 96.496094 54.574219 C 111.378906 59.035156 121.300781 67.042969 126.261719 78.601562 C 127.421875 80.582031 127.917969 82.316406 127.75 83.804688 L 126.261719 88.261719 C 123.78125 94.535156 120.476562 99.65625 116.339844 103.617188 L 115.84375 108.078125 L 112.621094 110.800781 L 113.859375 113.527344 C 114.027344 114.847656 113.363281 115.835938 111.875 116.5 L 107.660156 116.746094 L 112.621094 159.84375 C 115.265625 160.503906 117.914062 161.660156 120.558594 163.3125 L 124.03125 166.285156 C 124.03125 168.925781 121.550781 170.246094 116.589844 170.246094 L 105.921875 169.253906 L 102.449219 168.015625 L 101.457031 167.769531 L 99.722656 169.007812 L 95.75 167.769531 L 94.757812 163.558594 L 94.757812 163.3125 L 93.023438 162.566406 L 89.796875 146.46875 C 88.640625 141.019531 86.410156 135.238281 83.101562 129.128906 L 73.675781 150.429688 C 71.523438 155.054688 69.871094 159.597656 68.714844 164.054688 L 68.21875 166.035156 L 66.730469 167.027344 C 66.5625 169.832031 65.40625 172.3125 63.253906 174.457031 C 61.105469 176.769531 58.625 178.007812 55.8125 178.171875 C 53.167969 178.667969 51.347656 176.605469 50.355469 171.980469 C 50.027344 170 50.4375 168.183594 51.597656 166.53125 L 50.355469 165.789062 L 50.109375 160.585938 L 50.355469 152.414062 C 51.019531 144.980469 53.003906 134 56.308594 119.46875 L 57.054688 115.257812 C 59.039062 102.050781 59.203125 89.914062 57.550781 78.847656 C 46.636719 76.207031 37.210938 71.5 29.269531 64.730469 C 20.175781 56.804688 15.296875 47.886719 14.636719 37.980469 L 12.15625 34.511719 C 10.171875 31.539062 8.269531 29.972656 6.449219 29.808594 C 2.148438 29.476562 0.25 28.074219 0.746094 25.597656 C 1.242188 23.121094 2.5625 21.964844 4.714844 22.128906 C 6.53125 22.128906 8.515625 22.871094 10.667969 24.359375 C 12.15625 25.84375 12.980469 26.175781 13.148438 25.347656 C 13.644531 24.359375 13.394531 23.449219 12.402344 22.625 L 9.921875 20.890625 C 8.101562 19.402344 7.109375 18 6.945312 16.679688 C 6.285156 14.53125 7.195312 13.378906 9.675781 13.210938 C 11.988281 13.210938 13.808594 13.789062 15.132812 14.945312 C 16.621094 16.433594 17.859375 19.074219 18.851562 22.871094 L 18.605469 18.164062 L 17.117188 13.707031 C 16.949219 12.386719 17.445312 11.394531 18.605469 10.734375 L 21.828125 10.984375 C 24.144531 12.632812 25.46875 14.945312 25.796875 17.917969 L 26.046875 25.101562 L 27.285156 23.863281 C 28.609375 22.871094 30.261719 22.871094 32.25 23.863281 C 34.234375 24.6875 34.894531 26.007812 34.234375 27.824219 L 30.511719 31.539062 C 28.859375 32.203125 27.867188 32.777344 27.535156 33.273438 L 26.789062 35.257812 C 31.089844 42.523438 36.132812 47.394531 41.921875 49.871094 L 67.722656 50.859375 L 64.496094 47.394531 L 64.25 47.394531 C 62.261719 47.558594 60.527344 46.566406 59.039062 44.421875 C 57.714844 42.109375 57.632812 40.042969 58.789062 38.226562 L 59.78125 37.980469 L 59.039062 37.238281 C 57.714844 35.585938 56.640625 32.945312 55.8125 29.3125 C 54.492188 25.183594 54.324219 21.632812 55.316406 18.660156 C 57.136719 13.871094 59.203125 11.066406 61.519531 10.238281 L 63.75 7.515625 L 65.984375 4.542969 L 71.195312 3.054688 L 72.929688 1.570312 C 74.085938 0.578125 75.164062 0.0859375 76.15625 0.0859375 L 76.652344 0.0859375 C 77.808594 0.0859375 79.296875 1.15625 81.117188 3.304688 C 81.613281 3.964844 82.605469 4.296875 84.09375 4.296875 L 87.316406 4.542969 C 88.804688 4.707031 90.210938 5.617188 91.535156 7.265625 L 93.269531 9 L 95.253906 9.496094 C 96.25 9.496094 96.910156 9.167969 97.242188 8.503906 C 97.570312 7.84375 97.242188 6.773438 96.25 5.285156 L 96.25 5.039062 L 98.730469 6.277344 L 101.707031 9.25 C 102.53125 11.394531 102.449219 13.460938 101.457031 15.441406 "></path></g></svg>',
    'food': '        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="128pt" height="227pt" viewBox="0 0 128 227" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 30.398438 2.09375 C 32.535156 2.09375 33.492188 2.835938 33.28125 4.328125 L 33.28125 49.019531 C 33.492188 50.507812 34.558594 51.359375 36.480469 51.570312 L 43.839844 51.253906 C 45.972656 51.253906 46.933594 50.507812 46.71875 49.019531 L 46.71875 4.328125 L 49.921875 1.773438 L 53.441406 2.09375 C 55.574219 2.09375 56.640625 2.945312 56.640625 4.644531 L 56.640625 74.875 C 56.640625 76.578125 55.785156 77.855469 54.078125 78.707031 L 38.078125 87.003906 L 36.480469 88.601562 L 35.839844 93.707031 L 44.480469 213.734375 C 44.265625 217.566406 42.667969 220.652344 39.679688 222.992188 C 36.691406 225.546875 32.960938 226.824219 28.480469 226.824219 C 24.214844 226.609375 20.585938 225.332031 17.601562 222.992188 C 14.398438 220.4375 12.90625 217.457031 13.121094 214.054688 C 12.90625 211.289062 15.574219 171.171875 21.121094 93.707031 L 19.839844 88.601562 L 18.558594 86.6875 L 2.558594 79.023438 C 0.851562 77.746094 0 76.46875 0 75.195312 L 0.320312 4.644531 C 0.105469 2.730469 1.066406 1.773438 3.199219 1.773438 L 7.039062 1.773438 C 9.171875 1.773438 10.132812 2.730469 9.921875 4.644531 L 9.921875 48.699219 L 13.121094 51.253906 L 20.480469 51.570312 C 22.613281 51.570312 23.679688 50.71875 23.679688 49.019531 L 23.679688 4.328125 C 23.679688 2.625 24.640625 1.878906 26.558594 2.09375 L 30.398438 2.09375 M 105.28125 137.761719 C 105.28125 146.273438 107.199219 171.386719 111.039062 213.097656 C 111.039062 216.5 109.546875 219.480469 106.558594 222.035156 C 103.574219 224.589844 99.945312 225.863281 95.679688 225.863281 C 91.199219 225.863281 87.464844 224.589844 84.480469 222.035156 C 81.707031 219.695312 80.105469 216.714844 79.679688 213.097656 L 82.878906 182.453125 C 84.800781 158.617188 85.761719 132.972656 85.761719 105.519531 C 85.761719 62.53125 83.839844 27.417969 80 0.175781 C 93.441406 4.007812 103.464844 9.433594 110.078125 16.457031 C 122.027344 29.011719 128 48.699219 128 75.511719 C 128 95.941406 126.078125 110.414062 122.238281 118.925781 C 119.894531 124.035156 114.238281 130.3125 105.28125 137.761719 "></path></g></svg>',    'water': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="128pt" height="173pt" viewBox="0 0 128 173" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 63.863281 0 L 95.914062 41.359375 C 117.28125 71.992188 127.964844 94.609375 127.964844 109.207031 C 127.964844 126.867188 121.71875 141.914062 109.222656 154.347656 C 96.730469 166.78125 81.609375 173 63.863281 173 C 46.300781 173 31.269531 166.78125 18.777344 154.347656 C 6.28125 141.914062 0.0351562 126.867188 0.0351562 109.207031 C 0.0351562 94.609375 10.71875 71.992188 32.085938 41.359375 C 42.585938 26.21875 53.179688 12.433594 63.863281 0 M 56.53125 30.273438 L 56.800781 28.382812 L 54.628906 28.921875 C 47.386719 37.394531 39.417969 49.105469 30.726562 64.0625 C 19.320312 83.886719 13.613281 98.753906 13.613281 108.664062 C 13.613281 130.832031 24.296875 147.050781 45.664062 157.320312 C 50.011719 159.484375 53.996094 158.492188 57.617188 154.347656 C 61.238281 150.203125 61.328125 147.050781 57.886719 144.886719 C 49.921875 141.101562 43.402344 136.148438 38.332031 130.019531 C 32.898438 123.351562 30.183594 116.234375 30.183594 108.664062 C 30.183594 101.097656 32.992188 89.113281 38.605469 72.714844 C 43.855469 57.214844 49.832031 43.070312 56.53125 30.273438 "></path></g></svg>',
    'electricity': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="128pt" height="230pt" viewBox="0 0 128 230" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 109.265625 2.214844 C 110.320312 0.738281 111.589844 0.527344 113.066406 1.582031 C 114.332031 2.847656 114.542969 4.113281 113.699219 5.378906 L 73.179688 99.023438 L 125.410156 98.074219 L 127.941406 99.65625 L 127.625 102.820312 L 19.050781 227.785156 C 17.996094 229.261719 16.726562 229.472656 15.25 228.417969 C 13.773438 227.363281 13.5625 226.097656 14.617188 224.621094 L 53.238281 132.558594 L 2.589844 132.558594 L 0.0585938 130.976562 L 0.375 127.8125 L 109.265625 2.214844 "></path></g></svg>',
    'defense': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="128pt" height="135pt" viewBox="0 0 128 135" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 63.789062 15.398438 L 16.285156 15.398438 C 16.285156 28.757812 17.550781 41.0625 20.085938 52.3125 L 63.789062 52.3125 L 63.789062 15.398438 M 126.707031 29.109375 C 125.300781 51.328125 120.796875 69.398438 113.195312 83.320312 C 104.75 98.929688 94.050781 112.21875 81.101562 123.1875 L 64.210938 135 C 59.425781 132.75 53.796875 128.8125 47.320312 123.1875 C 34.230469 112.21875 23.460938 98.929688 15.015625 83.320312 C 7.273438 69.398438 2.699219 51.328125 1.292969 29.109375 C 0.449219 18 0.449219 8.296875 1.292969 0 L 126.707031 0 C 127.550781 8.296875 127.550781 18 126.707031 29.109375 M 99.683594 75.9375 C 103.058594 69.75 105.875 62.015625 108.128906 52.734375 L 64.210938 52.734375 L 64.210938 116.859375 C 78.851562 106.03125 90.671875 92.390625 99.683594 75.9375 "></path></g></svg>',
    'beds': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="128pt" height="89pt" viewBox="0 0 128 89" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 47.960938 22.027344 C 47.960938 25.675781 46.679688 28.730469 44.117188 31.195312 C 41.554688 33.757812 38.449219 35.039062 34.800781 35.039062 C 31.15625 35.039062 28.097656 33.757812 25.636719 31.195312 C 23.074219 28.730469 21.792969 25.675781 21.792969 22.027344 C 21.792969 18.382812 23.074219 15.277344 25.636719 12.714844 C 28.097656 10.152344 31.15625 8.871094 34.800781 8.871094 C 38.449219 8.871094 41.554688 10.152344 44.117188 12.714844 C 46.679688 15.277344 47.960938 18.382812 47.960938 22.027344 M 73.683594 19.664062 C 85.707031 19.664062 95.910156 21.4375 104.285156 24.984375 L 104.285156 53.371094 L 22.53125 53.371094 L 22.53125 45.535156 C 23.515625 43.269531 25.144531 40.753906 27.410156 37.996094 C 29.773438 39.078125 32.238281 39.621094 34.800781 39.621094 C 39.53125 39.621094 43.574219 37.996094 46.925781 34.742188 C 50.375 31.390625 52.199219 27.398438 52.394531 22.765625 C 58.898438 20.699219 65.996094 19.664062 73.683594 19.664062 M 127.054688 88.113281 L 124.984375 89 L 113.304688 89 C 112.515625 89 111.828125 88.703125 111.234375 88.113281 C 110.644531 87.523438 110.347656 86.832031 110.347656 86.042969 L 110.347656 76.582031 L 17.503906 76.582031 L 17.503906 86.042969 L 16.765625 88.113281 L 14.546875 89 L 3.015625 89 C 2.226562 89 1.539062 88.703125 0.945312 88.113281 C 0.355469 87.523438 0.0585938 86.832031 0.0585938 86.042969 L 0.0585938 2.957031 C 0.0585938 0.984375 1.042969 0 3.015625 0 L 14.546875 0 C 16.519531 0 17.503906 0.984375 17.503906 2.957031 L 17.503906 58.988281 L 110.347656 58.988281 L 110.347656 27.941406 C 110.347656 27.152344 110.644531 26.464844 111.234375 25.871094 C 111.828125 25.28125 112.515625 24.984375 113.304688 24.984375 L 124.984375 24.984375 C 125.773438 24.984375 126.460938 25.28125 127.054688 25.871094 L 127.941406 27.941406 L 127.941406 86.042969 L 127.054688 88.113281 "></path></g></svg>'
};

export function ResourceRow(settlement, settlers, clickHandler) {
    console.log('building resource table', settlement, settlers, clickHandler);
    
    if ( !settlers ) {
        settlers = [];
    }
    
    let tr = document.createElement('tr');
    tr.elecNeeded = 0;

    if ( clickHandler ) {
        let td = document.createElement('td');
        td.className = 'stlData';
        td.innerHTML = settlement.name;
        td.addEventListener('click', () => {
            clickHandler(settlement, settlers);
        });
        tr.appendChild(td);
    }

    resourceTypes.forEach( (type) => {
        let td = document.createElement('td');
        td.className = 'stlData ' + type;
        td.innerHTML = resourceSVG[type] + '<span>0</span>';
        
        if ( type === 'population' ) {
            let settPop = settlers.filter(function(settler) {
                return settler.sid === settlement.id;
            }).length;
            td.innerHTML = resourceSVG[type] + '<span>' + (settPop || 0) + '</span>';
        } else {
            if ( settlement.resources && settlement.resources[type] ) {
    
                Object.entries(settlement.resources[type]).forEach( (r) => {
                    let amount = (resourceList[type][r[0]][0] || resourceList[type][r[0]]) * r[1];
                    td.querySelector('span').innerHTML = Number(td.querySelector('span').innerHTML) + amount;
                    
                    tr.elecNeeded += (resourceList[type][r[0]][1] || 0) * r[1];
                });
            } else {
                td.querySelector('span').innerHTML = 0;
            }
        }
        tr.appendChild(td);
    });
    
    console.log('table built, performing quality check');
    Object.values(tr.querySelectorAll('.stlData')).forEach(function(item) {
        let type = item.className.split(' ')[1];
        if ( type) {
            if( type === 'electricity' ) {
                if ( Number(item.querySelector('span').innerHTML) < tr.elecNeeded ) {
                    item.className += ' poor';
                }
            } else if ( type === 'beds' ) {
                console.log('bed check goes here');
            } else {
                if ( Number(item.querySelector('span').innerHTML) < settlers.length ) {
                    item.className += ' poor';
                }
            }
        }
    });
     
    return tr;
}

export function addSettlement(character,cb) {
    console.log('adding new Settlement',character,cb);
    
    let settList = document.createElement('ul');
    let settF = this.settlements.filter( (s) => {
        let available = true;
        character.settlements.forEach(function(sd) {
            if ( sd.name === s ) { available = false; }
        });
        return available;
    });
    settF.sort();

    settF.forEach( (name) => {
        let item = document.createElement('li');
        item.innerHTML = name;
        
        item.addEventListener('click', (e) => {
            
            console.log(this);
            
            let settlement = {
                name: e.target.innerHTML,
                cid: character.id,
                id: Date.now()
            };
            character.settlements.push(settlement);
            
            localStorage.setItem('os_character_' + character.id, JSON.stringify(character));
            cb(character);
            document.querySelector('.modal').remove();
        });
        
        settList.appendChild(item);
    });
    
    return settList;
}

export function removeSettlement(settlement,character,cb) {
    if ( confirm('This will remove all settler and resource data') ) {
        character.settlements = character.settlements.filter( s => s.id !== settlement.id );
        character.settlers = character.settlers.filter(function(settler) {
            return settler.sid !== settlement.id;
        });
        
        localStorage.setItem('os_character_' + character.id, JSON.stringify(character));
        cb(character);        
    }
}

export function settlementList(title) {
    let sl = document.createElement('div');
    sl.className = 'settlementList open';
    sl.innerHTML = '<div class="sListHeader"><h3>' + title + '</h3></div><ul></ul>';
    
    sl.querySelector('h3').addEventListener('click', function(e) {
        let list = e.target.parentElement.parentElement;
        if ( list.className.indexOf('open') > 0 ) {
            list.className = 'settlementList';
        } else {
            list.className = 'settlementList open';
        }
    });
    
    return sl;
}

export function settlementListItem(item) {
    let li = document.createElement('li');
    li.innerHTML = '<div class="sListItemHeader"><h6>' + item.name + '</h6></div>';
    
    return li;
}

export function addSettler(settlementID,character,cb) {
    console.log('adding new settler', character.settlers);
    let settler = {};
    settler.id = Date.now();
    settler.cid = character.id;
    settler.sid = settlementID;
    settler.name = prompt('Settler name:');
    
    character.settlers.push(settler);
    localStorage.setItem('os_character_' + character.id, JSON.stringify(character));
 
    let settlement = Object.values(character.settlements).filter( s => s.id === settlementID )[0];

    cb(settlement, character.settlers);
}

export function removeSettler(settler,settlementID,character,cb) {
    console.log('removing settler');
    character.settlers = character.settlers.filter(function(s) {
        return s.id !== settler.id;
    });
    
    localStorage.setItem('os_character_' + character.id, JSON.stringify(character));
    let settDisplay = Object.values(character.settlements).filter(function(s) {
        return s.id === settlementID;
    })[0];
    cb(settDisplay,character.settlers);
}

export function addResource(settlementID,character,cb,modal) {
    console.log('adding new resource');
        
    // resource chooser
    let resourceChooser = document.createElement('div');
    resourceChooser.id = 'resourceChooser';
        
    let typeOption = document.createElement('div');
    typeOption.id = 'os_resource_types';
    typeOption.className = 'os_resource_chooser';
    typeOption.innerHTML = '<h3>Choose Type:</h3><div class="os_resource_buttons"></div>';
    resourceChooser.appendChild(typeOption);        
        
    let resOptions = document.createElement('div');
    resOptions.id = 'os_resource_options';
    resOptions.className = 'os_resource_chooser';
    resOptions.innerHTML = '<h3>Choose Resource(s):</h3><div class="os_resource_buttons"></div>';
    resourceChooser.appendChild(resOptions);

    resourceTypes.forEach(function(type) {
        if ( type !== 'population' && type !== 'beds' ) {
            let typeButton = document.createElement('button');
            typeButton.value = type;
            typeButton.innerHTML = type;
            typeOption.querySelector('.os_resource_buttons').appendChild(typeButton);                

            typeButton.addEventListener('click', function(e) {
                typeOption.querySelectorAll('.os_resource_buttons button').forEach(function(button) {
                    button.className = '';
                });
                e.target.className = 'clicked';
                
                resOptions.querySelector('.os_resource_buttons').innerHTML = '';
                Object.keys(resourceList[type]).forEach(function(res) {
                    let resButton = document.createElement('button');
                    resButton.value = res;
                    resButton.innerHTML = res;
                    resOptions.querySelector('.os_resource_buttons').appendChild(resButton);
                    
                    resButton.addEventListener('click', function(e) {
                        if ( e.target.className === 'clicked' ) {
                            e.target.className = '';
                        } else {
                            e.target.className = 'clicked';
                        }
                    });
                });
            });
        }
    });
        
    let okButton = document.createElement('div');
    okButton.id = 'os_resource_ok';
    okButton.innerHTML = '<button>OK</button>';
    resourceChooser.appendChild(okButton);
        
    okButton.addEventListener('click', () => {
        console.log('resources chosen');
        let rType = resourceChooser.querySelector('#os_resource_types .clicked').value;
        let rOptions = Object.values(resourceChooser.querySelectorAll('#os_resource_options .clicked')).map( (r) => r.value );
        console.log(rType,rOptions);
        
        // increment resources to the settlement object or add new ones
        let settlement = Object.values(character.settlements).filter(function(s) {
            return s.id === settlementID;
        })[0];
        console.log('incrementing resources',settlement);
        
        let resourcesAll = settlement.resources || {};
        let rTypeAll = resourcesAll[rType] || {};
    
        rOptions.forEach(function(option) {
            if ( rTypeAll[option] ) {
                rTypeAll[option]++;
            } else {
                rTypeAll[option] = 1;
            }
        });
        resourcesAll[rType] = rTypeAll;

        settlement.resources = resourcesAll;

        character.settlements = Object.values(character.settlements).filter(function(s) {
            return s.id !== settlementID;
        });
        character.settlements.push(settlement);
        
        localStorage.setItem('os_character_' + character.id, JSON.stringify(character));
        
        cb(settlement, character.settlers);
        document.querySelector('.modal').remove();
    });
        
        
    let resModal = modal('', resourceChooser);
    document.querySelector('body').appendChild(resModal);
}

export function loadResources(resources, fullList) {
    console.log('loading resources', resources);
    resourceTypes.forEach(function(type) {
        if ( resources[type] ) {
                
            let resourcelist = document.createElement('li');
            resourcelist.className = 'os_resource_list ' + type;
            resourcelist.innerHTML = `<h5><span>${type}</span><span class="quantities"><span>${resourceSVG[type]}</span><span>${resourceSVG.electricity}</span></span></h5><ul></ul>`;
                
                Object.entries(resources[type]).forEach(function(resource) {
                    let resLi = document.createElement('li');
                    resLi.className = 'os_resource ' + resource[0].replace(/ /g,'_');
                    resLi.innerHTML = `<div><div>${resource[0]} (${resource[1]})</div><div class="addrem"><span>+</span><span>-</span></div></div><div class="quantities"><span>${(resourceList[type][resource[0]][0] || resourceList[type][resource[0]]) * resource[1]}</span><span>${(resourceList[type][resource[0]][1] * resource[1]) || ''}</span></div>`;
                    resourcelist.querySelector('ul').appendChild(resLi);
                });

                fullList.querySelector('#os_Resources > ul').appendChild(resourcelist);
            }
        });
    }
