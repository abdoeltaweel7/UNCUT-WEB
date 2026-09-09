export type ProjectCategory = 'VIDEO' | 'PHOTOGRAPHY';

export type Project = {
  id: string;
  number: string;
  title: string;
  client: string;
  category: ProjectCategory;
  tag: string;
  year: string;
  description: string;
  arabicDescription: string;
  coverImage: string;
  gallery: string[];
  mediaType: 'video' | 'image';
  videoUrl?: string;
  sourceUrl?: string;
};

const photoAssets = [
  '/work/aym-0381.jpg',
  '/work/aym-0083.jpg',
  '/work/aym-0366.jpg',
  '/work/aym-0377.jpg',
  '/work/dsc-01242.jpg',
  '/work/dsc-01299.jpg',
  '/work/dsc-01235.jpg',
  '/work/dsc-01225.jpg',
  '/work/dsc-03662.jpg',
  '/work/dsc-02539.jpg',
  '/work/dsc-00841.jpg',
  '/work/dsc-03657.jpg'
];

type VideoSeed = {
  id: string;
  videoId: string;
  title: string;
  tag: string;
};

const videoSeeds: VideoSeed[] = [
  { id: 'fakhr-tibi', videoId: '1223617783', title: 'فخر طبي', tag: 'تسويق' },
  { id: 'dr-turky-success-story', videoId: '1223618322', title: 'Dr. Turky Success Story', tag: 'محتوي طبي' },
  { id: 'taser-medical-podcast', videoId: '1223622243', title: 'Taser Medical Microphone Podcast', tag: 'varied Reels' },
  { id: 'saudi-arms-event', videoId: '1223622482', title: 'Saudi Arms - Event', tag: 'تسويق' },
  { id: 'coach-joud-bush-club', videoId: '1223617281', title: 'Coach Joud - Bush Club', tag: 'تسويق' },
  { id: 'last-00', videoId: '1213314222', title: 'Last - 00', tag: 'اخرى' },
  { id: 'formela-e', videoId: '1223253339', title: 'Formela E', tag: 'تغطية إعلامية' },
  { id: 'jaras-enzar', videoId: '1223067695', title: 'Behind the Scenes of the Film Shoot "Jaras Enzar"', tag: 'B T S - Film' },
  { id: 'medical-real-sgh-6', videoId: '1221435375', title: 'Medical Real - SGH 6', tag: 'محتوي طبي' },
  { id: 'hope-mbc-tv', videoId: '1223589224', title: 'Hope - MBC TV', tag: 'تغطية إعلامية' },
  { id: 'meat-moot-2', videoId: '1223588114', title: 'Meat Moot 2', tag: 'varied Reels' },
  { id: 'meat-moot', videoId: '1223588115', title: 'Meat Moot', tag: 'varied Reels' },
  { id: 'hajj-exhibition', videoId: '1223588229', title: 'The Hajj Exhibition', tag: 'تغطية إعلامية' },
  { id: 'tea-world', videoId: '1223588596', title: 'Tea World', tag: 'varied Reels' },
  { id: 'kau-tizer-talents', videoId: '1223070578', title: 'King Abdulaziz University Tizer Talents', tag: 'تغطية إعلامية' },
  { id: 'kau-dr-raja', videoId: '1223070580', title: 'King Abdulaziz University, Dr. Raja', tag: 'تسويق' },
  { id: 'summer-training', videoId: '1223076388', title: 'Summer Training Graduation Ceremony', tag: 'تسويق' },
  { id: 'jaras-enzar-virgin', videoId: '1223067697', title: 'Behind the Scenes of the Film Shoot "Jaras Enzar" Virgin 2', tag: 'B T S - Film' },
  { id: 'jaras-enzar-virgin-3', videoId: '1223067698', title: 'Behind the Scenes of the Film Shoot "Jaras Enzar" Virgin 3', tag: 'B T S - Film' },
  { id: 'medical-real-shg-5', videoId: '1221437704', title: 'Medical Real - SHG 5', tag: 'محتوي طبي' },
  { id: 'medical-real', videoId: '1221454201', title: 'Medical Real', tag: 'محتوي طبي' },
  { id: 'medical-real-sgh-6-alt', videoId: '1221436999', title: 'Medical Real - SGH 6', tag: 'محتوي طبي' },
  { id: 'medical-real-sgh-8', videoId: '1221437017', title: 'Medical Real - SGH 8', tag: 'محتوي طبي' },
  { id: 'medical-real-sgh-9', videoId: '1221437640', title: 'Medical Real - SGH 9', tag: 'محتوي طبي' },
  { id: 'kau-dr-hanadi', videoId: '1223070579', title: 'King Abdulaziz University, Dr. Hanadi', tag: 'تسويق' },
  { id: 'medical-real-sgh', videoId: '1221437641', title: 'Medical Real - SGH', tag: 'محتوي طبي' },
  { id: 'blood-donation-samir-abbas', videoId: '1221430574', title: 'التبرع بالدم - مستشفي سمير عباس', tag: 'محتوي طبي' },
  { id: 'saudi-german-annual-breakfast', videoId: '1221430608', title: 'الافطار السنوي للسعودي الالماني', tag: 'تسويق' },
  { id: 'business-leaders-event', videoId: '1221431032', title: 'Business Leaders Event', tag: 'تسويق' },
  { id: 'byd-cars', videoId: '1221431047', title: 'BYD - Cars', tag: 'تسويق' },
  { id: 'matrix-gym', videoId: '1221431185', title: 'Matrix - Gym', tag: 'تسويق' },
  { id: 'gt-cars', videoId: '1221431272', title: 'GT - Cars 1', tag: 'تسويق' },
  { id: 'star-bucks', videoId: '1221431779', title: 'Star Bucks', tag: 'تسويق' },
  { id: 'wedding-party', videoId: '1221431870', title: 'Wedding Party', tag: 'زواجات' },
  { id: 'wedding-party-promo', videoId: '1221431878', title: 'Wedding Party Promo', tag: 'زواجات' },
  { id: 'aramco-event', videoId: '1221432013', title: 'Aramco Event', tag: 'تسويق' },
  { id: 'wedding-party-promoo', videoId: '1221432191', title: 'Wedding Party Promoo', tag: 'تسويق' },
  { id: 'saudi-german-annual-breakfast-2', videoId: '1221432257', title: 'الافطار السنوي للسعودي الالماني', tag: 'تسويق' },
  { id: 'national-day-95', videoId: '1221433105', title: 'اليوم الوطني ٩٥ - المستشفي السعودي الالماني', tag: 'تسويق' },
  { id: 'uncle-qasim-success', videoId: '1221433289', title: 'قصه نجاح العم قاسم - المستشفي السعودي الالماني', tag: 'محتوي طبي' },
  { id: 'medical-real-sgh-5-2', videoId: '1221435144', title: 'Medical Real - SGH 5', tag: 'محتوي طبي' },
  { id: 'medical-real-sgh-3', videoId: '1221435145', title: 'Medical Real - SGH 3', tag: 'محتوي طبي' },
  { id: 'medical-real-sgh-2', videoId: '1221435146', title: 'Medical Real - SGH 2', tag: 'محتوي طبي' },
  { id: 'medical-real-sgh-4', videoId: '1221435147', title: 'Medical Real - SGH 4', tag: 'محتوي طبي' },
  { id: 'eidna-with-heroes', videoId: '1184523239', title: 'عيدنا بابطالنا', tag: 'تسويق' },
  { id: 'effat-university', videoId: '1184519786', title: 'جامعة عفت', tag: 'تسويق' },
  { id: 'highlights-event', videoId: '1184524259', title: 'Highlights Event', tag: 'تسويق' },
  { id: 'emirati-old-house', videoId: '1184525315', title: 'البيت الاماراتي القديم', tag: 'تسويق' },
  { id: 'al-fayrouz-stud', videoId: '1184524331', title: 'مربط الفيروز', tag: 'تسويق' }
];

