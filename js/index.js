import * as settlements from './settlements.js';

if (storageAvailable('localStorage')) {
    console.log('retrieving the overseer\'s data');
    
    if ( Object.keys(localStorage).indexOf('osData_Characters') >= 0 ) {
        console.log('character data found');
        loadCharacter();            
    } else {
        console.log('data not found');
        addCharacter(true);
    }

    document.getElementById('cNav_addChar').addEventListener('click', function() {
        addCharacter();
    });
    document.getElementById('cNav_delChar').addEventListener('click', function() {
        delCharacter();
    });
    document.getElementById('cNav_chChar').addEventListener('click', function() {
        chCharacter();
    });
    
} else {
    console.log('Storage is unavailable for some reason');
}

function addCharacter(nodata) {
    console.log('adding new character');
    
    if ( nodata ) {
        localStorage.setItem('osData_Characters','[]');
    }

    let newC = {};
    newC.name = prompt('character name:');
    newC.id = Date.now();
    newC.lastactive = (new Date()).toString();

    let oC = JSON.parse(localStorage.getItem('osData_Characters'));
    oC.push(newC);
    console.log(oC);
    localStorage.setItem('osData_Characters',JSON.stringify(oC));
    
    console.log('character added');
    loadCharacter();
}

function delCharacter() {
    console.log('deleting character');
    
    let orly = confirm('This will remove the character, as well as all settlement and settler data');
    if ( orly ) {
        let cId = Number(document.getElementsByClassName('characterName')[0].osData.replace(/osData_/,''));
        let allChar = JSON.parse(localStorage.getItem('osData_Characters'));
        allChar = Object.values(allChar).filter( character => character.id != cId );
        
        localStorage.setItem('osData_Characters', JSON.stringify(allChar));
        if ( allChar.length > 0 ) {
            loadCharacter();
        } else {
            alert('All characters have been removed\n\nyou will be prompted to enter a new one');
            addCharacter();
        }
    }
}

function chCharacter() {
    console.log('preparing to switch charater');
    let allChar = JSON.parse(localStorage.getItem('osData_Characters'));
    allChar.sort(function (a,b) {
        let vA = a.name.toLowerCase(), vB = b.name.toLowerCase();
        if ( vA > vB ) { return 1; }
        if ( vA < vB ) { return -1; }
        return 0;
    });
    
    // we need a modal here
    let modal = document.createElement('div');
    modal.className = 'modal';
    
    let mContent = document.createElement('div');
    mContent.className = 'mContent';
    
    let mTitle = document.createElement('h3');
    mTitle.innerHTML = 'Choose a character:';
    
    mContent.appendChild(mTitle);
    
    let cList = document.createElement('ul');
    Object.values(allChar).forEach(function(i) {
        let cLi = document.createElement('li');
        let cLiBut = document.createElement('button');
        cLiBut.innerHTML = i.name;
        
        cLiBut.osData = i.id;
        cLiBut.addEventListener('click', function(e) {
            allChar.forEach(function(i) {
                if ( i.id === e.target.osData) {
                    i.lastactive = (new Date()).toString();
                    localStorage.setItem('osData_Characters', JSON.stringify(allChar));
                    modal.remove();
                    loadCharacter();
                }
            });
        });
        
        cLi.appendChild(cLiBut);
        cList.appendChild(cLi);
    });
    mContent.appendChild(cList);
    
    modal.appendChild(mContent);
    document.querySelector('body').appendChild(modal);
}

function loadCharacter() {
    console.log('loading character');
    let allChar = JSON.parse(localStorage.getItem('osData_Characters'));
    
    console.log('checking for latest activity');

    let lastAct = new Date(0);
    let currChar = {};
    Object.values(allChar).forEach(function(i) {
        let lAd = new Date(i.lastactive);

        if ( lAd > lastAct ) {
            lastAct = lAd;
            currChar = i;
        }
    });
    console.log('loading profile for ' + currChar.name);
    
    let charName = document.getElementsByClassName('characterName')[0];
    charName.osData = 'osData_' + currChar.id;
    charName.innerHTML = currChar.name;
    
    settlements.default(currChar.id);
}

// -=-=-=-=- MISC
function storageAvailable(type) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    var storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}