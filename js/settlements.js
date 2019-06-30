// happiness mechanics
// food >= population = 20 :)
// water >= population = 20 :)
// bed >= population = 10 :)
// defense >= population = 20 :)
// bed.roofed = 10 :)

import modal from './modal.js';

let settlements = ["Abernathy farm","Boston Airport","Bunker Hill","The Castle","Coastal cottage","County Crossing","Covenant","Croup Manor","Egret Tours Marina","Finch Farm","Graygarden","Greentop Nursery","Hangman's Alley","Home Plate","Jamaica Plain","Kingsport Lighthouse","Murkwater construction","Nordhagen Beach","Oberland Station","Outpost Zimonja","Red Rocket Truck Stop","Sanctuary Hills","The Slog","Somerville Place","Spectacle Island","Starlight Drive-In","Sunshine Tidings Co-op","Taffington Boathouse","Tenpines Bluff","Warwick Homestead","The Mechanist's lair","Longfellow's cabin","Dalton farm","National Park Visitor's Center","Echo Lake Lumber","Vault 88","Nuka-World Red Rocket"];
let stlCats = ['population','beds','food','water','electricity','defense'];

let stlElement = function (stl) {
    let stlRow = document.createElement('div');
    stlRow.className = 'stlRow';
    
    let stlName = document.createElement('div');
    stlName.className = 'stlData';
    stlName.id = stl.id;
    stlName.innerHTML = stl.name;
    stlName.addEventListener('click', function() {
        displaySettlement(stl);
    });
    stlRow.appendChild(stlName);
    
    stlCats.forEach(function(cat) {
        let stlData = document.createElement('div');
        stlData.className = 'stlData stl_' + cat;

        let stlCount = document.createElement('div');
        stlCount.innerHTML = stl[cat];
        stlData.appendChild(stlCount);
        
        // check for needed resources
        if ( cat !== 'population' && cat !== 'electricity' ) {
            if ( stl[cat] < stl.population ) {
                stlData.className = stlData.className + ' poor';
            }
        }

        stlRow.appendChild(stlData);
    });
    
    return stlRow;
};

function list(cid) {
    console.log('listing settlements for #' + cid);
    document.getElementById('stlContent').innerHTML = '';    
    
    let settlements = Object.values(JSON.parse(localStorage.getItem('osData_Settlements'))).filter(function(settlement) {
        return settlement.cid === Number(cid);
    });

    settlements.sort(function (a,b) {
        var va = a.name, vb = b.name;
        if ( va > vb ) { return 1; }
        if ( va < vb ) { return -1; }
        return 0;
    });

    settlements.forEach(function(settlement) {
        let stl = new stlElement(settlement);
        document.getElementById('stlContent').appendChild(stl);
    });

    // populate the header row
    document.querySelectorAll('#stlHead .stlData').forEach(function(data) {
        let cat = data.className.split(' ')[1];
        let catValue = 0;
        
        if ( cat ) {
            document.querySelectorAll('#stlContent .'+ cat).forEach(function(v) {
                catValue = catValue + Number(v.querySelector('div').innerHTML);
            });
            
            let population = document.querySelector('#stlHead .stl_population div').innerHTML;
            let countDiv = data.querySelector('div');
            countDiv.innerHTML = catValue;

            if ( cat !== 'stl_electricity') {
                if ( population > countDiv.innerHTML ) {
                    data.className = data.className + ' poor';
                } else {
                    data.className = data.className.replace(/ poor/,'');
                }
            }
        }
    });
}

