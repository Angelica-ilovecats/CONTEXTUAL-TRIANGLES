import { withBasePath } from '../utils/paths.js';

const content = {
  '/works': { title: 'My works', entries: ['Earth Surgery', 'Breathe Vessel', 'This Is Not a Verifier', 'The Escapee', 'Forced Symbiosis'] },
  '/interesting': { title: 'Interesting things', entries: ['Objects', 'Visual references', 'Research', 'Images', 'Materials', 'Experiments'] },
  '/others': { title: 'Works of others', entries: ['Artists', 'Designers', 'Projects'] },
};

const projects = [
  'The Earth Surgery Project', 'Breath Vessel', 'Algae Eaters’ Club', 'Forced Symbiosis', 'The Escapee',
  'Digital Forest', 'This Is Not a Verifier',
];

const projectVideoLinks = {
  'Algae Eaters’ Club': 'https://youtu.be/NbA_R6hUkv0',
  'This Is Not a Verifier': 'https://youtu.be/NA8fZloK4pI',
  'Forced Symbiosis': 'https://youtu.be/aabdPqr_Nm4',
};

const interestImages = [
  { src: '/images/interests/la-la-land.jpeg', alt: 'La La Land film poster beneath a starry night sky', layout: 'interest-shot-01' },
  { src: '/images/interests/sketch-portrait.jpeg', alt: 'A hand-drawn portrait in a sketchbook', layout: 'interest-shot-02' },
  { src: '/images/interests/forest-fungi.jpeg', alt: 'Small mushrooms and pale leaves growing on a mossy log', layout: 'interest-shot-03' },
  { src: '/images/interests/geology-of-media.jpeg', alt: 'Geology of Media book cover by Jussi Parikka', layout: 'interest-shot-04' },
  { src: '/images/interests/orchid-portrait.jpeg', alt: 'Portrait wearing sculptural white orchid-inspired jewellery', layout: 'interest-shot-05' },
  { src: '/images/interests/projection-study.jpeg', alt: 'A projected digital portrait installation in a dark room', layout: 'interest-shot-06' },
  { src: '/images/interests/mycelium-form.jpeg', alt: 'A pale sculptural mycelium form on a grey surface', layout: 'interest-shot-07' },
  { src: '/images/interests/iridescent-organism.jpeg', alt: 'An iridescent digitally rendered organic form on black', layout: 'interest-shot-08' },
  { src: '/images/interests/orchid-object.jpeg', alt: 'White orchid-inspired sculptural jewellery and prototypes', layout: 'interest-shot-09' },
  { src: '/images/interests/orchid-jewellery.jpeg', alt: 'White organic jewellery held above a dark surface', layout: 'interest-shot-10' },
  { src: '/images/interests/sketch-study-02.jpeg', alt: 'A pencil and charcoal character study with several portrait sketches', layout: 'interest-shot-11' },
];

const othersImages = [
  { src: '/images/others/other-work-01.jpeg', alt: 'Green algae-inspired sculptural furniture and installation' },
  { src: '/images/others/other-work-02.jpeg', alt: 'A circular green bio-inspired device with transparent tubing' },
  { src: '/images/others/other-work-03.jpeg', alt: 'A blue illuminated interactive bio-inspired surface' },
];

const othersDescription = `Peter’s project explores the potential of regenerative kelp and algae in design. Inspired by their natural properties, he developed bioplastic eyewear prototypes using computational algorithms to mimic organic algae forms. The project also reimagines furniture as living systems. Each piece functions as a photobioreactor, growing algae that produces oxygen and edible protein. By integrating algae into everyday objects, the project explores new forms of human–algae symbiosis and encourages greater ecological awareness.`;

const sugababeDescription = `Sugababe explores the reconstruction of Vincent van Gogh’s ear through biotechnology. Using genetic material from Van Gogh’s living descendants, historical DNA research, and CRISPR-Cas9 gene-editing techniques, Diemut Strebe developed a living tissue replica that contains significant parts of the artist’s genetic information. The ear is preserved in a transparent nutrient-filled bioreactor and connected to a computer, microphone, and speaker. Visitors can speak to the ear and receive responses through the system, creating the impression of interacting with Van Gogh himself. By combining biotechnology, genetic reconstruction, and interactive art, the project questions identity, authenticity, and whether a historical individual could theoretically be reconstructed through biological information.`;

