import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

export type TagType =
  | 'featured'
  | 'assistant'
  | 'art'
  | 'writing'
  | 'video'
  | 'voice'
  | 'gaming'
  | 'marketing'
  | 'search'
  | 'crypto'
  | 'others';

const Tools: Tool[] = [
  {
    id: 1,
    title: "Link Whisper",
    description: 'Internal Linking Tool to Speed Up the Process of Internal Linking for SEO and Help You Rank Better in Google',
    image: require('./images/marketing/link-whisper.png'),
    website: 'https://linkwhisper.com/',
    price: 77,
    tags: ['marketing'],
  },
  {
    id: 2,
    title: "Mangools",
    description: 'All-in-one SEO toolset for finding backlinks, increasing the ranking and authority of your website',
    image: require('./images/marketing/mangools.png'),
    website: 'https://mangools.com/',
    price: 29,
    tags: ['marketing'],
  },
  {
    id: 3,
    title: "Page Optimizer Pro",
    description: 'On page SEO tool that helps web marketers produce perfectly optimized pages for Google with ease',
    image: require('./images/marketing/pageoptimizer.png'),
    website: 'https://pageoptimizer.pro/',
    price: 49,
    tags: ['marketing'],
  },
  {
    id: 4,
    title: "Rank Math",
    description: 'The most powerful way to get BEST WordPress SEO tools added to your website',
    image: require('./images/marketing/rank-math.png'),
    website: 'https://rankmath.com/',
    price: 59,
    tags: ['marketing'],
  },
  {
    id: 5,
    title: "Rank Ranger",
    description: 'All-in-One Professional SEO Software that helps to drive organic growth with unique insights, competitor analysis, and unparalleled progress monitoring',
    image: require('./images/marketing/rank-ranger.png'),
    website: 'https://www.rankranger.com/',
    price: 79,
    tags: ['marketing'],
  },
  {
    id: 6,
    title: 'Semrush',
    description:
    '50+ tools on SEO, content marketing, competitor research, PPC and social media marketing to help you attract and grow your audience online faster',
    image: require('./images/marketing/semrush.png'),
    website: 'https://www.semrush.com',
    price: 119,
    tags: ['marketing'],
  },
  {
    id: 7,
    title: "Screaming Frog",
    description: 'Website crawler that helps you improve onsite SEO by auditing for common SEO issues',
    image: require('./images/marketing/screaming-frog.png'),
    website: 'https://www.screamingfrog.co.uk',
    price: 199,
    tags: ['marketing'],
  },
  {
    id: 8,
    title: 'Shine Ranker',
    description: 'SEO site audit and keyword research tool that can help rank your website on Google and make money from it',
    image: require('./images/marketing/shine-ranker.png'),
    website: 'https://shineranker.com/',
    price: 75,
    tags: ['marketing'],
  },
  {
    id: 9,
    title: 'Squirrly',
    description: 'SEO tools and educational materials that help to get customers with AI Digital Assistants',
    image: require('./images/marketing/squirrly.png'),
    website: 'https://www.squirrly.co/',
    price: 20,
    tags: ['marketing'],
  },
  {
    id: 10,
    title: "Surfer",
    description: 'All-in-one SEO tool that helps to write articles that read well and rank high',
    image: require('./images/marketing/surfer.png'),
    website: 'https://surferseo.com/',
    price: 49,
    tags: ['marketing', 'writing', 'featured'],
  },
  {
    id: 11,
    title: "Web 2.0 Ranker",
    description: 'Private-Labeled wholesale SEO for agencies that scales Web ranking with predictable outcomes',
    image: require('./images/marketing/web20-ranker.png'),
    website: 'https://web20ranker.com/',
    price: 97,
    tags: ['marketing'],
  },
  {
    id: 12,
    title: "Chat GPT",
    description: 'AI chatbot built by OpenAI that interacts in a conversational way',
    image: require('./images/assistant/chat-gpt.png'),
    website: 'https://chat.openai.com/chat/',
    price: 0,
    tags: ['assistant', 'writing', 'featured'],
  },
  {
    id: 13,
    title: "ChatSonic",
    description: 'Conversational AI chatbot that addresses the limitations of ChatGPT',
    image: require('./images/assistant/chatsonic.png'),
    website: 'https://writesonic.com/chat',
    price: 0,
    tags: ['assistant', 'writing', 'art'],
  },
  {
    id: 14,
    title: "Personal",
    description: 'Built-in Personal AI messaging for an everlasting connection with the people and ideas in your world',
    image: require('./images/assistant/personal.png'),
    website: 'https://www.personal.ai/',
    price: 40,
    tags: ['assistant'],
  },
  {
    id: 15,
    title: "Perplexity",
    description: 'AI-powered search engine and q&a tool',
    image: require('./images/search/perplexity.png'),
    website: 'https://www.perplexity.ai/',
    price: 0,
    tags: ['search'],
  },
  {
    id: 16,
    title: "You",
    description: 'AI search engine',
    image: require('./images/assistant/you.png'),
    website: 'https://you.com/',
    price: 0,
    tags: ['assistant', 'search', 'writing'],
  },
  {
    id: 17,
    title: "Jasper",
    description: 'AI content generator that helps you and your team break through creative blocks to create amazing, original content 10X faster',
    image: require('./images/writing/jasper.png'),
    website: 'https://www.jasper.ai/',
    price: 49,
    tags: ['writing', 'art', 'featured', 'marketing'],
  },
  {
    id: 18,
    title: "ArticleForge",
    description: 'AI content writer that delivers unique, SEO optimized, high-quality 1,500+ word articles about any topic with a single click',
    image: require('./images/writing/article-forge.png'),
    website: 'https://www.articleforge.com/',
    price: 13,
    tags: ['writing', 'marketing'],
  },
  {
    id: 19,
    title: "WordAi",
    description: 'AI content writer that provides high quality rewriting that is indistinguishable from human content',
    image: require('./images/writing/word-ai.png'),
    website: 'https://wordai.com/',
    price: 27,
    tags: ['writing', 'marketing'],
  },
  {
    id: 20,
    title: "INK For All",
    description: 'All-in-one AI content platform that helps to create SEO-optimized text and visuals 10X faster & easier with built-in protection against plagiarism',
    image: require('./images/writing/ink.png'),
    website: 'https://inkforall.com/',
    price: 39,
    tags: ['writing', 'marketing'],
  },
  {
    id: 21,
    title: "Outranking",
    description: 'AI platform that leverages data and research to help you ace SEO content',
    image: require('./images/writing/outranking.png'),
    website: 'https://www.outranking.io/',
    price: 49,
    tags: ['writing', 'marketing'],
  },
  {
    id: 22,
    title: "Rytr",
    description: 'AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost',
    image: require('./images/writing/rytr.png'),
    website: 'https://rytr.me/',
    price: 0,
    tags: ['writing', 'marketing'],
  },
  {
    id: 23,
    title: "AI-writer",
    description: 'The most accurate content generation platform, using state-of-the-art AI writing models to generate articles from just a headline',
    image: require('./images/writing/ai-writer.png'),
    website: 'https://ai-writer.com/',
    price: 29,
    tags: ['writing', 'marketing'],
  },
  {
    id: 24,
    title: "Kafkai",
    description: 'AI writer assistant that helps you create unique SEO-friendly articles for cents instead of dollars',
    image: require('./images/writing/kafkai.png'),
    website: 'https://kafkai.com/',
    price: 29,
    tags: ['writing', 'marketing'],
  },
  {
    id: 26,
    title: "Writesonic",
    description: 'AI writer that creates SEO-optimized and plagiarism-free content for your blogs, ads, emails, and website 10X faster',
    image: require('./images/writing/writesonic.png'),
    website: 'https://writesonic.com/',
    price: 13,
    tags: ['writing', 'marketing'],
  },
  {
    id: 27,
    title: "MarketMuse",
    description: 'AI marketing tool that automates content audits and gives personalized insights for creating the best SEO content strategy',
    image: require('./images/writing/marketmuse.png'),
    website: 'https://www.marketmuse.com/',
    price: 0,
    tags: ['writing', 'marketing'],
  },
  {
    id: 28,
    title: "ParagraphAI",
    description: 'AI writing assistant for students, CEOs, and everyone in between',
    image: require('./images/writing/paragraph-ai.png'),
    website: 'https://paragraphai.com/',
    price: 10,
    tags: ['writing', 'marketing'],
  },
  {
    id: 29,
    title: "Pictory",
    description: 'A complete AI-powered video marketing toolkit that helps to create short-form videos, high-conversion Video Sales Letters, etc.',
    image: require('./images/video/pictory.png'),
    website: 'https://pictory.ai/',
    price: 19,
    tags: ['video', 'marketing'],
  },
  {
    id: 30,
    title: "Magic Write",
    description: 'AI text generator provided by Canva that helps to get out a first draft, fast',
    image: require('./images/writing/magic-write.png'),
    website: 'https://www.canva.com/magic-write/',
    price: 0,
    tags: ['writing'],
  },
  {
    id: 31,
    title: "InVideo",
    description: 'Video creation tool with 5000+ ready-made templates and AI based Text-to-Video editor',
    image: require('./images/video/invideo.png'),
    website: 'https://invideo.io/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 32,
    title: "Synthesia",
    description: 'AI video creation platform for creating professional videos from plain text in 120 languages',
    image: require('./images/video/synthesia.png'),
    website: 'https://www.synthesia.io/',
    price: 30,
    tags: ['video', 'featured'],
  },
  {
    id: 33,
    title: "Specterr",
    description: 'Video creation tool that turns your music into killer video with custom music visualizers',
    image: require('./images/video/specterr.png'),
    website: 'https://specterr.com/',
    price: 0,
    tags: ['video', 'voice'],
  },
  {
    id: 34,
    title: "Phenaki",
    description: 'AI video creation platform for generating videos from text',
    image: require('./images/video/phenaki.png'),
    website: 'https://phenaki.video/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 35,
    title: "Fliki",
    description: 'AI video creation platform that create videos from scripts or blog posts using realistic AI voices in 2 minutes',
    image: require('./images/video/fliki.png'),
    website: 'https://fliki.ai/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 36,
    title: "Opus",
    description: 'AI tool that generates video games from text',
    image: require('./images/gaming/opus.png'),
    website: 'https://opus.ai/',
    price: 0,
    tags: ['video', 'gaming'],
  },
  {
    id: 37,
    title: "Every Anyone",
    description: 'AI tool that creates hyperreal synthetic avatars of yourself',
    image: require('./images/art/every-anyone.png'),
    website: 'https://everyany.one/auth/signup/ub1wlbq32',
    price: 0,
    tags: ['art'],
  },
  {
    id: 38,
    title: "Metaphysic Studios",
    description: 'AI content generation studio that creates impossible video featuring photorealistic synthetic humans',
    image: require('./images/video/metaphysic.png'),
    website: 'https://metaphysic.ai/studios/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 39,
    title: "Hour One",
    description: 'AI tool that turns text into videos featuring virtual human presenters',
    image: require('./images/video/hour-one.png'),
    website: 'https://hourone.ai/',
    price: 30,
    tags: ['video'],
  },
  {
    id: 40,
    title: "D-id",
    description: 'AI tool that creates customized videos featuring talking avatars at a touch of a button',
    image: require('./images/video/d-id.png'),
    website: 'https://www.d-id.com/',
    price: 6,
    tags: ['video'],
  },
  {
    id: 41,
    title: "Runway",
    description: 'The next-generation content creation suite with 30+ AI magic tools, real-time video editing, collaboration, and more',
    image: require('./images/video/runway.png'),
    website: 'https://runwayml.com/',
    price: 6,
    tags: ['video', 'art'],
  },
  {
    id: 42,
    title: "Unscreen",
    description: 'AI tool that removes video background automatically, without a single click',
    image: require('./images/video/unscreen.png'),
    website: 'https://www.unscreen.com/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 43,
    title: "Syllaby",
    description: 'AI tool that shows how to create a content strategy for social media in minutes',
    image: require('./images/writing/syllaby.png'),
    website: 'https://www.syllaby.io/',
    price: 49,
    tags: ['writing', 'marketing'],
  },
  {
    id: 44,
    title: "Prime Voice AI",
    description: 'The most realistic and versatile AI speech software that brings compelling, rich and lifelike voices to creators and publishers seeking the ultimate tools for storytelling',
    image: require('./images/voice/prime-voice-ai.png'),
    website: 'https://beta.elevenlabs.io/',
    price: 0,
    tags: ['voice'],
  },
  {
    id: 45,
    title: "Copy AI",
    description: 'AI content generator that helps to write higher converting posts and blogs 10x faster',
    image: require('./images/writing/copy-ai.png'),
    website: 'https://www.copy.ai/',
    price: 0,
    tags: ['writing', 'marketing'],
  },
  {
    id: 46,
    title: "Midjourney",
    description: 'Independent AI art generator that turns text-based prompts into images',
    image: require('./images/art/midjourney.png'),
    website: 'https://www.midjourney.com/',
    price: 0,
    tags: ['art', 'featured'],
  },
  {
    id: 47,
    title: "Lexica",
    description: 'The Stable Diffusion search engine and AI art generator',
    image: require('./images/art/lexica.png'),
    website: 'https://lexica.art/',
    price: 0,
    tags: ['art', 'search'],
  },
  {
    id: 48,
    title: "Vrew",
    description: 'AI-powered subtitle generation',
    image: require('./images/video/vrew.png'),
    website: 'https://vrew.voyagerx.com/en/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 49,
    title: "Descript",
    description: 'All-in-one video editing',
    image: require('./images/video/descript.png'),
    website: 'https://www.descript.com/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 50,
    title: "Nova",
    description: 'Online video editing software that helps to cut, trim, collide, traslate your clips, add subtitles, and more',
    image: require('./images/video/nova.png'),
    website: 'https://wearenova.ai/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 51,
    title: "Adobe Podcast",
    description: 'AI tool that makes voice recordings sound as if they were recorded in a professional studio',
    image: require('./images/voice/adobe-podcast.png'),
    website: 'https://podcast.adobe.com/enhance',
    price: 0,
    tags: ['voice'],
  },
  {
    id: 52,
    title: "Make a video",
    description: 'State-of-the-art AI system that generates videos from text',
    image: require('./images/video/make-a-video.png'),
    website: 'https://makeavideo.studio/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 52,
    title: "DALL·E 2",
    description: 'AI system that can create realistic images and art from a description in natural language',
    image: require('./images/art/dalle-2.png'),
    website: 'https://openai.com/dall-e-2/',
    price: 0,
    tags: ['art'],
  },
  {
    id: 53,
    title: "Lyric Studio",
    description: 'Songwriting inspiration engine that helps you write songs from start to finish',
    image: require('./images/writing/lyricstudio.png'),
    website: 'https://lyricstudio.net/',
    price: 6,
    tags: ['writing'],
  },
  {
    id: 54,
    title: "Jukebox",
    description: 'A neural net that generates music, including rudimentary singing, as raw audio in a variety of genres and artist styles',
    image: require('./images/voice/jukebox.png'),
    website: 'https://openai.com/blog/jukebox/',
    price: 0,
    tags: ['voice'],
  },
  {
    id: 55,
    title: "Aiva",
    description: 'A neural net that generates music, including rudimentary singing, as raw audio in a variety of genres and artist styles',
    image: require('./images/voice/aiva.png'),
    website: 'https://www.aiva.ai/',
    price: 0,
    tags: ['voice'],
  },
  {
    id: 55,
    title: "Boomy",
    description: 'AI tool that makes original songs in seconds',
    image: require('./images/voice/boomy.png'),
    website: 'https://boomy.com/',
    price: 0,
    tags: ['voice'],
  },
  {
    id: 56,
    title: "Notion AI",
    description: 'AI assitant powered by Notion for generation of any type of content faster',
    image: require('./images/writing/notion-ai.png'),
    website: 'https://www.notion.so/product/ai',
    price: 0,
    tags: ['writing'],
  },
  {
    id: 57,
    title: "ACT-1",
    description: 'AI assitant built by Adept that executes high-level user requests automatically',
    image: require('./images/assistant/act-1.png'),
    website: 'https://www.adept.ai/act',
    price: 0,
    tags: ['assistant'],
  },
  {
    id: 58,
    title: "Grammarly",
    description: 'AI-powered writing assistant for composing bold, clear, mistake-free writing',
    image: require('./images/writing/grammarly.png'),
    website: 'https://www.grammarly.com/',
    price: 0,
    tags: ['writing'],
  },
  {
    id: 59,
    title: "Supermeme",
    description: 'AI-powered tool that turns text into original memes in 110+ languages',
    image: require('./images/art/supermeme.png'),
    website: 'https://www.supermeme.ai/',
    price: 10,
    tags: ['art'],
  },
  {
    id: 60,
    title: "Replika",
    description: 'An AI companion who cares and is ready to chat when you need an empathetic friend',
    image: require('./images/assistant/replika.png'),
    website: 'https://replika.ai/',
    price: 0,
    tags: ['assistant'],
  },
  {
    id: 61,
    title: "Artflow",
    description: 'AI tool that lets you create your own, unique Animated Stories with original characters using assets generated with AI',
    image: require('./images/video/artflow.png'),
    website: 'https://artflow.ai/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 62,
    title: "Gradescope",
    description: 'AI assistant that helps you seamlessly administer and grade all of your assessments, whether online or in-class',
    image: require('./images/assistant/gradescope.png'),
    website: 'https://www.gradescope.com/',
    price: 0,
    tags: ['assistant', 'others'],
  },
];

