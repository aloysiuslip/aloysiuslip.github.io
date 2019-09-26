import bot_thumbnail from '../assets/thumbnails/bot.png';
import djs_thumbnail from '../assets/thumbnails/djs.png';
import react_thumbnail from '../assets/thumbnails/reactjs.png';
import oxhack_thumbnail from '../assets/thumbnails/oh.png';
import hackmit_thumbnail from '../assets/thumbnails/hackmit.png';
import lichess_thumbnail from '../assets/thumbnails/lichess.png';
import ecf_thumbnail from '../assets/thumbnails/ecf.png';

const thumbs = {
	bot: {
		alt: 'bot_thumbnail',
		uri: null,
		src: bot_thumbnail
	},
	discordjs: {
		alt: 'discord.js',
		uri: 'https://discord.js.org/',
		src: djs_thumbnail
	},
	reactjs: {
		alt: 'react.js',
		uri: 'https://reactjs.org',
		src: react_thumbnail
	},
	oxfordhack: {
		alt: 'OxfordHack 2018',
		uri: 'https://oxford-hack.devpost.com/submissions',
		src: oxhack_thumbnail,
		style: {
			filter: 'invert(1.0) hue-rotate(180deg)'
		}
	},
	hackmit: {
		alt: 'HackMIT 2019',
		uri: 'https://hackmit.org/',
		src: hackmit_thumbnail
	},
	lichess: {
		alt: 'Lichess.org',
		uri: 'https://lichess.org/api',
		src: lichess_thumbnail
	},
	ecf: {
		alt: 'English Chess Federation',
		uri: 'http://ecfgrading.org.uk/new/menu.php',
		src: ecf_thumbnail,
		style: {
			filter: 'invert(1.0) hue-rotate(180deg)'
		}
	}
}

export default thumbs;