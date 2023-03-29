import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList'

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id : 1 ,
            name : "Pop Chill",
            image : "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/2/3/5/d235f31632e8bd44dbc2b49ff4db2351.jpg"
        },
        {
            id : 2 ,
            name : "Ngay lenh denh",
            image : "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/1/2/8/4128331703314f9031d83f40bb5c64cd.jpg"
        },
        {
            id : 3 ,
            name : "K-Indie",
            image : "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/3/b/8/d3b82e42da01b742539023f03f174fcf.jpg"
        }
    ]
    return (
        <div>
            <h2>Some genre of music</h2>
            <AlbumList albumList={albumList}></AlbumList>
        </div>
    );
}

export default AlbumFeature;