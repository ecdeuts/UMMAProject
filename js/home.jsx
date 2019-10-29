import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';

class Home extends React.Component {    
    constructor(props){
        super(props);
        this.state = {
            items: [
                
                {
                    object_name: "Birdcage",
                    title: "Birds at Home",
                    artist: "Julie Blackmon",
                    year: 2007,
                    filename: "Domestic/Birds_at_home.jpg",
                    analysis: "We see 5 children, sitting around a dinning room table with distant looks in their eyes.  These children are the titular \" birds \", which we can draw a connection to given that there are 5 children and 5 broken eggs around them.  This artist draws inspiration from Peter Pan by J.M. Barrie, in which all children were birds originally.  In Peter Pan, this serves to separate children from adults as a completely different species within nature, and only given time in the domestic do the children become humans and then adults.  This portrait also suposes that a child's natural need is to be within nature, given that all of the children in this portrait seem bored and distracted.  Rather than the home being a safe haven, these children are trapped by the domestic and it chafes against their wild nature." ,
                },
                {
                    object_name: "Window",
                    title: "Winged Ones",
                    artist: "Joanne Leonard",
                    year: 1987,
                    filename: "Domestic/WingedOnes.jpg",
                    analysis: "We see a child, gazing longingly into nature outside the window.  This piece agrees with the school of thought that states that a child's place is in nature, and that the domestic only holds a child back from that natural expression.  This is reminiscent of the story of Alice in Wonderland, where Alice's body modifications cause her to literally outgrow the white rabbit's home.",
                },
                {
                    object_name: "Photograph",
                    title: "Child Run Over",
                    artist: "Käthe Kollwitz",
                    year: 1910,
                    filename: "Domestic/Child_Run_over.jpg",
                    analysis: "This image shows a child being carried by two adults, one clearly weeping, while a crowd gathers around them.  The child is the focal point of this image, since the child is in all white in contrast to the darker figures around it.  This image seems to disagree with the idea of an independant child in nature, but rather subscribe to the idea that a child belongs at the center of a community and family.  Notice how distraught the female figure carrying the child is, showing that the child is central to her life and the life of this community.  This is similar to the idea presented in \"A Christmas Carol \", where Dickens presents Belle's life as complete with a child at the center, compared to Scooge's lonely life as an adult.",
                },
                {
                    object_name: "Book",
                    title: "School",
                    artist: "Blanch Ackers",
                    year: 1990,
                    filename: "Domestic/School.jpg",
                    analysis: "This image displays a contrast between structures children are forced to particpate in (school) and the structures children choose for themselves (play).  Despite the artist being an adult at the time of creation, the choice of crayon casts this image as the viewpoint of a child.  The children within the school are facing front, all focusing on what is ahead of them rather than those around them.  In comparsion, those on the playground are interacting and activly particpating in their enviorment.  The playground is an example of the \"walled garden\" that prominent philosopher Rosseau believed children should grow in.  This art agrees with this concept since the playground is much more intersting within the art, compared with those within the school."
                },

                {
                    object_name: "Carriage",
                    title: "Untitled (Child with Baby Carriage).jpg",
                    artist: "Bruce Davidson",
                    year: 1981,
                    filename: "Domestic/Untitled_(Child_With_Baby_Carriage).jpg",
                    analysis: "This piece of art depicts a child pushing a baby carriage with toys, with a home and factory behind him.  This art disagrees with the idea that children grow best in \"walled garden\" that Rosseau presented.  This child is at home in the domestic, living near a factory that contrasts with the nature.  This child is also choosing to play in a domestic role-they are pushing a baby carraige, which is associated with parenthood.  Despite the child not fitting neatly into the sterotypical look of a girl or boy, this child still plays in the more typically female domestic role.  This image positions all children, independant of gender, as having a place in the domestic and civilization.  This is at odds with Rousseau's ideal, masculine boy raised outside of society in a walled garden.",                
                },

                {
                    object_name: "Doll",
                    title: "Untitled (Child in Graveyard)",
                    artist: "Bruce Davidson",
                    year: 1981,
                    filename: "Domestic/Untitled(Child_in_Graveyard.jpg",
                    analysis: "This image depicts a young child playing near a gravestone.  This image supposes that the position of the child within society includes an understanding of death and the supernatural.  The child is not afraid to be in the graveyard, or carefully tiptoing around the gravestone.  The child is right near the graveyard, with a dreamy look upon her face.  This image presents an attitude about children's understanding of the dead that \"We Are Seven\" by Wordsworth presents.  The young girl in \"We Are Seven\" plays around her siblings' gravestones, comfortable with the spirtual separation between her world and the world of the dead.  The child depicted here presents a similar idea about the proximity of children to the spiritual, with this child also comfortable near a gravestone.",
                },
                {
                    object_name: "Plant",
                    title: "The Foundling",
                    artist: "Kay Denton",
                    year: 1998,
                    filename: "Nature/TheFoundling.jpg",
                    analysis: "This shows a child standing in a garden, face partially obscured by a plant.  This depeicts a child literally in a walled garden, demonstrating ideas about how a child belongs in nature similar to Rosseau's beliefs.  The naming of the piece also others this child, calling her a foundling, implying she was found in this nature, placing this child's place in nature wihtin the garden.  The child seems to be uncomfortable with being caught on camera, showing that she is comfortable on her own in nature, disagreeing with the idea that a child must be a part of a family.",
                },
                {
                    object_name:"Jar",
                    title: "Fireflies",
                    artist: "Keith Carter",
                    year: 1992,
                    filename: "Nature/Fireflies.jpg",
                    analysis: "This shows two children standing with a jar in a lake, framed by leaves.  The children are out of focus, while the leaves and lake are in focus.  This puts the focus on the enviorment surrounding the children, rather than  the children as individuals.  Given the enviorment, this appears to be agreeing with the idea that children fit best in nature.  It also seems to agree with ideas presented by the philosopher Blake.  Blake supposes that children are blank slates, and that they are shaped by their surrondings.  Since the children as individuals are out of focus, we project what they know and what their personalities are based on the surronding nature and enviorment, and from there assume that they feel comfortable within nature desipite not being able to see their expressions.  This piece agrees with the concept that a child's place and feelings are often taught and influenced by a child's enviorment."
                },
                {
                    object_name: "Closet",
                    title: "Untitled [Four children in costumes]",
                    artist: "Guy Krogh",
                    year: 1952,
                    filename: "Domestic/Untitled_4_children_in_Costume.jpg",
                    analysis: "Here we see four children entering through a door way, looking uneasy while in various costumes.  The costumes lend an otherworldy effect to the children.  The costumes have some aspects of nature, with the one child in the red ensemble holding a fish and the child in the helment with a fox stole arround their neck.  The children are not directly tied to nature beyond those items, but the costumes themselves are absurd and not tied to the social structures of the domestic society.  This separates the children from the domestic, expaining theeir uneasy expressions looking out into the closet.  This artwork supposes that a child is tied to the supernatural, through the costumes, and that this causes them to not fit into the domestic setting.  This is akin to the costume Max wears during \"Where The Wild Things Are\", where the costume ties Max to the world of the Wild Things and away from his domestic space.",
                },
                {
                    object_name: "Dollhouse",
                    title: "Untitled, Columbia, SC",
                    artist: "Baldwin Lee",
                    year: 1984,
                    filename: "Domestic/Untitled_Columbia_SC.jpg",
                    analysis: "This image depicts two children standing near each other, with two others playing together in the background in a neighborhood.  The two children in the foreground are standing close to each other, implying a possible sibiling relationship.  This image ties the child's place as one within a family and the domestic.  Although the photo was taken outside, the setting is still very much within a neighborhood and a domestic setting, and the two sibilings in the foreground remain close together.  The two siblings are looking straight at the camera, standing their ground.  This depicts the strength found in children through familial bonds, with the older sibling placing a protective arm around the younger sibling.  This is a similar sibling dynamic as that presented in \"Goblin Market\", where Lizzie puts herself at risk to save Laura from the temptations of the Goblin Market.  The two siblings in this image have found a similar protection in the familiy bonds, as well as protection in the domestic." ,
                }

            ]
        }
    }

    render() {
        return (
            <div className="home row">
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