import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

export type TagType =
  | 'featured'
  | 'assistant'
  | 'art'
  | 'writing'
  | 'video'
  | 'voice'
  | 'marketing'
  | 'search'
  | 'coding'
  | 'crypto'
  | 'others';

const Tools: Tool[] = [
  {
    id: 1,
    title: "Link Whisper",
    description: 'Internal Linking Tool to Speed Up the Process of Internal Linking for SEO and Help You Rank Better in Google',
    image: './images/marketing/link-whisper.png',
    website: 'https://linkwhisper.com/ref/2071/',
    price: 77,
    tags: ['marketing'],
  },
  {
    id: 2,
    title: "Mangools",
    description: 'All-in-one SEO toolset for finding backlinks, increasing the ranking and authority of your website',
    image: './images/marketing/mangools.png',
    website: 'https://mangools.com#a63ee6ce96aee0804c503ccce',
    price: 29,
    tags: ['marketing'],
  },
  {
    id: 3,
    title: "Page Optimizer Pro",
    description: 'On page SEO tool that helps web marketers produce perfectly optimized pages for Google with ease',
    image: './images/marketing/pageoptimizer.png',
    website: 'https://pageoptimizer.pro/',
    price: 49,
    tags: ['marketing'],
  },
  {
    id: 4,
    title: "Rank Math",
    description: 'The most powerful way to get BEST WordPress SEO tools added to your website',
    image: './images/marketing/rank-math.png',
    website: 'https://rankmath.com/',
    price: 59,
    tags: ['marketing'],
  },
  {
    id: 5,
    title: "MDX Algo",
    description: 'Automated trading bot & systems that allow trading crypto more efficiently',
    image: './images/crypto/mdxalgo.png',
    website: 'https://mdxalgo.com/?ref=fgjYK',
    price: 70,
    tags: ['crypto'],
  },
  {
    id: 6,
    title: 'Semrush',
    description:
    '50+ tools on SEO, content marketing, competitor research, PPC and social media marketing to help you attract and grow your audience online faster',
    image: './images/marketing/semrush.png',
    website: 'https://www.semrush.com',
    price: 119,
    tags: ['marketing'],
  },
  {
    id: 7,
    title: "Verasity",
    description: 'Blockchain-based solution to end video ad-fraud',
    image: './images/crypto/verasity.png',
    website: 'https://verasity.io/',
    price: 0,
    tags: ['crypto'],
  },
  {
    id: 8,
    title: 'Shine Ranker',
    description: 'SEO site audit and keyword research tool that can help rank your website on Google and make money from it',
    image: './images/marketing/shine-ranker.png',
    website: 'https://shineranker.com/',
    price: 75,
    tags: ['marketing'],
  },
  {
    id: 9,
    title: 'Squirrly',
    description: 'SEO tools and educational materials that help to get customers with AI Digital Assistants',
    image: './images/marketing/squirrly.png',
    website: 'https://wpmails.com/1123.html',
    price: 20,
    tags: ['marketing'],
  },
  {
    id: 10,
    title: "Surfer",
    description: 'All-in-one SEO tool that helps to write articles that read well and rank high',
    image: './images/marketing/surfer.png',
    website: 'https://surferseo.com/',
    price: 49,
    tags: ['writing'],
  },
  {
    id: 11,
    title: "Web 2.0 Ranker",
    description: 'Private-Labeled wholesale SEO for agencies that scales Web ranking with predictable outcomes',
    image: './images/marketing/web20-ranker.png',
    website: 'https://web20ranker.com/',
    price: 97,
    tags: ['marketing'],
  },
  {
    id: 12,
    title: "Chat GPT",
    description: 'AI chatbot built by OpenAI that interacts in a conversational way',
    image: './images/assistant/chat-gpt.png',
    website: 'https://chat.openai.com/chat/',
    price: 0,
    tags: ['assistant', 'writing'],
  },
  {
    id: 13,
    title: "ChatSonic",
    description: 'Conversational AI chatbot that addresses the limitations of ChatGPT',
    image: './images/assistant/chatsonic.png',
    website: 'https://writesonic.com?via=deeintech',
    price: 0,
    tags: ['assistant', 'writing', 'art', 'featured'],
  },
  {
    id: 14,
    title: "PersonalAI",
    description: 'Built-in Personal AI messaging for an everlasting connection with the people and ideas in your world',
    image: './images/assistant/personal.png',
    website: 'https://www.personal.ai/',
    price: 40,
    tags: ['assistant'],
  },
  {
    id: 15,
    title: "Perplexity",
    description: 'AI-powered search engine and q&a tool',
    image: './images/search/perplexity.png',
    website: 'https://www.perplexity.ai/',
    price: 0,
    tags: ['search'],
  },
  {
    id: 16,
    title: "You",
    description: 'AI search engine',
    image: './images/assistant/you.png',
    website: 'https://you.com/',
    price: 0,
    tags: ['assistant', 'search', 'writing'],
  },
  {
    id: 17,
    title: "Jasper",
    description: 'AI content generator that helps you and your team break through creative blocks to create amazing, original content 10X faster',
    image: './images/writing/jasper.png',
    website: 'https://jasper.ai?utm_source=partner&fpr=deeintech',
    price: 49,
    tags: ['writing', 'art'],
  },
  {
    id: 18,
    title: "ArticleForge",
    description: 'AI content writer that delivers unique, SEO optimized, high-quality 1,500+ word articles about any topic with a single click',
    image: './images/writing/article-forge.png',
    website: 'https://www.articleforge.com/',
    price: 13,
    tags: ['writing'],
  },
  {
    id: 19,
    title: "WordAi",
    description: 'AI content writer that provides high quality rewriting that is indistinguishable from human content',
    image: './images/writing/word-ai.png',
    website: 'https://wordai.com/?ref=1ddc00',
    price: 27,
    tags: ['writing'],
  },
  {
    id: 20,
    title: "INK For All",
    description: 'All-in-one AI content platform that helps to create SEO-optimized text and visuals 10X faster & easier with built-in protection against plagiarism',
    image: './images/writing/ink.png',
    website: 'https://inkforall.com/',
    price: 39,
    tags: ['writing'],
  },
  {
    id: 21,
    title: "Outranking",
    description: 'AI platform that leverages data and research to help you ace SEO content',
    image: './images/writing/outranking.png',
    website: 'https://www.outranking.io/?via=deeintech',
    price: 49,
    tags: ['writing'],
  },
  {
    id: 22,
    title: "Rytr",
    description: 'AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost',
    image: './images/writing/rytr.png',
    website: 'https://rytr.me/?via=deeintech',
    price: 0,
    tags: ['writing'],
  },
  {
    id: 23,
    title: "Munch",
    description: 'AI tool that extracts the most engaging, trending and impactful clips from your long-form videos, using state of the art generative AI and marketing analytics',
    image: './images/video/munch.png',
    website: 'https://www.getmunch.com/?utm_campaign=influencers&utm_medium=website&utm_source=rewardful&via=deeintech',
    price: 49,
    tags: ['video'],
  },
  {
    id: 24,
    title: "Kafkai",
    description: 'AI writer assistant that helps you create unique SEO-friendly articles for cents instead of dollars',
    image: './images/writing/kafkai.png',
    website: 'https://kafkai.com/',
    price: 29,
    tags: ['writing'],
  },
  {
    id: 26,
    title: "Writesonic",
    description: 'AI writer that creates SEO-optimized and plagiarism-free content for your blogs, ads, emails, and website 10X faster',
    image: './images/writing/writesonic.png',
    website: 'https://writesonic.com?via=deeintech',
    price: 13,
    tags: ['writing'],
  },
  {
    id: 27,
    title: "MarketMuse",
    description: 'AI marketing tool that automates content audits and gives personalized insights for creating the best SEO content strategy',
    image: './images/writing/marketmuse.png',
    website: 'https://www.marketmuse.com/',
    price: 0,
    tags: ['writing', 'marketing'],
  },
  {
    id: 28,
    title: "ParagraphAI",
    description: 'AI writing assistant for students, CEOs, and everyone in between',
    image: './images/writing/paragraph-ai.png',
    website: 'https://paragraphai.com?ref=deeintech',
    price: 10,
    tags: ['writing'],
  },
  {
    id: 29,
    title: "Pictory",
    description: 'A complete AI-powered video marketing toolkit that helps to create short-form videos, high-conversion Video Sales Letters, etc.',
    image: './images/video/pictory.png',
    website: 'https://pictory.ai?ref=dmytro80',
    price: 19,
    tags: ['video'],
  },
  {
    id: 30,
    title: "Magic Write",
    description: 'AI text generator provided by Canva that helps to get out a first draft, fast',
    image: './images/writing/magic-write.png',
    website: 'https://www.canva.com/magic-write/',
    price: 0,
    tags: ['writing'],
  },
  {
    id: 31,
    title: "InVideo",
    description: 'Video creation tool with 5000+ ready-made templates and AI based Text-to-Video editor',
    image: './images/video/invideo.png',
    website: 'https://invideo.sjv.io/deeintech',
    price: 0,
    tags: ['video'],
  },
  {
    id: 32,
    title: "Synthesia",
    description: 'AI video creation platform for creating professional videos from plain text in 120 languages',
    image: './images/video/synthesia.png',
    website: 'https://www.synthesia.io/?via=deeintech',
    price: 30,
    tags: ['video', 'featured'],
  },
  {
    id: 33,
    title: "Specterr",
    description: 'Video creation tool that turns your music into killer video with custom music visualizers',
    image: './images/video/specterr.png',
    website: 'https://specterr.com/?via=deeintech',
    price: 0,
    tags: ['video', 'voice'],
  },
  {
    id: 34,
    title: "Phenaki",
    description: 'AI video creation platform for generating videos from text',
    image: './images/video/phenaki.png',
    website: 'https://phenaki.video/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 35,
    title: "Fliki",
    description: 'AI video creation platform that create videos from scripts or blog posts using realistic AI voices in 2 minutes',
    image: './images/video/fliki.png',
    website: 'https://fliki.ai/?via=deeintech',
    price: 0,
    tags: ['video', 'featured'],
  },
  {
    id: 36,
    title: "Opus",
    description: 'AI tool that generates video games from text',
    image: './images/video/opus.png',
    website: 'https://opus.ai/',
    price: 0,
    tags: ['video', 'crypto'],
  },
  {
    id: 37,
    title: "Every Anyone",
    description: 'AI tool that creates hyperreal synthetic avatars of yourself',
    image: './images/art/every-anyone.png',
    website: 'https://everyany.one/auth/signup/ub1wlbq32',
    price: 0,
    tags: ['art', 'crypto'],
  },
  {
    id: 38,
    title: "Metaphysic Studios",
    description: 'AI content generation studio that creates impossible video featuring photorealistic synthetic humans',
    image: './images/video/metaphysic.png',
    website: 'https://metaphysic.ai/studios/',
    price: 0,
    tags: ['video', 'crypto'],
  },
  {
    id: 39,
    title: "Hour One",
    description: 'AI tool that turns text into videos featuring virtual human presenters',
    image: './images/video/hour-one.png',
    website: 'https://hourone.ai/',
    price: 30,
    tags: ['video'],
  },
  {
    id: 40,
    title: "D-id",
    description: 'AI tool that creates customized videos featuring talking avatars at a touch of a button',
    image: './images/video/d-id.png',
    website: 'https://www.d-id.com/',
    price: 6,
    tags: ['video'],
  },
  {
    id: 41,
    title: "Runway",
    description: 'The next-generation content creation suite with 30+ AI magic tools, real-time video editing, collaboration, and more',
    image: './images/video/runway.png',
    website: 'https://runwayml.com/',
    price: 6,
    tags: ['video', 'art'],
  },
  {
    id: 42,
    title: "Unscreen",
    description: 'AI tool that removes video background automatically, without a single click',
    image: './images/video/unscreen.png',
    website: 'https://www.unscreen.com/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 43,
    title: "Syllaby",
    description: 'AI tool that shows how to create a content strategy for social media in minutes',
    image: './images/writing/syllaby.png',
    website: 'https://syllaby.io/?via=deeintech',
    price: 49,
    tags: ['writing', 'featured'],
  },
  {
    id: 44,
    title: "Prime Voice AI",
    description: 'The most realistic and versatile AI speech software that brings compelling, rich and lifelike voices to creators and publishers seeking the ultimate tools for storytelling. Bilt by Eleven Labs',
    image: './images/voice/prime-voice-ai.png',
    website: 'https://beta.elevenlabs.io/',
    price: 0,
    tags: ['voice'],
  },
  {
    id: 45,
    title: "CopyAI",
    description: 'AI content generator that helps to write higher converting posts and blogs 10x faster',
    image: './images/writing/copy-ai.png',
    website: 'https://www.copy.ai/?via=deeintech',
    price: 0,
    tags: ['writing', 'featured'],
  },
  {
    id: 46,
    title: "Midjourney",
    description: 'Independent AI art generator that turns text-based prompts into images',
    image: './images/art/midjourney.png',
    website: 'https://www.midjourney.com/',
    price: 0,
    tags: ['art', 'featured'],
  },
  {
    id: 47,
    title: "Lexica",
    description: 'The Stable Diffusion search engine and AI art generator',
    image: './images/art/lexica.png',
    website: 'https://lexica.art/',
    price: 0,
    tags: ['art', 'search'],
  },
  {
    id: 48,
    title: "Vrew",
    description: 'AI-powered subtitle generation',
    image: './images/video/vrew.png',
    website: 'https://vrew.voyagerx.com/en/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 49,
    title: "Descript",
    description: 'All-in-one video editing',
    image: './images/video/descript.png',
    website: 'https://www.descript.com/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 50,
    title: "Nova",
    description: 'Online video editing software that helps to cut, trim, collide, traslate your clips, add subtitles, and more',
    image: './images/video/nova.png',
    website: 'https://app.wearenova.ai/signup?ref=deeintech',
    price: 0,
    tags: ['video'],
  },
  {
    id: 51,
    title: "Adobe Podcast",
    description: 'AI tool that makes voice recordings sound as if they were recorded in a professional studio',
    image: './images/voice/adobe-podcast.png',
    website: 'https://podcast.adobe.com/enhance',
    price: 0,
    tags: ['voice'],
  },
  {
    id: 52,
    title: "Make a video",
    description: 'State-of-the-art AI system that generates videos from text',
    image: './images/video/make-a-video.png',
    website: 'https://makeavideo.studio/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 52,
    title: "DALL·E 2",
    description: 'AI system that can create realistic images and art from a description in natural language',
    image: './images/art/dalle-2.png',
    website: 'https://openai.com/dall-e-2/',
    price: 0,
    tags: ['art'],
  },
  {
    id: 53,
    title: "Lyric Studio",
    description: 'Songwriting inspiration engine that helps you write songs from start to finish',
    image: './images/writing/lyricstudio.png',
    website: 'https://lyricstudio.net/',
    price: 6,
    tags: ['writing'],
  },
  {
    id: 54,
    title: "Jukebox",
    description: 'A neural net that generates music, including rudimentary singing, as raw audio in a variety of genres and artist styles',
    image: './images/voice/jukebox.png',
    website: 'https://openai.com/blog/jukebox/',
    price: 0,
    tags: ['voice'],
  },
  {
    id: 55,
    title: "Aiva",
    description: 'A neural net that generates music, including rudimentary singing, as raw audio in a variety of genres and artist styles',
    image: './images/voice/aiva.png',
    website: 'https://www.aiva.ai/',
    price: 0,
    tags: ['voice'],
  },
  {
    id: 55,
    title: "Boomy",
    description: 'AI tool that makes original songs in seconds',
    image: './images/voice/boomy.png',
    website: 'https://boomy.com/',
    price: 0,
    tags: ['voice'],
  },
  {
    id: 56,
    title: "Notion AI",
    description: 'AI assitant powered by Notion for generation of any type of content faster',
    image: './images/writing/notion-ai.png',
    website: 'https://www.notion.so/product/ai',
    price: 0,
    tags: ['writing'],
  },
  {
    id: 57,
    title: "ACT-1",
    description: 'AI assitant built by Adept that executes high-level user requests automatically',
    image: './images/assistant/act-1.png',
    website: 'https://www.adept.ai/act',
    price: 0,
    tags: ['assistant'],
  },
  {
    id: 58,
    title: "Grammarly",
    description: 'AI-powered writing assistant for composing bold, clear, mistake-free writing',
    image: './images/writing/grammarly.png',
    website: 'https://www.grammarly.com/',
    price: 0,
    tags: ['writing'],
  },
  {
    id: 59,
    title: "Supermeme",
    description: 'AI-powered tool that turns text into original memes in 110+ languages',
    image: './images/art/supermeme.png',
    website: 'https://app.supermeme.ai?via=deeintech',
    price: 10,
    tags: ['art'],
  },
  {
    id: 60,
    title: "Replika",
    description: 'An AI companion who cares and is ready to chat when you need an empathetic friend',
    image: './images/assistant/replika.png',
    website: 'https://replika.ai/',
    price: 0,
    tags: ['assistant'],
  },
  {
    id: 61,
    title: "Artflow",
    description: 'AI tool that lets you create your own, unique Animated Stories with original characters using assets generated with AI',
    image: './images/video/artflow.png',
    website: 'https://artflow.ai/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 62,
    title: "Gradescope",
    description: 'AI assistant that helps you seamlessly administer and grade all of your assessments, whether online or in-class',
    image: './images/assistant/gradescope.png',
    website: 'https://www.gradescope.com/',
    price: 0,
    tags: ['assistant', 'others'],
  },
  {
    id: 63,
    title: "Otter",
    description: 'AI assistant that provides faculty and students with real-time captions and notes for in-person and virtual lectures, classes or meetings',
    image: './images/assistant/otter.png',
    website: 'https://otter.ai/education',
    price: 0,
    tags: ['assistant', 'others'],
  },
  {
    id: 63,
    title: "Excel Formula Bot",
    description: 'AI assistant that transforms your text instructions into Excel formulas in seconds',
    image: './images/assistant/excelformulabot.png',
    website: 'https://excelformulabot.com/',
    price: 0,
    tags: ['assistant', 'others'],
  },
  {
    id: 64,
    title: "Get Genie",
    description: 'AI assistant for Content & SEO, replaces 10+ apps for you with its AI magic & a simple WordPress Plugin',
    image: './images/writing/getgenie.png',
    website: 'https://getgenie.ai?rui=313',
    price: 0,
    tags: ['writing', 'marketing'],
  },
  {
    id: 65,
    title: "Quinvio AI",
    description: 'AI assistant for outlining ideas and creating professional videos with realistic avatars',
    image: './images/video/quinvio.png',
    website: 'https://www.quinv.io/ai',
    price: 0,
    tags: ['video'],
  },
  {
    id: 66,
    title: "Browse AI",
    description: 'AI assistant that helps to extract and monitor data from any website',
    image: './images/others/browse-ai.png',
    website: 'https://browse.ai/?via=deeintech',
    price: 39,
    tags: ['others'],
  },
  {
    id: 67,
    title: "Artifact",
    description: 'A personalized news feed driven by artificial intelligence',
    image: './images/others/artifact.png',
    website: 'https://artifact.news/',
    price: 0,
    tags: ['others'],
  },
  {
    id: 68,
    title: "ConversAI",
    description: 'AI assistant that learns and talks like you',
    image: './images/others/conversai.png',
    website: 'https://conversai.co/',
    price: 19,
    tags: ['assistant', 'others'],
  },
  {
    id: 69,
    title: "Scalenut",
    description: 'The #1 Organic Marketing Platform, with AI that powers your entire content lifecycle',
    image: './images/marketing/scalenut.png',
    website: 'https://www.scalenut.com/',
    price: 19,
    tags: ['marketing'],
  },
  {
    id: 70,
    title: "Translate video",
    description: 'The #1 Organic Marketing Platform, with AI that powers your entire content lifecycle',
    image: './images/video/translate-video.png',
    website: 'https://www.translate.video/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 71,
    title: "CustomGPT",
    description: 'Personalized AI ChatBOT trained on your content',
    image: './images/others/customgpt.png',
    website: 'https://customgpt.ai/',
    price: 49,
    tags: ['assistant', 'others'],
  },
  {
    id: 72,
    title: "Podcastle",
    description: 'AI-powered editing and audio & video recording tool',
    image: './images/voice/podcastle.png',
    website: 'https://podcastle.ai/',
    price: 0,
    tags: ['voice'],
  },
  {
    id: 73,
    title: "Texta",
    description: 'AI-powered writer that helps to boost your sales & keep your audience engaged by writing 10x faster',
    image: './images/writing/texta.png',
    website: 'https://www.texta.ai/?via=deeintech',
    price: 10,
    tags: ['writing'],
  },
  {
    id: 74,
    title: "Copygenius",
    description: 'AI tool that automatically writes ad copy, product descriptions, and more',
    image: './images/writing/copygenius.png',
    website: 'https://copygenius.io?ref=deeintech',
    price: 0,
    tags: ['writing'],
  },
  {
    id: 75,
    title: "Growthbar",
    description: 'Content generator that helps to write perfect SEO-friendly content for blog posts, website pages, and articles with AI',
    image: './images/writing/growthbar.png',
    website: 'https://growthbarseo.com/deeintech?afmc=fp',
    price: 0,
    tags: ['writing'],
  },
  {
    id: 76,
    title: "ShakespeareAI",
    description: 'AI copywriter for blogs, website copy, e-commerce, email copy, seo, social media, etc.',
    image: './images/writing/shakespeare.png',
    website: 'https://shakespeare.ai/lp/start-for-free/?fpr=dmytro54',
    price: 29,
    tags: ['writing'],
  },
  {
    id: 77,
    title: "Text Cortex",
    description: 'AI tool to write marketing, sales and website copy written in seconds',
    image: './images/writing/textcortex.png',
    website: 'https://textcortex.com/?via=deeintech',
    price: 29,
    tags: ['writing'],
  },
  {
    id: 78,
    title: "Content Forge",
    description: 'AI tool that helps you create content for your website, blog, social media, and more',
    image: './images/writing/contentforge.png',
    website: 'https://contentforge.ai?fpr=deeintech',
    price: 29,
    tags: ['writing'],
  },
  {
    id: 79,
    title: "WordHero",
    description: 'AI content writer that creates original blog posts, social media content, emails, and more - in just seconds',
    image: './images/writing/wordhero.png',
    website: 'https://wordhero.co/?via=deeintech',
    price: 49,
    tags: ['writing'],
  },
  {
    id: 80,
    title: "Zebracat",
    description: 'AI tool for creating awesome marketing videos 10X faster',
    image: './images/video/zebracat.png',
    website: 'https://www.zebracat.ai/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 81,
    title: "Multion",
    description: `The world's first AI Web Co-Pilot powered by ChatGPT`,
    image: './images/assistant/multion.png',
    website: 'https://multion.ai/',
    price: 0,
    tags: ['assistant'],
  },
  {
    id: 82,
    title: "Luna",
    description: `World's first AI app that suggests new high-quality leads every day and sends them the personal emails they deserve`,
    image: './images/marketing/luna.png',
    website: 'https://getluna.dev/',
    price: 0,
    tags: ['marketing', 'others'],
  },
  {
    id: 83,
    title: "Every Pixel",
    description: 'Stock image search engine powered by AI',
    image: './images/search/everypixel.png',
    website: 'https://www.everypixel.com/',
    price: 0,
    tags: ['search', 'art'],
  },
  {
    id: 84,
    title: "Durable",
    description: 'AI website builder that generates an entire business website with images and copy in seconds',
    image: './images/others/durable.png',
    website: 'https://durable.co/',
    price: 9,
    tags: ['others'],
  },
  {
    id: 85,
    title: "Bertha",
    description: 'AI tool for creating compelling marketing copy that engages your customers and drives conversions',
    image: './images/marketing/bertha.png',
    website: 'https://bertha.ai/?ref=9930',
    price: 45,
    tags: ['marketing', 'writing'],
  },
  {
    id: 86,
    title: "Bannerbear",
    description: 'AI tool that helps you auto-generate social media visuals, ecommerce banners and more with REST API and integrations',
    image: './images/marketing/bannerbear.png',
    website: 'https://www.bannerbear.com/?via=deeintech',
    price: 49,
    tags: ['marketing', 'coding'],
  },
  {
    id: 87,
    title: "AI Art Shop",
    description: 'AI artist platform',
    image: './images/art/aiartshop.png',
    website: 'https://aiartshop.com/?ref=deeintech',
    price: 0,
    tags: ['art', 'crypto'],
  },
  {
    id: 88,
    title: "Copy Shark",
    description: 'AI-powered software that generates ad copy, product descriptions, sales copy, blog paragraphs, video scripts more',
    image: './images/marketing/copyshark.png',
    website: 'https://www.copyshark.ai/?via=deeintech',
    price: 59,
    tags: ['marketing', 'writing'],
  },
  {
    id: 89,
    title: "ABtesting",
    description: 'AI tool that helps with optimizing your landing page for conversions using AI A/B testing software',
    image: './images/marketing/abtesting.png',
    website: 'https://abtesting.ai/?via=deeintech',
    price: 0,
    tags: ['marketing', 'others'],
  },
  {
    id: 90,
    title: "Systeme",
    description: `World's easiest all-in-ane marketing platform for building funnels, websites, affiliate networks, courses, emails, etc.`,
    image: './images/marketing/systeme.png',
    website: 'https://systeme.io/',
    price: 0,
    tags: ['marketing', 'others'],
  },
  {
    id: 91,
    title: "Krisp",
    description: 'AI tool that removes background voices, noises and echo from all your calls, giving you peace of mind',
    image: './images/voice/krisp.png',
    website: 'https://krisp.ai/',
    price: 0,
    tags: ['voice'],
  },
  {
    id: 92,
    title: "AssemblyAI",
    description: 'AI tool that transcribes and understands speech and offers production-ready, scalable, and secure AI models through a simple API',
    image: './images/voice/assemblyai.png',
    website: 'https://www.assemblyai.com/',
    price: 9,
    tags: ['voice', 'coding'],
  },
  {
    id: 93,
    title: "Looka",
    description: 'AI-powered platform to design a logo and build a brand you love',
    image: './images/art/looka.png',
    website: 'https://looka.com/',
    price: 0,
    tags: ['art', 'marketing'],
  },
  {
    id: 94,
    title: "BeautifulAI",
    description: 'AI tool that creates presentations for you',
    image: './images/marketing/beautifulai.png',
    website: 'https://www.beautiful.ai/',
    price: 12,
    tags: ['marketing', 'others'],
  },
  {
    id: 95,
    title: "My Heritage",
    description: 'AI tool that reveals your unique ethnic background, and matches you with newfound relatives',
    image: './images/art/myheritage.png',
    website: 'https://www.myheritage.com/',
    price: 0,
    tags: ['art'],
  },
  {
    id: 96,
    title: "OpenAI Codex",
    description: 'AI system that translates natural language to code',
    image: './images/coding/codex.png',
    website: 'https://openai.com/blog/openai-codex',
    price: 0,
    tags: ['coding'],
  },
  {
    id: 97,
    title: "Unbounce",
    description: 'AI-powered landing page builder with smart features that let you create beautiful, high-performing marketing campaigns in just a few minutes',
    image: './images/marketing/unbounce.png',
    website: 'https://unbounce.com/',
    price: 74,
    tags: ['marketing', 'others'],
  },
  {
    id: 98,
    title: "Ava Me",
    description: 'AI-powered live captioning solution for deaf & hard-of-hearing people and inclusive organizations',
    image: './images/others/avame.png',
    website: 'https://www.ava.me/',
    price: 0,
    tags: ['others'],
  },
  {
    id: 99,
    title: "Headlime",
    description: 'AI tool that generates marketing copy for you',
    image: './images/writing/headlime.png',
    website: 'https://headlime.com/?invite=IOfJ2CZQv7XmevaLUJl7YOnnHtE3',
    price: 59,
    tags: ['writing', 'marketing'],
  },
  {
    id: 100,
    title: "Quillbot",
    description: 'AI-powered paraphrasing tool will enhance your writing',
    image: './images/writing/quillbot.png',
    website: 'https://quillbot.com/',
    price: 0,
    tags: ['writing', 'marketing'],
  },
  {
    id: 101,
    title: "Playground",
    description: 'AI image tool for creating art, social media posts, presentations, posters, videos, logos and more',
    image: './images/art/playgroundai.png',
    website: 'https://playgroundai.com/',
    price: 0,
    tags: ['art'],
  },
  {
    id: 102,
    title: "Dumme",
    description: `AI tool that generates ready to upload shorts, no editing skills required`,
    image: './images/video/dumme.png',
    website: 'https://dumme.com/',
    price: 0,
    tags: ['video'],
  },
  {
    id: 103,
    title: "Illustroke",
    description: `AI tool to create stunning SVG vector illustrations from text prompts`,
    image: './images/art/illustroke.png',
    website: 'https://illustroke.com/',
    price: 6,
    tags: ['art'],
  },
  {
    id: 104,
    title: "Taskade",
    description: `AI content writer and outliner that helps to build a second brain for your teams`,
    image: './images/writing/taskade.png',
    website: 'https://www.taskade.com/?via=deeintech',
    price: 0,
    tags: ['writing', 'others'],
  },
  {
    id: 105,
    title: "PaletteAI",
    description: `AI tool to colorize pictures automatically`,
    image: './images/art/palette.png',
    website: 'https://palette.fm/',
    price: 0,
    tags: ['art'],
  },
  {
    id: 106,
    title: "Ad Creative AI",
    description: `AI tool to generate conversion focused ad creatives and social media post creatives in a matter of seconds`,
    image: './images/marketing/adcreative.png',
    website: 'https://free-trial.adcreative.ai/63k28gi0mi4f',
    price: 29,
    tags: ['marketing', 'featured'],
  },
  {
    id: 107,
    title: "Magic Studio",
    description: 'A set of AI tools to create stunning profile pictures, remove background or unwanted objects from pictures, and more',
    image: './images/art/magicstudio.png',
    website: 'https://magicstudio.com/',
    price: 3,
    tags: ['art'],
  },
  {
    id: 108,
    title: "ProfilePictureAI",
    description: 'AI profile picture maker and generator',
    image: './images/art/profilepicture.png',
    website: 'https://www.profilepicture.ai/?via=deeintech',
    price: 7,
    tags: ['art'],
  },
  {
    id: 108,
    title: "Mubert",
    description: 'AI tool to generate music via text prompts',
    image: './images/voice/mubert.png',
    website: 'https://mubert.com/render/pricing?via=deeintech',
    price: 0,
    tags: ['voice'],
  },
  {
    id: 109,
    title: "Codium",
    description: 'A code acceleration toolkit built on cutting edge AI technology',
    image: './images/coding/codeium.png',
    website: 'https://www.codeium.com/',
    price: 0,
    tags: ['coding'],
  },
  {
    id: 110,
    title: "Hoppy Copy",
    description: 'AI tool to generate powerful copy for hundreds of different email marketing campaigns, drips, newsletters and more—in seconds',
    image: './images/marketing/hoppycopy.png',
    website: 'https://www.hoppycopy.co/?via=deeintech',
    price: 23,
    tags: ['marketing', 'writing'],
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

  coding: {
    label: translate({message: 'AI Coding'}),
    description: translate({
      message:
        'coding tools powered by ai',
      id: 'item.tag.coding.description',
    }),
    color: '#8555EE',
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
