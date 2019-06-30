const modal = function(title,content) {
    let modal = document.createElement('div');
    modal.className = 'modal';
    
    let mTitle = document.createElement('h3');
    mTitle.innerHTML = title;

    let mContent = document.createElement('div');
    mContent.className = 'mContent';
    mContent.appendChild(mTitle);
    mContent.appendChild(content);

    modal.appendChild(mContent);
    
    return modal;
}

export default modal;

    //const songcontainer = function(sc_data,year) {
    //    this.name = sc_data.name;
    //    this.sName = sc_data.name.toLowerCase().replace(/the /,'').replace(/ /g,'_').replace(/\./g,'');
    //    this.song = function() {
    //        if ( sc_data[year].song ) { return '<h3>' + sc_data[year].song + '</h3>'; }
    //        else { return ''; }
    //    };
    //    this.bCast = Object.keys(sc_data[year].bCast);
    //    this.songOrder = function() {
    //        if ( sc_data[year].bCast[voting.broadcast] ) {
    //            var vb = sc_data[year].bCast[voting.broadcast];
    //            if ( vb < 10 ) {
    //                vb = '0' + vb.toString();
    //            }
    //            return '<div class="songOrder">' + vb + '</div>';
    //        }
    //        else { return ''; }
    //    };
    //    this.language = function() {
    //        if ( sc_data[year].language ) { return '<p class="language">(Sung in ' + sc_data[year].language + ')</p>'; }
    //        else { return ''; }
    //    };
    //    this.artist = function() {
    //        if ( sc_data[year].artist ) { return '<h4><span>Performed by</span> ' + sc_data[year].artist + '</h4>'; }
    //        else { return ''; }
    //    };
    //    
    //    this.sc = function() {
    //        return (
    //            `<div id