import * as Settlement from './Settlement.js';

export default class Overseer {
    loadCharacter(character) {
        console.log('loading Character', character);
        this.character = character;
        this.character.lastActive = Date.now();
        localStorage.setItem('os_character_' + character.id, JSON.stringify(this.character));
        
        let osPanel = this.osPanel();
        osPanel.id = 'os_Character';
        osPanel.querySelector('h1').innerHTML = character.name;
        
        osPanel.querySelector('nav ul').innerHTML = '<li><button id="cNav_switch" class="cNav_button">Switch Character</button></li><li><button id="cNav_add" class="cNav_button">Add Character</button></li><li><button id="cNav_remove" class="cNav_button">Remove Character</button></li>';

        let actions = osPanel.getElementsByClassName('cNav_button');
        for ( let i = 0; i < actions.length; i++ ) {
            actions[i].addEventListener('click', (e) => {
                let action = e.target.id.split('_')[1];
                if ( action === 'switch' ) { this.switchCharacter(); }
                if ( action === 'add' ) { this.addCharacter(false); }
                if ( action === 'remove' ) { this.removeCharacter(); }
            });
        }
        
        console.log('loading settlements', this.character.settlements);        
        let osHeader = osPanel.querySelector('header');
        osHeader.id = 'os_Character_Header';

        let panelContent = osPanel.querySelector('.os_Panel_Content');
        panelContent.innerHTML = '';
        
        if ( this.character.settlements && this.character.settlements.length > 0 ) {
            this.character.settlements.sort(function(a,b) {
                let va = a.name, vb = b.name;
                if ( va > vb ) { return 1; }
                if ( va < vb ) { return -1; }
                return 0;
            });

            let pcTable = document.createElement('table');
            let pcTableHeader = document.createElement('tr');
            pcTableHeader.innerHTML = '<td class="stlData">&nbsp;</td>';
            Object.values(Settlement.resourceSVG).forEach(function(type) {
                let td = document.createElement('td');
                td.className = 'stlData';
                td.innerHTML = type;
                pcTableHeader.appendChild(td);
            });
            pcTable.appendChild(pcTableHeader);
            
            this.character.settlements.forEach( (settlement) => {
                console.warn('- ' + settlement.name );
                let population = this.character.settlers.filter( s => s.sid === settlement.id );
                pcTable.appendChild( Settlement.ResourceRow(settlement, population, this.loadSettlement.bind(this)) );
            });
            panelContent.appendChild(pcTable);
        } else {
            panelContent.innerHTML = '<h2>Settlement data not found</h2>';
        }
        
        // add a new settlement for this character
        let addButton = document.createElement('div');
        addButton.id = 'os_addSettlement';
        addButton.innerHTML = '<button>+ Add New</button>';
        
        addButton.addEventListener('click', () => {
            let settModal = this.modal('Choose a settlement:', Settlement.addSettlement(this.character,this.loadCharacter.bind(this)));
            document.querySelector('body').appendChild(settModal);
        });
        panelContent.appendChild(addButton);
        // add a new settlement for this character

        console.warn('building character resource table');
        let tr = document.createElement('tr');
        Settlement.resourceTypes.forEach((type) => {
            console.log('getting stats for', type);
            
            let td = document.createElement('td');
            td.className = 'stlData ' + type;
            td.innerHTML = Settlement.resourceSVG[type] + '<span>0</span>';
        
            let amount = 0;
            osPanel.querySelectorAll('.' + type + ' span').forEach(function(q) {
                amount += Number(q.innerHTML);
            });

            td.querySelector('span').innerHTML = amount;
            tr.appendChild(td);
        });
        
        console.log('table built, performing quality check');
        tr.elecNeeded = Object.values(osPanel.querySelectorAll('#os_Character .os_Panel_Content table tr')).reduce(function (acc, curr) {
            if ( curr.elecNeeded !== undefined ) {
                return acc += curr.elecNeeded;
            } else {
                return acc;
            }
        }, 0);
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
                    if ( Number(item.querySelector('span').innerHTML) < character.settlers.length ) {
                        item.className += ' poor';
                    }
                }
            }
        });
        
        osHeader.querySelector('table').appendChild(tr);
        
        document.getElementById('overseer').innerHTML = '';
        document.getElementById('overseer').appendChild(osPanel);
    }

    addCharacter(firstrun) {
        console.log('adding Character');
        let character = {};
        character.id = Date.now();
        character.lastActive = Date.now();
        character.settlers = [];
        character.settlements = [];
        
        let modalContent = document.createElement('div');
        modalContent.className = 'addCharacter';
        
        if ( firstrun ) {
            firstrun = document.createElement('div');
            firstrun.class = 'firstrun';
            firstrun.innerHTML = 'Previous character data not found.';
            modalContent.appendChild(firstrun);
        }
        
        let cName = document.createElement('input');
        cName.type = 'text';
        
        let cButton = document.createElement('button');
        cButton.innerHTML = 'OK';
        cButton.addEventListener('click', (e) => {
            let cName = e.target.previousElementSibling.value;
            if ( cName && cName !== '' ) {
                character.name = cName;
                this.loadCharacter(character);
                document.querySelector('.modal').remove();
            }
        });

        modalContent.appendChild(cName);
        modalContent.appendChild(cButton);
        
        document.querySelector('body').appendChild(this.modal('Enter a character name:',modalContent));
    }
    
    switchCharacter() {
        console.log('switching Character');
        let allChar = Object.entries(localStorage).filter(function(item) {
            
                return item[0].indexOf('os_character_') === 0;
            
        }).map(function(character) {
            return JSON.parse(character[1]);
        });
        allChar.sort(function (a,b) {
            let vA = a.name.toLowerCase(), vB = b.name.toLowerCase();
            if ( vA > vB ) { return 1; }
            if ( vA < vB ) { return -1; }
            return 0;
        });

        let characterList = document.createElement('ul');
        Object.values(allChar).forEach(function(character) {
            let cLi = document.createElement('li');
            let cLiBut = document.createElement('button');
            cLiBut.className = 'choose_character';
            cLiBut.innerHTML = character.name;
            cLiBut.osData = character;
            
            cLi.appendChild(cLiBut);
            characterList.appendChild(cLi);
        });

        let buttons = characterList.querySelectorAll('.choose_character');
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                this.loadCharacter(e.target.osData);
                document.getElementsByClassName('modal')[0].remove();                
            });  
        });
        
        let charModal = this.modal('Choose a character:', characterList);
        document.querySelector('body').appendChild(charModal);
    }
    
    removeCharacter() {
        let orly = confirm('All settlement and settler data will be removed');
        if ( orly ) {
            console.log('removing character', this);
            localStorage.removeItem('os_character_' + this.character.id);
    
            this.character = false;
            let activitycheck = new Date(0);
            Object.entries(localStorage).forEach( (stored) => {
                if ( stored[0].indexOf('os_character') === 0 ) {
                    var current = JSON.parse(stored[1]);
                    if ( current.lastActive > activitycheck ) {
                        activitycheck = current.lastActive;
                        this.character = current;
                        this.character.lastActive = Date.now();
                        this.loadCharacter(this.character);
                    }
                }
            });
            
            if ( this.character ) {
                this.loadCharacter(this.character);
            } else {
                alert('All characters have been removed\n\nyou will be prompted to enter a new one');
                this.addCharacter();
            }
        }
    }
    
    modal(title,content) {
        let m = document.createElement('div');
        m.className = 'modal';
        
        let mTitle = document.createElement('h3');
        mTitle.innerHTML = title;
    
        let mContent = document.createElement('div');
        mContent.className = 'mContent';
        mContent.appendChild(mTitle);
        mContent.appendChild(content);
    
        m.appendChild(mContent);
        
        return m;
    }

    osPanel() {
        let op = document.createElement('div');
        op.className = 'os_Panel';
        op.innerHTML = '<h1></h1><nav><ul></ul></nav><header><table></table></header><div class="os_Panel_Content"></div>';
        return op;
    }
    
    loadSettlement(settlement, settlers) {
        console.log('loading settlement',settlement, settlers);

        let sPanel = document.getElementById('os_Settlement') || this.osPanel();
        sPanel.id = 'os_Settlement';
        
        sPanel.querySelector('h1').innerHTML = settlement.name;
        
        sPanel.querySelector('nav ul').innerHTML = '<li><button id="sNav_goback" class="sNav_button">&raquo;Go Back</button></li><li><button id="sNav_remove" class="sNav_button">Remove Settlement</button></li>';

        let actions = sPanel.querySelectorAll('.sNav_button');
        actions.forEach( (action) => {
            action.addEventListener('click', (e) => {
                let a = e.target.id.split('_')[1];
                if ( a === 'goback' ) { this.loadCharacter(this.character); }
                if ( a === 'remove' ) { Settlement.removeSettlement(settlement,this.character,this.loadCharacter.bind(this)); }
            });
        });

        let header = sPanel.querySelector('header');
        header.id = 'os_Settlement_Header';
        header.querySelector('table').innerHTML = '';
        header.querySelector('table').appendChild(new Settlement.ResourceRow(settlement, settlers));
        
        let panelContent = sPanel.querySelector('.os_Panel_Content');
        panelContent.innerHTML = '';
        
        // settler data        
        console.log('loading settlers', this.character.settlers);
        let settlerList = Settlement.settlementList('Settlers');
        settlerList.id = 'os_Settlers';
        
        let addSButton = document.createElement('div');
        addSButton.className = 'os_addNew';
        addSButton.innerHTML = '<button>+ Add New</button>';
        addSButton.addEventListener('click', () => {
            Settlement.addSettler(settlement.id, this.character, this.loadSettlement.bind(this));
        });
        settlerList.querySelector('.sListHeader').appendChild(addSButton);

        this.character.settlers.forEach( (settler) => {
            if ( settler.sid === settlement.id) {
                let s = Settlement.settlementListItem(settler);
                let remS = document.createElement('button');
                remS.innerHTML = 'x';
                remS.addEventListener('click', () => {
                    Settlement.removeSettler(settler, settlement.id, this.character, this.loadSettlement.bind(this));
                });
                
                s.querySelector('.sListItemHeader').appendChild(remS);
                
                console.warn('check here for settler attributes', settler.name);
                
                settlerList.querySelector('ul').appendChild(s);
            }
        });

        panelContent.appendChild(settlerList);
        
        // resource data
        console.warn('loading resources');
        let resourceList = Settlement.settlementList('Resources');
        resourceList.id = 'os_Resources';
        
        let addRButton = document.createElement('div');
        addRButton.className = 'os_addNew';
        addRButton.innerHTML = '<button>+ Add New</button>';
        addRButton.addEventListener('click', () => {
            Settlement.addResource(settlement.id,
                                   this.character,
                                   this.loadSettlement.bind(this),
                                   this.modal.bind(this));
        });
        resourceList.querySelector('.sListHeader').appendChild(addRButton);

        panelContent.appendChild(resourceList);
        
        if ( settlement.resources ) {
            Settlement.loadResources(settlement.resources, resourceList);
            resourceList.querySelectorAll('.addrem span').forEach( (button) => {
                button.addEventListener('click', (e) => {
                    let type = e.target.closest('.os_resource_list').className.split(' ')[1];
                    let name = e.target.closest('.os_resource').className.split(' ')[1].replace(/_/g,' ');
                    let addrem = e.target.innerHTML;

                    if ( addrem === '+' ) {
                        settlement.resources[type][name]++;
                    }
                    if ( addrem === '-') {
                        if ( settlement.resources[type][name] > 1 ) {
                            settlement.resources[type][name]--;
                        } else {
                            delete settlement.resources[type][name];
                        }
                        if ( Object.entries(settlement.resources[type]).length === 0 ) {
                            delete settlement.resources[type];
                        }
                    }

                    let character = JSON.parse(localStorage.getItem('os_character_' + settlement.cid));
                                               
                    let settlements = character.settlements.filter( (s) => {
                        return s.id !== settlement.id;
                    });

                    settlements.push(settlement);
                    localStorage.setItem('os_character_' + settlement.cid, JSON.stringify(character));
                    this.loadSettlement(settlement, settlers);
                });
            });
        }

        document.getElementById('overseer').appendChild(sPanel);    

}
}