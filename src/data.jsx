import React from "react";

const blogList = [
    {
        id:1,
        index:'0',
        name:"Anime ,a world away from world but better than world.",
        img:'/images/anime.jpg',
        category: "Entertainment",
        author:"Saurav Kumar",
        authorImg:'/images/bharti.jpg',
        about:"Anime is hand-drawn and computer-generated animation originating from Japan. Outside Japan and in English, anime refers specifically to animation produced in Japan.However, in Japan and in Japanese, anime (a term derived from a shortening of the English word animation) describes all animated works, regardless of style or origin. Animation produced outside Japan with a similar style to Japanese animation is commonly referred to as anime-influenced animation.The earliest commercial Japanese animations date to 1917. A characteristic art style emerged in the 1960s with the works of cartoonist Osamu Tezuka and spread in following decades, developing a large domestic audience. Anime is distributed theatrically, through television broadcasts, directly to home media, and over the Internet. In addition to original works, anime are often adaptations of Japanese comics (manga), light novels, or video games. It is classified into numerous genres targeting various broad and niche audiences.Anime is a diverse medium with distinctive production methods that have adapted in response to emergent technologies. It combines graphic art, characterization, cinematography, and other forms of imaginative and individualistic techniques.Compared to Western animation, anime production generally focuses less on movement, and more on the detail of settings and use of 'camera effects', such as panning, zooming, and angle shots.Diverse art styles are used, and character proportions and features can be quite varied, with a common characteristic feature being large and emotive eyes.The anime industry consists of over 430 production companies, including major studios such as Studio Ghibli, Kyoto Animation, Sunrise, Bones, Ufotable, MAPPA, Wit Studio, CoMix Wave Films, Production I.G and Toei Animation. Since the 1980s, the medium has also seen widespread international success with the rise of foreign dubbed, subtitled programming, and since the 2010s its increasing distribution through streaming services and a widening demographic embrace of anime culture, both within Japan and worldwide.As of 2016, Japanese animation accounted for 60% of the world's animated television shows."
    },
    {
        id:2,
        index:'1',
        name:"Side of 'Bihar' unknown to all.",
        img:'/images/bihar.jpg',
        category: "Tourism",
        author:"Saurav Kumar",
        authorImg:'/images/bharti.jpg',
        about: "Bihar in eastern India is one of the oldest inhabited places in the world with a history going back 3000 years. The rich culture and heritage of Bihar is evident from the innumerable ancient monuments that are dotted all over the state. Bihar is home to many tourist attractions and is visited by large numbers of tourists from all over the world.Around total 6 million tourists visit Bihar every year.Darbhanga Fort in Darbhanga.Sunset at Gandhi Ghat in Patna.Deo Sun Temple in Aurangabad.Janaki Kund at Sitamarhi. Megasthenes (B.C. 350–290 B.C.) visited the region in reign of Chandragupta Maurya.His observations were recorded in Indika. Dionysius was son of Megasthenes, who visited Pataliputra in reign of Ashoka. Hsuan-Tsang and I Ching visited Nalanda to study in the 7th century. This state is the place of Mahavira, the 24th and last Tirthankara, Aryabhata, Great Ashoka, Chanakya, Gautama Buddha, Mahavira, Guru Gobind Singh, Chandragupta Maurya, Vātsyāyana, Sher Shah Suri, Maa Tara Chandi Temple, and many other great historical figures.Bihar ranked 8th in the top 10 states/UTs of India in number of foreign tourist visits in 2017.The year 2019, saw highest number of tourists in Bihar, with over 35 million tourists, including 11.9 million foreign tourists."
    },
    {
        id:3,
        index:'2',
        name:"AI ,scary truth or comforting lie",
        img:'/images/ai.jpg',
        category: "Technology",
        author:"Saurav Kumar",
        authorImg:'/images/bharti.jpg',
        about: "At its simplest form, artificial intelligence is a field, which combines computer science and robust datasets, to enable problem-solving. It also encompasses sub-fields of machine learning and deep learning, which are frequently mentioned in conjunction with artificial intelligence. These disciplines are comprised of AI algorithms which seek to create expert systems which make predictions or classifications based on input data.Over the years, artificial intelligence has gone through many cycles of hype, but even to skeptics, the release of OpenAI’s ChatGPT seems to mark a turning point. The last time generative AI loomed this large, the breakthroughs were in computer vision, but now the leap forward is in natural language processing. And it’s not just language: Generative models can also learn the grammar of software code, molecules, natural images, and a variety of other data types.The applications for this technology are growing every day, and we’re just starting to explore the possibilities. But as the hype around the use of AI in business takes off,conversations around ethics become critically important. To read more on where IBM stands within the conversation around AI ethics, read more here."

    },
    {
        id:4,
        index:'3',
        name:"Oldest IIT and a gem.",
        img:"/images/IIT.jpg",
        category: "Education",
        author:"Saurav Kumar",
        authorImg:'/images/bharti.jpg',
        about: "Indian Institute of Technology Kharagpur (IIT Kharagpur) is a public institute of technology research university established by the Government of India in Kharagpur, West Bengal, India. Established in 1951, the institute is the first of the IITs to be established and is recognised as an Institute of National Importance. In 2019 it was awarded the status of Institute of Eminence by the Government of India.IIT Kharagpur is ranked among the most prestigious academic institutions in India.The institute was initially established to train engineers after India attained independence in 1947. However, over the years, the institute's academic capabilities diversified with offerings in management, law, architecture, humanities, etc. IIT Kharagpur has an 8.7-square-kilometre (2,100-acre) campus and has about 22,000 residents."
    },
    {
        id:5,
        index:'4',
        name:"ISRO boon to India and mystrey to the world",
        img:"/images/isro.jpg",
        category: "Technology",
        author:"Saurav Kumar",
        authorImg:'/images/bharti.jpg',
        about: "The Indian Space Research Organisation is the national space agency of India. It operates as the primary research and development arm of the Department of Space (DoS), which is directly overseen by the Prime Minister of India, while the Chairman of ISRO also acts as the executive of DoS. ISRO is primarily responsible for performing tasks related to space-based operations, space exploration, international space cooperation and the development of related technologies.ISRO is one of the six government space agencies in the world that possesses full launch capabilities, can deploy cryogenic engines, can launch extraterrestrial missions and operate a large fleet of artificial satellites.ISRO is one of the four government space agencies to have soft landing (uncrewed) capabilities."
    },
    {
        id:6,
        index:'5',
        name:"ISRO boon to India and mystrey to the world",
        img:"/images/isro.jpg",
        category: "Technology",
        author:"Saurav Kumar",
        authorImg:'/images/bharti.jpg',
        about: "The Indian Space Research Organisation is the national space agency of India. It operates as the primary research and development arm of the Department of Space (DoS), which is directly overseen by the Prime Minister of India, while the Chairman of ISRO also acts as the executive of DoS. ISRO is primarily responsible for performing tasks related to space-based operations, space exploration, international space cooperation and the development of related technologies.ISRO is one of the six government space agencies in the world that possesses full launch capabilities, can deploy cryogenic engines, can launch extraterrestrial missions and operate a large fleet of artificial satellites.ISRO is one of the four government space agencies to have soft landing (uncrewed) capabilities."
    }
]
export default blogList;