const untilledDescription = `Untilled is a living ecosystem created by Pierre Huyghe for dOCUMENTA 13. Rather than presenting a fixed artwork, Huyghe brought together animals, plants, insects, sculptures, and the surrounding environment to form a self-evolving system without a predetermined script. Within this ecosystem, humans are no longer at the centre. Different species and environmental forces interact autonomously, allowing the work to continuously grow and transform. Through this approach, Huyghe explores how reality can be co-produced by human and non-human agents, blurring the boundaries between nature, technology, and art.`;

const chasingStarsDescription = `Joon Yong Moon’s interactive installation Chasing Stars in Shadow combines augmented reality, projection, physical objects, and custom sensing technology to create an immersive narrative environment. Children’s shadows appear trapped within a two-dimensional world, but when visitors shine light into the space, the shadows come alive, dancing, travelling between worlds, growing fruit trees, and flying alongside fish. Light becomes both the key to the story and a bridge between the physical and virtual worlds. Through 360° projection, optical illusion, and audience interaction, the work transforms digital technology into a warm and poetic experience, making the viewer an active participant in the unfolding narrative.`;

const untitledAppleDescription = `This project explores image labeling and anthropocentrism through generative AI. A custom model trained on conventional images of round apples scans a real apple as it is continuously cut and transformed. Despite these changes, the AI repeatedly reconstructs it as a stereotypically round apple. Drawing on Lacan’s theory of the gaze, the work reveals how both machine vision and human perception impose pre-existing categories onto reality, questioning whether recognition is ever truly objective.`;

const earthSugaryPlanImages = [
  { src: '/images/works/earth-sugary-plan-01.jpg', alt: 'A set of biomaterial forms arranged on a table in a bright studio' },
  { src: '/images/works/earth-sugary-plan-02.jpg', alt: 'Biomaterial forms being placed in a green outdoor landscape' },
  { src: '/images/works/earth-sugary-plan-03.jpg', alt: 'An exhibition installation for The Earth Sugary Plan' },
  { src: '/images/works/earth-sugary-plan-04.jpg', alt: 'Hands arranging sculptural forms on an earth-colored exhibition surface' },
];

const earthSurgeryDescription = `The Earth Surgery Project is an interactive installation exploring ecological restoration in red-soil desertification. Inspired by the root systems of sand-fixing plants, it combines modular structures with biomaterials such as mycelium to transform long-term ecological processes into a tangible and participatory experience. Through “module placement – system recognition – data feedback,” users can explore different restoration strategies and their ecological effects. Using “surgery” as a metaphor, the project positions biodegradable and living materials as both tools for restoration and mediators between humans and the land, offering potential applications in environmental education, public art, and ecological communication.`;

const breathVesselImages = [
  { src: '/images/works/breathe-vessel-01.jpg', alt: 'Three iridescent Breath Vessel forms displayed on white plinths' },
  { src: '/images/works/breathe-vessel-02.jpg', alt: 'A participant holding a blue Breath Vessel form' },
  { src: '/images/works/breathe-vessel-03.jpg', alt: 'A person wearing a blue Breath Vessel form' },
  { src: '/images/works/breathe-vessel-04.jpg', alt: 'A person wearing the Breath Vessel form from behind' },
];

const breathVesselDescription = `Traditionally seen as ominous, Yangqi refers to the final breath lingering after death—an aura often shunned in cultural practice. Breath Succession Vessel reinterprets this breath not as a sign of misfortune, but as a residual echo of life, a subtle flow of connection between the living, the departed, and the environment. The installation invites participants to blow into the vessel, using their breath to awaken the dormant air within. This simple act becomes an intimate ritual—a quiet dialogue in which air acts as a medium of emotion, resonance, and remembrance. Through this poetic interaction, the work rebuilds a perceptual bridge to death. It transforms Yangqi from a feared trace into something that can be felt, responded to, and gently carried forward.`;