function addSettlement(cid) {
    console.log('adding new settlement for character id:' + cid);
    
    // get the current settlements for this character
    let settCurr = JSON.parse(localStorage.getItem('osData_Settlements'));
    console.log(Object.values(settCurr));
    
    // get a list of available settlements
    let settList = settlements.filter(function(s) {
        let available = true;
        settCurr.forEach(function(sc) {
            if ( sc.cid === cid && sc.name === s ) {
                available = false;
            }
        });
        return available;
    });
    settList.sort();
    
    console.log(settList);
    
    let chooser = document.createElement('div');
    chooser.className = 'modalChooser';
    
    let chDropper = document.createElement('ul');
    chDropper.id = 'selectSettler';
    settList.forEach((s) => {
        let chOption = document.createElement('li');
        chOption.innerHTML = s;
        
        chOption.addEventListener('click', function(e) {
            let stlNew = {};
            stlNew.name = e.target.innerHTML;
            stlNew.cid = cid;
            stlNew.id = Date.now();
            stlCats.forEach(function(i) {
                stlNew[i] = 0;
            });
            
            settCurr.push(stlNew);
            localStorage.setItem('osData_Settlements', JSON.stringify(settCurr));
            console.log('settlement data written');
            
            console.log(settModal);
            
            document.querySelector('.modal').className = 'modal closed';
            document.getElementsByClassName('modal')[0].remove();            
            list(cid); // rewrite the settlement list panel
            displaySettlement(stlNew); // display the newly added settlement
        });
        
        
        chDropper.appendChild(chOption);
    });
    chooser.appendChild(chDropper);

    let settModal = new modal('Choose a Settlement:', chooser);
    document.getElementById('overseer').appendChild(settModal);
}

function displaySettlement(settlement) {
    console.log('displaying info for ' + settlement.name);
    // settlementDisplay
    let sd = document.getElementById('settlementDisplay');
    sd.querySelector('h2').innerHTML = settlement.name;
    sd.querySelector('h2').id = settlement.id;
    
    let population = settlement.population;
    sd.querySelectorAll('.stlData .stl_value').forEach(function(count) {
        let cat = count.parentElement.className.split(' ')[1].replace(/stl_/,'');
        count.innerHTML = settlement[cat];
        
        if ( count.parentElement.className.indexOf('electricity') < 0 ) {
            if ( population > count.innerHTML ) {
                if ( count.parentElement.className.indexOf('poor') < 0 ) {
                    count.parentElement.className = count.parentElement.className + ' poor';
                }
            } else {
                count.parentElement.className = count.parentElement.className.replace(/ poor/,'');
            }
        }
    });
    
    sd.className = '';
    
    document.getElementById('settlements').className = 'closed';
    document.getElementById('settlementDisplay').className = '';
}

function updateSettlement(category, op) {
    let cid = Number(document.getElementsByClassName('characterName')[0].osData.replace(/osData_/,''));
    let sid = Number(document.querySelector('h2.settlementname').id);

    console.log(cid,sid);
    
    let settlements = JSON.parse(localStorage.getItem('osData_Settlements'));
    
    settlements.forEach(function(s) {
        console.log(s);
        if ( s.cid === cid && s.id === sid ) {
            console.log(op);
            if ( op === '+' ) {
                s[category]++;
            }
            if ( op === '-' ) {
                if ( s[category] !== 0 ) {
                    s[category]--;
                }
            }
            
            localStorage.setItem('osData_Settlements', JSON.stringify(settlements));
            list(cid);
            displaySettlement(s);
        }
    });
}

function init(cid) {
    console.log('preparing settlement data');
    
    // events to update individual settlement
    document.getElementById('sd_back').addEventListener('click', function() {
        document.getElementById('settlements').className = '';
        document.getElementById('settlementDisplay').className = 'closed';
    });
    document.getElementById('sd_del').addEventListener('click', function(e) {
        if ( confirm('This settlement will be removed') ) {
            //e.target.parentElement.children[0].id
            let settlements = JSON.parse(localStorage.getItem('osData_Settlements'));
            let newStl = Object.values(settlements).filter(function(stl) {
                return stl.id !== Number(e.target.parentElement.children[0].id);
            });
            localStorage.setItem('osData_Settlements', JSON.stringify(newStl));
            list(cid);
            
            document.getElementById('settlements').className = '';
            document.getElementById('settlementDisplay').className = 'closed';
        }
    });
    document.querySelectorAll('.stl_change > span').forEach(function(cButton) {
        cButton.addEventListener('click', function(e) {
            console.log(e.target.parentElement.parentElement.className.split(' ')[1].replace('stl_'));
            updateSettlement(
                         e.target.parentElement.parentElement.className.split(' ')[1].replace(/stl_/,''),
                         e.target.innerHTML);
        });
    });
    
    // events on settlement list
    document.getElementById('stl_addNew').addEventListener('click', function() {
        addSettlement(cid);
    });
    
    if ( !localStorage.getItem('osData_Settlements') ) {
        console.log('no settlement data found');
        localStorage.setItem('osData_Settlements','[]');
        return;
    }
    
    list(cid);
}

export default init;