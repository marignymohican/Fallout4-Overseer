// happiness mechanics
// food >= population = 20 :)
// water >= population = 20 :)
// bed >= population = 10 :)
// defense >= population = 20 :)
// bed.roofed = 10 :)

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
        
        //let stlImg = document.createElement('img');
        //stlImg.src = 'img/' + cat + '.png';
        //stlImg.alt = cat;
        //stlData.appendChild(stlImg);
        
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

function add(cid) {
    console.log('adding new settlement for ' + cid);
    let stlName = prompt('Settlement name:');
    
    if ( stlName && stlName !== '' ) {
        let stlNew = {};
        stlNew.name = stlName;
        stlNew.cid = cid;
        stlNew.id = Date.now();
        stlCats.forEach(function(i) {
            stlNew[i] = 0;
        });
        
        let stlData = JSON.parse(localStorage.getItem('osData_Settlements'));
        stlData.push(stlNew);
        localStorage.setItem('osData_Settlements', JSON.stringify(stlData));
        
        list(cid);
        
        displaySettlement(stlNew);
    }
}

function displaySettlement(settlement) {
    console.log('displaying info for ' + settlement.name);
    // settlementDisplay
    let sd = document.getElementById('settlementDisplay');
    sd.querySelector('h2').innerHTML = settlement.name;
    sd.querySelector('h2').id = settlement.id;
    
    let population = settlement.population;
    sd.querySelectorAll('.stlData div').forEach(function(count) {
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
    
    document.getElementById('sd_settlers').innerHTML = "this is where we should put some settler datat";
}

function editSettlement() {
    document.getElementById('sd_edit').innerHTML = 'Save';
    document.getElementById('sd_edit').removeEventListener('click', editSettlement);
    document.getElementById('sd_edit').addEventListener('click', saveSettlement);
    
    let sd = document.getElementById('settlementDisplay');
    let field = () => {
        let f = document.createElement('input');
        f.type = 'text';
        return f;
    };
    
    let sName = sd.querySelector('h2');
    let h2 = field();
    h2.value = sName.innerHTML;
    sName.innerHTML = '';
    sName.appendChild(h2);
    
    sd.querySelectorAll('.stlData div').forEach(function (counter) {
        let cat = field();
        cat.value = counter.innerHTML;
        counter.innerHTML = '';
        counter.appendChild(cat);
    });
}

function saveSettlement() {
    document.getElementById('sd_edit').innerHTML = 'Edit';
    document.getElementById('sd_edit').removeEventListener('click', saveSettlement);
    document.getElementById('sd_edit').addEventListener('click', editSettlement);
    
    let sid = Number(document.querySelector('#settlementDisplay h2').id);
    let settlements = JSON.parse(localStorage.getItem('osData_Settlements'));
    settlements.forEach(function(settlement) {
        if (settlement.id === sid ) {
            let settD = document.querySelector('#settlementDisplay');
            
            settlement.name = settD.querySelector('h2 input').value;
            
            settD.querySelectorAll('.stlData').forEach(function(sData) {
                let cat = sData.className.split(' ')[1].replace(/stl_/,'');
                console.log(cat);
                settlement[cat] = sData.querySelector('input').value;
            });
            localStorage.setItem('osData_Settlements', JSON.stringify(settlements));
            
            list(settlement.cid);
            displaySettlement(settlement);
        }
    });
    
}

function init(cid) {
    console.log('preparing settlement data');
    
    document.getElementById('sd_back').addEventListener('click', function() {
        document.getElementById('settlementDisplay').className = 'closed';
    });
    document.getElementById('sd_edit').addEventListener('click', editSettlement);
    document.getElementById('sd_del').addEventListener('click', function(e) {
        if ( confirm('This settlement will be removed') ) {
            //e.target.parentElement.children[0].id
            let settlements = JSON.parse(localStorage.getItem('osData_Settlements'));
            let newStl = Object.values(settlements).filter(function(stl) {
                return stl.id !== Number(e.target.parentElement.children[0].id);
            });
            localStorage.setItem('osData_Settlements', JSON.stringify(newStl));
            list(cid);
            document.getElementById('settlementDisplay').className = 'closed';
        }
    });
    document.getElementById('stl_addNew').addEventListener('click', function() {
        add(cid);
    });
    
    if ( !localStorage.getItem('osData_Settlements') ) {
        console.log('no settlement data found');
        localStorage.setItem('osData_Settlements','[]');
        return;
    }
    
    list(cid);
}

export default init;