import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

export type TagType =
  | 'featured'
  | 'chatbots'
  | 'art'
  | 'text'
  | 'video'
  | 'audio'
  | 'marketing'
  | 'crypto'
  | 'others';

const Tools: Tool[] = [
  {
    title: "Link Whisper",
    description: 'Internal Linking Tool to Speed Up the Process of Internal Linking for SEO and Help You Rank Better in Google',
    image: require('./images/marketing/link-whisper.png'),
    website: 'https://linkwhisper.com/',
    price: 77,
    tags: ['marketing'],
  },
  {
    title: "Mangools",
    description: 'All-in-one SEO toolset for finding backlinks, increasing the ranking and authority of your website',
    image: require('./images/marketing/mangools.png'),
    website: 'https://mangools.com/',
    price: 29,
    tags: ['marketing'],
  },
  {
    title: "Page Optimizer Pro",
    description: 'On page SEO tool that helps web marketers produce perfectly optimized pages for Google with ease',
    image: require('./images/marketing/pageoptimizer.png'),
    website: 'https://pageoptimizer.pro/',
    price: 49,
    tags: ['marketing'],
  },
  {
    title: "Rank Math",
    description: 'The most powerful way to get BEST WordPress SEO tools added to your website',
    image: require('./images/marketing/rank-math.png'),
    website: 'https://rankmath.com/',
    price: 59,
    tags: ['marketing'],
  },
  {
    title: "Rank Ranger",
    description: 'All-in-One Professional SEO Software that helps to drive organic growth with unique insights, competitor analysis, and unparalleled progress monitoring',
    image: require('./images/marketing/rank-ranger.png'),
    website: 'https://www.rankranger.com/',
    price: 79,
    tags: ['marketing'],
  },
  {
    title: 'Semrush',
    description:
    '50+ tools on SEO, content marketing, competitor research, PPC and social media marketing to help you attract and grow your audience online faster',
    image: require('./images/marketing/semrush.png'),
    website: 'https://www.semrush.com',
    price: 119,
    tags: ['marketing'],
  },
  {
    title: "Screaming Frog",
    description: 'Website crawler that helps you improve onsite SEO by auditing for common SEO issues',
    image: require('./images/marketing/screaming-frog.png'),
    website: 'https://www.screamingfrog.co.uk',
    price: 199,
    tags: ['marketing'],
  },
  {
    title: 'Shine Ranker',
    description: 'SEO site audit and keyword research tool that can help rank your website on Google and make money from it',
    image: require('./images/marketing/shine-ranker.png'),
    website: 'https://shineranker.com/',
    price: 75,
    tags: ['marketing'],
  },
  {
    title: 'Squirrly',
    description: 'SEO tools and educational materials that help to get customers with AI Digital Assistants',
    image: require('./images/marketing/squirrly.png'),
    website: 'https://www.squirrly.co/',
    price: 20,
    tags: ['marketing'],
  },
  {
    title: "Web 2.0 Ranker",
    description: 'Private-Labeled wholesale SEO for agencies that scales Web ranking with predictable outcomes',
    image: require('./images/marketing/web20-ranker.png'),
    website: 'https://web20ranker.com/',
    price: 97,
    tags: ['marketing'],
  },
];

export type Tool = {
  title: string;
  description: string;
  image: string | null; // null = use our serverless screenshot service
  website: string;
  price: number | 0;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  featured: {
    label: translate({message: 'Featured'}),
    description: translate({
      message:
        'Our favorite Docusaurus sites that you must absolutely check out!',
      id: 'item.tag.featured.description',
    }),
    color: '#e9669e',
  },

  chatbots: {
    label: translate({message: 'AI Chatbots'}),
    description: translate({
      message: 'chatbots powered by ai',
      id: 'item.tag.chatbots.description',
    }),
    color: '#4267b2',
  },

  art: {
    label: translate({message: 'AI Art'}),
    description: translate({
      message: 'art tools powered by ai',
      id: 'item.tag.art.description',
    }),
    color: '#39ca30',
  },

  text: {
    label: translate({message: 'AI Text'}),
    description: translate({
      message: 'text tools powered by ai',
      id: 'item.tag.text.description',
    }),
    color: '#dfd545',
  },

  video: {
    label: translate({message: 'Video'}),
    description: translate({
      message:
        'video tools powered by ai',
      id: 'item.tag.video.description',
    }),
    color: '#a44fb7',
  },

  audio: {
    label: translate({message: 'AI Audio'}),
    description: translate({
      message:
        'audio tools powered by ai',
      id: 'item.tag.audio.description',
    }),
    color: '#8c2f00',
  },

  marketing: {
    label: translate({message: 'AI Marketing'}),
    description: translate({
      message: 'marketing tools powered by ai',
      id: 'item.tag.marketing.description',
    }),
    color: '#4267b2',
  },

  crypto: {
    label: translate({message: 'AI Crypto'}),
    description: translate({
      message: 'crypto tools powered by ai',
      id: 'item.tag.crypto.description',
    }),
    color: '#4267b2',
  },

  others: {
    label: translate({message: 'Others'}),
    description: translate({
      message: 'other tools powered by ai',
      id: 'item.tag.others.description',
    }),
    color: '#4267b2',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortTools() {
  let result = Tools;
  // sort by tool name
  result = sortBy(result, (tool) => tool.title.toLowerCase());
  // sort by favorite tag, favorite first
  result = sortBy(result, (tool) => !tool.tags.includes('featured'));
  return result;
}

export const sortedTools = sortTools();