const algaeEatersClubDescription = `Algae Eaters’ Club is a performative film exploring how food becomes a tool of class governance. Set in a “post-algae-crisis” era, it envisions a world where polluted, abundant algae are rebranded as “green delicacies” by the ruling class. Through ritualized dining and aestheticized consumption, the middle class participates in a fabricated faith of luxury. Blending material experimentation and cinematic performance, the project constructs a satirical algae-grading system and hierarchical dining ritual, questioning what humanity truly consumes when food becomes a symbol of power rather than survival.`;

const algaeEatersClubImage = { src: '/images/works/algae-eaters-club.jpeg', alt: 'A performative dining scene from Algae Eaters’ Club, with a woman seated at an algae-themed table' };

const digitalForestImages = [
  { src: '/images/works/digital-forest-03.png', alt: 'A colorful digital forest made of flowing particle forms' },
  { src: '/images/works/digital-forest-01.png', alt: 'A digital point-cloud plant form emerging from a dark background' },
  { src: '/images/works/digital-forest-02.png', alt: 'A yellow point-cloud tree and root system against black' },
];

const digitalForestDescription = `Digital Forest is a digital video work that merges ecological documentation with artistic expression. The project scans endangered plant species in 3D to create their digital archives, presenting them through a painterly visual language. Through particle-based motion, viewers witness plants that flow, grow, and ultimately dissolve into fragments. This continual cycle of emergence—expansion—disappearance symbolizes the fragility of real ecosystems, allowing audiences to confront the quiet fading of nature through an aesthetic experience. The project seeks to evoke public awareness of environmental crises, species preservation, and the urgency of protecting biodiversity.`;

const escapeeImages = [
  { src: '/images/works/the-escapee-01.jpg', alt: 'Audience members watch The Escapee projected in a dark gallery' },
  { src: '/images/works/the-escapee-02.jpg', alt: 'Mirrored faces appear across screens in The Escapee' },
  { src: '/images/works/the-escapee-03.jpg', alt: 'Audience silhouettes watch a projected mirrored face' },
];

const escapeeDescription = `The Escapee uses 3D imagery to imagine a story centered on technology and ethics. The concept of mirror life refers to organisms composed of right-handed amino acids, completely opposite to those found in terrestrial life. This idea once triggered feverish scientific speculation while raising deep anxieties about biosafety. The film depicts a mirror-life organism in a future world awakening inside a cultivation factory and attempting to escape, only to be reduced to an NPC within virtual reality. Through a stark industrial setting and sensory-driven storytelling, the work reflects on how biotechnological breakthroughs unsettle established ethical frameworks and challenge human-centered worldviews. The emergence of mirror life becomes a metaphor for a crisis in human identity, urging us to question whether we can shoulder the responsibility of creating new life and redefine the uniqueness of what it means to be “human.”`;

const verifierImage = { src: '/images/works/this-is-not-a-verifier.jpeg', alt: 'A speculative interactive verification installation with a monitor, mechanical components, and suspended objects' };
const verifierDetailImages = [
  { src: '/images/works/this-is-not-a-verifier-02.jpeg', alt: 'Close view of the transparent forms and tubing in This Is Not a Verifier' },
  { src: '/images/works/this-is-not-a-verifier-03.jpeg', alt: 'Four circular displays in the verification installation' },
  { src: '/images/works/this-is-not-a-verifier-04.jpeg', alt: 'A mechanical device used in This Is Not a Verifier' },
];

const verifierDescription = `In today’s information environment, AI-generated content and platform-driven recommendation systems make it increasingly difficult to distinguish truth from falsehood. Information that appears credible is often fabricated, rhetorically packaged, and widely circulated through streaming platforms to gain public acceptance. In response to this issue, I created This Is Not a Verifier, a speculative interactive installation that allows participants to realise through interaction that both the information they input and the verification system itself may be unreliable. The project reminds us that seemingly authoritative or widely disseminated information is not necessarily trustworthy. Strengthening personal judgment and maintaining critical awareness have become essential in navigating today’s information landscape.`;

