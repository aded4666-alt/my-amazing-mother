import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Copy,
  Flame,
  Gift,
  Heart,
  LockKeyhole,
  Mail,
  MessageCircle,
  Music2,
  Quote,
  ScrollText,
  Smartphone,
  Sparkles,
  Volume2,
  Wand2,
  X,
} from "lucide-react";

const wishes = [
  "A year of mornings that feel like sunlight.",
  "A soft landing for every dream you carry.",
  "Laughter that stays long after the moment.",
  "The courage to choose yourself, always.",
];

const memories = [
  { number: "01", title: "the smile that started it all", tone: "sunrise" },
  { number: "02", title: "golden hour, golden girl", tone: "golden" },
  { number: "03", title: "some moments need no captions", tone: "lavender" },
  { number: "04", title: "a light in every room", tone: "night" },
  { number: "05", title: "effortless, as always", tone: "rose" },
];

const whatsappUrl =
  "https://wa.me/2347078456173?text=I%20just%20saw%20your%20birthday%20surprise%20%E2%80%94%20thank%20you%20so%20much%20%E2%9D%A4%EF%B8%8F";

export default function Home() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [activeWish, setActiveWish] = useState<number | null>(null);
  const [scratched, setScratched] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [copied, setCopied] = useState(false);
  const secretRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLetterOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-nav">
        <button className="wordmark" onClick={() => scrollTo("top")} aria-label="Back to top">
          <span className="wordmark-mark">✦</span>
          <span>for <em>Adedolapo</em></span>
        </button>
        <nav className="nav-links" aria-label="Main navigation">
          <button onClick={() => scrollTo("memories")}>Moments</button>
          <button onClick={() => scrollTo("wishes")}>Wishes</button>
          <button onClick={() => scrollTo("letter")}>The letter</button>
        </nav>
        <button className={`music-toggle ${musicOn ? "is-on" : ""}`} onClick={() => setMusicOn(!musicOn)}>
          {musicOn ? <Volume2 size={15} /> : <Music2 size={15} />}
          <span>{musicOn ? "playing" : "music"}</span>
        </button>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-content">
          <div className="eyebrow reveal"><span className="eyebrow-line" /> A little birthday surprise <span className="eyebrow-line" /></div>
          <p className="hero-date reveal delay-1">08 <span>·</span> 09 <span>·</span> 2026</p>
          <h1 className="hero-title reveal delay-2">Happy Birthday,<br /><em>Adedolapo</em> <span className="crown">♛</span></h1>
          <p className="hero-intro reveal delay-3">The waiting is over — today the world celebrates you.<br />Every candle, every wish, every word here is yours.</p>
          <div className="hero-actions reveal delay-4">
            <button className="button button-dark" onClick={() => setLetterOpen(true)}>Read your letter <Heart size={15} fill="currentColor" /></button>
            <button className="button button-quiet" onClick={() => scrollTo("candles")}>Blow your candles <ArrowDown size={15} /></button>
          </div>
        </div>
        <div className="hero-footer">
          <span>made with love, a little code,<br />and a lot of missing you.</span>
          <button onClick={() => scrollTo("memories")} className="scroll-cue"><span>scroll</span><ArrowDown size={17} /></button>
          <span className="hero-footer-right">a keepsake<br /><em>for always</em></span>
        </div>
      </section>

      <section className="date-section section-pad" aria-label="Birthday date">
        <div className="date-card">
          <div className="section-kicker">save the date</div>
          <div className="date-display"><span>September</span><strong>08</strong><span>two thousand twenty-six</span></div>
          <div className="date-caption">the day the world got a little more beautiful</div>
          <Sparkles className="date-spark" size={18} />
        </div>
        <div className="date-note"><span className="scribble">✦</span><p>For the girl who makes<br /><em>ordinary days glow.</em></p></div>
      </section>

      <section id="memories" className="memories-section section-pad">
        <div className="section-heading">
          <div><div className="section-kicker">chapter of us</div><h2>Moments of <em>you</em></h2></div>
          <p>A few frames that deserve<br />to be kept forever.</p>
        </div>
        <div className="memory-rail">
          {memories.map((memory, index) => (
            <article className={`memory-card ${memory.tone}`} key={memory.number}>
              <div className="memory-image"><div className="memory-sun" /><div className="memory-silhouette">✦</div><span className="memory-frame">{memory.number}</span></div>
              <p className="memory-caption"><span>04 / 05</span>{memory.title}</p>
              {index === 2 && <div className="memory-tape">kept</div>}
            </article>
          ))}
        </div>
      </section>

      <section id="wishes" className="notes-section section-pad">
        <div className="notes-aside"><span className="section-kicker">three little notes</span><span className="notes-aside-line" /><span className="notes-aside-caption">pick one —<br />they&apos;re all <em>yours</em></span></div>
        <div className="notes-content">
          <div className="quote-mark">“</div>
          <blockquote>Some people make the world softer<br />just by being in it.</blockquote>
          <div className="note-tabs"><button className="active"><Heart size={14} fill="currentColor" /> a note</button><button onClick={() => setActiveWish(1)}><span>✿</span> a bloom</button><button onClick={() => setActiveWish(2)}><Sparkles size={14} /> a secret</button></div>
          {activeWish !== null && <div className="tiny-note">{wishes[activeWish]} <button onClick={() => setActiveWish(null)} aria-label="Close note"><X size={13} /></button></div>}
        </div>
      </section>

      <section className="countdown-section section-pad">
        <div className="countdown-copy"><span className="section-kicker">the countdown</span><h2>Almost your <em>day</em></h2><p>september 08 · 2026</p></div>
        <div className="countdown-grid">{[["00", "days"], ["00", "hours"], ["00", "minutes"], ["00", "seconds"]].map(([number, label]) => <div className="countdown-unit" key={label}><strong>{number}</strong><span>{label}</span></div>)}</div>
        <div className="countdown-foot">every second brings it closer <Sparkles size={15} /></div>
      </section>

      <section className="wishes-section section-pad">
        <div className="section-heading centered"><div><div className="section-kicker">a new year of you</div><h2>Three wishes for your <em>new chapter</em></h2></div></div>
        <div className="wish-grid">{[
          ["01", "Joy in the little things", "May your mornings be gentle, your tea be warm, and small moments keep surprising you."],
          ["02", "Soft days ahead", "May the year hold more rest than worry, and more light than shadow."],
          ["03", "Big dreams, always", "May you keep reaching for everything you want — and find you were already enough."],
        ].map(([number, title, copy]) => <article className="wish-card" key={number}><span className="wish-number">{number}</span><div className="wish-icon"><Wand2 size={19} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section id="letter" className="letter-section section-pad">
        <div className="letter-intro"><span className="section-kicker">sealed with love</span><h2>A letter<br />for <em>you</em></h2><p>Some things are easier to say<br />when they&apos;re written down.</p><button className="text-button" onClick={() => setLetterOpen(true)}>open the letter <ArrowUpRight size={16} /></button></div>
        <button className={`envelope ${letterOpen ? "opened" : ""}`} onClick={() => setLetterOpen(true)} aria-label="Open birthday letter">
          <div className="envelope-top" /><div className="envelope-body"><div className="envelope-date"><strong>08</strong><span>to</span><strong>Adedolapo</strong></div><Heart className="envelope-heart" size={26} fill="currentColor" /><span className="envelope-hint"><LockKeyhole size={13} /> tap the seal to open</span></div>
        </button>
        <div className="letter-date">08 · 09 · 2026</div>
      </section>

      <section id="candles" className="candles-section section-pad">
        <div className="candles-copy"><span className="section-kicker">make a wish</span><h2>Blow out<br />your <em>candles</em></h2><p>Tap each flame — every candle<br />hides a wish for you.</p></div>
        <div className="cake-stage"><div className="cake-glow" /><div className="cake"><div className="cake-top"><span className="icing">✦</span></div><div className="cake-layer layer-one" /><div className="cake-layer layer-two" /></div><div className="candle-row">{wishes.map((wish, index) => <button key={wish} className={`candle candle-${index + 1} ${activeWish === index ? "lit" : ""}`} onClick={() => setActiveWish(index)} aria-label={`Reveal wish ${index + 1}`}><span className="flame">✦</span><span className="wick" /><span className="wax" /></button>)}</div><div className="wish-popover">{activeWish === null ? <span>tap a flame to make a wish <Sparkles size={14} /></span> : <><span>{wishes[activeWish]}</span><button onClick={() => setActiveWish(null)} aria-label="Close wish"><X size={13} /></button></>}</div></div>
      </section>

      <section className="secret-section section-pad">
        <div className="secret-panel"><div className="secret-copy"><span className="section-kicker">one more thing</span><h2>A secret, <em>hidden</em> for you</h2><p>Scratch the panel below to uncover it.</p></div><button ref={secretRef} className={`scratch-panel ${scratched ? "revealed" : ""}`} onClick={() => setScratched(true)}><span className="scratch-cover">{scratched ? <Check size={20} /> : <Sparkles size={20} />}<b>{scratched ? "uncovered" : "scratch here"}</b></span><span className="secret-message">You are, and always will be,<br /><em>my favorite person.</em> 🤍</span></button><p className="scratch-instruction">use your finger or mouse to scratch</p></div>
      </section>

      <section className="keepsake-section section-pad">
        <div className="keepsake-copy"><span className="section-kicker">a keepsake</span><h2>Take this<br />with <em>you</em></h2><p>Save a little piece of today<br />somewhere close.</p><button className="button button-dark" onClick={copyLink}>{copied ? <><Check size={15} /> copied</> : <><Copy size={15} /> save this page</>}</button></div>
        <div className="keepsake-card"><div className="keepsake-stars">✦ ✦ ✦</div><div className="keepsake-label">a keepsake for Adedolapo</div><div className="keepsake-name">Adedolapo</div><div className="keepsake-date">08 · 09 · 2026</div><ol><li>for endless joy</li><li>for soft days</li><li>for dreams that come true</li><li>and for you — always</li></ol><div className="keepsake-sign">— dayo</div><div className="keepsake-bottom">✦ ✦ ✦</div></div>
      </section>

      <footer className="site-footer"><div className="footer-flower">✿</div><div><p>some sites are built with code —<br /><em>this one was built with missing you.</em></p><span>Made with <Heart size={13} fill="currentColor" /> by Pentdragon · mostly known as Dayo</span></div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-link"><MessageCircle size={17} /> Say thank you <Heart size={13} fill="currentColor" /></a></footer>

      <div className="install-banner"><Smartphone size={18} /><div><strong>keep this forever</strong><span>save this little corner to your home screen</span></div><button onClick={() => alert("On iPhone: tap Share → Add to Home Screen. On Android: tap ⋮ → Install app.")}>how?</button></div>

      {letterOpen && <div className="modal-backdrop" onClick={() => setLetterOpen(false)}><article className="letter-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setLetterOpen(false)} aria-label="Close letter"><X size={17} /></button><div className="modal-kicker">08 · 09 · 2026</div><div className="modal-stamp">✦</div><h2>Dear <em>Adedolapo,</em></h2><p>Happy birthday to the most wonderful soul I know. Today the world quietly celebrates the day it received one of its brightest lights — <em>you</em>.</p><p>I wanted to build something just for you: a little corner of the internet where every pixel says the same thing — that you are loved, appreciated, and deeply missed.</p><p>May your new year of life be everything soft and golden. May it bring you laughter that fills rooms, peace that fills days, and dreams that finally come true.</p><p>I really miss you, Adedolapo. <Heart size={15} fill="currentColor" /></p><div className="modal-signoff"><span>with love</span><strong>Pentdragon</strong><small>mostly known as Dayo</small></div><a className="button button-dark modal-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Reply to Dayo on WhatsApp</a></article></div>}
    </main>
  );
}