const photoSeeds = [
  { id: 'photo-aym-0381', title: 'بدون عنوان - 8', source: 'AYM_0381', asset: photoAssets[0] },
  { id: 'photo-aym-0083', title: 'بدون عنوان - 7', source: 'AYM_0083', asset: photoAssets[1] },
  { id: 'photo-aym-0366', title: 'بدون عنوان - 6', source: 'AYM_0366', asset: photoAssets[2] },
  { id: 'photo-aym-0377', title: 'بدون عنوان - 5', source: 'AYM_0377', asset: photoAssets[3] },
  { id: 'photo-dsc-01242', title: 'بدون عنوان - 4', source: 'DSC01242', asset: photoAssets[4] },
  { id: 'photo-dsc-01299', title: 'بدون عنوان - 3', source: 'DSC01299', asset: photoAssets[5] },
  { id: 'photo-dsc-01235', title: 'بدون عنوان - 2', source: 'DSC01235', asset: photoAssets[6] },
  { id: 'photo-dsc-01225', title: 'لقطة من المعرض', source: 'DSC01225', asset: photoAssets[7] },
  { id: 'photo-dsc-03662', title: 'DSC03662 Enhanced', source: 'DSC03662-Enhanced-NR', asset: photoAssets[8] },
  { id: 'photo-dsc-02539', title: 'DSC02539', source: 'DSC02539', asset: photoAssets[9] },
  { id: 'photo-dsc-00841', title: 'DSC00841', source: 'DSC00841', asset: photoAssets[10] },
  { id: 'photo-dsc-03657', title: 'لقطة من الأرشيف', source: 'DSC03657', asset: photoAssets[11] }
];