const forcedSymbiosisImage = { src: '/images/works/forced-symbiosis.jpg', alt: 'Imagined human-plant forms coexisting in a grassy landscape' };

const forcedSymbiosisDescription = `This project explores the relationship between plants and humans. Plants’ habitats are affected by the constant encroachment of humans into their territories, and what will be the future shape of plants in the wake of decentralised human power? Will it be filled with the domination of plants by humans, or a revolt of plant species? Will there be a utopian imbalance between nature and humans? What will the coexistence of humans and plants look like in a world after human decentralisation? The audience is made to think through the storytelling narrative.`;

export default function SectionPage({ path }) {
  const page = content[path];
  return <main className={`section-page${path === '/interesting' ? ' interest-page' : ''}`}><p className="eyebrow">Angelica Jin</p><h1>{page.title}</h1>{path === '/works' ? <div className="works-grid">{projects.map((project, index) => {
    const id = `work-${String(index + 1).padStart(2, '0')}`;
    const isEarthSugaryPlan = project === 'The Earth Surgery Project';
    const isBreathVessel = project === 'Breath Vessel';
    const isAlgaeEatersClub = project === 'Algae Eaters’ Club';
    const isEscapee = project === 'The Escapee';
    const isForcedSymbiosis = project === 'Forced Symbiosis';
    const isDigitalForest = project === 'Digital Forest';
    const isVerifier = project === 'This Is Not a Verifier';
    const videoLink = projectVideoLinks[project];
    const images = isEarthSugaryPlan ? earthSugaryPlanImages : isBreathVessel ? breathVesselImages : isAlgaeEatersClub ? [algaeEatersClubImage] : isEscapee ? escapeeImages : isForcedSymbiosis ? [forcedSymbiosisImage] : isDigitalForest ? digitalForestImages : isVerifier ? [verifierImage, ...verifierDetailImages] : null;
    return <article className={`work-item${images ? ' work-featured' : ''}${isEscapee || isDigitalForest ? ' work-paired' : ''}${isBreathVessel ? ' work-breath-vessel' : ''}`} id={id} key={id}>{images ? <div className={`project-gallery${isBreathVessel ? ' breath-gallery' : ''}${isAlgaeEatersClub || isForcedSymbiosis ? ' single-gallery' : ''}${isVerifier ? ' verifier-gallery' : ''}${isEscapee ? ' escapee-gallery' : ''}${isDigitalForest ? ' digital-gallery' : ''}`}>{images.map((image, imageIndex) => <a className={`project-photo${isBreathVessel && imageIndex === 0 ? ' breath-gallery-lead' : ''}`} href={withBasePath(image.src)} target="_blank" rel="noreferrer" key={image.src} aria-label={`Open full-size photo ${imageIndex + 1} for ${project}`}><img src={withBasePath(image.src)} alt={image.alt} loading="lazy" /></a>)}</div> : <a className="work-image-link" href={`#${id}`} aria-label={`Open ${project}`}><span className="work-image-placeholder" role="img" aria-label={`Image placeholder for ${project}`}><span>Image {String(index + 1).padStart(2, '0')} · Click to add</span></span></a>}<div className="work-caption"><h2>{project}</h2>{videoLink && <p className="work-video-link"><a href={videoLink} target="_blank" rel="noreferrer" aria-label={`Watch video for ${project}`}>Video Link</a></p>}{isEarthSugaryPlan ? <><p className="work-tags">Interactive device | Bio-design | AI-generated</p><p className="project-description">{earthSurgeryDescription}</p></> : isBreathVessel ? <><p className="work-tags">Interactive Installation | Video | Biodesign</p><p className="project-description">{breathVesselDescription}</p></> : isAlgaeEatersClub ? <><p className="work-tags">Narrative | Food Design | Performance | Material Experimentation</p><p className="project-description">{algaeEatersClubDescription}</p></> : isEscapee ? <><p className="work-tags">3D imagery | Scene modeling | AI-assisted expression</p><p className="project-description">{escapeeDescription}</p></> : isForcedSymbiosis ? <><p className="work-tags">Model Design | Scene Setting | Blender | Coexistence</p><p className="project-description">{forcedSymbiosisDescription}</p></> : isDigitalForest ? <><p className="work-tags">Digital Video | TouchDesigner</p><p className="project-description">{digitalForestDescription}</p></> : isVerifier ? <><p className="work-tags">AI-generated | Critical Device | Interactive Provotype | Feedback Loop</p><p className="project-description">{verifierDescription}</p></> : null}</div></article>;
  })}</div> : path === '/interesting' ? <><nav className="interest-categories" aria-label="Areas of interest">{page.entries.map((entry) => <span key={entry}>{entry}</span>)}</nav><div className="interest-gallery">{interestImages.map((image) => <a className={`interest-shot ${image.layout}`} href={withBasePath(image.src)} target="_blank" rel="noreferrer" key={image.src} aria-label={`Open image: ${image.alt}`}><img src={withBasePath(image.src)} alt={image.alt} loading="lazy" /></a>)}</div></> : path === '/others' ? <><div className="others-gallery">{othersImages.map((image) => <a className="others-photo" href={withBasePath(image.src)} target="_blank" rel="noreferrer" key={image.src} aria-label={`Open image: ${image.alt}`}><img src={withBasePath(image.src)} alt={image.alt} loading="lazy" /></a>)}</div><div className="others-caption"><h2>Peter Nasielski, 2023</h2><p>{othersDescription}</p></div><section className="others-project"><a className="others-feature-image" href={withBasePath('/images/others/sugababe.jpeg')} target="_blank" rel="noreferrer" aria-label="Open Sugababe installation image"><img src={withBasePath('/images/others/sugababe.jpeg')} alt="Sugababe, an ear-shaped tissue replica preserved in a transparent bioreactor against a black background" loading="lazy" /></a><div className="others-caption"><h2><em>Sugababe</em></h2><p className="others-credit">Diemut Strebe, 2014</p><p>{sugababeDescription}</p></div></section><section className="others-project"><div className="untilled-gallery">{['/images/others/untilled-01.jpg', '/images/others/untilled-02.jpg'].map((src, index) => <a className="untilled-photo" href={withBasePath(src)} target="_blank" rel="noreferrer" key={src} aria-label={`Open Untilled image ${index + 1}`}><img src={withBasePath(src)} alt={index === 0 ? 'Untilled installation image featuring a white dog with a pink leg' : 'Untilled installation view with a white dog and sculpture among trees'} loading="lazy" /></a>)}</div><div className="others-caption"><h2><em>Untilled</em></h2><p className="others-credit">Pierre Huyghe, 2011–2012</p><p>{untilledDescription}</p></div></section><section className="others-project"><a className="others-feature-image" href={withBasePath('/images/others/chasing-stars-in-shadow.jpg')} target="_blank" rel="noreferrer" aria-label="Open Chasing Stars in Shadow installation image"><img src={withBasePath('/images/others/chasing-stars-in-shadow.jpg')} alt="A child shining a light toward projected childlike shadows in an immersive installation" loading="lazy" /></a><div className="others-caption"><h2><em>Chasing Stars in Shadow</em></h2><p className="others-credit">Joon Yong Moon</p><p>{chasingStarsDescription}</p></div></section><section className="others-project"><a className="others-feature-image" href={withBasePath('/images/others/untitled-2025.jpg')} target="_blank" rel="noreferrer" aria-label="Open Untitled 2025 installation image"><img src={withBasePath('/images/others/untitled-2025.jpg')} alt="An apple in an interactive AI image-labeling installation, with cameras and robotic cutters around it" loading="lazy" /></a><div className="others-caption"><h2><em>Untitled</em></h2><p className="others-credit">2025</p><p>{untitledAppleDescription}</p></div></section></> : <div className="section-list">{page.entries.map((entry, index) => <div className="section-entry" key={entry}><span>{entry}</span><span className="entry-index">{String(index + 1).padStart(2, '0')}</span></div>)}</div>}<a className="back-home" href={withBasePath('/')} aria-label="Return to the home page">← Back to home</a></main>;
}
