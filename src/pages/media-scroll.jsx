import './index.css';
import { Component } from 'react';
import AppBar from '../components/app-navbar/app-navbar';

const mediaNavigation = [
    { name: "Home", href: "/", current: false },
    { name: "About", href: "/about", current: false },
    { name: "Projects", href: "/projects", current: false },
    { name: "MediaScroll", href: "/media", current: true, new: true },
  ];

class MediaScroll extends Component {

    render() {
        return (
            <>
                <AppBar navigation={mediaNavigation} />     
            </>
        );
    } 

}


export default MediaScroll;