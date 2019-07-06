import Overseer from './Overseer.js';

if (storageAvailable('localStorage')) {
    console.log('retrieving the overseer\'s data');
    let os = new Overseer();
    
    // character already?
    let activitycheck = new Date(0);
    let character = false;
    
    Object.entries(localStorage).forEach(function(stored) {
        if ( stored[0].indexOf('os_character') === 0 ) {
            var current = JSON.parse(stored[1]);
            if ( current.lastActive > activitycheck ) {
                activitycheck = current.lastActive;
                character = current;
                character.lastActive = Date.now();
            }
        }
    });
    
    if ( character ) {
        console.log('character data found');
        os.loadCharacter(character);
    } else {
        console.log('character data not found');
        os.addCharacter(true, os.loadCharacter);
    }

} else {
    console.log('Storage is unavailable for some reason');
}

// -=-=- MISC
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