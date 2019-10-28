import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';

class Home extends React.Component {    
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    object_name: "Window",
                    title: "Winged Ones",
                    artist: "Joanne Leonard",
                    year: 1987,
                    filename: "Domestic/WingedOnes.jpg",
                    analysis: "We see a child, gazing longingly into nature outside the window.  This piece agrees with the school of thought that states that a child's place is in nature, and that the domestic only holds a child back from that natural expression.  This is reminiscent of the story of Alice in Wonderland, where Alice's body modifications cause her to literally outgrow the white rabbit's home.",
                },
                {
                    object_name: "Birdcage",
                    title: "Birds at Home",
                    artist: "Julie Blackmon",
                    year: 2007,
                    filename: "Domestic/Birds_at_home.jpg",
                    analysis: "We see 5 children, sitting around a dinning room table with distant looks in their eyes.  These children are the titular \" birds \", which we can draw a connection to given that there are 5 children and 5 broken eggs around them.  This artist draws inspiration from Peter Pan by J.M. Barrie, in which all children were birds originally.  In Peter Pan, this serves to separate children from adults as a completely different species within nature, and only given time in the domestic do the children become humans and then adults.  This portrait also suposes that a child's natural need is to be within nature, given that all of the children in this portrait seem bored and distracted.  Rather than the home being a safe haven, these children are trapped by the domestic and it chafes against their wild nature." ,
                },
                {
                    object_name: "Photograph",
                    title: "Child Run Over",
                    artist: "Käthe Kollwitz",
                    year: 1910,
                    filename: "Domestic/Child_Run_over.jpg",
                    analysis: "This image shows a child being carried by two adults, one clearly weeping, while a crowd gathers around them.  The child is the focal point of this image, since the child is in all white in contrast to the darker figures around it.  This image seems to disagree with the idea of an independant child in nature, but rather subscribe to the idea that a child belongs at the center of a community and family.  Notice how distraught the female figure carrying the child is, showing that the child is central to her life and the life of this community.  This is similar to the idea presented in \"A Christmas Carol \", where Dickens presents Belle's life as complete with a child at the center, compared to Scooge's lonely life as an adult.",
                }
            ]
        }
    }

    render() {
        // first item
        const first_item = this.state.items[0];
        return (
            <div className="home">
                {this.state.items.map((item) => {
                    console.log(item); // eslint-disable-line no-console
                    return (<Item object_name={item.object_name} title={item.title} 
                        artist={item.artist} year={item.year} filename={item.filename} 
                        analysis={item.analysis} />);
                })}
            </div>
        );
    }
}

Home.PropTypes = {

}

export default Home;