const descriptions: Record<string, string> = {
  'تسويق': 'A cinematic brand piece built around a clear message, a precise rhythm and a memorable visual language.',
  'محتوي طبي': 'A human story shaped with care, clarity and a visual language that keeps the people at its center.',
  'تغطية إعلامية': 'A live moment captured with instinct, pace and the details that make an event worth remembering.',
  'B T S - Film': 'The process behind the frame: people, movement and the unexpected details that make production feel alive.',
  'varied Reels': 'A short-form visual study designed to move quickly and stay with the audience.',
  'زواجات': 'A celebration documented with an editorial eye: honest moments, generous light and a little magic.',
  'اخرى': 'A visual experiment built from atmosphere, movement and the instinct to find the unexpected frame.'
};

const arabicDescriptions: Record<string, string> = {
  'تسويق': 'فيلم بصري بإيقاع واضح ورسالة لا تُنسى، صُمم ليحرك العلامة التجارية.',
  'محتوي طبي': 'قصة إنسانية نرويها بعناية ووضوح، مع إبقاء الناس في قلب الصورة.',
  'تغطية إعلامية': 'نوثق اللحظة وهي تحدث، ونحفظ تفاصيلها بإيقاع حي وحضور سينمائي.',
  'B T S - Film': 'ما وراء الكواليس كما لم تره من قبل؛ حركة الفريق وتفاصيل الصناعة واللحظة.',
  'varied Reels': 'محتوى قصير وسريع، مصمم ليشد الانتباه ويترك أثرًا.',
  'زواجات': 'احتفال نوثقه بعين تحريرية؛ لحظات صادقة وضوء جميل وذاكرة تدوم.',
  'اخرى': 'تجربة بصرية مبنية على الإحساس والحركة والبحث عن اللقطة غير المتوقعة.'
};

export const projects: Project[] = [
  ...videoSeeds.map((item, index): Project => ({
    id: item.id,
    number: String(index + 1).padStart(2, '0'),
    title: item.title,
    client: item.tag === 'محتوي طبي' ? 'HEALTHCARE' : item.tag === 'زواجات' ? 'PRIVATE EVENT' : 'UNCUTS PRODUCTION',
    category: 'VIDEO',
    tag: item.tag,
    year: '2026',
    description: descriptions[item.tag],
    arabicDescription: arabicDescriptions[item.tag],
    coverImage: photoAssets[index % photoAssets.length],
    gallery: [],
    mediaType: 'video',
    videoUrl: `https://player.vimeo.com/video/${item.videoId}?title=0&byline=0&portrait=0&badge=0&dnt=1`,
    sourceUrl: `https://vimeo.com/${item.videoId}`
  })),
  ...photoSeeds.map((item, index): Project => ({
    id: item.id,
    number: String(videoSeeds.length + index + 1).padStart(2, '0'),
    title: item.title,
    client: 'UNCUTS PRODUCTION',
    category: 'PHOTOGRAPHY',
    tag: 'PHOTOGRAPHY',
    year: '2025',
    description: 'A still frame from the Uncuts archive, selected for its light, texture and honest sense of place.',
    arabicDescription: 'لقطة فوتوغرافية من أرشيف Uncuts، اختيرت لضوئها وملمسها وصدقها.',
    coverImage: item.asset,
    gallery: [item.asset],
    mediaType: 'image',
    sourceUrl: `https://uncuts9.com/wp-content/uploads/2025/09/${item.source}-scaled.jpg`
  }))
];
