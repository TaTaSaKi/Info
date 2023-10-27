import self from "../img/self.png"
import mock11 from "../img/mock11.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Vanny Ratanak",
    lastName: "CHHEANG",
    initials: "🏡", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Network & Systems Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🧋',
            text: 'Fueled by milk tea'
        },
        {
            emoji: '🌎',
            text: 'Based in Cambodia'
        },
        {
            emoji: "💼",
            text: "Network and Systems Engineer at ITC"
        },
        {
            emoji: "📧",
            text: "vannyratanakchheang@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/ratanakchheangvanny",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/tata_saki/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/vannyratanak",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/TaTaSaKi",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Ratanak. I'm a former network & systems engineer at Institute of Technology of Cambodia.",
    education: "I earned a Master's degree in Computer Science from Institute of Technology of Cambodia and, currently pursuing a Master of Science in Informatics at Grenoble.",
    hob: "I enjoy learning new technologies and playing games. You should hire me!",
    skills:
        {
            proficientWith: ['Python', 'Javascript', 'Java','C/C++', 'HTML', 'CSS', 'PHP', 'SQL'],
            exposedTo: ['React-Native', 'React.js', 'Nodejs', 'Laravel', 'Moodle', 'Hyperledger Fabric'],
            devOp: ['Cloud Management','Proxmox', 'CentOS', 'Ubuntu', 'Kubernetes', 'Docker', 'OpenStack', 'Proxy','Nginx','Apache'],
            network: ['Network administration', 'Network construction', 'CISCO', 'FortiGate', 'MikroTik', 'Security', 'Wireless', 'Routing', 'Switching', 'Data Backups']
        }
    ,
    hobbies: [
        {
            label: 'Traveling',
            emoji: '✈️'
        },
        {
            label: 'Gaming',
            emoji: '🎮'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Sleeping',
            emoji: '😴'
        }
    ]
}