export type Tool = {
  id: number;
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
        'our favorite AI tools that you must absolutely check out!',
      id: 'item.tag.featured.description',
    }),
    color: '#E52800',
  },

  assistant: {
    label: translate({message: 'AI Assistant'}),
    description: translate({
      message: 'assistants powered by ai',
      id: 'item.tag.assistant.description',
    }),
    color: '#1163C0',
  },

  search: {
    label: translate({message: 'AI Search'}),
    description: translate({
      message: 'search tools powered by ai',
      id: 'item.tag.search.description',
    }),
    color: '#7EA4B0',
  },

  art: {
    label: translate({message: 'AI Art'}),
    description: translate({
      message: 'art tools powered by ai',
      id: 'item.tag.art.description',
    }),
    color: '#EAB51B',
  },

  writing: {
    label: translate({message: 'AI Writing'}),
    description: translate({
      message: 'writing tools powered by ai',
      id: 'item.tag.text.description',
    }),
    color: '#505984',
  },

  video: {
    label: translate({message: 'AI Video'}),
    description: translate({
      message:
        'video tools powered by ai',
      id: 'item.tag.video.description',
    }),
    color: '#29C7DD',
  },

  voice: {
    label: translate({message: 'AI Voice'}),
    description: translate({
      message:
        'audio tools powered by ai',
      id: 'item.tag.voice.description',
    }),
    color: '#9B6F9B',
  },

  marketing: {
    label: translate({message: 'AI Marketing'}),
    description: translate({
      message: 'marketing tools powered by ai',
      id: 'item.tag.marketing.description',
    }),
    color: '#93756C',
  },
  gaming: {
    label: translate({message: 'AI Gaming'}),
    description: translate({
      message: 'gaming tools powered by ai',
      id: 'item.tag.gaming.description',
    }),
    color: '#CD8ACA',
  },

  crypto: {
    label: translate({message: 'AI Crypto'}),
    description: translate({
      message: 'crypto tools powered by ai',
      id: 'item.tag.crypto.description',
    }),
    color: '#81D536',
  },

  others: {
    label: translate({message: 'Others'}),
    description: translate({
      message: 'other tools powered by ai',
      id: 'item.tag.others.description',
    }),
    color: '#CDD9D4',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortTools() {
  let result = Tools;
  // sort by tool name
  result = sortBy(result, (tool) => tool.title.toLowerCase());
  // sort by price
  result = sortBy(result, (tool) => tool.price);
  // sort by favorite tag, favorite first
  result = sortBy(result, (tool) => !tool.tags.includes('featured'));
  return result;
}

export const sortedTools = sortTools();
